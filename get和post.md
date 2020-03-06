+ HTTP 协议 未规定 GET 和POST的长度限制
+ GET的最大长度显示是因为 浏览器和 web服务器限制了 URI的长度
+ 不同的浏览器和WEB服务器，限制的最大长度不一样
+ 要支持IE，则最大长度为2083byte，若只支持Chrome，则最大长度 8182byte

### get和post在缓存方面的区别：

> get请求类似于查找的过程，用户获取数据，可以不用每次都与数据库连接，所以可以使用缓存。
> post不同，post做的一般是修改和删除的工作，所以必须与数据库交互，所以不能使用缓存。因此get请求适合于请求缓存。



get和post的区别
1、get和post在HTTP中都代表着请求数据，其中get请求相对来说更简单、快速，效率高些
2、get相对post安全性低
3、get有缓存，post没有
4、get体积小，post可以无限大
5、get的url参数可见，post不可见
6、get只接受ASCII字符的参数数据类型，post没有限制
7、get请求参数会保留历史记录，post中参数不会保留
8、get会被浏览器主动catch，post不会，需要手动设置
9、get在浏览器回退时无害，post会再次提交请求
