<template>
  <div>
    <h1>我的订单</h1>
    <el-card v-if="$route.params.id" class="detail">
      <div slot="header" class="clearfix">
        <span>订单详情</span>
        <router-link style="float: right;" to="/my/order">关闭</router-link>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
      </div>
      <div class="card-content">
        <div class="pair">
          <div>订单号</div>
          <div>{{form.id}}</div>
        </div>
        <div class="pair">
          <div>总价</div>
          <div class="cny">{{form.sum}}</div>
        </div>
        <div class="pair">
          <div>付款方式</div>
          <div>{{lang.payment[form._pay_by] || '-'}}</div>
        </div>
        <div class="pair">
          <div>订单状态</div>
          <div>{{lang.status[form.status] || '-'}}</div>
        </div>
        <div v-if="!form._paid">
          <div class="title">请选择支付方式</div>
          <p>(测试支付，金额不能大于0.2元)</p>
          <el-button @click="genderatePaymentUrl('alipay')">支付宝</el-button>
          <el-button @click="genderatePaymentUrl('wechat')">微信支付</el-button>
          <div v-if="form.$payment">
            <div class="wechat" v-if="form._pay_by === 'wechat'">
              <img :src="form.$payment.qrcode" alt="支付二维码">
              <el-button size="mini" type="primary" @click="read; find">支付完毕</el-button>
            </div>
            <div class="alipay" v-else>
              <a :href="form.$payment.url">跳转至支付链接</a>
            </div>
          </div>
        </div>
      </div>
    </el-card>
    <el-table
      :data="list"
      stripe
      style="width: 100%">
      <el-table-column
        prop="id"
        label="订单号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="sum"
        label="总价"
        width="120">
      </el-table-column>
      <el-table-column
        prop="_paid"
        label="状态"
        width="120">
        <template slot-scope="scope">
          {{scope.row._paid ? '已支付' : '未支付'}}
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small">
            <router-link :to="`/my/order/${scope.row.id}`">详情</router-link>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import session from '../lib/session';
  import { url } from '../lib/helper';

  export default {
    name: "Order",
    data() {
      return {
        form: {},
        list: [],
        params: {},
        lang: {
          payment: {
            alipay: '支付宝',
            wechat: '微信支付'
          },
          status: {
            created: '未支付',
            paid: '已支付'
          }
        }
      }
    },
    methods: {
      // 
      read() {
        api('order/read', {where: {and: {user_id: session.user('id')}}})
          .then( r => this.list = r.data);
      },
      find() {
        api('order/find', { id: this.form.id })
          .then( r => this.form = r.data);
      },
      // 点击用什么支付 之后执行的函数
      genderatePaymentUrl(type) {
        // 避免第一次选中后无法再次更改 
        this.form._pay_by = type;
        api('order/payment/url', {
          id: this.form.id,
          pay_by: type,
          fee: .2,
          return_url: url('/#/my/order')
        })
          .then(r => {
            this.$set(this.form, '$payment', r.data);
          });
      }
    },
    // 页面挂载之后 先执行 read 拿到用户的订单数据 
    mounted() {
      this.read();
      // 如果点击了某一条 就把 this.$route.params.id 的值赋值给 this.form.id 然后通过 find() 去查找 id: this.form.id 满足条件的结果
      this.form.id = this.$route.params.id;
      if (this.form.id) 
        this.find();
    },
    // 深度监听 一旦有 news.params 说明就点击新的值了 就重新执行 find()
    watch: {
      '$route' : {
        handler (news, old) {
          let params = news.params;
          if(params.id) {
            this.form.id = params.id;
            this.find();
          }
        },
        deep: true,
      }
    }
  }
</script>

<style scope>
  .card-content {
    padding: .5em;
  }

  .card-content > * {
    margin-bottom: 1.8em;
  }

  .detail .title {
    margin: .5em 0;
  }

  .alipay {
    margin: 1em;
  }

  .alipay a {
    color: #54B1F3;
  }

  .wechat img {
    display: block;
    margin-top: .5em;
    width: 200px;
  }
</style>