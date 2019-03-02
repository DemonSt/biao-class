<template>
  <div>
    <RegularNav />
    <div class="container overview">
      <el-row :gutter="10" class="overview">
        <el-col class="preview" :span="10">
          <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col class="text" :span="14">
          <h1 class="title">123123123123</h1>
          <div class="well">
            <dl class="pair">
              <dt>价格</dt>
              <dd class="hot cny">19.9</dd>
            </dl>
            <dl class="pair">
              <dt>运费</dt>
              <dd class="cny">10.0</dd>
            </dl>
          </div>
          <el-row>
            <el-col :span="8">
              月销量
              <span class="hot">999</span>
            </el-col>
            <el-col :span="8">
              累计评价
              <span class="hot">9239</span>
            </el-col>
            <el-col :span="8">
              送积分
              <span class="hot">239</span>
            </el-col>
          </el-row>
          <dl class="pair">
            <dt>口味</dt>
            <dd>
              <div class="pill-option">辣</div>
              <div class="pill-option selected">甜</div>
              <div class="pill-option">麻</div>
            </dd>
          </dl>
          <dl class="pair">
            <dt>数量</dt>
            <dd>
              <el-input-number :min="1" label="描述文字"></el-input-number>
            </dd>
          </dl>
          <div class="text-left">
            <el-button size="small" type="danger">立即购买</el-button>
            <el-button size="small" type="primary">加入购物车</el-button>
          </div>
          <dl class="pair">
            <dt>服务承诺</dt>
            <dd>
              <a href="#" class="anchor">破损包退</a>
              <a href="#" class="anchor">正品保证</a>
              <a href="#" class="anchor">极速退款</a>
              <a href="#" class="anchor">七天无理由退换</a>
              <a href="#" class="anchor">支付方式</a>
            </dd>
          </dl>
        </el-col>
      </el-row>
    </div>
    <div class="container detail">
      <div class="props">
        <el-row>
          <el-col class="pair" :span="8">
            <div>生产许可证编号</div>
            <div>SC12543062605639</div>
          </el-col>
          <el-col class="pair" :span="8">
            <div>产品标准号</div>
            <div>Q/YPXY 0002S</div>
          </el-col>
          <el-col class="pair" :span="8">
            <div>厂名</div>
            <div>平江县新翔宇食品有限公司</div>
          </el-col>
          <el-col class="pair" :span="8">
            <div>产品标准号</div>
            <div>Q/YPXY 0002S</div>
          </el-col>
          <el-col class="pair" :span="8">
            <div>生产许可证编号</div>
            <div>SC12543062605639</div>
          </el-col>
          <el-col class="pair" :span="8">
            <div>产品标准号</div>
            <div>Q/YPXY 0002S</div>
          </el-col>
          <el-col class="pair" :span="8">
            <div>厂名</div>
            <div>平江县新翔宇食品有限公司</div>
          </el-col>
          <el-col class="pair" :span="8">
            <div>产品标准号</div>
            <div>Q/YPXY 0002S</div>
          </el-col>
          <el-col class="pair" :span="8">
            <div>生产许可证编号</div>
            <div>SC12543062605639</div>
          </el-col>
          <el-col class="pair" :span="8">
            <div>产品标准号</div>
            <div>Q/YPXY 0002S</div>
          </el-col>
          <el-col class="pair" :span="8">
            <div>厂名</div>
            <div>平江县新翔宇食品有限公司</div>
          </el-col>
          <el-col class="pair" :span="8">
            <div>产品标准号</div>
            <div>Q/YPXY 0002S</div>
          </el-col>
        </el-row>
      </div>
      <div class="content">
        <div>
          <div class="text">123</div>
          <div class="text">
            <img src="http://placekitten.com/200/300" alt="123123">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import RegularNav from '../components/RegularNav';
  export default {
    name: 'Product',
    components: {
      RegularNav
    }
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .pair > *:nth-child(odd) {
    font-size: 80%;
    margin-right: 3em;
  }

  .overview .hot.cny {
    font-size: 120%;
  }

  .title {
    font-size: 1.2em;
  }
 
  .detail > *,
  .text > * {
    margin-bottom: .8em;
  }

  .pill-option {
    display: inline-block;
    margin-right: .5em;
    padding: .3em .5em;
    border: 2px solid rgba(0, 0, 0, .2);
    font-size: 80%;
    cursor: default;
  }

  .pill-option.selected {
    border-color: #e10;
  }

  .props {
    border: 1px solid rgba(0, 0, 0, .1);
    padding: 1em;
    font-size: 80%;
    color: #666;
  }

  .props .el-col {
    margin-bottom: .3em;
  }

  .props .pair > * {
    margin-right: 0;
    margin-left: 0;
  }

  .props .pair > *:nth-child(odd) {
    width: 40%;
  }

  .props .pair > *:nth-child(even) {
    width: 60%;
  }
</style>