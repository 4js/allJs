### http2的新特性：

1.多路复用

在http1中一个tcp连接只能发送一个请求，且前面的请求会阻塞后面的请求，为了支持并发，所以只能建立多个tcp连接，但是新建tcp连接非常消耗性能，存在启动慢等问题。
所以在http2中，解决了线头阻塞和多个tcp连接的问题，实现了一个tcp链接发送多个请求。

http2建立一个tcp链接，一个链接上可以传输多个流（双向字节流，可以承载一个或者多个消息），将消息分成一个或者多个帧在流里面传输，帧传输过去后再重组，形成一个完整的请求或响应。

2.二进制传输

http1是以文本格式传输数据，而http2采用二进制的形式，并且分两帧，一个headers(首部)一个data（消息负载）

3.头部压缩

http1以文本格式传输数据，每次首部数据就得占据几百字节的开销，http2是客服端和服务端共同维护一套字典，以索引的形式来传输，

4.服务器端推送

识别客户端的依赖文件自动传输


### HTTP协议的主要特点可概括如下：

1.支持客户/服务器模式。

2.简单快速：客户向服务器请求服务时，只需传送请求方法和路径。请求方法常用的有GET、HEAD、POST。每种方法规定了客户与服务器联系的类型不同。由于HTTP协议简单，使得HTTP服务器的程序规模小，因而通信速度很快。

3.灵活：HTTP允许传输任意类型的数据对象。正在传输的类型由Content-Type（Content-Type是HTTP包中用来表示内容类型的标识）加以标记。

4.无连接：无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间。

5.无状态：HTTP协议是无状态协议。无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。

### http状态码

### 301 Moved Permanently

永久重定向。说明请求的资源已经被移动到了由 Location 头部指定的 url 上，是固定的不会再改变。搜索引擎会根据该响应修正。

### 302 Found

临时重定向。重定向状态码表明请求的资源被暂时的移动到了由 Location 头部指定的 URL 上。浏览器会重定向到这个URL，但是搜索引擎不会对该资源的链接进行更新。

### 304 Not Modified

说明无需再次传输请求的内容，也就是说可以使用缓存的内容。这通常是在一些安全的方法（safe），例如GET 或HEAD, 或在请求中附带了头部信息： If-None-Match 或If-Modified-Since。
如果返回 200，响应会带有头部 Cache-Control, Content-Location, Date, ETag, Expires，和 Vary.

### 404 Not Found

说明服务器端无法找到所请求的资源。返回该响应的链接通常称为坏链（broken link）或死链（dead link），它们会导向链接出错处理
404 不能说明请求的资源是临时还是永久丢失。如果服务器知道该资源是永久丢失，那么应该返回 410 (Gone) 而不是 404 。
