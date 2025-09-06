# Vue中如何向父组件传递参数

这里举一个例子，实现子组件修改父组件中data数据中的`pageOf`的值为1：

## 方法1：

1. 在子组件中定义方法：
```javascript
methods: {
  test() {
    this.$parent.changePageOf(1)
  }
}
```
2. 在父组件中接收传递的参数并进行修改：
```javascript
<template>
  <div>
    <child-component @change-page-of="changePageOf"></child-component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageOf: 0
    }
  },
  methods: {
    changePageOf(page) {
      this.pageOf = page
    }
  }
}
</script>
```
> 经过上述步骤，我们就实现了子组件向父组件传递参数以及父组件接收参数的操作

## 方法2：
触发自定义事件
在子组件中通过this.$emit触发自定义事件，将参数传递给父组件，然后在父组件中监听自定义事件，修改data中的pageOf的值为1。

分步解析：

1. 在子组件中触发事件：
```javascript
methods: {
  test() {
    this.$emit('change-page-of', 1)
  }
}
```

2. 在父组件中接收事件：
```javascript
<template>
  <div>
    <child-component @change-page-of="changePageOf"></child-component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageOf: 0
    }
  },
  methods: {
    changePageOf(page) {
      this.pageOf = page
    }
  }
}
</script>
```

> 经过上述步骤，我们就实现了子组件向父组件传递参数以及父组件接收参数的操作

# 总结：

本文介绍了两种Vue子组件向父组件传递参数的方法，归纳如下：

- 方法一：
- - 1. 在子组件中定义函数，使用`this.$parent.方法名(参数)`语句包装需要传递的参数
- - 2. 在父组件中调用子组件的标签中，添加`@方法名="触发函数名"`的语段
- - 3. 在父组件的`methods`中，定义`触发函数名`函数，并对传递的参数进行处理

- 方法二：
- - 1. 在子组件`methods`中定义函数，使用`this.$emit('事件名', 参数)`语句触发事件
- - 2. 在父组件中调用子组件的标签中，添加`@方法名="触发函数名"`的语段
- - 3. 在父组件的`methods`中，定义`触发函数名`函数，并对传递的参数进行处理