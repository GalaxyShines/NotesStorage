# vue使用yarn 或 npm的build打包后出现页面空白的解决方案

已知有两种打包命令

`npm命令`

```powershell
npm run build
```

`yarn命令`

```powershell
yarn build
```

在使用其中一种打包命令后，可能会出现打包后生成的页面是空白的，而且在浏览器的控制台会有报错，笔者是在进行vue2的打包时出现的问题，解决方案如下：

找到`vue.config.js`文件，插入如下代码

```javascript
module.exports = {
  assetsDir: 'static',
  parallel: false,
  publicPath: './'
}
```

然后问题就解决了