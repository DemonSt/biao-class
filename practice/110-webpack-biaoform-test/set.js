import biaoForm from '../109-webpack-biaoForm/form.js';

let bf = biaoForm('#b')
let data = bf.setData({
    name: '西红柿',
    age: 10,
    email: 'dasdasu@gmail.com',
    birthday: '1994-03-06',
    gender: 'female',
    orientation: ['car', 'male'],
    balance: 120,
});