;(function(){
    'use strict';
    boot ();
    // 一切从这里开始
    function boot () {
        bindEvents ();
    }
    //  开始第一步，先绑定事件，防止提交跳转页面，提交时只拿取数据
    function bindEvents () {
        let form = document.getElementById('search-form');
        let input = form.querySelector('input');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            let keyword = input.value;
            search (keyword);
        });
    }
    // 拿到数据后 就知道要搜什么了，发送要搜索的请求，服务器返回搜到的数据 data.items数据里的每一条信息
    function search (keyword) {
        let http = new XMLHttpRequest();
        http.open('get', `https://api.github.com/search/users?q=${keyword}`);
        http.send();
        http.addEventListener('load', () => {
            let data = JSON.parse(http.responseText);
            render (data.items);  
        });
    }
    // 渲染每一条信息 显示出来
    function render (users) {
        let userList = document.getElementById('user-list');
        userList.innerHTML = '';
        users.forEach(it => {
            let item = document.createElement('div');
            item.classList.add('item');
            item.innerHTML = `
            <div class="avatar">
                <img src="${it.avatar_url}">
            </div>
            <div class="detail">
                <strong>${it.login}</strong>
                <div><a target="_blank" href="${it.html_url}">${it.html_url}</a></div>
            </div>
            `;
            userList.appendChild(item);
        });
    }
})();