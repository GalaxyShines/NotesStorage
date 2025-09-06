自定义指令

# 一、自定义指令

> 用途：自己定义的指令，可以封装一些dom操作，扩展额外功能

## 全局注册语法：
```javascript
Vue.directive('指令名',{
    "inserted" (el){
        el.focus()
    }
})
```

## 局部注册语法：
```vue
<template></template>
<script>
export default({
    data(){
        return{}
    },
    directives: {
        "指令名":{
            inserted(){
                el.focus()
            }
        }
    }
})
</script>
```

## 指令的使用：
```html
<input v-指令名 type="text">
```

# 二、自定义指令的值：

## 使用：

```html
<div v-color="color">item</div>
```
# 指令的编写

> 通过binding.value可以拿到指令值，指令值修改会触发update函数

```vue
<template>
	<div v-color="red">
        // 这个div的背景颜色为红色
    </div>
	<div v-color="green">
        // 这个div的背景颜色为绿色
    </div>
</template>
<script>
    export default({
        directives: {
            color: {
                inserted(el,binding){
                    el.style.color=binding.value
                },
                update(el,binding){
                    el.style.color=binding.value
                }
            }
        }
    })
</script>
```

# 三、v-loading指令的封装

 