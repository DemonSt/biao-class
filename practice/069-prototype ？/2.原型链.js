// 动物 》哺乳动物 》人类 》lsd

function Animal(color, weight) {
    this.color = color;
    this.weight = weight;
  }
  
  Animal.prototype.eat = function () {
    console.log('mia mia mia...');
  }
  
  Animal.prototype.sleep = function () {
    console.log('zzz...');
  }
  
  // var a = new Animal('black', 120);
  // console.log('a:', a);
  
  function Mammal(color, weight) {
    Animal.call(this, color, weight);
  }
  
  Mammal.prototype = Object.create(Animal.prototype);
  Mammal.prototype.constructor = Mammal;
  Mammal.prototype.suckle = function () {
    console.log('mia！好奶！');
  }
  
  // var m = new Mammal('black', 100);
  // console.log('m:', m);
  
  function Person(color, weight) {
    Mammal.call(this, color, weight);
  }
  
  Person.prototype = Object.create(Mammal.prototype);
  Person.prototype.constructor = Person;
  Person.prototype.lie = function () {
    console.log('你不帅');
  }
  
  var lsd = new Person('brown', 100);
  var whh = new Person('brown', 80);
  console.log('lsd:', lsd);
  console.log('whh:', whh);