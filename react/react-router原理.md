react-router等前端路由的原理大致相同，可以实现无刷新的条件下切换显示不同的页面。路由的本质就是页面的URL发生改变时，页面的显示结果可以根据URL的变化而变化，但是页面不会刷新。通过前端路由可以实现单页(SPA)应用,本文首先从前端路由的原理出发，详细介绍了前端路由原理的变迁。接着从react-router4.0的源码出发，深入理解react-router4.0是如何实现前端路由的。

> 通过Hash实现前端路由
> 通过H5的history实现前端路由
> React-router4.0的使用
> React-router4.0源码分析

##  通过Hash实现前端路由

### 1、hash的原理

  早期的前端路由是通过hash来实现的：

***改变url的hash值是不会刷新页面的。***

因此可以通过hash来实现前端路由，从而实现无刷新的效果。hash属性位于location对象中，在当前页面中，可以通过：

```
window.location.hash='edit'
```

来实现改变当前url的hash值。执行上述的hash赋值后，页面的url发生改变。

赋值前：http://localhost:3000 赋值后：http://localhost:3000/#edit

在url中多了以#结尾的hash值，但是赋值前后虽然页面的hash值改变导致页面完整的url发生了改变，但是页面是不会刷新的。此外，还有一个名为hashchange的事件，可以监听hash的变化,我们可以通过下面两种方式来监听hash的变化：

```
window.onhashchange=function(event){
   console.log(event);
}
window.addEventListener('hashchange',function(event){
   console.log(event);
})
```

当hash值改变时，输出一个HashChangeEvent。该HashChangeEvent的具体值为：

```
{isTrusted: true, oldURL: "http://localhost:3000/", newURL:   "http://localhost:3000/#teg", type: "hashchange".....}
```

  有了监听事件，且改变hash页面不刷新，这样我们就可以在监听事件的回调函数中，执行我们展示和隐藏不同UI显示的功能，从而实现前端路由。

此外，除了可以通过window.location.hash来改变当前页面的hash值外，还可以通过html的a标签来实现：

```
<a href="#edit">edit</a>
```
