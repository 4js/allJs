## HTML5新特性

### 1.1 新标签

``article`` ``aside`` ``header`` ``footer`` ``nav`` ``dialog`` ``section``

### 1.2 canvas

<canvas> 标签只是图形容器，您必须使用脚本来绘制图形。

```
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.fillStyle="#FF0000";
ctx.fillRect(0,0,150,75);
```

### 1.3 元素拖拽

为了使元素可拖动，把 draggable 属性设置为 true ：

### 1.4 地理定位

```
var x=document.getElementById("demo");
function getLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
  }else{
    x.innerHTML="该浏览器不支持获取地理位置。";
  }
}
function showPosition(position){
  x.innerHTML="Latitude: "+ position.coords.latitude + "<br>Longitude: "+ position.coords.longitude;
}
```

### 1.5 audio && video

```
<video width="320"height="240" controls>
  <sourcesrc="movie.mp4"type="video/mp4">
  <sourcesrc="movie.ogg"type="video/ogg">
  您的浏览器不支持Video标签。
</video>
```

### 1.6 多个input类型

color、date、datetime、datetime-local、email、month、number、range、search、tel、time、url、week

### 1.7 多个表单新属性

**<form>新属性：**

autocomplete、novalidate

**<input>新属性：**

autocomplete、autofocus、form、formaction、formenctype、formmethod、formnovalidate、formtarget、height and width、list、min and max、multiple、pattern (regexp)、placeholder、required、step
 
### 1.8 web存储

sessionStorage && localStorage && Indexdb

### 1.9 webSocket

WebSocket是HTML5开始提供的一种在单个 TCP 连接上进行全双工通讯的协议。在WebSocket API中，浏览器和服务器只需要做一个握手的动作，然后，浏览器和服务器之间就形成了一条快速通道。两者之间就直接可以数据互相传送。 浏览器通过 JavaScript 向服务器发出建立 WebSocket 连接的请求，连接建立以后，客户端和服务器端就可以通过 TCP 连接直接交换数据。当你获取 Web Socket 连接后，你可以通过 send()  方法来向服务器发送数据，并通过 onmessage  事件来接收服务器返回的数据。以下 API 用于创建 WebSocket 对象
 
## 2 CSS3新特性

### 2.1 选择器

:visited :hover :focus :first-child :nth-child(n) 

### 2.2 边框

border-radius box-shadow  border-image

### 2.3 背景

+ background-clip	规定背景的绘制区域。	3
+ background-origin	规定背景图片的定位区域。	3
+ background-size	规定背景图片的尺寸。	3

### 2.4 渐变

+ 线性渐变 background: linear-gradient(direction, color-stop1, color-stop2,...);
+ 径向渐变 background: radial-gradient(center, shape size, start-color,...,last-color);

### 2.5 转换和变形

+ transform:适用于2D或3D转换的元素	
+ transform-origin	允许您更改转化元素位置

平移``translate`` 放大缩小``scale`` 旋转``rotate`` 倾斜``skew``

### 2.6 过渡

+ transition	简写属性，用于在一个属性中设置四个过渡属性。	3
+ transition-property	规定应用过渡的 CSS 属性的名称。	3
+ transition-duration	定义过渡效果花费的时间。默认是 0。	3
+ transition-timing-function	规定过渡效果的时间曲线。默认是 "ease"。	3
+ transition-delay	规定过渡效果何时开始。默认是 0。	3

### 2.7 动画

```
@keyframes myfirst {
  0%{background: red;}
  25%{background: yellow;}
  50%{background: blue;}
  100%{background: green;}
}
```

### 2.8 媒体查询

```@media(min-width:800px)and(max-width:1200px)and(orientation:portrait){...}```

### 2.9 伸缩布局

+ display	指定 HTML 元素盒子类型。
+ flex-direction	指定了弹性容器中子元素的排列方式
+ justify-content	设置弹性盒子元素在主轴（横轴）方向上的对齐方式。
+ align-items	设置弹性盒子元素在侧轴（纵轴）方向上的对齐方式。
+ flex-wrap	设置弹性盒子的子元素超出父容器时是否换行。
+ align-content	修改 flex-wrap 属性的行为，类似 align-items, 但不是设置子元素对齐，而是设置行对齐
+ flex-flow	flex-direction 和 flex-wrap 的简写
+ order	设置弹性盒子的子元素排列顺序。
+ align-self	在弹性子元素上使用。覆盖容器的 align-items 属性。
+ flex	设置弹性盒子的子元素如何分配空间。
 
### 2.10 盒模型

+ resize：none | both | horizontal | vertical | inherit
+ box-sizing: content-box | border-box | inherit
+ outline:outline-color outline-style outline-width outine-offset

### 2.11 多列属性

column-count	指定元素应该被分割的列数。
column-fill  指定如何填充列
column-gap	指定列与列之间的间隙
column-rule	所有 column-rule-* 属性的简写
column-rule-color	指定两列间边框的颜色
column-rule-style	指定两列间边框的样式
column-rule-width	指定两列间边框的厚度
column-span	指定元素要跨越多少列
column-width	指定列的宽度
columns	设置 column-width 和 column-count 的简写
