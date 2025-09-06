# Vuex

## 一、vuex概述

### 1.是什么：

vuex是一个vue的**状态管理工具**，状态就是数据

Vuex是一个插件，可以帮我们管理Vue通用的数据（多组件共享的数据）      例如：购物车数据    个人信息数据

### 2.场景：

1. 某个状态在**很多个组件**来使用（个人信息）
2. 多个组件**共同维护**一份数据（购物车）

### 3.优势：

1. 共同维护一份数据，**数据集中化管理**
2. **响应式变化**
3. 操作简洁（vuex提供了一些辅助函数）

## 二、构建vuex [ 多组件数据共享 ] 环境

## 三、

## 四、核心概念 - state状态

### 提供数据：

State提供唯一的公共数据源，所有共享的数据都要统一放到Store中的State中存储。

### 使用数据：

1. 通过store直接访问

   - this.$store
   - import 导入 store

   ```javascript
   // 模版中
   {{ $store.state.xxx }}
   // 组件逻辑中
   this.$store.state.xxx
   // JS模块中
   store.state.xxx
   ```

2. 通过辅助函数（简化）

   mapState是辅助函数，帮助我们把store中的数据自动映射到组件的计算属性中

   - 导入mapState

     ```javascript
     import { mapState } from 'vuex'
     ```

   - 数组方式引入state

     ```javascript
     mapState(['count'])
     ```

   - 展开运算符映射

     ```javascript
     computed: {
       ...mapState(['count'])
     }
     ```

## 五、核心概念 - mutations

**目标：明确vuex同样遵循单向数据流**，组件中不能直接修改仓库中的数据

```javascript
this.$store.state.count++   // 错误写法
```

>如果希望vue能够检测此类错误写法，可以在const store = new Vuex.Store({中设置strict:true    但是需要注意，在上线时需要关闭严格模式，严格模式的开启会影响性能

**目标：掌握 mutations 的操作流程**，来修改state数据。（state数据的修改只能通过mutations）

1. 定义 mutations 对象，对象中存放修改state的方法

   ```javascript
   const store = new Vuex.Store({
       state: {
           count: 0
       }
       mutations: {
       	addCount (state) {
       		state.count += 1
   		}
   	}
   })
   ```

2. 组件中提交调用mutations

   ```javascript
   this.$store.commit('addCount')
   ```

mutation中，所有的mutation函数，第一个参数都是state

**目标：掌握mutations传参语法**

提交mutation是可以传递参数的`this.$store.commit('xxx',参数)`

1. 提供mutation函数（带参数 - 提交载荷payload）

   ```javascript
   mutations: {
       ...
       addCount (state, n) {
           state.count += n
       }
   }
   ```

2. 页面中提交调用mutation

   ```javascript
   this.$store.commit('addCount', 10)
   ```

**目标：实时输入，实时更新**

这里有一个页面，希望实现更改输入框的值实时更改仓库中count的值

![image-20240125164820762](./assets/img\image-20240125164820762.png)

综上，有两方面需要实现：

- 在输入框内能实时显示count的值
- 修改输入框的值能实时修改仓库中count的值

> 在本案例中，已经使用了mapState映射了数据count，故在本节的代码中可以直接写count

为了实现输入框内实时显示仓库中count的值，我们可以使用`:value="count"`

为了实现实时修改仓库中count的值，我们可以使用@input="handleInput"``

```javascript
<input type="text" :value="count" @input="handleInput">
```

接下来我们定义函数handleInput

`App.vue`

```javascript
methods: {
    handleInput (e) {
      const num = e.target.value    // 获取输入框的内容
      this.$store.commit('changeCount', num)
    }
  }
}
```

> 上述代码中，我们定义了`handleInput`，在函数体中，对形参`e`使用了`e.target.value`语句，这是一个技巧，可以获取标签的`value`值，通常用于输入框的值的获取

最后不要忘记在store（仓库）配置文件中进行changeCount的配置

`src/store/index.js`

```javascript
const store = new Vuex.Store({
  // 严格模式 （有利于初学者，检测不规范的代码 => 上线时需要关闭，会消耗性能
  strict: true,
  // 通过 state 可以提供数据（所有组件共享的数据）
  state: {
    title: '大标题',
    count: 100
  },
  mutations: {
    addCount (state, num) {
      state.count += num
    },
    delCount (state, num) {
      state.count -= num
    },
    changeCount (state, newCount) {  // 此处定义了changeCount，用于接收提交的参数并修改仓库中count的值
      state.count = newCount
    }
  }
```

## 六、辅助函数：mapMutations

目标：掌握辅助函数`mapMutations`，映射方法`mapMutations`和`mapState`很像，它是把位于`mutations`中的方法提取了出来，映射到组件`methods`中

在`store/index.js`中`mutations`中定义的方法

```javascript
export default {
    mutations: {
        sunCount (state, n) {
            state.count -= n
        }
    }
}

```

**在组件中**使用`mapMutations`提取`mutations`中的方法并映射到`methods`中

```javascript
import { mapMutations } from 'vuex'

export default {
    methods: {
        ...mapMutations(['subCount'])
    }
}
```

映射后等同于

```javascript
methods: {
    subCount (n) {
        this.$store.commit('subCount', n)
    },
}
```

使用`mapMutations`后，调用`subCount`

```javascript
this.subCount(6)
```

```vue
<template>
    <div class="box">
      <h2>Son2 子组件</h2>
      从vuex中获取的值:<label>{{ count }}</label>
      <br />
      <button @click="subCount(1)">值 - 1</button>
      <button @click="subCount(5)">值 - 5</button>
      <button>值 - 10</button>
      <button @click="changeTitle('我是大牛')">改标题</button>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Son2Com',
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations(['subCount', 'changeTitle'])
  }
}
</script>
```

## 七、核心概念 - actions

目标：明确`actions`的基本语法，处理异步操作。

需求：一秒钟之后，将`state`的`count`改成`666`

说明：`mutations`必须是同步的（便于监测数据变化，记录调试）

不能够使用之前的`mutations`

1、需要提供`actions`方法

```javascript
export default {
    actions: {
        setAsyncCount (context, num) {
            setTimeout(() => {
                context.commit('changeCount', num)  // 提交到mutations中的方法
            }, 1000)
        }
    }
}
```

2、在页面中dispatch调用

```javascript
this.$store.dispatch('setAsyncCount', 200)
```

需要注意，actions中不能直接操作state，还是需要用commit提交到mutations

## 八、辅助函数 - mapActions

目标：掌握辅助函数`mapActions`，映射方法

`mapActions`是把位于`actions`中的方法提取了出来，映射到组件`methods`中

在`store/index.js`中，我们定义了

```javascript
actions: {
    changeCountAction (context, num) {   // context必须写，类似于mutations中的state
        setTimeout(() => {
            context.commit('changeCount', num)   // 将修改请求提交到mutatios中的changeCount方法
        }, 1000)   // 一秒后进行提交
    }
}
```

所以**在组件中**，我们可以这么写

```javascript
import { mapActions } from 'vuex'

methods: {
    ...mapActions(['changeCountActio'])
}
```

组件中的这段代码**等于下面这段原生代码**

```javascript
methods: {
    changeCountAction (n) {
        this.$store.dispatch('changeCountAction', n)
    },
}
```

我们在**调用**时，可以这么写

```javascript
this.changeCountAction(666)  // 调用
```

## 九、核心概念 - getters 与其辅助函数

目标：掌握核心概念getters的基本语法（类似于计算属性）

说明：除了state之外，有时我们还需要从state中派生出一些状态，这些状态是依赖state的，此时会用到getters

例如：state中定义了list，为1~10的数组，组件中，需要显示所有大于5的数据

```javascript
state: {
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}
```

1、定义getters

```javascript
getters: {
    filterList (state) {
        return state.list.filter(item => item > 5)
    }
}
```

2、访问getters

1. 通过store访问getters

   ```javascript
   {{ $store.getters.filterList }}
   ```

2. 通过辅助函数mapGetters映射

   ```javascript
   computed: {
       ...mapGetters(['filterList'])
   }
   ```

   ```javascript
   {{ filterList }}
   ```

**注意：mapGetters要写在computed中**

## 十、核心概念 - 模块 module（进阶语法）

### 目标：掌握核心概念module模块的创建

由于vuex使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store对象就有可能变得相当臃肿。（当项目变得越来越大的时候，Vuex会变得越来越难以维护）

![image-20240126105400486](./assets/img\image-20240126105400486.png)

模块拆分：

user 模块：store/modules/user.js

```javascript
const state = {
  userInfo: {
    name: 'demo',
    age: 18
  },
  score: 80
}
const mutations = {}
const actions = {}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}

```



**store/modules中的每一个js文件就是一个模块**

在`store/index.js`配置模块：

```javascript
import user from './modules/user'
const store = new Vuex.Store({
    modules: {
        user
    }
})
```

### 目标：掌握模块中state的访问语法

尽管已经分模块，但其实子模块的状态，还是会挂到根级别的state中，属性名就是模块名

使用模块中的数据：

1. 直接通过模块名访问`$stire.state.模块名.xxx`

2. 通过`mapState`映射

   默认根级别的映射 `mapState(['xxx'])`

   子模块的映射 `mapState('模块名', ['xxx'])` - 需要开启命名空间（在模块的export default中添加namespaced=true）

### 目标：掌握模块中getters的访问语法

使用模块中`getters`中的数据：

1. 直接通过模块名访问`$store.getters['模块名/xxx']`

2. 通过`mapGetters`映射

   默认更级别的映射 `mapGetters(['xxx'])`

   子模块的映射 `mapGetters('模块名',['xxx'])` - 需要开启命名空间（在模块的export default中添加namespaced=true）

### 目标：掌握模块中mutation的调用语法

注意：默认模块中的`mutation`和`actions`会被挂载到全局，需要开启命名空间，才会挂载到子模块

调用子模块中mutation：

1. 直接通过`store`调用`$store.commit('模块名/xxx',额外参数)`

2. 通过`mapMutations`映射

   默认根级别的映射 `mapMutations(['xxx'])`

   子模块的映射 `mapMutations('模块名',['xxx'])` - 需要开启命名空间（在模块的export default中添加namespaced=true）

### 目标：掌握模块中action的调用语法（同理 - 直接类比Mutation 即可）

注意：默认模块中的`mutation`和`actions`会被挂载到全局，需要开启命名空间，才会挂载到子模块

调用子模块中action：

1. 直接通过store调用 $store.dispatch('模块名/xxx',额外参数)

2. 通过mapActions映射

   默认根级别的映射 mapActions(['xxx'])

   子模块的映射 mapActions('模块名',['xxx']) - 需要开启命名空间（在模块的export default中添加namespaced=true）
