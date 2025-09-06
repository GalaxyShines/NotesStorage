# 网页文件通过AndroidStudio打包为apk文件

## 1、AndroidStudio的安装

[CSDN - AndroidStudio安装配置教程](https://blog.csdn.net/xunyan6234/article/details/132189026)

## 2、AndroidStudio搭建并使用WebView

[CSDN - AndroidStudio搭建并使用WebView](https://blog.csdn.net/qq_36571175/article/details/135463584)

**附加说明：**

在app中新建asset文件夹，如图所示

![image-20240127172003969](./assets/img\image-20240127172003969.png)

将网页文件整个搬到asset中，如图所示

![image-20240127172051249](./assets/img\image-20240127172051249.png)

将本文中`MailActivity.java`文件中的百度网址替换为`file:///android_asset/index.html`,如图所示

![image-20240127172253707](./assets/img\image-20240127172253707.png)

## 3、打包为apk

[CSDN - 打包apk](https://blog.csdn.net/weixin_45813968/article/details/133855362)