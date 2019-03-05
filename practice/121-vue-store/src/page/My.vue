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
          <el-menu-item class="side-focus" index="cart">
            <span slot="title">购物车</span>
          </el-menu-item>
          <el-menu-item class="side-focus" index="order">
            <span slot="title">订单</span>
          </el-menu-item>
          <el-menu-item class="side-focus" index="settings">
            <span slot="title">设置</span>
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
    name: 'My',
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