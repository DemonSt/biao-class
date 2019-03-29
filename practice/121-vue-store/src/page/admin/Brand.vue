<template>
  <div>
    <h1>品牌管理</h1>
    <div>
      <el-button-group>
        <el-button @click="ui.formVisible = !ui.formVisible">
          <span v-if="ui.formVisible">取消</span>
          <span v-else>创建</span>
        </el-button>
      </el-button-group>
    </div>
    <div v-if="ui.formVisible">
      <h2>添加/修改</h2>
      <form @submit.prevent="createOrUpdate">
        <label>
          <span class="title">品牌名</span>
          <input class="el-input__inner" type="text" v-model="form.name">
          <span class="error-list">
            <span  v-if="invalid" v-for="(invalid, e) in errors.name" class="error" :key="e">{{rules.name[e].msg}}</span>
          </span>
        </label>
        <label>
          <button class="el-button el-button--primary" type="submit">提交</button>
          <button class="el-button el-button--text" @click="ui.formVisible=false">取消</button>
        </label>
      </form>
    </div>
    <div>
      <h2>列表</h2>
      <p>总数：{{total}}</p>
      <el-table :data="list"
                stripe
                style="width: 100%">
        <el-table-column
                prop="name"
                label="品牌名"
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
  import { call as valee } from '../../lib/valee';
  import admin             from '../../mixin/admin';

  export default {
    mixins  : [ admin ],
    data () {
      return {
        model  : 'brand',
        rules  : {
          name: {
            required: {
              msg: '品牌名为必填项'
            }
          }
        },
      };
    },
    methods : {},
  };
</script>