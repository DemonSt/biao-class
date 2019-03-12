import { call as valee } from '../lib/valee';

export default {
  //  生命周期函数，页面加载初期 发送api 查询用户数量
  mounted () {
    this.read();
  },
  data () {
    return {
      ui           : {
        formVisible : false,       // 控制创建按钮的显示与隐藏
      },
      readParam    : {             // 每次去后端读数据 读多少条 默认 15 条，且 第一页
        limit : 15,
        page  : 1,
      },
      list         : [],
      form         : {},            //  这就是vmodel 双向绑定的那个form input框变化时自动往里推数据
      total        : 0,             // 表示一共有几条，默认0条
      formOriginal : null,          // form原始数据 让后续操作可以拷贝一份
      rules        : {},
      errors       : {},
    };
  },
  methods : {
    // 点击翻页之后触发的函数 
    flip (page) {
      this.readParam.page = page;
      this.read();
    },

    validate (field) {
      let value      = this.form[ field ];
      let fieldValid = true;
      // 先拿到所有的规则
      // {
      //   lengthBetween : {
      //     params : [ 4, 12 ],
      //       msg    : '最小长度需在4至12位之间',
      //   }
      //   required : {
      //       msg    : '此项为必填项',
      //   }
      // }
      let rules = this.rules[ field ];

      // 检查每一条规则是否合法
      for (let key in rules) {
        // 比如说是lengthBetween
        // {
        //   params : [ 4, 12 ],
        //     msg    : '最小长度需在4至12位之间',
        // }
        let rule   = rules[ key ];
        let params = rule.params || [];

        // 调用biao valee对应的验证函数
        // 比如说valee.lengthBetween('whh', 4, 12)
        let valid = valee(key, value, ...params);

        if (typeof valid == 'boolean') {
          this.afterValidate(field, key, valid);
          if (!valid)
            fieldValid = false;
        } else {
          valid.then(r => {
            this.afterValidate(field, key, r);
            // if (!r)
            //   fieldValid = false;
          });
        }
      }

      return fieldValid;
    },

    /**
     * 验证表单中所有的属性
     * 如果有一个属性未通过验证就返回false
     */
    validateForm () {
      let rules    = this.rules;
      let valid    = true;
      let f        = this.form;
      let isUpdate = !!f.id;

      for (let field in rules) {
        // 如果是更新，且这个属性完全没有改，那就没必要做验证
        // 比如说whh的昵称改为whhhh，但是手机号没有变，
        // 那就没必要验证手机号
        if (isUpdate && f[ field ] === this.formOriginal[ field ])
          continue;

        if (!this.validate(field))
          valid = false;
      }

      return valid;
    },

    /**
     * 当某一个字段的某一个规则验证完毕时
     * @param {string} field
     * @param {bool} valid
     */
    afterValidate (field, rule, valid) {
      // 拿到对应的错误对象
      let fieldObj = this.errors[ field ];

      // 如果不存在，就初始化一个空对象
      if (!fieldObj)
        fieldObj = this.$set(this.errors, field, {});

      // 将对象中对应的验证规则设为valee返回的结果
      // 如：fieldObj['lengthBetween'] = true;
      this.$set(fieldObj, rule, !valid);
    },
    
    //  点击更新之后 表单要显示，同时将 row 赋值给数据 formOriginal 
    fill (row) {
      console.log(row);  // 点更新就可以看见
      this.ui.formVisible = true;
      this.formOriginal   = row;
      this.form           = { ...row };
    },

    remove (id) {
      if (!confirm('确定要删除此项吗？'))
        return;

      api(`${this.model}/delete`, { id })
        .then(r => {
          this.read();
        });
    },
    //    发送api查询到有几条用户信息再赋值给data里面的total
    read () {
      api(`${this.model}/read`, this.readParam)
        .then(r => {
          this.list  = r.data;
          this.total = r.total;
        });
    },

    createOrUpdate () {
      if (!this.validateForm())
      {
        return;
      }

      let f = this.form;
      let action;

      if (f.id)
        action = 'update';
      else
        action = 'create';

      api(`${this.model}/${action}`, f)
        .then(r => {
          this.resetForm();
          this.read();
        });
    },

    resetForm () {
      this.ui.formVisible = false;
      this.form           = {};
    },

    makeSelect (prop) {
      return it => {
        this.form[ prop ] = it.id;
      };
    },
  },
};