<template>
  <div class="nav">
    <div class="container">
      <el-row>
        <el-col :span="12">
          <router-link class="anchor" to="/">首页</router-link>
          <a class="anchor" href="#">item</a>
          <a class="anchor" href="#">item</a>
        </el-col>
        <el-col class="text-right" :span="12">
          <a class="anchor" href="#">item</a>
          <span v-if="session.loggedIn()">
            <router-link class="anchor" to="/my/settings">{{session.user('nickname') || session.user('mail') || session.user('phone')}}</router-link>  
            <span @click="session.logout" class="anchor">注销</span>
          </span>
          <span v-else>
            <router-link class="anchor" to="/login">登录</router-link>
            <router-link class="anchor" to="/signup">注册</router-link>
          </span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import session from '../lib/session';
export default {
  name: 'GolbalNav',
  components: {},
  data() {
    return {
      session
    }
  },
}
</script>

<style scoped>
  .nav {
    background: rgba(0, 0, 0, .1);
    margin-bottom: 1em;
  }
</style>