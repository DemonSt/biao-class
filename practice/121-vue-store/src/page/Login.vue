<template>
    <div>
      <div class="form-container">
        <h1>登录</h1>
        <form @submit.prevent="login">
          <label>
            手机号/邮箱
            <el-input v-model="form.uiqueName"></el-input>
          </label>
          <label>
            密码
            <el-input type="text" v-model="form.password"></el-input>
          </label>
          <div class="errors">
            <div v-for="item in errors" :key="item">{{item}}</div>
          </div>
          <label>
            <button type="submit" class="el-button el-button--primary">立即创建</button>
            <el-button type="text">
              <router-link to="/recover">忘记密码？</router-link>
            </el-button>
          </label>
        </form>
      </div>
    </div>
</template>

<script>
  import session from '../lib/session';
  export default {
    name: 'Login',
    data () {
      return {
        form: {
          uiqueName: '',
          password: ''
        },
        errors: []
      }
    },
    methods: {
      login () {
        // 当提交表单的时候，先执行 验证表单函数validate 如果有错直接返回
        if(!this.validate())
          return

        let e =this.errors;
        let f = this.form;
        // 验证通过 则开始发送api 需找匹配到的用户 不管用户名是 phone 还是 mail 如果匹配到了则继续验证密码
        api('user/first', {
          where: {
            or: [
              ['mail', '=', f.uiqueName],
              ['phone', '=', f.uiqueName]    
            ]
          }
        })
        // 如果直接没有用户 或验证密码错误 则报错 否则清掉密码记录 记录登录状态
        .then(r => {
          let user = r.data
          if(!user || user.password !== f.password) {
            e.push('手机号/邮箱或密码输入有误');
          }else{
            delete user.password;
            session.login(user.id, user);
          }
        })
      },
      // 简单验证一下输入框不能为空
      validate () {
        let valid = true;
        let f = this.form;
        let e =this.errors = [];
        if(!f.uiqueName || !f.password) {
          e.push('手机号/邮箱或密码不能为空');
          valid = false;
        }
        return valid
      }
    },
    components: {
    }
  }
</script>

<style></style>