![面试题1](https://user-gold-cdn.xitu.io/2019/8/1/16c498ca0de66530?imageView2/0/w/1280/h/960/format/webp/ignore-error/1 "面试题1")

![面试题2](https://juejin.im/post/5d59f2a451882549be53b170 "面试题2")

[最新面试题](https://juejin.im/post/6844904084374290446 "最新面试题")

### MVVM 模式，顾名思义即 Model-View-ViewModel 模式

+ Model 层: 对应数据层的域模型，它主要做域模型的同步。通过 Ajax/fetch 等 API 完成客户端和服务端业务 Model 的同步。在层间关系里，它主要用于抽象出 ViewModel 中视图的 Model。
+ View 层:作为视图模板存在，在 MVVM 里，整个 View 是一个动态模板。除了定义结构、布局外，它展示的是 ViewModel 层的数据和状态。View 层不负责处理状态，View 层做的是 数据绑定的声明、 指令的声明、 事件绑定的声明。
+ ViewModel 层:把 View 需要的层数据暴露，并对 View 层的 数据绑定声明、 指令声明、 事件绑定声明 负责，也就是处理 View 层的具体业务逻辑。ViewModel 底层会做好绑定属性的监听。当 ViewModel 中数据变化，View 层会得到更新；而当 View 中声明了数据的双向绑定（通常是表单元素），框架也会监听 View 层（表单）值的变化。一旦值变化，View 层绑定的 ViewModel 中的数据也会得到自动更新。

### 生命周期

+ beforeCreate：组件实例被创建之初，组件的属性生效之前
+ created：组件实例已经完全创建，属性也绑定，但真实dom还没有生成，$el还不可用
+ beforeMount：在挂载开始之前被调用：相关的 render 函数首次被调用
+ mounted：el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子
+ beforeUpdate：组件数据更新之前调用，发生在虚拟 DOM 打补丁之前
+ update：组件数据更新之后
+ activited：keep-alive专属，组件被激活时调用
+ deadctivated：keep-alive专属，组件被销毁时调用
+ beforeDestory：组件销毁前调用
+ destoryed：组件销毁后调用

### vue组件通信

+ props/$emit+v-on: 通过props将数据自上而下传递，而通过$emit和v-on来向上传递信息。
+ ref 与 $parent / $children 适用 父子组件通信
+ $emit / $on: 通过EventBus进行信息的发布与订阅
+ vuex: 是全局数据管理库，可以通过vuex管理全局的数据流
+ $attrs/$listeners: Vue2.4中加入的$attrs/$listeners可以进行跨级的组件通信
+ provide/inject：以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效，这成为了跨组件通信的基础

### computed和watch有什么区别?

**computed:**

+ computed是计算属性,也就是计算值,它更多用于计算值的场景
+ computed具有缓存性,computed的值在getter执行后是会缓存的，只有在它依赖的属性值改变之后，下一次获取+ computed的值时才会重新调用对应的getter来计算
+ computed适用于计算比较消耗性能的计算场景

**watch:**

+ 更多的是「观察」的作用,类似于某些数据的监听回调,用于观察props $emit或者本组件的值,当数据变化时来执行回调进行后续操作
+ 无缓存性，页面重新渲染时值不变化也会执行

### Vue是如何实现双向绑定的?

```
    // 遍历对象,对其属性值进行劫持
    Object.keys(data).forEach(function(key) {
        Object.defineProperty(data, key, {
            enumerable: true,
            configurable: true,
            get: function() {
                console.log('get');
            },
            set: function(newVal) {
                // 当属性值发生变化时我们可以进行额外操作
                console.log(`大家好,我系${newVal}`);
                say(newVal);
            },
        });
    });
```

### Proxy与Object.defineProperty的优劣对比?

Proxy的优势如下:

+ Proxy可以直接监听对象而非属性,还可以监听数组的变化
+ Proxy有多达13种拦截方法,不限于apply、ownKeys、deleteProperty、has等等是Object.defineProperty不具备的
+ Proxy返回的是一个新对象,我们可以只操作新的对象达到目的,而Object.defineProperty只能遍历对象属性直接修改
+ Proxy作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利

Object.defineProperty的优势:兼容性好,支持IE9

### 虚拟DOM的优劣如何?

+ 虚拟DOM可以经过diff找出最小差异,然后批量进行patch
+ 虚拟DOM的diff和patch都是在一次更新中自动进行的,我们无需手动操作DOM,极大提高开发效率
+ 跨平台: 虚拟DOM本质上是JavaScript对象,而DOM与平台强相关,相比之下虚拟DOM可以进行更方便地跨平台操作,例如服务器渲染、移动端开发等等

### vue怎么进行虚拟DOM的diff检测差异的

Vue的设计是选择中等细粒度的方案,在组件级别进行push侦测的方式,也就是那套响应式系统,通常我们会第一时间侦测到发生变化的组件,然后在组件内部进行Virtual Dom Diff获取更加具体的差异,而Virtual Dom Diff则是pull操作,Vue是push+pull结合的方式进行变化侦测的.

### vue异步更新队列

Vue 在更新 DOM 时是异步执行的。只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。
如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。Vue 在内部对异步队列尝试使用原生的 Promise.then、MutationObserver 和 setImmediate，如果执行环境不支持，则会采用 setTimeout(fn, 0) 代替。

### 动态组件和异步组件

你会注意到，如果你选择了一篇文章，切换到 Archive 标签，然后再切换回 Posts，是不会继续展示你之前选择的文章的。这是因为你每次切换新标签的时候，**Vue 都创建了一个新的 currentTabComponent 实例。**

### 在什么阶段才能访问操作DOM？

在钩子函数 mounted 被调用前，Vue 已经将编译好的模板挂载到页面上，所以在 mounted 中可以访问操作 DOM。vue 具体的生命周期示意图可以参见如下，理解了整个生命周期各个阶段的操作，关于生命周期相关的面试题就难不倒你了

### 父组件可以监听到子组件的生命周期吗？

* @mounted='doSomething'
* <Child @hook:mounted="doSomething" ></Child>

### keep-alive 

+ 一般结合路由和动态组件一起使用，用于缓存组件；
+ 提供 include 和 exclude 属性，两者都支持字符串或正则表达式， include 表示只有名称匹配的组件会被缓存，exclude 表示任何名称匹配的组件都不会被缓存 ，其中 exclude 的优先级比 include 高；
+ 对应两个钩子函数 activated 和 deactivated ，当组件被激活时，触发钩子函数 activated，当组件被移除时，触发钩子函数 deactivated。

### data 为什么是一个函数？

因为组件是用来复用的，且 JS 里对象是引用关系，如果组件中 data 是一个对象，那么这样作用域没有隔离，子组件中的 data 属性值会相互影响，如果组件中 data 选项是一个函数，那么每个实例可以维护一份被返回对象的独立的拷贝，组件实例之间的 data 属性值不会互相影响；而 new Vue 的实例，是不会被复用的，因此不存在引用对象的问题。

### vuex

主要包括以下几个模块：

+ State：定义了应用状态的数据结构，可以在这里设置默认的初始状态。
+ Getter：允许组件从 Store 中获取数据，mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性。
+ Mutation：是唯一更改 store 中状态的方法，且必须是同步函数。
+ Action：用于提交 mutation，而不是直接变更状态，可以包含任意异步操作。
+ Module：允许将单一的 Store 拆分为多个 store 且同时保存在单一的状态树中。

### vue-router 路由模式

+ hash:  使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器；
+ history :  依赖 HTML5 History API 和服务器配置。具体可以查看 HTML5 History 模式；
+ abstract :  支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式.

###  vue-router 中常用的 hash 和 history 路由模式实现原理吗？

**hash  路由模式的实现主要是基于下面几个特性：**

location.hash 的值就是 URL 中 # 后面的内容

URL 中 hash 值只是客户端的一种状态，也就是说当向服务器端发出请求时，hash 部分不会被发送；hash 值的改变，都会在浏览器的访问历史中增加一个记录。因此我们能通过浏览器的回退、前进按钮控制hash 的切换；可以通过 a 标签，并设置 href 属性，当用户点击这个标签后，URL 的 hash 值会发生改变；或者使用  JavaScript 来对 loaction.hash 进行赋值，改变 URL 的 hash 值；我们可以使用 hashchange 事件来监听 hash 值的变化，从而对页面进行跳转（渲染）。

**history 模式的实现原理**

HTML5 提供了 History API 来实现 URL 的变化。其中做最主要的 API 有以下两个：history.pushState() 和 history.repalceState()。这两个 API 可以在不进行刷新的情况下，操作浏览器的历史纪录。唯一不同的是，前者是新增一个历史记录，后者是直接替换当前的历史记录，如下所示：

+ pushState 和 repalceState 两个 API 来操作实现 URL 的变化 ；
+ 我们可以使用 popstate  事件来监听 url 的变化，从而对页面进行跳转（渲染）；
+ history.pushState() 或 history.replaceState() 不会触发 popstate 事件，这时我们需要手动触发页面跳转（渲染）。
