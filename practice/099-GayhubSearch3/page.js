;(function () {
    'use strict';
    // 默认设置  limit 每页显示多少条信息   currentPage 当前页
    const DEFAULT_CONFIG = {
        limit : 10,
        currentPage :1,
    };
    // 暴露接口
    window.biaoPage = {
        boot,
        render,
    };

    //  selector 插件位置， amount 总信息数， limit 每页显示多少条信息，currentPage 当前页， 回调函数
    // boot ({
    //     selector : '.footer',
    //     amount : 101,
    //     limit : 10,
    //     currentPage : 1,
    //     onChange (page, state) {
    //         console.log(page);
    //     }
    // })

    // 首先合并默认设置和传入设置 ，创建一个对象作为参数 链接插件上下文所有函数，方便调用 ，同时将合并后的参数也作为它的对象
    function boot (setings) {
        let config = Object.assign({}, DEFAULT_CONFIG, setings);
        let state = {config};
        //  state.currentPage(当前页)在后面的操作里是动态的，保证config里是静态不动，所以给state.currentPage复制一份
        state.currentPage = config.currentPage;
        prepare (state);
        render (state);
        bindEvents (state);
    }
    
    // 准备插件结构，创造插件容器，添加插件类，填充基础结构
    function prepare (state) {
        let el = document.createElement('div');
        el.classList.add('biao-page');
        el.innerHTML = `
        <span class="shortcuts">
            <button class="prev">上一页</button>
            <button class="first">第一页</button>
        </span>
    
        <span class="page-list"></span>
    
        <span class="shortcuts">
            <button class="last">最后一页</button>
            <button class="next">下一页</button>
        </span>
        `;
        // 代理一些常用元素（把一些常用元素设为state的类），方便后续使用。 插件本身，插件挂载点，挂载插件，中间的数字按钮容器
        state.el = el;
        state.root = document.querySelector(state.config.selector);
        // 再次渲染前先清空前一次
        state.root.innerHTML = '';
        state.root.appendChild(state.el);
        state.pageList = el.querySelector('.page-list');
    }
    
    // 渲染中间的数字按钮
    function render (state) {
        // 页码总数 = 向上取整(条目总数 / 每页条目数)
        let pageAmount = state.pageCount = Math.ceil(state.config.amount / state.config.limit);
        // 拿到数字页码容器
        let list = state.pageList;
        // 清空上次渲染的内容
        list.innerHTML = '';
        // 基于页码总数创造按钮
        for(let i = 0 ; i < pageAmount ; i++){
            // 从0开始，所以加1
            let page = i + 1;
            let button = document.createElement('button');
            // 加插件类
            button.classList.add('biao-page-item');
            // 如果刚好等于当前页就直接高亮
            if(state.currentPage === page){
                button.classList.add('active');
            }
            button.innerHTML = page;
            // 直接在按钮对象上记录当前页的页码  ***********************
            button.$page = page;
            // 追加按钮
            state.pageList.appendChild(button);
        }
        // 代理所有按钮，方便后续使用
        state.buttons = state.pageList.querySelectorAll('.biao-page-item')
    }

    // 绑定必要初始事件
    function bindEvents (state) {
        // 当插件被点击时（不管点哪里） 绑定代理事件
        state.el.addEventListener('click', (event) => {
            let target = event.target;
            let page = target.$page;
            // 如果是数字按钮，就跳到对应的页
            if(page)
                setCurrentPage (state, page);

            // 如果点的是"上一页"（currentPage 当前页 - 1）
            if(target.classList.contains('prev'))
                setCurrentPage (state, state.currentPage - 1);

            // 如果点的是"下一页"（currentPage 当前页 + 1）
            if(target.classList.contains('next'))
                setCurrentPage (state, state.currentPage + 1);

            // 如果点的是"第一页"
            if(target.classList.contains('first'))
                setCurrentPage (state, 1);

            // 如果点的是"最末页（state.pageCount）"
            if(target.classList.contains('last'))
                setCurrentPage (state, state.pageCount);
        });
    }

    // 切换页面
    function setCurrentPage (state, page) {
        // 如果小于最小页，就去最小页（第一页）
        if(page < 1){
            return setCurrentPage (state, 1);
        }
        // 如果大于最大页，就去最大页（最后一页）
        if(page > state.pageCount){
            return setCurrentPage (state, state.pageCount);
        }
        // 如果下游传了回调函数，就触发；通知下游页面改变了
        let onChange = state.config.onChange;
        onChange && onChange(page, state);
        // 记录当前页 ***************************************
        state.currentPage = page;
        // 更新高亮按钮
        state.buttons.forEach(button => {
            // 只要不是当前页的按钮通通取消.active类
            if(button.$page != page){
                button.classList.remove('active');
                return;
            // 否则加.active类
            }else{
                button.classList.add('active');
            }
        });
    }
})();