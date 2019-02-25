export default {
  // time是毫秒时间戳， data是系统日期时间，再通过拼接字符串 拼成页面上显示的时间
  formateDate (time) {
    if(!time) 
      return '';
    let date = new Date (time);
    return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
  }
}