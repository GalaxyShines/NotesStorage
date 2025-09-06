@[TOC](VueNote)
# 一、Vue基础知识
## 1、模板语法
### 1.1 文本插值：
数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值：
```html
<span>Message:{{msg}}</span>
```
`Mustache` 标签将会被替代为对应数据对象上 `msg` `property` 的值。无论何时，绑定的数据对象上 `msg` `property` 发生了改变，插值处的内容都会更新。

通过使用`v-once`指令，从而实现文本插值的内容不会更新。
```html
<span v-once>这个Message不会改变:{{msg}}</span>
```
### 1.2 缩写
`v-bind`缩写：
```html
<!- - 完整语法 - - >
<a v-bind:href="url">...</a>

<!- - 缩写 - - >
<a :href="url">...</a>

<!- - 动态参数的缩写 (2.6.0+) - - >
<a :[key]="url"> ... </a>
```
`v-on`缩写：
```html
<!- - 完整语法 - - >
<a v-on:click="doSomething">...</a>

<!- - 缩写 - - >
<a @click="doSomething">...</a>

<!- - 动态参数的缩写 (2.6.0+) - - >
<a @[event]="doSomething"> ... </a>
```
## 2、计算属性和侦听器
### 2.1 计算属性
基础例子：
```html
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```
```javascript
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
})
```
结果：
> Original message: "Hello"
> 
> Computed reversed message: "olleH"

### 2.2 侦听器
介绍：
>虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。这就是为什么 `Vue` 通过 `watch` 选项提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。

举个例子：
```javascript
var demo = new Vue({
    el:"#app",
    data: {
        
    },
    watch: {
        // 如果 `question` 发生改变，这个函数就会运行
        question: function (newQuestion, oldQuestion) {
          this.answer = 'Waiting for you to stop typing...'
          this.debouncedGetAnswer()
        }
    }
});
```