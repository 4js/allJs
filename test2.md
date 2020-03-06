### 关于this指向问题

### 谁调用 this指向谁

```
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

person1.show1() // person1 person1调用的show1方法
person1.show1.call(person2) //person2 call改变了this指向

```

### 箭头函数本没有this，类似于普通函数 去当前作用域查找this 若没找到 则逐级查找


```
person1.show2() // window
person1.show2.call(person2) // window  箭头函数的this无法通过bind，call，apply来直接修改
```

+ 1. 箭头函数不绑定this,箭头函数中的this相当于普通变量。
+ 2. 箭头函数的this寻值行为与普通变量相同，在作用域中逐级寻找。
+ 3. 箭头函数的this无法通过bind，call，apply来直接修改。
+ 4. 改变作用域中this的指向可以改变箭头函数的this
+ 5. eg. `function closure(){()=>{//code }}`，在此例中，我们通过改变封包环境`closure.bind(another)()`，来改变箭头函数this的指向。

```
person1.show3()() // window
// person1.show3()()类似于 var func = person1.show3();func(); func的this指向window 则func()打印window
person1.show3().call(person2) // person2
// person1.show3()返回一个普通函数 在全局执行 call修改了this指向 所以打印person2
person1.show3.call(person2)() // window
// person1.show3的this指向person1 但是call修改了指向person2 执行后返回一个函数 打印window
// var func = person1.show3.call(person2)
// func()
```


```
person1.show4()() // person1
// 箭头函数this指向上层function 如果没有则指向window
person1.show4().call(person2) // person1---箭头函数的this不可以修改
person1.show4.call(person2)() // person2
// 修改了箭头函数的外层function的this
```

