;(function () {
    'use strict';
    //暴露接口
    window.rq = {
        get : get,
        post : post,
    }
    // 异步 拿数据
    function get (url, onSuccess, onErroe) {
        send (url, 'get', null, onSuccess, onErroe);
    }
    // 异步 推数据到服务器
    function post (url, data, onSuccess, onErroe) {
        send (url, 'post', data, onSuccess, onErroe);
    }
    // 基础功能函数
    function send (url, operation, data, onSuccess, onErroe) {
        let http = new XMLHttpRequest();
        http.open(operation, url);
        http.send();
        http.addEventListener('load', () => {
            let information = JSON.parse(http.responseText);
            onSuccess && onSuccess(information);
        });
    }
})();