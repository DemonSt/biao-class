<template>
  <div>
    <button @click="send()"
            type="button"
            :class="className"
            :disabled="count !== 0">
      <span v-if="count">{{count}}s</span>
      <span v-else>发送验证码</span>
    </button>
  </div>
</template>

<script>
  import { send } from '../lib/captcha';

  export default {
    props : [
      'sendBy', // phone|mail
      'receiver', // 18399991111|a@b.com
      'className', // 个性类名
      'countDown', // 倒计时
    ],

    data () {
      return {
        timer : null,
        count : 0, // 验证码发送倒计时
      };
    },

    methods : {
      send () {
        // 设定发送验证码的按钮倒计时不为0直接return，为0的话 点击之后设置为60 且每秒递减可看
        if (this.count)
          return;
        this.count = this.countDown || 10;
        this.timer = setInterval(() => {
          this.count--;
          if (this.count == 0)
            clearInterval(this.timer);
        }, 1000);
        
        // api的接口就是这种格式 captcha/${action} ，后面传电话号，邮箱等，并且子组件向父组件传值
        send(this.sendBy, this.receiver)
          .then(r => {
            this.$emit('send', r);
          });
      },
    },
  };
  // let action;
  // if(this.signupBy == 'phone') {
  //   action = 'sms';
  // }else {
  //   action = 'mail'; 
  // }
  // api(`captcha/${action}`, {mail: this.form.mail, phone: this.form.phone})
</script>