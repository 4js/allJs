/*
 * @Author: your name
 * @Date: 2020-08-25 19:49:17
 * @LastEditTime: 2020-08-25 20:24:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \allJs\practice.js
 */

/**
 * 防抖函数
 * 在短时间内多次触发同一个函数，只执行最后一次，或者只在开始时执行。
 */

function debounce(fn, delay){
  let timer = null
  return () => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(fn, delay)
  }
}

/**
 * 节流函数
 * 在一定时间内只执行一次
 * 使用场景：输入框联想，可以限定用户在输入时，只在两秒钟响应一次联想
 */


// 定时器版本
function throttle(fn, delay){
  let timer = null
  return () => {
    if (!timer) {
      timer = setTimeout(function(){
        fn()
        timer = null
      }, delay)
    }
  }
}

// 时间戳版本

function throttle(fn, delay){
  let time = 0
  return () => {
    let now = Date.now()
    if (now - time > delay) {
      time = now
      fn()
    }
  }
}

// 浅拷贝实现方法

function shallowClone(source){
  var target = {}
  for (var i in source) {
    if (source.hasOwnProperty(i)) {
      target[i] = source[i]
    }
  }
}

/**
 * 数组扁平化方法
 * i.递归遍历
 * ii.toString变成逗号字符串，再链接成数组
 *  */

const flatten = (arr) => arr.toString().split(',').map((item) => +item)
