# 本回答由`CSDN`中的`C知道`AI模型提供，仅供参考

可以通过在父组件中使用`ref`属性来获取子组件的实例，然后通过实例的属性来获取子组件的data中的list列表内容。具体步骤如下：

1. 在父组件中使用`ref`属性给子组件命名，例如`<child-component ref="child"></child-component>`。

2. 在父组件的方法中使用`this.$refs.child`来获取子组件的实例。

3. 通过子组件实例的属性`$data`来获取子组件的data对象。

4. 从data对象中获取list列表内容。

下面是一个示例代码：
```vue

<template>
  <div>
    <child-component ref="child"></child-component>
    <button @click="getList">获取列表内容</button>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'

export default {
  components: {
    ChildComponent
  },
  methods: {
    getList() {
      const list = this.$refs.child.$data.list
      console.log(list)
    }
  }
}
</script>
```