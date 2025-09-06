# 全局变量的设置与使用介绍

众所周知，Vue.prototype.xxxx可以设置全局变量/函数

设置变量：

Q:如何通过this.$url获取请求地址？

A:

```javascript
Vue.prototype.$url = 'http://127.0.0.1'
```



Q:如何通过this.\$url.baidu获取www.baidu.com，通过this.\$url.iqiyi获取www.iqiyi.com

A:

```javascript
Vue.prototype.$url = {
    baidu: 'https://www.baidu.com',
    iqiyi: 'https://www.iqiyi.com'
}
```



Q:如何通过this.$hello实现console.log('hello')

A:

```javascript
Vue.prototype.$hello = function () {
    console.log('hello')
}
// 高级用法,实现传参
Vue.prototype.$hello = function (msg) {
    console.log(msg)
}
//传参的使用示例
this.$hello('hello')
```



Q:如何实现this.\$hello.one()输出hello，this.\$hello.two()输出hello2

A:

```javascript
Vue.prototype.$hello = {
	one: function () {
        console.log('hello')
    },
    two: function () {
        console.log('hello2')
    }
}
```

