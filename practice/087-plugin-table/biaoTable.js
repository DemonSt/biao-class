;(function() {
    'use strict';
    window.biaoTable = {boot};
    let struct = {
        name: '姓名',
        score: '分数',
        gender: '性别',
        balance: '余额',
    };
    
    let users = [
        {
            name: '王花花',
            gender: '男',
            score: 20,
            balance: 80,
        },
        {
            name: '李拴蛋',
            gender: '女',
            score: 65,
        },
        {
            name: '赵可爽',
            gender: '男',
            score: 81,
        },
    ];
    let orderStruct = {
        oid: '订单号',
        product: '产品',
        totalCost: '总费用',
    };
    
    let orders = [
        {
          oid: '001',
          product: '拖鞋',
          totalCost: 70,
        },
        {
          oid: '002',
          product: '毛裤',
          totalCost: 80,
        },
        {
          oid: '003',
          product: '枸杞',
          totalCost: 90,
        },
    ];
    let table, tbody, thead, structure, list;
    
    /**启动
    @param {string} tableSelector
    @param {Object} struct
    @param {Array} list
    */
    function boot(tableSelector, struct, data) {
        table = document.querySelector(tableSelector);
        thead = table.tHead;
        tbody = table.tBodies[0];
        structure = struct;
        list = data;
        render();
    }
    // 总渲染
    function render() {
        renderHead();
        renderBody();
    }

    function renderHead() {
        thead.innerHTML = '';
        let html = '';
        for(let key in structure){
            html += `<th>${structure[key]}</th>`
        }
        thead.innerHTML = html;
    }

    function renderBody() {
        tbody.innerHTML = '';
        list.forEach(element => {
            let tr = document.createElement('tr');
            let html = '';
            for(let key in structure){
                html += `<td>${element[key] || '/'}</td>`
            }
            tr.innerHTML = html;
            tbody.appendChild(tr);
        });
    }
    biaoTable.boot('#user-table', struct, users);
    biaoTable.boot('#order-table', orderStruct, orders);
})();