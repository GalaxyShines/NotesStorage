# 快速上手

官方文档链接：https://cn.vuejs.org/guide/quick-start.html

## 创建Vue3应用

```bash
npm create vue@latest
```

这一指令将会安装并执行 create-vue

随后会弹出配置项选项，可以参考如下配置

```bash
✔ Project name: … <your-project-name>
✔ Add TypeScript? … No 
✔ Add JSX Support? … No 
✔ Add Vue Router for Single Page Application development? … No 
✔ Add Pinia for state management? … No 
✔ Add Vitest for Unit testing? … No 
✔ Add an End-to-End Testing Solution? … No 
✔ Add ESLint for code quality? … Yes
✔ Add Prettier for code formatting? … No
✔ Add Vue DevTools 7 extension for debugging? (experimental) … No

Scaffolding project in ./<your-project-name>...
Done.
```

项目创建完成后，使用如下方法启动开发服务器

```bash
cd <your-project-name>
npm install
npm run dev
```

==注意：生成的项目使用的是**选项式API**而不是**组合式API**==

将应用发布到生产环境时，请运行：

```bash
npm run build
```

会在 `./dist` 文件夹中为你的应用创建一个生产环境的构建版本。

<hr>

# 应用的创建

<hr>

# Vue基础

## reactive和ref

### reactive

reactive用于创建一个响应式对象，接收传入一个对象

```vue
<script setup>
	import {reactive} from 'vue'
    
    const a = reactive({
        name: 'users',
        sex: 'man'
    })
</script>
```

### ref

接收一个简单类型或对象，创建一个响应式对象

```vue
<script setup>
	import {ref} from 'vue'
    
    const a = ref(5)
    const b = ref({
        name: 'people',
        sex: 'man'
    })
</script>
```

<hr>

## computed计算属性

当一个变量发生变化时，如果我们希望进行相应的处理，则需要使用`vue`的计算属性（`computed`）

例如：实时显示一个列表的长度

```vue
<script setup>
	import {computed, ref} from 'vue'
    
    let lists = ref(['a', 'b'])
    
    const lens = computed(()=>{
        return lists.length
    })
    // 每隔3秒向数组中添加一个值
    setTimeout(()=>{
        lists.push('demo')
    }, 3000)
</script>

<template>
	<!-- 这里显示数组的长度 -->
	{{ lens }}
</template>
```

**注意**

1. 计算属性不应该有副作用（除了计算之外的其他操作都是副作用，比如进行异步操作等）
2. 计算属性不能被修改，只能是一个只读的（这里指的是使用了`computed`的`lens`变量不能被修改，`lens`只能是只读的）

<hr>

## watch的基础用法与深度监听

`watch`用于监听变量的变化，这个变量**必须是一个响应式变量**（使用`reactive`或`ref`创建）

基础用法：

```vue
<script setup>
    import {ref, watch} from 'vue'
    
    let demo = ref(0)
    watch(demo, (newVal, oldVal) =>{  // newVal为变化后的新值，oldVal为变化前的旧值
        console.log('数值变化了：', oldVal, newVal)
    })
</script>
```

但是，当响应式参数中是一个`Object`时，并且我们希望监听其中一个值的变化时，`watch`的基础用法无法实现对内容的监听，比如下面这种情况

```vue
<script setup>
	import {reactive, watch} from 'vue'
    
    let demo = reactive({
        param1: 'hello',
        param2: 'world'
    })
    // 下面这种写法不会起作用
    watch(demo, (newVal, oldVal)=>{
        console.log('内容变化了')
    })
</script>
```

对于上述情况，我们需要使用**深度监听**，写法如下

```vue
<script setup>
	import {reactive, watch} from 'vue'
    
    let demo = reactive({
        param1: 'hello',
        param2: 'world'
    })
	// 这种写法会生效,能够监听param1的数值变化
    watch(
        ()=>demo.param1,
		(newVal, oldVal)=>{
        console.log('内容变化了')
    })
</script>
```

<hr>

## 组件传参 - 父传子 - DefineProps

```vue
<!-- 父组件 -->
<script setup>
	import ChildComp from './ChildComp.vue'
</script>

<template>
	<ChildComp msg="hello"></ChildComp>
</template>
```

```vue
<!--子组件ChildComp-->
<script setup>
	const msg = defineProps({
        message: String
    })
</script>
```

深入补充：defineProps的校验

```js
defineProps({
  // 基础类型检查
  // （给出 `null` 和 `undefined` 值则会跳过任何类型检查）
  propA: Number,
  // 多种可能的类型
  propB: [String, Number],
  // 必传，且为 String 类型
  propC: {
    type: String,
    required: true
  },
  // 必传但可为 null 的字符串
  propD: {
    type: [String, null],
    required: true
  },
  // Number 类型的默认值
  propE: {
    type: Number,
    default: 100
  },
  // 对象类型的默认值
  propF: {
    type: Object,
    // 对象或数组的默认值
    // 必须从一个工厂函数返回。
    // 该函数接收组件所接收到的原始 prop 作为参数。
    default(rawProps) {
      return { message: 'hello' }
    }
  },
  // 自定义类型校验函数
  // 在 3.4+ 中完整的 props 作为第二个参数传入
  propG: {
    validator(value, props) {
      // The value must match one of these strings
      return ['success', 'warning', 'danger'].includes(value)
    }
  },
  // 函数类型的默认值
  propH: {
    type: Function,
    // 不像对象或数组的默认，这不是一个
    // 工厂函数。这会是一个用来作为默认值的函数
    default() {
      return 'Default function'
    }
  }
})
```

<hr>

## 组件传参 - 子传父 - DefineEmits

```vue
<!-- 父组件 -->
<script setup>
	import Child from 'vue'
    
    const getMessage  = (msg)=>{
        console.log(msg)
    }
</script>

<template>
	<!-- 绑定子组件事件 -->
	<Child @get-message="getMessage"></Child>
</template>
```

```vue
<!-- 子组件Child -->
<script setup>
	const emit = defineEmits(['get-message'])
    const sendMsg = ()=>{
        // 触发自定义事件，传递给父组件
        emit('get-message', 'this is son message')
    }
</script>

<template>
	<button @click="sendMsg">
        触发自定义事件
    </button>
</template>
```



<hr>

## 组合式API - 模版引用

**概念：**

通过`ref`标识获取真实的`dom`对象或实例对象

 **示例代码：**

```vue
<!-- 父组件 -->
<script setup>
	import {ref} from 'vue'
    import childComp from './childComp'
    // 1. 调用ref函数 -> ref对象
    const demoref = ref(null)
    
    // 组件挂载完毕后才能进行获取
    
    // 这里引用了使用的组件的实例对象
    const child = ref(null)
    
    // 必须在子组件中使用defineExpose才能在父组件访问子组件的变量（方法）
    console.log(child.text)
</script>

<template>
	<h1 ref="demoref">
        我是一个标签h1
    </h1>
	<childComp ref="childs"></childComp>
</template>
```

```vue
<!-- 子组件childComp -->
<script setup>
	const text = '这是一个文本'
    
    // 使用defineExpose将text暴露给父组件
    defineExpose({
        text
    })
</script>

<template>
	<p>
        这是文本
    </p>
</template>
```

**小结：**

1. 获取模版引用的时机是什么？

   答：在组件挂载完毕

2. defineExpose编译宏的作用是什么？

   答：将子组件的方法/变量暴露给父组件

<hr>

# 深入组件

## 插槽

官方文档：https://cn.vuejs.org/guide/components/slots.html

### 插槽内容与出口

作用：指定组件使用时**传入的模板片段**在组件中哪个位置渲染

下面举例在组件中传入一个模板片段的场景

```html
<CustomComponents>
    <p>
        Hello World
    </p>
</CustomComponents>
```

上述代码中，`CustomComponents`是一个自定义组件，在使用该组件时，我们传入了一个`<p>`标签。`CustomComponents`组件定义如下：

```html
<button>
    <slot></slot>  <!--插槽出口-->
</button>
```

渲染后结果如下：

```html
<button>
    <p>
        Hello World
    </p>
</button>
```

此时可以发现，我们在使用组件时传入的**模板片段**被渲染到组件定义时的`<slot>`位置，这就是插槽的作用

<hr>
### 插槽作用域

```vue
<!-- App.vue -->
<HelloWorld>
	2025
</HelloWorld>
```

```vue
<!-- HelloWorld.vue -->
<template>
	你好
	<slot></slot>
</template>
```

上述代码中，HelloWorld.vue定义了插槽的位置，App.vue中对插槽内容进行定义。

App.vue中定义的插槽内容无法访问到HelloWorld.vue中的数据

**插槽内容**可以访问到**父组件**的数据作用域，因为插槽内容本身是在父组件模板中定义的。

<hr>

### 默认内容

如果希望在使用组件时**不传入**模板片段，会显示默认内容，则可以使用如下方法定义组件：

```html
<button>
    <slot>
    	Empty!
    </slot>
</button>
```

这样，当使用组件时不传入模板片段，则会在按钮中显示`Empty!`内容

### 具名插槽

在实际开发中，一个组件通常会有多个插槽出口，对于这种情况，我们需要使用`具名插槽`。使用方法如下

```html
<!-- SayHi.vue -->
<div>
    Say <slot name="what"></slot> to <slot name="who"></slot>
</div>
```

当我们使用这个组件

```html
<SayHi>
	<template #what>
    	good morning
    </template>
    <template #who>
    	Jack
    </template>
</SayHi>
```

会被渲染成

```html
<div>
    Say good morning to Jack
</div>
```

上述示例中，`name`为每个插槽分配**唯一ID**，以确定每一处需要渲染的内容

**注意：没有提供name的插槽会隐式地命名为`"default"`**



要为具名插槽传入内容，我们需要使用一个含 `v-slot` 指令的 `<template>` 元素，并将目标插槽的名字传给该指令：

```html
<BaseLayout>
  <template v-slot:header>
    <!-- header 插槽的内容放这里 -->
  </template>
</BaseLayout>
```

`v-slot` 有对应的简写 `#`，因此 `<template v-slot:header>` 可以简写为 `<template #header>`。其意思就是“将这部分模板片段传入子组件的 header 插槽中”。

<hr>

### 条件插槽

有时你需要根据插槽是否存在来渲染某些内容。

你可以结合使用 [$slots](https://cn.vuejs.org/api/component-instance.html#slots) 属性与 [v-if](https://cn.vuejs.org/guide/essentials/conditional.html#v-if) 来实现。

在下面的示例中，我们定义了一个卡片组件，它拥有三个条件插槽：`header`、`footer` 和 `default`。 当 header、footer 或 default 存在时，我们希望包装它们以提供额外的样式：

```vue
<template>
  <div class="card">
    <div v-if="$slots.header" class="card-header">
      <slot name="header" />
    </div>
    
    <div v-if="$slots.default" class="card-content">
      <slot />
    </div>
    
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>
```

<hr>

### [动态插槽名](https://cn.vuejs.org/guide/components/slots.html#dynamic-slot-names)

[动态指令参数](https://cn.vuejs.org/guide/essentials/template-syntax.html#dynamic-arguments)在 `v-slot` 上也是有效的，即可以定义下面这样的动态插槽名：

template

```
<base-layout>
  <template v-slot:[dynamicSlotName]>
    ...
  </template>

  <!-- 缩写为 -->
  <template #[dynamicSlotName]>
    ...
  </template>
</base-layout>
```

注意这里的表达式和动态指令参数受相同的[语法限制](https://cn.vuejs.org/guide/essentials/template-syntax.html#dynamic-argument-syntax-constraints)。

<hr>

### 作用域插槽

作用：解决插槽的内容无法访问到子组件的状态。

#### 默认作用域插槽的使用：

```html
<!-- <MyComponent> 的模板 -->
<div>
  <slot :text="greetingMessage" :count="1"></slot>
</div>
```

```html
<MyComponent v-slot="slotProps">
  {{ slotProps.text }} {{ slotProps.count }}
</MyComponent>
```

我们也可以在 `v-slot` 中使用解构：

```html
<MyComponent v-slot="{ text, count }">
  {{ text }} {{ count }}
</MyComponent>
```



#### 具名作用域插槽的使用：

具名作用域插槽的工作方式也是类似的，插槽 props 可以作为 `v-slot` 指令的值被访问到：`v-slot:name="slotProps"`。当使用缩写时是这样

```html
<MyComponent>
  <template #header="headerProps">
    {{ headerProps }}
  </template>

  <template #default="defaultProps">
    {{ defaultProps }}
  </template>

  <template #footer="footerProps">
    {{ footerProps }}
  </template>
</MyComponent>
```

向具名插槽中传入 props：

```html
<slot name="header" message="hello"></slot>
```



#### 注意事项

注意插槽上的 `name` 是一个 Vue 特别保留的 attribute，不会作为 props 传递给插槽。因此最终 `headerProps` 的结果是 `{ message: 'hello' }`。

如果你同时使用了具名插槽与默认插槽，则需要为默认插槽使用显式的 `<template>` 标签。尝试直接为组件添加 `v-slot` 指令将导致编译错误。这是为了避免因默认插槽的 props 的作用域而困惑。举例：

```html
<!-- <MyComponent> template -->
<div>
  <slot :message="hello"></slot>
  <slot name="footer" />
</div>
```

```html
<!-- 该模板无法编译 -->
<MyComponent v-slot="{ message }">
  <p>{{ message }}</p>
  <template #footer>
    <!-- message 属于默认插槽，此处不可用 -->
    <p>{{ message }}</p>
  </template>
</MyComponent>
```

为默认插槽使用显式的 `<template>` 标签有助于更清晰地指出 `message` 属性在其他插槽中不可用：

```html
<MyComponent>
  <!-- 使用显式的默认插槽 -->
  <template #default="{ message }">
    <p>{{ message }}</p>
  </template>

  <template #footer>
    <p>Here's some contact info</p>
  </template>
</MyComponent>
```



### 无渲染组件

一些组件可能只包括了逻辑而不需要自己渲染内容，视图输出通过作用域插槽全权交给了消费者组件。我们将这种类型的组件称为**无渲染组件**。

这里有一个无渲染组件的例子，一个封装了追踪当前鼠标位置逻辑的组件：

```html
<MouseTracker v-slot="{ x, y }">
  Mouse is at: {{ x }}, {{ y }}
</MouseTracker>
```



## 依赖注入（Provide和Inject）

官方文档：https://cn.vuejs.org/guide/components/provide-inject.html

**作用和场景**

顶层组件向任意的底层组件（子组件）传递数据和方法，实现跨层组件通信

**跨层传递普通数据**

1. 顶层组件通过`provide`函数向底层组件（子组件）提供数据
2. 底层组件（子组件）通过`inject`函数获取数据

**代码语法**

```js
// 顶层组件
provide('key', 这里是顶层组件中的数据)
// 底层组件
const message = inject('key')
```

实际使用

```vue
<!-- 父组件 -->
<script setup>
    import {ref, provide} from 'vue'
	const data = ref(0)
    provide('demo-data', data)
</script>

<!-- 子组件 -->
<script setup>
    import {inject} from 'vue'
    const parentData = inject('demo-data')
</script>
```

> 需求：在子组件中点击按钮修改父组件中的数据？

> 解决方法：父组件向子组件传递一个方法（函数），子组件中调用方法即可

```vue
<!-- 父组件 -->
<script setup>
	import {ref, provide} from 'vue'

    const count = ref(0)
    const setCount = () => {
        count.value++
    }
    
    provide('setCount', setCount)
</script>

<!-- 子组件 -->
<script setup>
	import {inject} from 'vue'
    
    const setCount = inject('setCount')
    setCount()
</script>
```



# Pinia

## Pinia引入

### 安装Pinia

在使用`npm create vue@latest`命令时，如果没有选择引入Pinia，则需要执行如下命令安装Pinia

```bash
npm install pinia
```



### 创建Pinia实例

在 `src/main.js` 或 `src/main.ts`文件中进行如下配置：

```js
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'  // 不要忘记导入！

const app = createApp(App)

const pinia = createPinia()  // 创建 Pinia 实例
app.use(pinia)  // 注册 Pinia 实例

app.mount('#app')
```

<hr>

## 创建Store以及使用

### store的创建

在`src/stores`中创建一个文件，比如`counter.js`，并定义一个Store

```js
// src/stores/counter.js
import { defineStore } from 'pinia'  // 不要忘记导入！

export const useCounterStore = defineStore('counter', {  // 这里的 'counter' 是store的id，必须传入
  id: 'counter',  // 如果不传入上面一行的'counter'参数，则这里需要定义id，否则不需要写这一行
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  },
  getters: {
    doubledCount: (state) => state.count * 2
  },
})
```

### store参数说明

- id：用于管理不同的Store，是唯一标识符
- state：用于定义 store 的状态，它是一个包含数据的对象。这个状态可以被 Vue 组件访问和修改。状态通常是用来存储应用中的数据，如用户信息、计数器数值、列表数据等。
- getters：用于定义基于 store 中的 `state` 派生出来的计算值，**类似于 Vue 3 的计算属性**。`getters` 可以用于处理、转换或计算 `state` 中的数据，避免在多个组件中重复代码。
- actions：定义可以修改 `state` 的方法，并且可以包含异步操作（例如发起 HTTP 请求）。它们是改变 store 状态的唯一方式。在 `actions` 中，你可以访问和修改 `state`、调用 `getters`，并执行任何逻辑。

### 如何使用store

1. state的使用：

   ```js
   import { useCounterStore } from 'src/stores/counter.js'
   
   const counter = useCounterStore()
   console.log(counter.count)  // 获取状态值
   ```

2. getters的使用：

   ```js
   import { useCounterStore } from 'src/stores/counter.js'
   
   const counter = useCounterStore()
   console.log(counter.doubledCount)  // 计算值，获取 count * 2
   ```

3. actions的使用：

   ```js
   import { useCounterStore } from 'src/stores/counter.js'
   
   const counter = useCounterStore()
   counter.increment()  // 调用 action 修改 state
   counter.fetchData()  // 调用异步 action
   ```

   

