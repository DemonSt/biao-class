;(function(){
    'use strict';
    let bf, bt;

  let form = document.querySelector('form');

  let structure = {
    username: '用户名',
    email: '邮箱',
    balance: '余额',
  };

  let list = [
    {
      username: 'whh',
      email: 'whh@biaoyancu.com',
      balance: 100,
    },
    {
      username: 'lsd',
      email: 'lsd@biaoyancu.com',
      balance: 120,
    },
  ];

  boot();

  function boot() {
    prepareForm();
    prepareTable();
  }
  // 调biaoForm插件 
  function prepareForm() {
    bf = biaoForm('form', onSubmit);
  }

  function prepareTable() {
    let actions = {
      delete(tr, i) {
        tr.remove();
        list[i] = null;
      },
      update(tr, i) {
        bf.setData(list[i]);
        form.querySelector('[name=index]').value = i;
      },
    };
    bt = biaoTable('table', structure, list, actions);
  }

  function onSubmit(row) {
    if (!row.index && row.index !== 0)
      list.push(row);
    else
      list[row.index] = row;

    bt.render();
  }
})();