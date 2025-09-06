# 带参页面跳转与参数获取

```vue
<!-- 参数的获取 -->
<script>
export default {
    data(){
        return{
            query: null
        }
    },
    onLoad(option){
        this.query = option.参数名
    }
}
</script>
```

```vue
<!-- 参数的传递 -->
<script>
export default {
    methods: {
        test () {
            uni.redirectTo({
                url: '/pages/index/index?name=root'
            })
        }
    }
}
</script>
```

