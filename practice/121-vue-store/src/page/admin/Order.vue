<template>
  <div>
    <h1>订单管理</h1>
    <!--<div>-->
    <!--<el-button-group>-->
    <!--<el-button @click="ui.formVisible = !ui.formVisible">-->
    <!--<span v-if="ui.formVisible">取消</span>-->
    <!--<span v-else>创建</span>-->
    <!--</el-button>-->
    <!--</el-button-group>-->
    <!--</div>-->
    <!--<div v-if="ui.formVisible">-->
    <!--<h2>添加/修改</h2>-->
    <!--<form @submit.prevent="createOrUpdate()">-->
    <!--<label>-->
    <!--<span class="title">昵称</span>-->
    <!--<input class="el-input__inner" type="text" v-model="form.nickname">-->
    <!--<span class="error-list">-->
    <!--<span v-if="invalid" v-for="(invalid, e) in errors.nickname" class="error">{{rules.nickname[e].msg}}</span>-->
    <!--</span>-->
    <!--</label>-->
    <!--<label>-->
    <!--<span class="title">电话</span>-->
    <!--<input class="el-input__inner" type="text" v-model="form.phone">-->
    <!--<span class="error-list">-->
    <!--<span v-if="invalid" v-for="(invalid, e) in errors.phone" class="error">{{rules.phone[e].msg}}</span>-->
    <!--</span>-->
    <!--</label>-->
    <!--<label>-->
    <!--<span class="title">邮箱</span>-->
    <!--<input class="el-input__inner" type="email" v-model="form.mail">-->
    <!--<span class="error-list">-->
    <!--<span v-if="invalid" v-for="(invalid, e) in errors.mail" class="error">{{rules.mail[e].msg}}</span>-->
    <!--</span>-->
    <!--</label>-->
    <!--<label>-->
    <!--<span class="title">密码</span>-->
    <!--<input class="el-input__inner" type="text" v-model="form.password">-->
    <!--<span class="error-list">-->
    <!--<span v-if="invalid" v-for="(invalid, e) in errors.password" class="error">{{rules.password[e].msg}}</span>-->
    <!--</span>-->
    <!--</label>-->
    <!--<label>-->
    <!--<button class="el-button el-button&#45;&#45;primary" type="submit">提交</button>-->
    <!--<button class="el-button el-button&#45;&#45;text" @click="ui.formVisible=false">取消</button>-->
    <!--</label>-->
    <!--</form>-->
    <!--</div>-->
    <div>
      <h2>列表</h2>
      <p>总数：{{total}}</p>
      <el-table
              :data="list"
              stripe
              style="width: 100%">
        <el-table-column
                prop="id"
                label="订单号"
                width="180">
        </el-table-column>
        <el-table-column
                label="状态"
                width="180">
          <template slot-scope="scope">
            {{scope.row._paid ? '已支付' : '未支付'}}
          </template>
        </el-table-column>
        <el-table-column
                prop="sum"
                label="总费用"
                width="180">
        </el-table-column>
        <el-table-column
                prop="detail.length"
                label="产品数"
                width="180">
        </el-table-column>
        <el-table-column
                fixed="right"
                label="操作"
                width="100">
          <template slot-scope="scope">
            <el-button @click="fill(scope.row)" type="text" size="small">更新</el-button>
            <el-button @click="remove(scope.row.id)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="text-center">
        <el-pagination
                :page-size="readParam.limit"
                :current-page="readParam.page"
                layout="prev, pager, next"
                :total="total"
                @current-change="flip"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import admin from '../../mixin/admin';

  export default {
    mixins  : [ admin ],
    data () {
      return {
        model : 'order',
      };
    },
    methods : {},
  };
</script>