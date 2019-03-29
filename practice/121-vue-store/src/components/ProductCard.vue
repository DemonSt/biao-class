<template>
  <div class="product-card">
    <el-card :body-style="{ padding: '0px' }">
      <router-link :to="`/product/${data.id}`">
        <img :src="fileUrl(data.main_img[0])" class="image">
      </router-link>
      <div style="padding: 14px;">
        <router-link :to="`/product/${data.id}`">
          <span>{{data.title | cut(27)}}</span>
        </router-link>
        <div>
          <div class="hot cny">{{data.price}}</div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
  import { fileUrl } from '../lib/helper';

  export default {
    props : [ 'data' ],
    methods: {
      fileUrl,
    }
  };
</script>

<style>
  .product-card .el-card__body {
    padding: 0;
  }
</style>