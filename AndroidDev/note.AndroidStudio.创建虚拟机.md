# 打包教程

## 前言

在 Android 开发的世界中，拥有一个可靠且灵活的测试环境是至关重要的。Android Studio 提供了虚拟设备（AVD）管理器，这是一个强大的工具，允许开发者创建自定义的虚拟设备来模拟不同的 Android 设备。通过 AVD，你可以在各种设备配置上测试你的应用，确保它在不同的屏幕尺寸、分辨率和系统版本上都能正常运行。

## 配置教程

第一步：打开AndroidStudio
打开AndroidStudio，如果你没有打开任何项目，界面如下

![](https://i-blog.csdnimg.cn/direct/e9e400f076884f06960fdc64a9f5d658.png)

在这个界面，我们选择任意一个已有的项目打开（或者新建一个项目）。本文仅讲述如何创建Android虚拟机，故对项目没有任何要求，只需要进入下图界面即可：

![](https://i-blog.csdnimg.cn/direct/0cd4f78fa1b24a619121ab42b8e8928c.png)

### 第二步：进入设备管理界面

在窗口右侧的选项中，点击图示选项进入设备管理界面

![](https://i-blog.csdnimg.cn/direct/de030935a3924724b8894bdf2c49ee43.png)

### 第三步：点击新建虚拟机

在弹出的界面中，点击界面左上位置的加号按钮

![](https://i-blog.csdnimg.cn/direct/d2e49651ec944539aeca9e771f6f390c.png)

选择 Create Virtual Device选项

![](https://i-blog.csdnimg.cn/direct/8ef8ea0e6f8d4bd1864f100f298ecef2.png)

### 第四步：选择尺寸

在弹出的新窗口中，选择你的机型的尺寸（本文用Pixel 2举例）

![](https://i-blog.csdnimg.cn/direct/b9ef0a856742400c85581cd2d7cea14d.png)

然后点击**Next**

### **第五步：选择系统镜像**

**选择你要使用的系统镜像，注意：如果Release Name的镜像名称右边有【下载】标志，请先点击下载，等待下载完毕后再选择**

![](https://i-blog.csdnimg.cn/direct/f094dd445e9e43529f891a0182ccf65d.png)

选择了镜像后，点击Next下一步

### 第六步：参数设置

在这个页面，你可以对设备进行一些设置，具体设置在这里不做详细说明了

![](https://i-blog.csdnimg.cn/direct/e74c107803e645fe8b2316d3b6822812.png)

设置完成后，点击Finish完成设置，即创建虚拟机

### 第七步：启动虚拟机

创建完成后，右侧窗口中会显示我们新创建的虚拟机，点击播放按钮启动虚拟机

![](https://i-blog.csdnimg.cn/direct/0974807ee57c4ccf805319eda86651ca.png)

### 第八步：运行项目到模拟器

在软件的顶部，分别选择 你的模拟器 和 你要运行的项目，然后点击右边的**绿色**播放按钮运行（**不是启动模拟器的播放按钮**）

至此，不出意外的话，大功告成