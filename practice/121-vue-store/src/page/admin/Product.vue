<template>
  <div>
    <h1>商品管理</h1>
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
          <span class="title">标题</span>
          <input class="el-input__inner" type="text" v-model="form.title">
          <span class="error-list">
            <span :key="e" v-if="invalid" v-for="(invalid, e) in errors.title" class="error">{{rules.title[e].msg}}</span>
          </span>
        </label>
        <label>
          <span class="title">分类</span>
          <Dropdown api="cat/read"
                    searchBy="name"
                    displayBy="name"
                    select="form.cat_id"
                    className="el-input__inner"
                    :onSelect="makeSelect('cat_id')"
          />
          <span class="error-list">
            <span :key="e" v-if="invalid" v-for="(invalid, e) in errors.cat_id" class="error">{{rules.cat_id[e].msg}}</span>
          </span>
        </label>
        <label>
          <span class="title">品牌</span>
          <Dropdown api="brand/read"
                    searchBy="name"
                    displayBy="name"
                    select="form.brand_id"
                    className="el-input__inner"
                    :onSelect="makeSelect('brand_id')"
          />
          <span class="error-list">
            <span :key="e" v-if="invalid" v-for="(invalid, e) in errors.brand_id" class="error">{{rules.brand_id[e].msg}}</span>
          </span>
        </label>
        <label>
          <span class="title">价格</span>
          <input class="el-input__inner" type="number" v-model="form.price">
          <span class="error-list">
            <span :key="e" v-if="invalid" v-for="(invalid, e) in errors.price" class="error">{{rules.price[e].msg}}</span>
          </span>
        </label>
        <label>
          <span class="title">运费</span>
          <input class="el-input__inner" type="number" v-model="form.shipping_fee">
          <span class="error-list">
            <span :key="e" v-if="invalid" v-for="(invalid, e) in errors.shipping_fee"
                  class="error">{{rules.shipping_fee[e].msg}}</span>
          </span>
        </label>

        <label>
          <span class="title">库存</span>
          <input class="el-input__inner" type="number" v-model="form.total">
          <span class="error-list">
            <span :key="e" v-if="invalid" v-for="(invalid, e) in errors.total" class="error">{{rules.total[e].msg}}</span>
          </span>
        </label>

        <label>
          <span class="title">销量</span>
          <input class="el-input__inner" type="number" v-model="form.sales">
          <span class="error-list">
            <span :key="e" v-if="invalid" v-for="(invalid, e) in errors.sales" class="error">{{rules.sales[e].msg}}</span>
          </span>
        </label>

        <label>
          <span class="title">折扣</span>
          <input class="el-input__inner"
                 step="0.01"
                 type="number"
                 v-model="form.discount">
          <span class="error-list">
            <span :key="e" v-if="invalid" v-for="(invalid, e) in errors.discount" class="error">{{rules.discount[e].msg}}</span>
          </span>
        </label>

        <label>
          <span class="title">货到付款</span>
          <el-switch
                  v-model="form.cod"
                  active-color="#13ce66"
                  inactive-color="#aaa">
          </el-switch>
        </label>

        <label>
          <span class="title">热卖</span>
          <el-switch
                  v-model="form.is_hot"
                  active-color="#13ce66"
                  inactive-color="#aaa">
          </el-switch>
        </label>

        <label>
          <span class="title">新品</span>
          <el-switch
                  v-model="form.is_new"
                  active-color="#13ce66"
                  inactive-color="#aaa">
          </el-switch>
        </label>

        <label>
          <span class="title">轮播展示</span>
          <el-switch
                  v-model="form.is_carousel"
                  active-color="#13ce66"
                  inactive-color="#aaa">
          </el-switch>
        </label>

        <div v-if="form.is_carousel">
          <label>
            <span class="title">轮播图片</span>
            <Uploader @uploadSuccess="carouselUploaded" :autoUpload="true"/>
          </label>
          <img v-if="form.carousel" :src="fileUrl(form.carousel)" :alt="img.name">
        </div>

        <label>
          <span class="title">独有属性</span>
          <!--<button type="button" class="el-button el-button&#45;&#45;default">+</button>-->
          <!-- 自定义添加的属性  -->
          <div class="row">
            <input v-model="propForm.key" class="even" type="text" placeholder="名称">
            <input v-model="propForm.value" class="even" type="text" placeholder="可选的值，请用|隔开">
            <button @click="addProp" type="button">完成</button>
          </div>
          <!-- 当点击完成按钮后 就把键值对 渲染到页面上 -->
          <div :key="k" v-for="(v, k) in form.prop" class="row">
            <span>{{k}}</span>:
            <span>{{v}}</span>
            <!--<input v-model="v" class="even" type="text" placeholder="可选的值，请用|隔开">-->
            <button @click="removeProp(k)" type="button">-</button>
            <button @click="fillPropForm(k, v)" type="button">编辑</button>
          </div>
          <span class="error-list">
            <span :key="e" v-if="invalid" v-for="(invalid, e) in errors.total" class="error">{{rules.total[e].msg}}</span>
          </span>
        </label>

        <div>
          <label>
            <span class="title">主图</span>
            <Uploader @uploadSuccess="singleCoverUploaded" :autoUpload="true"/> <!-- 插入主图的组件  -->
          </label>
          <el-row>
            <el-col :key="img" class="thumbnail" :span="6" v-for="img in form.main_img">
              <img :src="fileUrl(img)" :alt="img.name">
              <div>{{img._original_name}}</div>
            </el-col>
          </el-row>
        </div>


        <div>
          <div class="title">详情描述</div>
          <button type="button" @click="inertDesc('text')">插入文字</button>
          <button type="button" @click="inertDesc('image')">插入图片</button>
          <div>
            <div :key="i" class="segment" v-for="(it, i) in form.detail">
              <button type="button" @click="removeDesc(i)">删除</button>
              <div v-if="it.type === 'text'" class="text">
                <el-input type="textarea" v-model="it.value"/>
              </div>
              <div v-else class="image">
                <Uploader @uploadSuccess="singleDescImageUploaded($event, i)" :autoUpload="true"/>
                <div v-if="it.value">
                  <img :src="fileUrl(it.value)" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>

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
                prop="title"
                label="标题"
                width="180">
        </el-table-column>
        <el-table-column
                label="主图"
                width="200">
          <template slot-scope="scope">
            <div :key="img" class="thumbnail" v-for="img in scope.row.main_img">
              <img :src="fileUrl(img)" :alt="img.name">
              <div>{{img._original_name}}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column
                prop="$cat.name"
                label="分类"
                width="180">
        </el-table-column>
        <el-table-column
                prop="$brand.name"
                label="品牌"
                width="180">
        </el-table-column>
        <el-table-column
                prop="price"
                label="价格"
                width="180">
        </el-table-column>
        <el-table-column
                prop="shipping_fee"
                label="运费"
                width="180">
        </el-table-column>
        <el-table-column
                prop="total"
                label="库存"
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
  import Dropdown          from '../../components/Dropdown';
  import admin             from '../../mixin/admin';
  import Uploader          from '../../components/Uploader';
  import { fileUrl }       from '../../lib/helper';


  export default {
    components : { Uploader, Dropdown },
    mixins     : [ admin ],
    data () {
      return {
        model     : 'product',
        propForm  : { key : '', value : '' }, // 独有属性表单数据
        readParam : {
          with : [
            'belongs_to:cat',
            'belongs_to:brand',
            // {
            //   model       : 'cat',
            //   relation    : 'belongs_to',
            //   foreign_key : 'parent_id',
            // },
          ],
        },
        rules     : {
          title        : {
            required : {
              msg : '标题为必填项',
            },
          },
          cat_id       : {
            required : {
              msg : '分类为必填项',
            },
          },
          brand_id     : {
            required : {
              msg : '品牌为必填项',
            },
          },
          price        : {
            min : {
              params : [ 0 ],
              msg    : '价格不可小于0',
            },
          },
          shipping_fee : {
            min : {
              params : [ 0 ],
              msg    : '价格不可小于0',
            },
          },
          total        : {
            min : {
              params : [ 0 ],
              msg    : '价格不可小于0',
            },
          },

          // parent_id : {
          //   required : {
          //     msg : '父级分类为必填项',
          //   },
          // },
        },
      };
    },
    methods    : {
      fileUrl,
      /**
       * 添加独有属性
       */
      addProp () {
        let pf    = this.propForm;
        let f     = this.form;
        let key   = pf.key;
        let value = pf.value;
        // 如果没填 就直接返回 否则 undefind 就会给添加进去了
        if (!key || !value)
          return;
        // 如果一开始没有 this.form.prop 就初始化创建一个 否则就往里添加  this.form:{ prop:{ this.propForm.key: this.propForm.value } }
        // Vue 不允许在已经创建的实例上动态添加新的根级响应式属性 (root-level reactive property)。然而它可以使用 Vue.set(object, key, value) 方法将响应属性添加到嵌套的对象上
        if (!f.prop)
          this.$set(f, 'prop', {});

        this.$set(f.prop, pf.key, pf.value);

        this.propForm = {};
      },
      // 删除自定义的个性属性
      removeProp (key) {
        this.$delete(this.form.prop, key);
      },
      // 更新自定义的个性属性  必须 $set 才能动态渲染视图
      fillPropForm (key, value) {
        this.$set(this.propForm, 'key', key);
        this.$set(this.propForm, 'value', value);
      },
      // 轮播图执行函数
      carouselUploaded (data) {
        this.form.carousel_img = data;
        // this.$set(this.form, 'carouse_img', data);
      },
      // 添加主图 首先 form 没有 main_img 就先初始化一个 然后给他添加
      singleCoverUploaded (data) {
        console.log(data);
        if (!this.form.main_img)
          this.$set(this.form, 'main_img', []);

        this.form.main_img.push(data);
      },
      
      singleDescImageUploaded (image, index) {
        this.updateDesc(index, image);
      },
      // 添加详情描述 首先 form 没有 detail 就先初始化一个 然后给他添加 这个函数只负责往里面推一项数据 并不在乎是文字还是图片
      inertDesc (type) {
        if (!this.form.detail)
          this.$set(this.form, 'detail', []);

        this.form.detail.push({ type });
      },
      // 有了 inertDesc 函数之后才能更新 
      updateDesc (index, value) {
        this.$set(this.form.detail[ index ], 'value', value);
        console.log(this.form.detail);
      },
      removeDesc (index) {
        this.form.detail.splice(index, 1);
      },
    },
  };
</script>

<style scoped>
  .thumbnail {
    -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, .2);-moz-box-shadow: 0 0 3px rgba(0, 0, 0, .2);box-shadow: 0 0 3px rgba(0, 0, 0, .2);
  }

  table .thumbnail {
    text-align: center;
    display: inline-block;
    max-width: 50px;
    font-size: 70%;
  }

  .segment {
    padding: .5em;
    border: 2px solid #ccc;
    margin-bottom: .5em;
  }
</style>