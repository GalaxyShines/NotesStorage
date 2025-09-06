# 底部Tabbar的实现

## 一、页面数量

假设**Tabbar**中有**四个选项**，即**四个页面**

那么所需要的**Html文件**分别为

**main.html**

**page1.html**

**page2.html**

**page3.html**

**page4.html**



其中，**main.html**用于**放置子页面显示区域**和**Tabbar**

点击不同**Tabbar**选项切换子页面**实现Tabbar效果**



## 二、分步实现

### 1. 在mui.init时，对子页面进行预加载并禁用左滑关闭

```javascript
mui.init({
    switchBack: false, // 禁用左滑关闭
    preloadPages: [ // 预加载页面
        { url: 'home.html', id: 'home' },  // 第一个子页面
        { url: 'data.html', id: 'data' },  // 第二个子页面
        { url: 'news.html', id: 'news' },  // 第三个子页面
        { url: 'my.html', id: 'my' }  // 第四个子页面
    ],
    preloadLimit: 4 // 预加载的子页面窗口数量
});
```



### 2. 编写页面结构

**注意！底部选项卡可以用字符mbar快速生成模板**

```html
<div id="main"></div><!-- 子页面显示区域 -->
<nav class="mui-bar mui-bar-tab"> <!-- Tabbar界面 -->
    <a class="mui-tab-item mui-active" id="home-tab"><!-- 第一个Tabbar选项 -->
        <span class="mui-icon mui-icon-home"></span><!-- Tabbar选项的图标 -->
        <span class="mui-tab-label">首页</span><!-- Tabbar选项的文本 -->
    </a>
    <a class="mui-tab-item" id="news-tab"><!-- 第二个Tabbar选项 -->
        <span class="mui-icon mui-icon-info"></span>
        <span class="mui-tab-label">新闻</span>
    </a>
    <a class="mui-tab-item" id="data-tab"><!-- 第三个Tabbar选项 -->
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">数据分析</span>
    </a>
    <a class="mui-tab-item" id="my-tab"><!-- 第四个Tabbar选项 -->
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">我的</span>
    </a>
</nav>
```



### 3. 编写子页面切换逻辑与菜单栏变化逻辑

> 注意：由于该内容需要用到plus，而在plus未加载完成时使用plus会产生错误，所以我们定义一个事件监听来监听plus是否准备完毕

```js
function plusReady() {  // 当plus准备好时执行此函数
    var subpages = ['home.html', 'news.html', 'data.html', 'my.html'];  // 子页面文件名列表（按照选项顺序）
    var subpage_style = {  // 设置子页面样式
        top: '0px', // 子页面距离顶部的高度
        bottom: '50px' // 子页面距离底部菜单栏的高度
    };

    var activeTab = subpages[0]; // 默认激活的tab
    var main = plus.webview.currentWebview(); // 获取主窗口

    // 创建子页面并附加到主窗口
    for (var i = 0; i < subpages.length; i++) {
        var sub = plus.webview.create(subpages[i], subpages[i], subpage_style);
        if (i > 0) {  // i=0时是主页，i>0就不是主页
            sub.hide(); // 默认隐藏除首页之外的页面
        }
        main.append(sub);  // 子页面容器添加子页面
    }

    // 监听 tab 的点击事件
    mui('.mui-bar-tab').on('tap', 'a', function (e) {  // 选择了.mui-bar-tab中的a元素
        // e.preventDefault();

        var targetTab = this.getAttribute('id').replace('-tab', '') + '.html'; // 获取点击事件触发者的id，并将id中的-tab去除，然后与.html拼接

        if (targetTab == activeTab) {
            return; // 如果点击的是当前选中的tab，不做处理
        }

        // 隐藏当前页面，显示点击的页面
        plus.webview.show(targetTab);
        plus.webview.hide(activeTab);

        // 切换激活的tab
        activeTab = targetTab;

        // 更新底部菜单栏的激活状态
        var tabs = document.querySelectorAll('.mui-tab-item');
        for (var i = 0; i < tabs.length; i++) {  // 去除所有的菜单栏选项的激活状态
            tabs[i].classList.remove('mui-active');
        }
        this.classList.add('mui-active');  // this指向当前触发者，为其class列表添加mui-active类
    }, { passive: false });
}

if (window.plus) {
    plusReady();
} else {
    document.addEventListener('plusready', plusReady, false);  // 监听plusready事件，当plus准备好时执行plusReady函数
}
```



### 4. 完整代码实现与文件结构

**main.html**实现Tabbar代码如下：

```html
<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title></title>
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
    <link href="css/mui.css" rel="stylesheet" /> <!-- 这里是MUI的依赖 -->
</head>

<body>
    <script src="js/mui.js"></script> <!-- 这里是MUI的依赖 -->
    <script type="text/javascript">
        mui.init({
            switchBack: false, // 禁用左滑关闭
            preloadPages: [ // 预加载页面
                { url: 'home.html', id: 'home' },  // 第一个子页面
                { url: 'data.html', id: 'data' },  // 第二个子页面
                { url: 'news.html', id: 'news' },  // 第三个子页面
                { url: 'my.html', id: 'my' }  // 第四个子页面
            ],
            preloadLimit: 4 // 预加载的子页面窗口数量
        });
    </script>
    <div id="main"></div><!-- 子页面显示区域 -->
    <nav class="mui-bar mui-bar-tab"> <!-- Tabbar界面 -->
        <a class="mui-tab-item mui-active" id="home-tab"><!-- 第一个Tabbar选项 -->
            <span class="mui-icon mui-icon-home"></span><!-- Tabbar选项的图标 -->
            <span class="mui-tab-label">首页</span><!-- Tabbar选项的文本 -->
        </a>
        <a class="mui-tab-item" id="news-tab"><!-- 第二个Tabbar选项 -->
            <span class="mui-icon mui-icon-info"></span>
            <span class="mui-tab-label">新闻</span>
        </a>
        <a class="mui-tab-item" id="data-tab"><!-- 第三个Tabbar选项 -->
            <span class="mui-icon mui-icon-contact"></span>
            <span class="mui-tab-label">数据分析</span>
        </a>
        <a class="mui-tab-item" id="my-tab"><!-- 第四个Tabbar选项 -->
            <span class="mui-icon mui-icon-contact"></span>
            <span class="mui-tab-label">我的</span>
        </a>
    </nav>
    <script type="text/javascript">
        function plusReady() {  // 当plus准备好时执行此函数
            var subpages = ['home.html', 'news.html', 'data.html', 'my.html'];  // 子页面文件名列表（按照选项顺序）
            var subpage_style = {  // 设置子页面样式
                top: '0px', // 子页面距离顶部的高度
                bottom: '50px' // 子页面距离底部菜单栏的高度
            };

            var activeTab = subpages[0]; // 默认激活的tab
            var main = plus.webview.currentWebview(); // 获取主窗口

            // 创建子页面并附加到主窗口
            for (var i = 0; i < subpages.length; i++) {
                var sub = plus.webview.create(subpages[i], subpages[i], subpage_style);
                if (i > 0) {  // i=0时是主页，i>0就不是主页
                    sub.hide(); // 默认隐藏除首页之外的页面
                }
                main.append(sub);  // 子页面容器添加子页面
            }

            // 监听 tab 的点击事件
            mui('.mui-bar-tab').on('tap', 'a', function (e) {  // 选择了.mui-bar-tab中的a元素
                // e.preventDefault();

                var targetTab = this.getAttribute('id').replace('-tab', '') + '.html'; // 获取点击事件触发者的id，并将id中的-tab去除，然后与.html拼接

                if (targetTab == activeTab) {
                    return; // 如果点击的是当前选中的tab，不做处理
                }

                // 隐藏当前页面，显示点击的页面
                plus.webview.show(targetTab);
                plus.webview.hide(activeTab);

                // 切换激活的tab
                activeTab = targetTab;

                // 更新底部菜单栏的激活状态
                var tabs = document.querySelectorAll('.mui-tab-item');
                for (var i = 0; i < tabs.length; i++) {  // 去除所有的菜单栏选项的激活状态
                    tabs[i].classList.remove('mui-active');
                }
                this.classList.add('mui-active');  // this指向当前触发者，为其class列表添加mui-active类
            }, { passive: false });
        }

        if (window.plus) {
            plusReady();
        } else {
            document.addEventListener('plusready', plusReady, false);  // 监听plusready事件，当plus准备好时执行plusReady函数
        }
    </script>
</body>

</html>

```

