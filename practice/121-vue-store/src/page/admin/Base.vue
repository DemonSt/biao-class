<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="4">
        <el-menu
          default-active="cart"
          :router="true"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-menu-item class="side-focus" index="order">
            <span slot="title">订单管理</span>
          </el-menu-item>
          <el-menu-item class="side-focus" index="user">
            <span slot="title">用户管理</span>
          </el-menu-item>
          <el-menu-item class="side-focus" index="brand">
            <span slot="title">品牌管理</span>
          </el-menu-item>
          <el-menu-item class="side-focus" index="cat">
            <span slot="title">分类管理</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Base',
  components: {
  },
  methods: {
    handleOpen () {},
    handleClose () {}
  },
}
</script>

<style>
  .side-focus:focus {
    color: tomato;
  }
</style>