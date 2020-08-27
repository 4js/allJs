/*
 * @Author: your name
 * @Date: 2020-08-26 14:21:46
 * @LastEditTime: 2020-08-27 14:33:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \allJs\css.js
 */
// css面试题 flex属性值

/**
 * flex: flex-grow flex-shrink flex-basis
 * flex-grow: 一个数字，相对其他灵活的项目扩展的量
 * flex-shrink: 一个数字，相对于其他灵活的项目收缩的量
 * flex-basis: 项目的长度，auto|initial|inherit|none
 */

/**
 * css background
 * 
 * background: background-color background-image background-repeat background-attachment background-position
 * 示例：body { background: #ffffff url('img_tree.png') no-repeat right top; }
 */

/**
 * css3 background新增属性
 * 
 * background-image: 背景图片 可以添加多张图片
 * background-size： 背景图片大小 指定的大小相对于父元素的宽度和高度的百分比的大小来/或者指定像素大小
 * background-origin：content-box|padding-box|border-box 什么区域内放置背景图像
 * background-clip: 背景裁剪属性是从指定位置开始绘制 content-box
 */


/**
 * css3边框属性 border
 * 
 * border-radius: 圆角
 * border-shadow: 阴影 h-shadow v-shadow blur spread color inset
 *    h-shadow 水平阴影的位置 允许负值
 *    v-shadow 垂直阴影的位置 允许负值
 *    blur 模糊距离
 *    spread 阴影的大小
 *    color 阴影的颜色
 *    inset 从外层的阴影改变阴影内侧阴影
 * border-image: 图片边框 source slice width outset repeat|initial|inherit
 */

/**
 * css3渐变 Gradients
 * 
 * 线性渐变（Linear Gradients）- 向下/向上/向左/向右/对角方向
 * 径向渐变（Radial Gradients）- 由它们的中心定义
 * 
 * background-image: linear-gradient(direction, color-stop1, color-stop2, ...);
 *    direction: 默认情况下，从上到下渐变
 * 示例：background-image: linear-gradient(to right, red , yellow);
 * 示例：background-image: linear-gradient(-90deg, red, yellow);
 */

/**
 * text-overflow: 文本超出显示方式
 *    ellipsis: 省略号
 *    clip: 修剪文本
 * 示例：文本3行显示，超出则省略号
 * 单行：
 * overflow: hidden;
 * text-overflow: ellipsis;
 * white-space: nowrap;
 * 多行：
 * overflow: hidden;
 * text-overflow: ellipsis;
 * white-space: nowrap;
 * display: -webkit-box;
 * -webkit-line-clamp: 2;
 * -webkit-box-orient: vertical;
 */
