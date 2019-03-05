<template>
  <div>
    <div class="form-container">
      <h1>账号恢复</h1>
      <form @submit.prevent="nextStep">
        <div v-if="step == 1">
          <el-tabs v-model="recoverBy">
            <el-tab-pane label="通过手机恢复" name="phone">
              <label>
                <span class="title">手机号</span>
                <el-input v-model="form.phone"></el-input>
              </label>
            </el-tab-pane>
            <el-tab-pane label="通过邮箱恢复" name="mail">
              <label>
                <span class="title">邮箱</span>
                <el-input v-model="form.mail"></el-input>
              </label>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div v-if="step == 2">
          <label>
            <el-row>
              <el-col :span="18">
                <el-input v-model="form.code" placeholder="请输入内容" class="input-with-select">
                </el-input>
              </el-col>
              <el-col :span="6">
                <Captcha :sendBy="recoverBy"
                         @send="onCaptchaSend"
                         className="el-button el-button--default"
                         :receiver="form[recoverBy]"/>
              </el-col>
            </el-row>
          </label>
        </div>
        <div v-if="step == 3">
          <label label="密码">
            <el-input type="text" v-model="form.password" placeholder="请输入新密码"></el-input>
          </label>
        </div>
        <div class="error">
          <div v-for="e in errors" :key="e">{{e}}</div>
        </div>
        <label>
          <button type="submit" class="el-button el-button--primary">下一步</button>
        </label>
      </form>
    </div>
  </div>
</template>

<script>
  import { is }   from '../lib/valee';
  import { send } from '../lib/captcha';
  import Captcha  from '../components/Captcha';

  export default {
    components : { Captcha },
    data () {
      return {
        recoverBy         : 'phone',     // 默认是手机
        form              : {
          phone    : '',
          mail     : '',
          password : '',
          code     : '',
        },
        sendCodeCountDown : 0,
        errors            : [],
        code              : null,
        codeTimer         : null,
        step              : 1,              // 用来分开一项一项 默认从 1 开始
        user              : null,           // 用来存用户 如果数据反悔用户 就存进去 以便后续判断
      };
    },
    methods    : {
      // 基础验证 用来验证input框
      validate () {
        let f         = this.form;
        let e         = this.errors = [];
        let recoverBy = this.recoverBy;

        if (!this.form[ this.recoverBy ]) {
          e.push('邮箱或手机为必填项');
        }

        if (recoverBy == 'phone' && !is.phone(f.phone))
          e.push('手机格式有误');

        if (recoverBy == 'mail' && !is.mail(f.mail))
          e.push('邮箱格式有误');

        if (f.password.length < 6)
          e.push('密码长度不可小于6');

        if (f.code != this.code)
          e.push('验证码有误');

        if (e.length)
          return false;

        return true;
      }, 
      //    子父通信 用来接收子组件传来的验证码
      onCaptchaSend(code) {
        this.code = code;
      },
      nextStep () {
        let f       = this.form;
        let by      = this.recoverBy;
        this.errors = [];

        switch (this.step) {
          // f[ by ] 等于 form.mail或form.phone 的input如果没有输入值 就报错返回
          case 1:
            if (!f[ by ]) {
              this.errors.push('请输入账号');
              return;
            }
            // 否则就发送api去后端查找是否有对应的 账号
            api('user/first', {
              where : {
                and : {
                  [ by ] : f[ by ],
                },
              },
            }) // 如果没有就报错 否则就让前面在 data 声明的 user 等于后端传回的 user 并且进入下一步验证
              .then(r => {
                let user = r.data;
                if (!user) {
                  this.errors.push('账号不存在');
                } else {
                  console.log(user);
                  this.user = user;
                  this.step++;
                }
              });
            break;
          //  之前操作已经将后端传过来的验证码存在 code 中 现在和输入的验证码做比较
          case 2:
            if (this.code !== f.code) {
              this.errors.push('验证码有误');
            } else {
              this.step++;
            }
            break;
          // 走到这里说明验证都已通过 则发送api 将修改后的信息传给后端并跳转至登录页面
          case 3:
            let params = {
              id       : this.user.id,   // user.id 是后端返回来的
              password : f.password,     //  等于新输入进去的密码
              [ by ]   : f[ by ],
            };

            api('user/update', params)
              .then(r => {
                this.$router.push('/login');
              });
            break;
        }
      },
      // sendCode () {
      //   send(this.recoverBy, this.form[ this.recoverBy ], (code) => {
      //     this.code = code;
      //   });
      // },
    },
  };
</script>