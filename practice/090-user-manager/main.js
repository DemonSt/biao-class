;
(function () {
    'use strict';

    let userList = [{
            username: '熙洪氏',
            email: 'qweqsdr@qwe1s.com',
            balance: 2801,
        },
        {
            username: '网画画',
            email: 'sadqwvfd@fgr2s.com',
            balance: 1401,
        }
    ]
    let elForm = document.getElementById('user-form'),
        elTable, elTbody;
    let inputs = {
        index: elForm.querySelector('[name=index]'),
        username: elForm.querySelector('[name=username]'),
        email: elForm.querySelector('[name=email]'),
        balance: elForm.querySelector('[name=balance]'),
    }
    boot();

    function boot() {
        elTable = document.getElementById('user-table');
        elTbody = elTable.tBodies[0];
        render();
        bindSubmit();
    }

    function bindSubmit() {
        elForm.addEventListener('submit', (event) => {
            event.preventDefault();
            let checked = elForm.querySelectorAll('[name]');
            let data = {};
            // 拿到index 才能知道index 有没有值
            let index = inputs.index.value;
            checked.forEach(input => {
                data[input.name] = input.value;
            });
            // 有index就修改数据，没有就插入添加新数据
            if(index){
                userList[index] = data;
            }else{
                userList.push(data);
            }
            elForm.reset();
            render();
        });
    }

    function render() {
        elTbody.innerHTML = '';
        userList.forEach((user, index) => {
            if (!user)
                return;
            let tr = document.createElement('tr');
            let html = '';
            for (let key in user) {
                html += `<td>${user[key]}</td>`
            }
            tr.innerHTML = html;
            tr.innerHTML += `<td class='text-right operation'><button class='fill'>更新</button><button class='delete'>删除</button></td>`;
            let opr = tr.querySelector('.operation');
            opr.addEventListener('click', (event) => {
                let target = event.target.classList;
                if (target.contains('delete')) {
                    userList[index] = null;
                    tr.remove();
                }
                if (target.contains('fill')) {
                    inputs.index.value = index;
                    inputs.username.value = user.username;
                    inputs.email.value = user.email;
                    inputs.balance.value = user.balance;
                }
            })
            elTbody.appendChild(tr);
        });
    }
})();