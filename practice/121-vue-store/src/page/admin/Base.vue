<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="4">
        <el-menu default-active="cart"
                 :router="true"
                 class="el-menu-vertical-demo"
                 @open="handleOpen"
                 @close="handleClose">
          <el-menu-item index="order">
            <router-link slot="title" to="/admin/order">订单管理</router-link>
          </el-menu-item>
          <el-menu-item index="user">
            <router-link slot="title" to="/admin/user">用户管理</router-link>
          </el-menu-item>
          <el-menu-item index="brand">
            <router-link slot="title" to="/admin/brand">品牌管理</router-link>
          </el-menu-item>
          <el-menu-item index="cat">
            <router-link slot="title" to="/admin/cat">分类管理</router-link>
          </el-menu-item>
          <el-menu-item index="product">
            <router-link slot="title" to="/admin/product">商品管理</router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="18">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import '../../css/admin.css';

  export default {
    methods: {
      handleOpen() {},
      handleClose() {},
    }
  };
</script>