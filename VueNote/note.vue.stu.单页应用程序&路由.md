# Class 1：单页应用程序&路由

## 一、单页应用程序与多页应用程序

### 区别对比

![image-20240123134405935](./assets/img\image-20240123134405935.png)

> 单页应用程序：网易云音乐
>
> 多页应用程序：京东



系统类网站 / 内部网站 / 文档类网站 / 移动端网站（按需加载）【单页面应用 VS 多页面应用】公司官网 / 电商类网站

Vue开发通常用于 单页面应用开发

![image-20240123134843567](./assets/img\image-20240123134843567.png)

## 二、路由

### 路由的介绍

生活中的路由：设备和`ip`的`映射`关系

这种映射关系我们称之为`路由`

# Class 2：路由的基本使用

## 使用时对应的版本：

| Vue版本 | Vue-Router版本 | Vuex版本 |
| :-----: | :------------: | :------: |
|    2    |       3        |    3     |
|    3    |       4        |    4     |

## 使用路由的前置操作：

![image-20240123140440743](./assets/img\image-20240123140440743.png)



两个核心步骤：

1. 创建需要的组件（views目录），配置路由规则
2. 配置导航，配置路由出口（路径匹配的组件显示的位置）

<hr style="color=black">
**以下为代码展示，可选择跳过**

附一个简单实现跳转的代码：

`./App.vue`

```vue
<template>
  <div>
    <div class="header">
        <a href="#/find">发现音乐</a>
        <a href="#/my">我的音乐</a>
        <a href="#/friend">朋友</a>
    </div>
    <div class="show">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {

}
</script>
```



`./main.js`

```javascript
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Find from './views/Find'
import My from './views/My'
import Friend from './views/Friend'
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/find', component: Find },
    { path: '/my', component: My},
    { path: '/friend', component: Friend}
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

```



`./views/My.vue`

```vue
<template>
  <div>
    <p>我的音乐</p>
    <p>我的音乐</p>
    <p>我的音乐</p>
    <p>我的音乐</p>
    <p>我的音乐</p>
  </div>
</template>

<script>
export default {
    name: 'MyMusic'
}
</script>
```



`./views/Friend.vue`

```vue
<template>
  <div>
    <p>发现音乐</p>
    <p>发现音乐</p>
    <p>发现音乐</p>
    <p>发现音乐</p>
    <p>发现音乐</p>
  </div>
</template>

<script>
export default {
    name: 'FindMusic'
}
```



`./views/Find.vue`

```vue
<template>
  <div>
    <p>朋友</p>
    <p>朋友</p>
    <p>朋友</p>
    <p>朋友</p>
    <p>朋友</p>
  </div>
</template>

<script>
export default {
    name: 'MyFriend'
}
```





# Class 3 :组件存放目录问题（组件分类）

组件分类：.`vue`文件分为两类；`页面组件`&`复用组件`

分类的目的：更易维护；

1. `src/views`文件夹：**页面组件** - 页面展示 - 配合路由用
2. `src/components`文件夹： **复用组件** - 展示数据 - 常用于复用



# Class 4 ：路由的封装抽离

问题： 所有的路由配置都堆在`main.js`中合适么？

目标：将路由模块抽离出来。好处：**拆分模块，利于维护**

![image-20240123150218998](./assets/img\image-20240123150218998.png)

> 上图中，我们在`src`目录下新建了`router`目录，将与路由有关的`js`代码都存放在该目录下的`index.js`文件中

核心步骤分析：

1. 在`src`下新建`router`目录，在`router`目录中新建`index.js`文件
2. 将与路由相关的代码移动到`index.js`文件中

实现路由封装抽离后，只需要在`main.js`中导入`index.js`即可

```javascript
import router from './router/index'
```

> 需要注意的是，router目录中的index.js文件末尾，需要添加`export default router`



# Class 5 ：使用router-link替代a标签（初识router-link）

## 问题一：router-link 是什么？

答：`vue-router`提供的全局组件，用于替换a标签

## 问题二：router-link 怎么用？

答：`<router-link to="/路径值"></router-link>`

必须传入`to`属性，指定路由路径值

## 问题三：router-link 的好处？

答：能跳转，能高亮（自带激活时的类名）



# Class 6 ：声明式导航 - 两个类名

### 一、两个类名的不同：

![image-20240124090721974](./assets/img\image-20240124090721974.png)

上图红框中，是`vue-router`用于高亮显示自动添加的两个类名，这两个类名各有不同。

当我们在导航栏选中一个选项，这个选项的a标签（在编写时是router-link标签，编译后成为了a标签）会被添加两个类，我们可以对这两个类进行样式设置，从而实现选中选项后选项的高亮显示。

1. `router-link-active` ：模糊匹配（用的多）

   `to="/my"` 可以匹配 `/my` `/my/a` `/my/b`

2. `router-link-exact-active` ：精确匹配

   `to="/my"` 仅可以匹配 `/my`

### 二、两个类名的自定义：

在“一”中，我们知道了`router-link`标签被选中时会自动添加两个类，这两个类分别是`router-link-exact-active`和`router-link-active`，但是这两个类名过于繁琐，我们可以通过修改路由配置实现自定义类名。

```javascript
const router = new VueRouter({
    routes: [...],
    linkActiveClass: "类名1",
    linkExactActiveClass: "类名2"
})
```

> 通过上述代码，我们实现了将`router-link-active`类自定义命名为`类名1`，将`router-link-exact-active`类自定义命名为`类名2`。

# Class 7 ：声明式导航 - 跳转传参

## 一、查询参数传参（多个参数）

a. 语法格式如下：

​	`to="/path?参数名=值"`

b. 对应页面组件接收传递过来的值：

​	`$route.query.参数名`

​	需要注意，在`created`中获取需要写`this.$route.query.参数名`

## 二、动态路由传参（简洁优雅）

1. 配置动态路由

   ```javascript
   const router = new VueRouter({
       routes: [
           ...,
           {
           path: '/search/:words',
           component: Search
           }
       ]
   })
   ```

2. 配置导航链接

   `to="/path/参数值"`

   ![image-20240124113458648](./assets/img\image-20240124113458648.png)

3. 对应页面组件接收传递过来的值

   `$route.params.参数名`

## 三、动态路由参数可选符

![image-20240124114206300](./assets/img\image-20240124114206300.png)

```javascript
const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/search/:words?', component: Search }
    ]
})
```

# Class 8 ：Vue路由 - 重定向

```javascript
const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' }
    ]
})
```

> 上述代码，我们实现了Vue路由的重定向。上述代码实现了当匹配到路径'/'时，自动跳转到'/home'

# Class 9 ：Vue路由 - 404

```javascript
import NotFind from '@/views/NotFind'

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/search/:words?', component: Search },
        { path: '*', component: NotFind }
    ]
})
```

> 上述代码中，我们实现了当路由表自上而下寻找跳转的路径时，如果没有匹配的路径，则执行最后一条`{ path: '*', component: NotFind }`报错的内容。

# Class 10 ：Vue路由 - 模式设置

- `hash`路由（默认）  例如：http://localhost:8080/#/home
- `history`路由（常用）例如：http://localhost:8080/home   （ 上线需要服务器端支持 ）

路由模式的设置：

```javascript
const router = new VueRouter({
    routes,
    mode: "history"  // 默认不写是 hash 路由模式
})
```

> 请注意：一旦使用`history`模式，地址栏就没有 # 符号，需要告知后台配置`访问规则`

# Class 11 ：编程式导航

## 一、编程式导航 - 基本跳转

编程式导航： 用js代码来进行跳转

1. path路径跳转（简易方便）

   ```javascript
   this.$router.push('路由路径')
   // 完整写法
   this.$router.push({
       path: '路由路径'
   })
   ```

2. name命名路由跳转（适合path路径长的场景）

   ```javascript
   this.$router.push({
       name: '路由名'
   })
   ```

   使用name需要在路由配置中进行配置

   ```javascript
   const router = new VueRouter({
       routes: [
           { name: 'myRoute', path: '/search', component: Search}
       ]
   })
   ```

   

## 二、编程式导航 - 路由传参

已知两种传参方式： 查询参数 + 动态路由传参

两种跳转方式，对于两种传参方式都支持：

### (1) path 路径跳转传参

#### ① query传参

```javascript
this.$router.push('/路径?参数名1=参数值1&参数2=参数2')
// 完整写法
this.$router.push({
    path: '/路径',
    query: {
        参数名1: '参数值1',
        参数名2: '参数值2'
    }
})
```

当我们希望获取参数值时，可以使用以下命令

```javascript
$route.query.参数名
```

#### ② 动态路由传参

```javascript
this.$router.push('/路径/参数值')
// 完整写法
this.$router.push({
    path: '/路径/参数值'
})
```

当我们希望获取参数时，可以使用以下命令

```javascript
$route.params.参数名
```

**注意：动态路由传参需要配路由！即`params`的参数名要与路由表中对应**

### (2) name 命名路由跳转传参

#### ① query传参

```javascript
this.$router.push({
    name: '路由名字',
    query: {
        参数名1: '参数值',
        参数名2: '参数值2'
    }
})
```

当我们希望获取参数时，可以使用以下命令

```javascript
$route.query.参数名
```

#### ② 动态路由传参

```javascript
this.$router.push({
    name: '路由名字',
    params: {
        参数名: '参数值',
    }
})
```

当我们希望获取参数时，可以使用以下命令

```javascript
$route.params.参数名
```

**注意：动态路由传参需要配路由！即`params`的参数名要与路由表中对应**

### 小结

![image-20240125102539621](./assets/img\image-20240125102539621.png)

![image-20240125102657640](./assets/img\image-20240125102657640.png)

**看路径**：跳转路径短，用`path`路径跳转；跳转路径长，用`name`命名路由跳转

**看参数**：参数多，用`query`传参；参数少，用动态路由传参

1. 
