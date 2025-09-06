# 插槽

## 一、插槽-默认插槽

### 基本语法：

用途：组件内需要定制的结构部分用slot标签占位

#### 使用示例

`HelloWorld.vue`
```vue
<template>
  <div>
    <p>请说</p><slot></slot>
  </div>
</template>
```
`App.vue`
```vue
<template>
  <HelloWorld>
    hello
  </HelloWorld>
</template>
<script>
  import {defineComponent} from "vue";
  import HelloWorld from "@/components/HelloWorld.vue";

  export default defineComponent({
    components: {HelloWorld}
  })
</script>
```
运行后网页显示结果为

> 请说hello

## 二、插槽-后备内容（默认值）

### 基本语法：

用途：封装组件时，可以为预留的<slot>插槽提供后背内容（默认内容）

#### 使用示例：

`HelloWorld.vue`
```vue
<template>
  <div>
    <p>请说</p><slot>我爱学习</slot>
  </div>
</template>
```

`App.vue`
```vue
<template>
  <HelloWorld>我爱睡觉</HelloWorld>
  <HelloWorld></HelloWorld>
</template>
```

运行后网页显示结果为：

> 请说我爱睡觉
>
> 请说我爱学习

## 三、插槽-具名插槽

### 基本语法：

`HelloWorld.vue`
```vue
<template>
  <div>
    <p>早上：</p><slot name="morning"></slot>
    <p>中午：</p><slot name="afternoon"></slot>
    <p>晚上：</p><slot name="evening"></slot>
  </div>
</template>
```
`App.vue`
```vue
<template>
  <div>
    <HelloWorld>
      <template v-slot:morning> <!-- 注意：v-slot:morning可以简写为#morning -->
        早上好
      </template>
      <template v-slot:afternoon>
        中午好
      </template>
      <template v-slot:evening>
        晚上好
      </template>
    </HelloWorld>
  </div>
</template>
```
> 值得一提的是，`v-slot:morning`可以简写为`#morning`

运行后网页显示结果为：

>早上：早上好
> 
> 中午：中午好
> 
> 晚上：晚上好



## 四、作用域插槽
