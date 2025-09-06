# JavaScript笔记

## 事件冒泡

### [使用 stopPropagation() 修复问题](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Scripting/Event_bubbling#使用_stoppropagation_修复问题)

正如我们在上一节所看到的，事件冒泡有时会产生问题，但有一种方法可以防止这些问题。[`Event`](https://developer.mozilla.org/zh-CN/docs/Web/API/Event) 对象有一个可用的函数，叫做 [`stopPropagation()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/stopPropagation)，当在一个事件处理器中调用时，可以防止事件向任何其他元素传递。

```js
video.addEventListener("click", (event) => {
  event.stopPropagation();
  video.play();
});
```



### [事件捕获](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Scripting/Event_bubbling#事件捕获)

事件传播的另一种形式是*事件捕获*。这就像事件冒泡，但顺序是相反的：事件不是先在最内层的目标元素上发生，然后在连续较少的嵌套元素上发生，而是先在*最小嵌套*元素上发生，然后在连续更多的嵌套元素上发生，直到达到目标。

事件捕获默认是禁用的，你需要在 `addEventListener()` 的 `capture` 选项中启用它。

```js
document.body.addEventListener("click", handleClick, { capture: true });
container.addEventListener("click", handleClick, { capture: true });
```





## 原型和原型链

![](http://112.124.30.120/MarkDownAssets/prototype.png)

1. 原型：**函数**都有 prototype 属性，称之为**原型**，也称之为原型对象
   - 原型可以放一些属性和方法，共享给实例对象使用
   - 原型可以做继承
2. 原型链：**对象**都有`__proto__`属性，这个属性指向他的原型对象，原型对象也是对象，也有`__proto__`属性，指向原型对象的原型对象，这样一层一层形成的**链式结构称为原型链**，最顶层找不到则返回**null**
