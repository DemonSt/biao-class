<template>
  <div class="nav">
    <div class="container">
      <el-row :gutter="10">
        <el-col :span="6">
          <router-link to="/">
            <div class="logo">
              <img src="../img/logo.png" alt="logo">
            </div>
          </router-link>
        </el-col>
        <el-col class="text-right" :span="12">
          <form class="search">
            <el-input
              placeholder="请输入内容"
              prefix-icon="el-icon-search">
            </el-input>
            <button type="submit" hidden ></button>
          </form>
        </el-col>
        <el-col class="text-right" :span="6">
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegularNav',
  components: {
  }
}
</script>

<style scoped>
  .logo {
    max-width: 10em;
    padding-top: 1em;
    padding-bottom: 1em;
  }

  .search {
    position: relative;
    top: 15px;
  }
</style>