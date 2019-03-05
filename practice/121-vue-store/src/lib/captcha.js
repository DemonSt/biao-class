// let countDown = 0;
// let timer;

/**
 * 发送验证码
 * @param sendBy (phone|mail)
 * @param {string} receiver 手机或邮箱
 * @return {Promise}
 */
export function send(sendBy, receiver, onSend) {

  let action;
  if (sendBy == 'phone') {
    action = 'sms';
  } else {
    action = 'mail';
  }

  return api(`captcha/${action}`, { [sendBy] : receiver })
    .then(r => {
      let code = atob(r.data.result)

      if(onSend)
        onSend(code);

      return code;
    });
}