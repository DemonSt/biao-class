<template>
    <div>
      <RegularNav />
      <div class="container carousel">
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="it in list_carousel" :key="it.id">
            <router-link :to="`/product/${it.id}`">
              <img :src="fileUrl(it.carousel_img)" alt="">
            </router-link>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="container">
        <h2>新品</h2>
        <el-row :gutter="10" class="card-list vartical-gutter">
          <el-col :key="it" v-for="it in list_new" :span="6">
            <ProductCard :data="it" />
          </el-col>
        </el-row>
      </div>
      <div class="container">
        <h2>促销</h2>
        <el-row :gutter="10" class="card-list vartical-gutter">
          <el-col :key="it" v-for="it in list_hot" :span="6">
            <ProductCard :data="it" />
          </el-col>
          <el-col :span="6">
            <el-card :body-style="{ padding: '0px' }">
              <img src="https://dummyimage.com/500x500/000/fff" class="image">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <!-- <time class="time">{{ currentDate }}</time> -->
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card :body-style="{ padding: '0px' }">
              <img src="https://dummyimage.com/500x500/000/fff" class="image">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <!-- <time class="time">{{ currentDate }}</time> -->
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card :body-style="{ padding: '0px' }">
              <img src="https://dummyimage.com/500x500/000/fff" class="image">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <!-- <time class="time">{{ currentDate }}</time> -->
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card :body-style="{ padding: '0px' }">
              <img src="https://dummyimage.com/500x500/000/fff" class="image">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <!-- <time class="time">{{ currentDate }}</time> -->
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card :body-style="{ padding: '0px' }">
              <img src="https://dummyimage.com/500x500/000/fff" class="image">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <!-- <time class="time">{{ currentDate }}</time> -->
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card :body-style="{ padding: '0px' }">
              <img src="https://dummyimage.com/500x500/000/fff" class="image">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <!-- <time class="time">{{ currentDate }}</time> -->
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card :body-style="{ padding: '0px' }">
              <img src="https://dummyimage.com/500x500/000/fff" class="image">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <!-- <time class="time">{{ currentDate }}</time> -->
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card :body-style="{ padding: '0px' }">
              <img src="https://dummyimage.com/500x500/000/fff" class="image">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <!-- <time class="time">{{ currentDate }}</time> -->
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
  import RegularNav from '../components/RegularNav';
  import ProductCard from '../components/ProductCard';
  import { fileUrl } from '../lib/helper';

  export default {
    name: 'Home',
    data() {
      return {
        list_new : [],
        list_hot : [],
        list_carousel : []
      }
    },
    components: {
      RegularNav,
      ProductCard
    },
    methods: {
      fileUrl,

      read_new() {
        api('product/read', {where: {and: {is_new: true}}})
          .then( r => this.list_new = r.data)
      },
      read_hot() {
        api('product/read', {where: {and: {is_hot: true}}})
          .then( r => this.list_hot = r.data)
      },
      read_carousel() {
        api('product/read', {where: {and: {is_carousel: true}}})
          .then( r => this.list_carousel = r.data)
      }
    },
    mounted() {
      this.read_new();
      this.read_hot();
      this.read_carousel();
    },
  }
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.carousel {
  margin-top: 1em;
}
</style>
