<template>
  <div>
    <RegularNav />
    <div class="container overview">
      <el-row :gutter="10" class="overview">
        <el-col class="preview" :span="10">
          <el-carousel indicator-position="outside">
            <el-carousel-item v-for="it in row.main_img" :key="it">
              <img class="main_ing" :src="fileUrl(it)" alt="">
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col class="text" :span="14">
          <h1 class="title">{{row.title}}</h1>
          <div class="well">
            <dl class="pair">
              <dt>价格</dt>
              <dd class="hot cny">{{row.price}}</dd>
            </dl>
            <dl class="pair">
              <dt>运费</dt>
              <dd class="cny">{{row.shipping_fee}}</dd>
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
              库存
              <span class="hot">{{row.total}}</span>
            </el-col>
          </el-row>
          <dl :key="options" v-for="(options, key) in row.prop" class="pair">
            <dt>{{key}}</dt>
            <dd>
              <div :class=" 'pill-option ' + (form.prop[key] === option ? 'active' : '' )" @click="setProp(key, option)" :key="option" v-for="option in options">{{option}}</div>
            </dd>
          </dl>
          <dl class="pair">
            <dt>数量</dt>
            <dd>
              <el-input-number v-model="form.count" size="mini" :min="1" label="描述文字"></el-input-number>
            </dd>
          </dl>
          <div class="text-left">
            <el-button size="small" @click="createOrder" type="danger">立即购买</el-button>
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
        <div v-for="it in row.detail" :key="it">
          <div class="text" v-if="it.type === 'text'">{{it.value}}</div>
          <div class="text" v-else>
            <img :src="fileUrl(it.value)" :alt="it.value.name">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import RegularNav from '../components/RegularNav';
  import { fileUrl, orderSum } from '../lib/helper';
  import session from '../lib/session';

  export default {
    name: 'Product',
    components: {
      RegularNav
    },
    data() {
      return {
        row: {
          id: null
        },
        form: {
          count: 1,
          prop: {}
        },
      }
    },
    mounted() {
      this.row.id = this.$route.params.id;
      this.find();
    },
    methods: {
      fileUrl,
      find () {
        api('product/find', this.row)
          .then((r) => {
            console.log(r);
            this.row = r.data;
            this.normalize();
          })
      },
      // 拿到数据后分割好渲染 用 propList 替换掉 row 里面的 prop
      normalize() {
        let prop = this.row.prop;
        let propList = {};

        for(let key in prop){
          let options = prop[key];
          propList[key] = options.split('|');
        }
        this.$set(this.row, 'prop', propList)
      },
      // 点击购买该执行的函数， product_snapshot 当前要购买商品信息的快照
      createOrder() {
        this.form.product_id = this.row.id;
        this.form.product_snapshot = this.row;

        // order 是一条订单数据，而 this.form 仅仅是一个商品 给 order 自定义添加的 detail 属性  再添加 sum 属性，  detail: [this.form] 允许添加多条也就是可以购买多个 购物车的形式
        let order = { detail: [this.form] }
        order.sum = orderSum(order.detail);
        order.user_id = session.user('id');
        order.status = 'created';

        if(!this.allPropsChecked()){
          alert('请选择所有个性选项');
          return
        }
        // 点击购买之后，直接跳转至订单详情页
        api('order/create', order)
          .then( (r) => {
            this.$router.push(`/my/order/${r.data.id}`)
          });
      },
      // 当点击个性属性执行的函数， 比如说  辣度：特辣  
      setProp(key, option) {
        this.$set(this.form.prop, key, option);
      },
      // 在创建一条订单之前，首先要验证 每个个性属性都必须有选中的选项  循环prop里面所有的个性属性，一旦有没选中的就返回false
      allPropsChecked() {
        let prop = this.row.prop;
        for (let key in prop){
          if(!this.form.prop[key])
            return false;
        }
        return true;
      }
    },
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

  .pill-option.active {
    border-color: #e10;
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

  .main_ing {
    display: block;
    width: 100%;
  }
</style>