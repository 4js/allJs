// this指向问题

// 示例一

var name = '大明';

function func(){
  this.name = '小明';
  console.log(this.name);
}

func()

/**
 * 1.在全局环境下执行func，则此时的this会指向全局window对象
 * 2.执行this.name赋值后，修改了window.name的值 此时window.name的值变为'小明'
 * 3.打印值 this.name
 */

// 示例二

// var name = '大明';

// function func(){
//   this.name = '小明'
//   console.log(this.name)
// }

// new func()

/**
 * 1.执行new时，func看成构造函数，此时的this指向构造函数创建的实例
 */

// 示例三-函数里面的函数的this指向


// function func(){

//   function func2(){
//     console.log(this)
//   }
//   func2()
// }

// func() // window

/**
 * 我们发现无论是直接执行，还是使用new执行，this的值都指向的window。直接执行时很好理解，因为没有明确调用者，那this自然就是window。需要注意的是使用new时，只有被new的func才是构造函数，他的this指向new出来的对象，他里面的函数的this还是指向window。
 */

// 有明确调用者时，this指向调用者

// var name = "大明";

// var obj = {
//   myName: "小明",
//   func: function() {
//     console.log(this.myName);
//   }
// }

// obj.func();    // 小明

// 因为调用者是obj，所以func里面的this就指向obj，this.myName就是obj.myName。其实这一条和上一条可以合在一起，没有明确调用者时其实隐含的调用者就是window，所以经常有人说this总是指向调用者。

// var myName = "大明";

// var obj = {
//   myName: "小明",
//   func: function() {
//     console.log(this.myName);
//   }
// }

// var anotherFunc = obj.func;

// anotherFunc();   // 大明

// anotherFunc指向的是obj.func这个函数 所以执行的时候是指向window

// 如果把var变为let，这次我们只是将第一个var改成了let，但是我们的输出却变成了undefined。这是因为let，const定义变量，即使在最外层也不会变成window的属性，只有var定义的变量才会成为window的属性。

// 箭头函数并不会绑定this

// 这句话的意思是箭头函数本身并不具有this，箭头函数在被申明确定this，这时候他会直接将当前作用域的this作为自己的this。还是之前的例子我们将函数改为箭头函数：

// var myName = "大飞哥";

// var obj = {
//   myName: "小小飞",
//   func: () => {
//     console.log(this.myName);
//   }
// }

// var anotherFunc = obj.func;

// obj.func();      // 大飞哥
// anotherFunc();   // 大飞哥

// 上述代码里面的obj.func()输出也是“大飞哥”，是因为obj在创建时申明了箭头函数，这时候箭头函数会去寻找当前作用域，因为obj是一个对象，并不是作用域，所以这里的作用域是window，this也就是window了。


// var myName = "大飞哥";

// var obj = {
//   myName: "小小飞",
//   func: function () {
//     return {
//       getName: () => {
//         console.log(this.myName);
//       }
//     }
//   }
// }

// var anotherFunc = obj.func().getName;

// obj.func().getName();      // 小小飞
// anotherFunc();   // 小小飞


// 两个输出都是“小小飞”，obj.func().getName()输出“小小飞”很好理解，这里箭头函数是在obj.func()的返回值里申明的，这时他的this其实就是func()的this，因为他是被obj调用的，所以this指向obj。


// var myName = "大飞哥";

// function func() {
//   this.myName = "小小飞";

//   const getName = () => {
//     console.log(this.myName);
//   }

//   getName();
// }

// new func(); // 输出啥？

// 这里输出的是“小小飞”，原理还是一样的，箭头函数在申明时this确定为当前作用域的this，在这里就是func的作用域，跟func的this一样指向new出来的实例。如果不用new，而是直接调用，这里的this就指向window。


Function.prototype.myCall = function(...args){
  console.log(typeof this)
  if(typeof this !== 'function'){
    throw new Error('Must call with a function');
  }

  var realThis = args[0] || window;
  var realArgs = args.slice(1);

  var funcSymbol = Symbol('func')
  realThis[funcSymbol] = this

  const res = realThis[funcSymbol](...realArgs);

  delete realThis[funcSymbol];  // 最后删掉临时存储的原方法

  return res;
}

var name = '大明';

var obj = {
  name: '小明',
  func: function(){
    console.log(this.name)
  }
}

obj.func.call(window)


// Function.prototype.myCall = funtion(...args){
//   if(typeof this !== 'function'){
//     throw new Error('is not a function')
//   }

//   const realThis = args[0] || window;
//   const realArgs = args.slice(1);

//   const funcSymbol = Symbol('func');
//   realThis[funcSymbol] = this

//   const res = realThis[funcSymbol](...realArgs)

//   delete realThis[funcSymbol]
//   return res

// }

var myName = "大飞哥";

var obj = {
  myName: "小小飞",
  func: function() {
    console.log(this.myName);
  }
}

var anotherFunc = obj.func;

anotherFunc()



var name = 'window';

var person1 = {
  name: 'person1',
  show1: function () {
    console.log(this.name)
  },
  show2: () => console.log(this.name),
  show3: function () {
    return function () {
      console.log(this.name)
    }
  },
  show4: function () {
    return () => console.log(this.name)
  }
}
var person2 = { name: 'person2' }

person1.show1()
person1.show1.call(person2)

person1.show2()
person1.show2.call(person2)

person1.show3()()
person1.show3().call(person2)
persong1.show3.call(person2)()

person1.show4()()
person1.show4().call(person2)
persong1.show4.call(person2)()