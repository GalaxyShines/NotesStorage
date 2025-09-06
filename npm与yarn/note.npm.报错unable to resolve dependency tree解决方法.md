# 报错npm ERR! code ERESOLVE npm ERR! ERESOLVE unable to resolve dependency tree报错解决办法

## 报错代码如下：

```powershell
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR!
npm ERR! While resolving: webpackdemo@1.0.0
npm ERR! Found: webpack@5.73.0
npm ERR! node_modules/webpack
npm ERR!   dev webpack@"^5.73.0" from the root project
npm ERR! Could not resolve dependency:
npm ERR! peer webpack@"^4.0.0" from optimize-css-assets-webpack-plugin@6.0.1
npm ERR! node_modules/optimize-css-assets-webpack-plugin
npm ERR!   dev optimize-css-assets-webpack-plugin@"*" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR! for a full report.
```

## 解决方案：

### 1、查看版本

```powershell
// Win + R 输入 cmd 调出命令行界面输入以下代码
npm -v
node -v
```

### 2、降低npm版本

大多数报错都是npm高版本的较严格机制导致的

```
npm install npm@6.14.10 -g
```

### 3、项目中删除文件

将项目中的`node-modules`文件夹和`package-lock.json`文件删除。

### 4.重新在项目中引入需要的配置

项目根目录下命令行：`npm install`
即可自动生成 步骤3 中删除的两个文件