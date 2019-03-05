<template>
  <div>
    <div class="form-container">
      <h1>注册</h1>
      <form @submit.prevent="signup">
        <el-tabs v-model="signupBy">
          <el-tab-pane label="手机注册" name="phone">
            <label>
              <span class="title">手机号</span>
              <el-input @blur="uniqueExist" v-model="form.phone"></el-input>
            </label>
          </el-tab-pane>
          <el-tab-pane label="邮箱注册" name="mail">
            <label>
              <span class="title">邮箱</span>
              <el-input @blur="uniqueExist" v-model="form.mail"></el-input>
            </label>
          </el-tab-pane>
        </el-tabs>
        <label>
          <fieldset :disabled="!unique">
            <span class="title">验证码</span>
            <el-row>
            <el-col :span="18">
              <el-input v-model="form.code" placeholder="请输入内容" class="input-with-select">
              </el-input>
            </el-col>
            <el-col :span="6">
              <Captcha :sendBy="signupBy"
                       :receiver="form[signupBy]"
                       @send="onCaptchaSend"
                       className="el-button el-button--default"/>
            </el-col>
          </el-row>
          </fieldset>
        </label>
        <label>
          <span class="title">密码</span>
          <el-input type="text" v-model="form.password"></el-input>
        </label>
        <div class="error">
          <div v-for="item in errors" :key="item">{{item}}</div>
        </div>
        <label>
          <button class="el-button el-button--primary" type="submit">加入吃货团</button>
          <el-button type="text">
            <router-link to="/login">已有账号？登录</router-link>
          </el-button>
        </label>
      </form>
    </div>
  </div>
</template>

<script>
  import { is }  from '../lib/valee';
  import Captcha from '../components/Captcha';

  export default {
    components : { Captcha },
    data () {
      return {
        // 默认是phone 类型有下面四种
        signupBy: 'phone',
        form: {
          phone: '',
          mail: '',
          password: '',
          code: '',                  // 这个code是inputcode 是前端返回的code
        },
        errors            : [],
        code              : null,   // 这个code是datacode 是后端反返回的code
        unique            : false,
      };
    },
    methods    : {
      // 提交的时候
      signup () {
        // 如果验证有错误则直接将signup ()函数返回
        if (!this.validate())
          return;
        // 如果验证没有错误，则接下来可以发送api创建用户
        let f = this.form;
        api('user/create', f)
          .then(r => {
            this.$router.push('/login');
          });
      },

      validate () {
        let f = this.form;
        let e = this.errors = [];
        let signupBy = this.signupBy;
        // 如果 input框没有输入值就是false 再取个反 让 if 得以执行 将错误信息推进 errors 数组里
        if (!this.form[ this.signupBy ]) {
          e.push('邮箱或手机为必填项');
        }
        // 如果 input框是手机 同时验证有问题是false再取个反 让 if 得以执行 将错误信息推进 errors 数组里
        if (signupBy == 'phone' && !is.phone(f.phone))
          e.push('手机格式有误');

        if (signupBy == 'mail' && !is.mail(f.mail))
          e.push('邮箱格式有误');

        if (f.password.length < 6)
          e.push('密码长度不可小于6');

        if (f.code != this.code)
          e.push('验证码有误');
        // 如果数组长度不为零，则说明有错误 则反回false
        if (e.length)
          return false;
        // 能走到这一步说明没有错误 直接将这个函数反回true
        return true;
      },

      uniqueExist () {
        let key   = this.signupBy;
        let value = this.form[ this.signupBy ];

        if (!value)
          return;

        api('user/first', {
          where : {
            and : {
              [ key ] : value,
            },
          },
        }).then(r => {
          if (r.data) {
            this.errors.push('账号已存在');
            this.unique = false;
            return;
          }
          this.unique = true;
        });
      },
      onCaptchaSend (code) {
        this.code = code;
      },
    },
  };
</script>
