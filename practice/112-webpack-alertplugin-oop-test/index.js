import '../111-webpack-alertplugin-oop/alert.css';
import Alert from '../111-webpack-alertplugin-oop/alert.js';

new Alert('余额不足，请充值', {
    desc: '请前往我的余额进行充值',
    type: 'warn',
    timeout: false,
    onClick(config) {
        document.body.appendChild(config.el);
        console.log(config);
    },
    onOpen() {
        console.log('打开');
    },
    onClose() {
        console.log('关闭');
    },
});