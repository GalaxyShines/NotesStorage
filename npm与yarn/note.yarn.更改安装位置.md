# Yarn命令更改全局安装位置

## 前言：

如果没有什么特殊需求，不建议修改位置，因为可能需要变动环境变量，甚至可能会出现错误，导致不必要的麻烦



**修改需慎重！**

## 1、更改全局位置

### a.更改缓存位置

```powershell
yarn cache dir  // 查看缓存位置
yarn cache clean // 清除缓存，在目录
yarn config set cache-folder D:\files\url  // 设置缓存位置在D盘。如果此命令错误请在地址加上双引号
yarn cache dir // 再次输出一下目录，查看缓存位置是否更改成功
```

### b.更改全局位置

```powershell
yarn global dir // 查看全局位置
yarn config set global-folder "D:\files\url"  // 设置存储位置，如果此命令错误请去除地址的双引号
yarn global dir // 再次查看全局位置，检查更改是否生效
```

