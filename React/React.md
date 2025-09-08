# React笔记

## 一、入门

### 创建项目

```bash
npx create-react-app 项目名
```

## 二、基础

### 组件的导入与导出

**具名导出**

```js
// app.js
export function App () {} // 这是具名导出格式

// 使用方式
import { App } from './app'
```

**默认导出**

```js
// app.js
export default function App () {}

// 使用方式
import App from './app'
```



### JSX代码格式

- 只能返回一个根元素

  ```jsx
  // 这是错误写法
  export function App () {
      return (
      	<p>text</p>
          <p>hello</p>
      )
  }
  
  // 正确写法是这样的
  export function App () {
      return (
          <div>
              <p>text</p>
          	<p>hello</p>
          </div>
      )
  }
  
  // 如果你不想增加一个额外的标签，可以使用 <> 和 </>
  export function App () {
      return (
          <>
              <p>text</p>
          	<p>hello</p>
          </>
      )
  }
  ```

- 标签必须闭合，像 `<img>` 这样的自闭合标签必须写成 `<img/>` ，像 `<li>` 这种只有开始标签的元素也必须闭合。

- 使用驼峰命名给大部分属性命名，例如 `strokeWidth` 代替 `stroke-width` ，且由于 `class` 是一个保留字，所以在 React 中使用 `className` 进行代替。





```react
const message = "this is a message"
function App () {
    return {
        <div>
        	<h1>this is title</h1>
            {message}
        </div>
    }
}
```



### JSX中使用 JS表达式

在JSX中，可以使用 大括号 `{` `}`  识别 JavaScript 中的表达式，比如常见的变量、函数调用、方法调用等等

1. 使用 **引号** 传递字符串
2. 使用 JavaScript 变量
3. 函数调用和方法调用
4. 使用 JavaScript 对象



### JSX中使用列表渲染

```react
const list = [
    {
        id: 1001,
        name: 'jay'
    },
    {
        id: 1002,
        name: 'rose'
    }
]

export default function App () {
    return {
        <ul>
        	{list.map(item => (
            	<li key="{item.id}">{item.name}</li>
            ))}
        </ul>
    }
}

// 还可以使用 forEach 进行渲染
export default function App () {
    const targetList = []
    list.forEach(item => {
        targetList.push(<li key="{item.id}">{item.name}</li>)
    })
    return (
    	<ul>
            {targetList}
        </ul>
    )
}
```



### JSX 使用 Prop 进行渲染

下面的代码中实现了两个卡片，卡片样式相同，但是内容不同

```jsx
export default function Profile () {
    return (
    	<>
        	<div className="card-style">
        		欢迎回来
        	</div>
        	<div className="card-style">
        		<button>点击退出登录</button>
        	</div>
        </>
    )
}
```

我们可以将卡片的公共代码提取出来

```jsx
export function Card ({ children}) {
    return (
    	<div className="card-style">
        	{ children }
        </div>
    )
}

export default function Profile () {
    <Card>
    	欢迎回来
    </Card>
    <Card>
    	<button>点击退出登录</button>
    </Card>
}
```

这里的 `children` 可以抽象地类比成 `Vue` 中的 **插槽**



### JSX中实现条件渲染

```react
const isLoading = false

{isLoading ? <span>loading...</span> : <span>this is span</span>}
```



### JSX实现复杂条件渲染

```react
const person = 1

function PersonNum () {
    if(person == 1){
        return <p>一个人</p>
    }else if(person == 2){
        return <p>两个人</p>
    }else{
        return <p>好多人</p>
    }
}
```



### React基础事件绑定

用法：on + 事件名称 = { 事件处理程序 }

```react
function App () {
    const clickHandler = () => {
        console.log('被点击了')
    }
    return (
    	<button onClick={clickHandler}>click me</button>
    )
}
```



### React基础事件绑定-使用事件对象参数

```react
function App () {
    const clickHandler = (e) => {
        console.log('button被点击了', e)
    }
    return (
    	<button onClick={clickHandler}>click me</button>
    )
}
```



### React基础事件绑定-传递自定义参数

```react
function App () {
	const clickHandler = (name) => {
        console.log('button被点击了', name)
    }
    return (
    	<button onClick={() => clickHandler('jacl')}>click me</button>
    )
}
```





### React基础事件绑定-传递事件对象参数和自定义参数

```react
function App () {
    const clickHandler = (name, e) => {
        console.log('button按钮被点击了', name, e)
    }
    return (
    	<button onClick={(e) => clickHandler('jack', e)}>click me</button>
    )
}
```



### React组件

在React中，一个组件就是**首字母大写的函数**，内部存放了组件的逻辑和视图UI, 渲染组件只需要把组件当成标签书写即可

```react
// 定义组件
function MyButton () {
    return <button>click me</button>
}

// 使用组件
function App () {
    return (
    	<div>
            {/* 这是一种使用方法（自闭和） */}
        	<MyButton />
            {/* 这是另外一种使用方法（成对标签） */}
           	<MyButton></MyButton>
        </div>
    )
}
```



### useState基础使用

useState 是一个 React Hook（函数），它允许我们向组件添加一个状态变量, 从而控制影响组件的渲染结果，**类似于Vue的响应式ref**

```react
const [count, setCount] = useState(0)
```

上述代码中，参数 0 将作为count的初始值

useState是一个函数，返回值是一个数组

数组中的第一个参数是状态变量，第二个参数是set函数用来修改状态变量



### useState修改状态的规则

#### 场景一：

```react
let [count, setCount] = useState(0)

// 错误用法
const handleClick = () => {
    count++
}

// 正确用法
const handleClick = () => {
    setCount(count + 1)
}
```

#### 场景二：

```react
const [form, setForm] = useState({
    name: 'jack'
})

// 错误用法
const handleChangeName = () => {
    form.name = 'john'
}

// 正确用法
const handleChangeName = () => {
    setForm({
        ...form,
        name: 'john'
    })
}
```



### 组件的样式处理

#### 行内样式（不推荐）

```react
function App () {
    return <div style={{color: 'red'}}>this is div</div>
}
```

#### class类名控制

```css
/* index.css */
.foo{
    color: red;
}
```

```react
// App.js
import './index.css'

function App () {
    return (
    	<div>
        	<span className='foo'>this is span</span>
        </div>
    )
}
```

