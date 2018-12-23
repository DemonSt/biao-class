;(function () {
    'use strict';

    // 全文视图
    let todoForm = document.getElementById('todo-form');
    let todoInput = todoForm.querySelector('[name=title]');
    let todoList = document.getElementById('todo-list');

    let catForm = document.getElementById('cat-form');
    let catInput = catForm.querySelector('[name=name]');
    let catList = document.getElementById('cat-list');
    let addCat = document.getElementById('add-cat');

    // 全文数据
    let $updatingTodoId = null;
    let $updatingCatId = null;
    let $currentCatId = null;
    let $todoList;
    let $catList;

    boot();

    function boot() {
        readTodo();
        readCat();
        bindEvents();
    }

    function bindEvents() {
        bindTodoSubmit();
        bindToggleCatForm();
        bindClickCatForm();
        bindCatSubmit();
    }

    // 获取事项列表（数据）
    function readTodo(params) {
        // 因为传入params是一个对象，保证 对象操作时不报错 所以让它或者等于一个空对象
        params = params || {};

        // where,query 都是方法，cat_id 是判断依据  and 可多项条件一起筛选

        params.where = {and : {cat_id : $currentCatId,},};
        // params.query = `where("cat_id" = "${$currentCatId}")`;

        api('todo/read', params, r => {
            $todoList = r.data || [];
            renderTodo();
        });
    }
    
    // 拿到数据后 绑定事件
    function bindTodoSubmit() {
        // 当表单提交时
        todoForm.addEventListener('submit', e => {
            e.preventDefault();
            let title = todoInput.value;

            // 如果有记录当前id就说明是更新
            if ($updatingTodoId)
                updateTodo($updatingTodoId, {title});
            else // 否则就是新增
                createTodo({title});
        });
    }

    // 增
    function createTodo(row) {
        // 在新添加数据 title 的时候先拦截，添加一个属性 cat_id，让它等于侧栏的某一项item的id
        row.cat_id = $currentCatId;

        api('todo/create', row, r => {
            if (r.success) {
                readTodo();
                todoForm.reset();
            }
        });
    }
    // 删
    function removeTodo(id) {
        api('todo/delete', {id}, r => {
            readTodo();
        });
    }
    // 更新
    function updateTodo(id, row) {
        api('todo/update', {id, ...row}, r => {
            if (r.success) {
                $updatingTodoId = null;
                readTodo();
                todoForm.reset();
            }
        });
    }

    // 渲染清单列表
    function renderTodo() {
        todoList.innerHTML = '';

        // 循环事项列表
        $todoList.forEach(it => {
            let item = document.createElement('div');
            item.classList.add('todo-item');
            item.innerHTML = `
            <div class="checkbox">
                <input class="completed" type="checkbox" ${it.completed ? 'checked' : ''}>
            </div>
            <div class="title">
                ${it.title}
            </div>
            <div class="operations">
                <button class="fill">更新</button>
                <button class="delete">删除</button>
            </div>
            `;

            // 选中每一项的复选框，后面设置完成与否要用到
            let checkbox = item.querySelector('.completed');
            // 选中每一项的操作容器，后面删除或更新填充要用到
            let operations = item.querySelector('.operations');

            // 当复选框被点击时，打开或关闭完成状态
            checkbox.addEventListener('change', e => {
                setCompleted(it.id, checkbox.checked);
            });

            // 当操作容器被点击时
            operations.addEventListener('click', e => {
                let target = e.target;

                // 如果事件源是.delete按钮，就执行删除操作
                if (target.classList.contains('delete'))
                    removeTodo(it.id);

                // 如果事件源是.fill按钮，就填充表单
                if (target.classList.contains('fill')) {
                    $updatingTodoId = it.id;
                    todoInput.value = it.title;
                }
            });
            todoList.appendChild(item);
        });
    }

    // 设置完成与否，(只更新哪一个复选框)
    function setCompleted(id, completed) {
        api('todo/update', {id, completed}, r => {
            readTodo();
        });
    }

    // *************************************************************************
    // 读取分类
    function readCat() {
        api('cat/read', null, r => {
            $catList = r.data || [];
            // 一开始添加一个默认分类， id不设置就是undefined，JSON解析优惠自动删掉，所以设为null
            $catList.unshift({
                id: null,
                name: '默认',
            });
            renderCat();
            // 一开始让默认分类 高亮
            highlightCurrentCat();
        });
    }

    // 当分类表单提交时...
    function bindCatSubmit() {
        catForm.addEventListener('submit', e => {
            e.preventDefault();
            // 取到分类名
            let name = catInput.value;

            // 如果记录了当前更新分类id
            if ($updatingCatId)
                updateCat($updatingCatId, {name}); // 就更新分类
            else
                createCat({name}); // 否则就是新增分类
        });
    }

    // 增
    function createCat(row) {
        api('cat/create', row, r => {
            if (r.success) {
                readCat();
                setCatFormVisible(false);
            }
        });
    }
    // 删
    function removeCat(id) {
        api('cat/delete', {id}, r => {
            readCat();
        });
    }
    // 更新
    function updateCat(id, row) {
        api('cat/update', {id, ...row}, r => {
            if (r.success) {
                readCat();
                setCatFormVisible(false);
            }
        });
    } 

    // 监听打开或关闭分类表单  (点击按钮显示表单)
    function bindToggleCatForm() {
        // 添加分类按钮被点击时
        addCat.addEventListener('click', e => {
            // 显示分类表单
            setCatFormVisible(true);
        });
    }

    // 分类表单作为整体被点击时...  （点击取消按钮隐藏表单）
    function bindClickCatForm() {
        catForm.addEventListener('click', e => {
            let target = e.target;

            // 如果点击的是取消，就隐藏表单
            if (target.classList.contains('cancel'))
                setCatFormVisible(false);

        });
    }

    // 设置分类表单是否可见
    function setCatFormVisible(visible = true) {
        catForm.hidden = !visible;
        addCat.hidden = !catForm.hidden;

        // 如果隐藏了
        if (catForm.hidden) {
            // 就清掉当前更新分类的id，否则后面再添加会一直在更新的那个值上操作
            $updatingCatId = null;
            // 重置表单
            catForm.reset();
        } else
            catInput.focus(); // 否则就聚焦input，省的再点一次
    }

    // 高亮选中分类
    function highlightCurrentCat() {
        // 拿到侧栏的每一个分类项的数组合集，循环之后拿到里面每一项
        let items = catList.children;
        for (let i = 0; i < items.length; i++) {
            let it = items[i];
            // 高亮点击时，先触发 渲染renderCat时 点击触发的操作，将it.id赋值， 此时再将值赋给 it.$id
            if (it.$id == $currentCatId)
                it.classList.add('active');
            else
                it.classList.remove('active');
        }
    }

    // 渲染分类
    function renderCat() {
        catList.innerHTML = '';

        $catList.forEach(it => {
            let item = document.createElement('div');
            // 获取侧栏每一条信息的id， 当点击时高亮
            item.$id = it.id;
            item.classList.add('item');
            item.innerHTML = `
            <span class="name">${it.name}</span>
            <span class="operations">
                <button class="fill">更新</button>
                <button class="delete">删除</button>
            </span>
            `;
            // 当前item分类作为整体被点击时
            item.addEventListener('click', e => {
                let klass = e.target.classList;
                // 是否是删除按钮
                if (klass.contains('delete'))
                    return removeCat(it.id);

                // 是否是更新按钮
                if (klass.contains('fill')) {
                    // 设置当前  更新  分类id为it.id
                    $updatingCatId = it.id;
                    // 显示表单
                    setCatFormVisible(true);
                    catInput.value = it.name;
                    return;
                }

                // 点击侧栏每一条item，当点击的不是删除或更新按钮的其他位置时：高亮，并重新渲染当前类的todo项目
                $currentCatId = it.id;
                highlightCurrentCat();
                readTodo();
            });
            catList.appendChild(item);
        });
    }
})();