### **步骤1：File -> New -> New Projec**t 新建项目

![](https://i-blog.csdnimg.cn/direct/4455f9523a49460dbf3c99b2540d5552.png)

选择图示的模版，点击**Next**

![](https://i-blog.csdnimg.cn/direct/a8f1937745e9446badbb232984a8fc28.png)

#### 在Name处设置你的项目名称

#### 在Language设置你要使用的语言

#### 点击Finish

![](https://i-blog.csdnimg.cn/direct/6605bf298bae47fd8f10b4d18a28d666.png)

#### 创建完的界面如图所示

![](https://i-blog.csdnimg.cn/direct/062cb4e6131442d38ef95250f00d819e.png)

**注意：如果你的左侧列表与上图不一致，请留意你的右下角是否有一个进度条，如果有进度条说明正在编译（首次需要下载依赖，需要一段时间）**



**让我们继续往下看**

### 步骤2：在左侧列表的app文件夹上右键，选择 **New -> Folder -> Assets Folder**

![](https://i-blog.csdnimg.cn/direct/2049fe5e7d944b11aa62ce13507b6aa3.png)

#### 显示如下界面，直接**Finish**

![](https://i-blog.csdnimg.cn/direct/b54942f7956a4ed3937e1861f1abedbd.png)

#### 此时左侧文件列表如下图所示

![](https://i-blog.csdnimg.cn/direct/e227a847d8ae4868a64a286bb0d7c3e3.png)

### 将你的 **APP / 网页** 文件放入**assets**文件夹下，然后我们继续



### 步骤3：打开**app -> res -> layout** 路径下的 **activity_main.xml**文件

![](https://i-blog.csdnimg.cn/direct/26ee0697a89f4f8e824dbfab4e72a533.png)

#### 打开的 **activity_main.xml**文件如下图所示，点击右上角的选项切换到代码视图

![](https://i-blog.csdnimg.cn/direct/b2cac2f6578d47e5afac3ea0ac3d2dda.png)

#### 将代码改为下图所示（红框区域的原有代码删除，改为下图所示）

![](https://i-blog.csdnimg.cn/direct/7040d66f05594ae4be11b4a922a9d6a3.png)

### 步骤4：打开下图所示的MainActivity文件

![](https://i-blog.csdnimg.cn/direct/d7fd21d52a7440c5b2123ae40cf5099e.png)

#### 在文件中添加下图红框内的内容

![](https://i-blog.csdnimg.cn/direct/bf9e40b4d85d4c91a4a851f35b3b505d.png)

修改后代码如下

```kotlin
package com.example.mui_test_1

import android.os.Bundle
import android.webkit.WebResourceRequest
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }

        val webView: WebView = findViewById(R.id.wvh5)

        webView.apply {
            settings.apply {
                javaScriptEnabled = true
                allowContentAccess = true
                allowFileAccess = true
                domStorageEnabled = true
            }
            webViewClient = object : WebViewClient() {
                override fun shouldOverrideUrlLoading(
                    view: WebView?,
                    request: WebResourceRequest?
                ): Boolean {
                    // 在这里处理 URL 加载逻辑
                    return false
                }
            }
            loadUrl("file:///android_asset/index.html")
        }
    }
}

```



### 步骤5：进入下图所示AndroidManifest.xml文件

![](https://i-blog.csdnimg.cn/direct/30659eee1c9d4f009dd5340f64ffc5d7.png)

#### 在文件中添加下图红框中的内容

![](https://i-blog.csdnimg.cn/direct/461bb00e540c44a48dabb854afb6586e.png)

### 步骤6：顶部菜单栏选择Build -> Generate Signed App ...

![](https://i-blog.csdnimg.cn/direct/dad807da7405489ca4e7a2775238950c.png)

选择APK选项，点击Next

![](https://i-blog.csdnimg.cn/direct/38e593e2e17b41b2a840bcad93600995.png)

如果你要创建新的keystore文件，点击Create New。如果你要选择已有文件，点击Choose Existing，下文使用创建新文件进行教学

![](https://i-blog.csdnimg.cn/direct/f844eb8609ff4481a1046622b9e5d902.png)

点击图示按钮

![](https://i-blog.csdnimg.cn/direct/db4c5b60108d4ea2a095a68694938670.png)

在区域内选择你要创建的位置，并在底部设置你的文件名

![](https://i-blog.csdnimg.cn/direct/fa97761b21864ffe96c785dd7561bff2.png)

在两处的Password设置密码，并在Confirm中重新输一遍进行确认（学习期间建议设置为123456，便于记忆）

![](https://i-blog.csdnimg.cn/direct/e7ae4cb4dc78408ab11da6d3cf5fefe5.png)

确认下图红框中至少填写一处，内容不限

![](https://i-blog.csdnimg.cn/direct/3201178bab3f4dfd9cc1e4ca41a7b013.png)

然后点击OK

返回刚才的界面后，点击Next

![](https://i-blog.csdnimg.cn/direct/901d389e0e964215bc22761ad78ac698.png)

选择release，然后Create

![](https://i-blog.csdnimg.cn/direct/acac3d5e3cbc42729245c0e0c23a02cb.png)

到此处，不出意外的话，正在进行打包操作

打包成功后，右下角会有下图的提示显示

![](https://i-blog.csdnimg.cn/direct/e8c58add5c0640ab8438883aafc51725.png)

然后我们回到左侧文件列表，点击顶部选项，选择Project

![](https://i-blog.csdnimg.cn/direct/2a9dfbfbfdbb4feba13f77dfe8b7e316.png)

![](https://i-blog.csdnimg.cn/direct/bab5a600a02549cdb9fa6c9ecfd213fc.png)

然后在 app -> release 路径下，能找到我们打包成功的apk文件

![](https://i-blog.csdnimg.cn/direct/10963f87449e4612a37365cf5685c3ed.png)