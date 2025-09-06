# 基于Vite构建的项目

```bash
npm i -D unplugin-auto-import
```

进入vite.config.ts

```javascript
import VueAutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
    plugins: [
        vue(),
        ViteAutoImport({
            imports: ['vue', 'vue-router'],
            dirs: ['/src/api'],
            dts: '/src/auto-import.d.ts'
        })
    ]
})
```

# 基于Webpack构建的项目

1. **安装unplugin-auto-import**：首先，确保你已经安装了Vue CLI。然后，在项目根目录下运行以下命令来安装unplugin-auto-import插件：

   ```bash
   npm install unplugin-auto-import --save-dev
   
       
   ```

2. **配置Webpack**：接下来，你需要在`vue.config.js`文件中引入并配置unplugin-auto-import插件。示例代码如下：

   ```javascript
   module.exports = {
     // ...其他配置项...
   
     configureWebpack: {
       plugins: [
         require('unplugin-auto-import/webpack')({
           // 在这里配置unplugin-auto-import的相关选项
         }),
       ],
     },
   };
   
       
   ```

3. **配置unplugin-auto-import选项**：在上述代码中，你可以根据需要配置unplugin-auto-import插件的选项。以下是一些常用的选项：

   - `include`：指定要自动导入的文件类型，例如`['.js', '.vue']`。
   - `exclude`：排除某些文件或目录不进行自动导入。
   - `imports`：指定要自动导入的库和模块，例如`['vue', 'vue-router']`。
   - `eslintrc`：生成一个适用于Eslint的配置对象，以便与Eslint集成。
   - `dts`：生成TypeScript声明文件，以便与TypeScript集成。

4. **保存并重启开发服务器**：完成上述配置后，保存`vue.config.js`文件并重新启动你的开发服务器。现在，unplugin-auto-import应该已经生效，并根据你在配置文件中指定的选项自动导入所需的库和模块。