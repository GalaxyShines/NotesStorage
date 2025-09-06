# ESLint 代码规范

**目标：** 认识代码规范

**代码规范：**一套写代码的约定规则。例如：“ 赋值符号的左右是否需要空格 ” “ 一句结束是否需要加`；` ”...

正规的团队 需要 统一的编码风格

JavaScript Standard Style 规范说明 https://standardjs.com/rules-zhcn.html

下面列举这份规则中的一小部分：

- 字符串使用单引号	`'abc'`
- 无分号                      `const name = 'zs'`
- 关键字后加空格       `if (name = 'ls') {...}`
- 函数名后加空格       `function name (arg) {...}`
- 坚持使用全等           `===`不使用`==`
- ... ...

> 如果代码不符合`standard`要求，`ESLint`会报错提示

**目标：**学会解决代码规范错误

## 代码错误两种解决方案

### 1.手动修正

### 2.自动修正

在VSCode中有一插件ESLint，可以高亮错误并通过配置 自动 帮我们修复错误

1. 安装插件

2. 在左下角打开设置

   ![image-20240125114723127](./assets/img\image-20240125114723127.png)

3. 进入设置后，点击右上角图标`打开设置`

   ![image-20240125114929412](./assets/img\image-20240125114929412.png)

4. 在配置文件中加入如下代码

   ```json
   // 保存时，eslint自动帮我们修复错误
   "editor.codeActionsOnSave": {
       "source.fixAll": true
   },
   // 保存代码，不自动格式化
   "editor.formatOnSave": false   // 此处如果有波浪线报错，则说明之前有true的配置，删除以前的true配置
   ```

   ![image-20240125115201972](./assets/img\image-20240125115201972.png)