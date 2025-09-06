// 导入mapState
import { mapState } from 'vuex'
// 数组方式引入state
mapState(['studentName'])
// 展开运算符映射
computed: {
    ...mapState(['studentName'])
}