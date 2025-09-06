# 一、UniApp概念简介

## 1、基本语言与开发规范

uni-app代码编写，基本语言包括`js`、`vue`、`css`。以及`ts`、`scss`等`css`预编译器。

在app端，还支持原生渲染的[nvue](https://uniapp.dcloud.net.cn/tutorial/nvue-outline.html)，以及可以编译为`kotlin`和`swift`的[uts](https://doc.dcloud.net.cn/uni-app-x/uts/)。

DCloud还提供了使用js编写服务器代码的uniCloud云引擎。所以只需掌握js，你可以开发web、Android、iOS、各家小程序以及服务器等全栈应用。

为了实现多端兼容，综合考虑编译速度、运行性能等因素，`uni-app` 约定了如下开发规范：

- 页面文件遵循 [Vue 单文件组件 (SFC) 规范](https://vue-loader.vuejs.org/zh/spec.html)，即每个页面是一个.vue文件
- 组件标签靠近小程序规范，详见[uni-app 组件规范](https://uniapp.dcloud.net.cn/component/)
- 接口能力（JS API）靠近小程序规范，但需将前缀 `wx`、`my` 等替换为 `uni`，详见[uni-app接口规范](https://uniapp.dcloud.net.cn/api/)
- 数据绑定及事件处理同 `Vue.js` 规范，同时补充了[应用生命周期](https://uniapp.dcloud.net.cn/collocation/App.html#applifecycle)及[页面的生命周期](https://uniapp.dcloud.net.cn/tutorial/page.html#lifecycle)
- 如需兼容app-nvue平台，建议使用flex布局进行开发

uni-app分`编译器`和`运行时（runtime）`。uni-app能实现一套代码、多端运行，是通过这2部分配合完成的。

编译器将开发者的代码进行编译，编译的输出物由各个终端的runtime进行解析，每个平台（Web、Android App、iOS App、各家小程序）都有各自的runtime。

## 2、编译器

开发环境有HbuilderX和cli版本

- 开发者按uni-app规范编写代码，由编译器将开发者的代码编译生成每个平台支持的特有代码
  - 在web平台，将.vue文件编译为js代码。与普通的vue cli项目类似
  - 在微信小程序平台，编译器将.vue文件拆分生成wxml、wxss、js等代码
  - 在app平台，将.vue文件编译为js代码。进一步，如果涉及uts代码：
    - 在Android平台，将.uts文件编译为kotlin代码
    - 在iOS平台，将.uts文件编译为swift代码
- 编译器分vue2版和vue3版
  - vue2版：基于`webpack`实现
  - vue3版：基于`Vite`实现，性能更快



# 二、

# 三、内置组件

## 1. 视图容器

### view

这个容器类似于在html开发时的`div`，只不过在uniapp中，不支持div而改用view。其用法与div基本相同。

### scroll-view

这个容器是可滚动视图区域。用于区域滚动

| scroll-x                | Boolean       | false   | 允许横向滚动                                                 |                                             |
| ----------------------- | ------------- | ------- | ------------------------------------------------------------ | ------------------------------------------- |
| scroll-y                | Boolean       | false   | 允许纵向滚动                                                 |                                             |
| upper-threshold         | Number/String | 50      | 距顶部/左边多远时（单位px），触发 scrolltoupper 事件         |                                             |
| lower-threshold         | Number/String | 50      | 距底部/右边多远时（单位px），触发 scrolltolower 事件         |                                             |
| scroll-top              | Number/String |         | 设置竖向滚动条位置                                           |                                             |
| scroll-left             | Number/String |         | 设置横向滚动条位置                                           |                                             |
| scroll-into-view        | String        |         | 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素 |                                             |
| scroll-with-animation   | Boolean       | false   | 在设置滚动条位置时使用动画过渡                               |                                             |
| enable-back-to-top      | Boolean       | false   | iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向 | app-nvue，微信小程序                        |
| show-scrollbar          | Boolean       | false   | 控制是否出现滚动条                                           | App-nvue 2.1.5+                             |
| refresher-enabled       | Boolean       | false   | 开启自定义下拉刷新                                           | H5、app-vue 2.5.12+,微信小程序基础库2.10.1+ |
| refresher-threshold     | Number        | 45      | 设置自定义下拉刷新阈值                                       | H5、app-vue 2.5.12+,微信小程序基础库2.10.1+ |
| refresher-default-style | String        | "black" | 设置自定义下拉刷新默认样式，支持设置 black，white，none，none 表示不使用默认样式 | H5、app-vue 2.5.12+,微信小程序基础库2.10.1+ |
| refresher-background    | String        | "#FFF"  | 设置自定义下拉刷新区域背景颜色                               | H5、app-vue 2.5.12+,微信小程序基础库2.10.1+ |
| refresher-triggered     | Boolean       | false   | 设置当前下拉刷新状态，true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发 | H5、app-vue 2.5.12+,微信小程序基础库2.10.1+ |
| enable-flex             | Boolean       | false   | 启用 flexbox 布局。开启后，当前节点声明了 display: flex 就会成为 flex container，并作用于其孩子节点。 | 微信小程序 2.7.3                            |
| scroll-anchoring        | Boolean       | false   | 开启 scroll anchoring 特性，即控制滚动位置不随内容变化而抖动，仅在 iOS 下生效，安卓下可参考 CSS overflow-anchor 属性。 | 微信小程序 2.8.2                            |
| @scrolltoupper          | EventHandle   |         | 滚动到顶部/左边，会触发 scrolltoupper 事件                   |                                             |
| @scrolltolower          | EventHandle   |         | 滚动到底部/右边，会触发 scrolltolower 事件                   |                                             |
| @scroll                 | EventHandle   |         | 滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY} |                                             |
| @refresherpulling       | EventHandle   |         | 自定义下拉刷新控件被下拉                                     | H5、app-vue 2.5.12+,微信小程序基础库2.10.1+ |
| @refresherrefresh       | EventHandle   |         | 自定义下拉刷新被触发                                         | H5、app-vue 2.5.12+,微信小程序基础库2.10.1+ |
| @refresherrestore       | EventHandle   |         | 自定义下拉刷新被复位                                         | H5、app-vue 2.5.12+,微信小程序基础库2.10.1+ |
| @refresherabort         | EventHandle   |         | 自定义下拉刷新被中止                                         | H5、app-vue 2.5.12+,微信小程序基础库2.10.1+ |

### swiper

滑块视图容器

用于垂直或水平滑动，例如轮播图等

**需要注意的是，swiper不能停留在两个内容之间！**





# 四、扩展组件

# 五、API

## 1. 发送请求

### uni.request(OBJECT)

|                      |                           |      |        |                                                              |                                                              |
| :------------------- | :------------------------ | :--- | :----- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| 参数名               | 类型                      | 必填 | 默认值 | 说明                                                         | 平台差异说明                                                 |
| url                  | String                    | 是   |        | 开发者服务器接口地址                                         |                                                              |
| data                 | Object/String/ArrayBuffer | 否   |        | 请求的参数                                                   | App 3.3.7 以下不支持 ArrayBuffer 类型                        |
| header               | Object                    | 否   |        | 设置请求的 header，header 中不能设置 Referer                 | App、H5端会自动带上cookie，且H5端不可手动修改                |
| method               | String                    | 否   | GET    | 有效值详见下方说明                                           |                                                              |
| timeout              | Number                    | 否   | 60000  | 超时时间，单位 ms                                            | H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)、微信小程序（2.10.0）、支付宝小程序 |
| dataType             | String                    | 否   | json   | 如果设为 json，会对返回的数据进行一次 JSON.parse，非 json 不会进行 JSON.parse |                                                              |
| responseType         | String                    | 否   | text   | 设置响应的数据类型。合法值：text、arraybuffer                | 支付宝小程序不支持                                           |
| sslVerify            | Boolean                   | 否   | true   | 验证 ssl 证书                                                | 仅App安卓端支持（HBuilderX 2.3.3+），不支持离线打包          |
| withCredentials      | Boolean                   | 否   | false  | 跨域请求时是否携带凭证（cookies）                            | 仅H5支持（HBuilderX 2.6.15+）                                |
| firstIpv4            | Boolean                   | 否   | false  | DNS解析时优先使用ipv4                                        | 仅 App-Android 支持 (HBuilderX 2.8.0+)                       |
| enableHttp2          | Boolean                   | 否   | false  | 开启 http2                                                   | 微信小程序                                                   |
| enableQuic           | Boolean                   | 否   | false  | 开启 quic                                                    | 微信小程序                                                   |
| enableCache          | Boolean                   | 否   | false  | 开启 cache                                                   | 微信小程序、抖音小程序 2.31.0+                               |
| enableHttpDNS        | Boolean                   | 否   | false  | 是否开启 HttpDNS 服务。如开启，需要同时填入 httpDNSServiceId 。 HttpDNS 用法详见 [移动解析HttpDNS](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/HTTPDNS.html) | 微信小程序                                                   |
| httpDNSServiceId     | String                    | 否   |        | HttpDNS 服务商 Id。 HttpDNS 用法详见 [移动解析HttpDNS](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/HTTPDNS.html) | 微信小程序                                                   |
| enableChunked        | Boolean                   | 否   | false  | 开启 transfer-encoding chunked                               | 微信小程序                                                   |
| forceCellularNetwork | Boolean                   | 否   | false  | wifi下使用移动网络发送请求                                   | 微信小程序                                                   |
| enableCookie         | Boolean                   | 否   | false  | 开启后可在headers中编辑cookie                                | 支付宝小程序 10.2.33+                                        |
| cloudCache           | Object/Boolean            | 否   | false  | 是否开启云加速（详见[云加速服务](https://smartprogram.baidu.com/docs/develop/extended/component-codeless/cloud-speed/introduction/)） | 百度小程序 3.310.11+                                         |
| defer                | Boolean                   | 否   | false  | 控制当前请求是否延时至首屏内容渲染后发送                     | 百度小程序 3.310.11+                                         |
| success              | Function                  | 否   |        | 收到开发者服务器成功返回的回调函数                           |                                                              |
| fail                 | Function                  | 否   |        | 接口调用失败的回调函数                                       |                                                              |
| complete             | Function                  | 否   |        | 接口调用结束的回调函数（调用成功、失败都会执行）             |                                                              |

# 六、界面

## 交互反馈

### uni.showToast(OBJECT)

作用：显示消息提示框

**OBJECT参数说明**

|          |          |      |                                                              |                                                        |
| :------- | :------- | :--- | :----------------------------------------------------------- | :----------------------------------------------------- |
| 参数     | 类型     | 必填 | 说明                                                         | 平台差异说明                                           |
| title    | String   | 是   | 提示的内容，长度与 icon 取值有关。                           |                                                        |
| icon     | String   | 否   | 图标，有效值详见下方说明，默认：success。                    |                                                        |
| image    | String   | 否   | 自定义图标的本地路径（app端暂不支持gif）                     | App、H5、微信小程序、百度小程序、抖音小程序（2.62.0+） |
| mask     | Boolean  | 否   | 是否显示透明蒙层，防止触摸穿透，默认：false                  | App、微信小程序、抖音小程序（2.47.0+）                 |
| duration | Number   | 否   | 提示的延迟时间，单位毫秒，默认：1500                         |                                                        |
| position | String   | 否   | 纯文本轻提示显示位置，填写有效值后只有 `title` 属性生效，且不支持通过 uni.hideToast 隐藏。有效值详见下方说明。 | App                                                    |
| success  | Function | 否   | 接口调用成功的回调函数                                       |                                                        |
| fail     | Function | 否   | 接口调用失败的回调函数                                       |                                                        |
| complete | Function | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）             |                                                        |

# 七、编译器（条件编译）

条件编译是用特殊的注释作为标记，在编译时根据这些特殊的注释，将注释里面的代码编译到不同平台。

### [#](https://uniapp.dcloud.net.cn/tutorial/platform.html#使用方法)使用方法

以 `#ifdef` 或 `#ifndef` 加 `%PLATFORM%` 开头，以 `#endif` 结尾。

- `#ifdef`：if defined 仅在某平台存在
- `#ifndef`：if not defined 除了某平台均存在
- `%PLATFORM%`：平台名称

| 条件编译写法                                             | 说明                                                         |
| -------------------------------------------------------- | ------------------------------------------------------------ |
| #ifdef **APP-PLUS** 需条件编译的代码 #endif              | 仅出现在 App 平台下的代码                                    |
| #ifndef **H5** 需条件编译的代码 #endif                   | 除了 H5 平台，其它平台均存在的代码（注意if后面有个n）        |
| #ifdef **H5** \|\| **MP-WEIXIN** 需条件编译的代码 #endif | 在 H5 平台或微信小程序平台存在的代码（这里只有\|\|，不可能出现&&，因为没有交集） |

**`%PLATFORM%`** 可取值：

| 值                      | 生效条件                                                     | 版本支持         |
| :---------------------- | :----------------------------------------------------------- | :--------------- |
| VUE3                    | uni-app js引擎版用于区分vue2和3，[详情](https://ask.dcloud.net.cn/article/37834) | HBuilderX 3.2.0+ |
| VUE2                    | uni-app js引擎版用于区分vue2和3，[详情](https://ask.dcloud.net.cn/article/37834) |                  |
| UNI-APP-X               | 用于区分是否是uni-app x项目 [详情](https://uniapp.dcloud.net.cn/tutorial/platform.html#uni-app-x) | HBuilderX 3.9.0+ |
| uniVersion              | 用于区分编译器的版本 [详情](https://uniapp.dcloud.net.cn/tutorial/platform.html#universion) | HBuilderX 3.9.0+ |
| APP                     | App                                                          |                  |
| APP-PLUS                | uni-app js引擎版编译为App时                                  |                  |
| APP-PLUS-NVUE或APP-NVUE | App nvue 页面                                                |                  |
| APP-ANDROID             | App Android 平台 [详情](https://uniapp.dcloud.net.cn/tutorial/platform.html#uts) |                  |
| APP-IOS                 | App iOS 平台 [详情](https://uniapp.dcloud.net.cn/tutorial/platform.html#uts) |                  |
| H5                      | H5（推荐使用 `WEB`）                                         |                  |
| WEB                     | web（同`H5`）                                                | HBuilderX 3.6.3+ |
| MP-WEIXIN               | 微信小程序                                                   |                  |
| MP-ALIPAY               | 支付宝小程序                                                 |                  |
| MP-BAIDU                | 百度小程序                                                   |                  |
| MP-TOUTIAO              | 抖音小程序                                                   |                  |
| MP-LARK                 | 飞书小程序                                                   |                  |
| MP-QQ                   | QQ小程序                                                     |                  |
| MP-KUAISHOU             | 快手小程序                                                   |                  |
| MP-JD                   | 京东小程序                                                   |                  |
| MP-360                  | 360小程序                                                    |                  |
| MP                      | 微信小程序/支付宝小程序/百度小程序/抖音小程序/飞书小程序/QQ小程序/360小程序 |                  |
| QUICKAPP-WEBVIEW        | 快应用通用(包含联盟、华为)                                   |                  |
| QUICKAPP-WEBVIEW-UNION  | 快应用联盟                                                   |                  |
| QUICKAPP-WEBVIEW-HUAWEI | 快应用华为                                                   |                  |

支持的文件：

- .vue/.nvue/.uvue
- .js/.uts
- .css
- pages.json
- 各预编译语言文件，如：.scss、.less、.stylus、.ts、.pug

**注意：**

- 条件编译是利用注释实现的，在不同语法里注释写法不一样，js/uts使用 `// 注释`、css 使用 `/* 注释 */`、vue/nvue/uvue 模板里使用 `<!-- 注释 -->`；

- 条件编译APP-PLUS包含APP-NVUE和APP-VUE，APP-PLUS-NVUE和APP-NVUE没什么区别，为了简写后面出了APP-NVUE ；

- 对于未定义平台名称，可能是名称写错了，也可能是低版本HBuilderX还不认识这个平台。此时的条件编译，`#ifdef` 中的代码不会生效，而 `#ifndef` 中的代码会生效；

- 使用条件编译请保证`编译前`和`编译后`文件的语法正确性，即要保障无论条件编译是否生效都能通过语法校验。比如：json文件中不能有多余的逗号，js中不能重复导入；

  JSON 错误示例

  JSON 正确示例

  ```json
  {
    "key": "a",
    // #ifdef MP-WEIXIN
    "key": "b"
    // #endif
  }
  ```

  复制代码

  JS 错误示例

  JS 正确示例

  ```js
  // #ifdef MP-WEIXIN
  import a from 'a/wx'
  // #endif
  // #ifndef MP-WEIXIN
  import a from 'a/index'
  // #endif
  ```

  复制代码

- `VUE3` 需要在项目的 `manifest.json` 文件根节点配置 `"vueVersion" : "3"`；

### [#](https://uniapp.dcloud.net.cn/tutorial/platform.html#api-的条件编译)API 的条件编译

```javascript
// #ifdef  %PLATFORM%
平台特有的API实现
// #endif
```

示例，如下代码仅在 App 下出现:

![img](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/platform-7.png)

示例，如下代码不会在 H5 平台上出现：

![img](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/platform-6.png)

除了支持单个平台的条件编译外，还支持**多平台**同时编译，使用 || 来分隔平台名称。

示例，如下代码会在 App 和 H5 平台上出现：

![img](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/platform-5.png)

### [#](https://uniapp.dcloud.net.cn/tutorial/platform.html#组件的条件编译)组件的条件编译

```html
<!--  #ifdef  %PLATFORM% -->
平台特有的组件
<!--  #endif -->
```

示例，如下公众号关注组件仅会在微信小程序中出现：

```html
<view>
    <view>微信公众号关注组件</view>
    <view>
        <!-- uni-app未封装，但可直接使用微信原生的official-account组件-->
        <!-- #ifdef MP-WEIXIN -->
		        <official-account></official-account>
		    <!-- #endif -->
    </view>
</view>
```

复制代码

### [#](https://uniapp.dcloud.net.cn/tutorial/platform.html#样式的条件编译)样式的条件编译

```css
/*  #ifdef  %PLATFORM%  */
平台特有样式
/*  #endif  */
```

**注意：** 样式的条件编译，无论是 css 还是 sass/scss/less/stylus 等预编译语言中，必须使用 `/*注释*/` 的写法。

正确写法

![img](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/platform-2.png)

错误写法

![img](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/platform-3.png)

### [#](https://uniapp.dcloud.net.cn/tutorial/platform.html#pages-json-的条件编译)pages.json 的条件编译

下面的页面，只有运行至 App 时才会编译进去。

![img](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/platform-4.png)

不同平台下的特有功能，以及小程序平台的分包，都可以通过 pages.json 的条件编译来更好地实现。这样，就不会在其它平台产生多余的资源，进而减小包体积。

json的条件编译，如不同平台的key名称相同，cli项目下开发者自己安装的校验器会报错，需自行关闭这些校验器对json相同key的校验规则。如果使用HBuilderX的校验器，无需在意此问题，HBuilderX的语法校验器为此优化过。

### [#](https://uniapp.dcloud.net.cn/tutorial/platform.html#static)static 目录的条件编译

这里也解释了 `static` 内的哪些目录是特殊的。

在不同平台，引用的静态资源可能也存在差异，通过 static 的条件编译可以解决此问题，`static` 目录下新建不同平台的专有目录，目录名称均为 **小写**

|  目录名称   |         说明         |   版本支持   |
| :---------: | :------------------: | :----------: |
|  app-plus   | app（推荐使用`app`） |              |
|     app     |         app          | uni-app 3.9+ |
|     h5      | H5（推荐使用`web`）  |              |
|     web     |         web          | uni-app 3.9+ |
|  mp-weixin  |      微信小程序      |              |
|  mp-alipay  |     支付宝小程序     |              |
|  mp-baidu   |      百度小程序      |              |
|    mp-qq    |       QQ小程序       |              |
| mp-toutiao  |      抖音小程序      |              |
|   mp-lark   |      飞书小程序      |              |
| mp-kuaishou |      快手小程序      |              |
|    mp-jd    |      京东小程序      |              |

专有目录下的静态资源只有在特定平台才会编译进去。

如以下目录结构，`a.png` 只有在微信小程序平台才会编译进去，`b.png` 在所有平台都会被编译。

```text
┌─static
│  ├─mp-weixin
│  │  └─a.png
│  └─b.png
├─main.js
├─App.vue
├─manifest.json
└─pages.json
```

复制代码

**注意**

- 自HBuilderX3.9+起，App平台static目录同时支持app、app-plus目录，Web平台static目录同时支持web、h5目录
- 自HBuilderX3.98+起，编译时增加 static 下被忽略的非当前平台专有目录提示信息，如static下同时存在app、web，运行到web时，会提示static/app已被忽略

### [#](https://uniapp.dcloud.net.cn/tutorial/platform.html#整体目录条件编译)整体目录条件编译

如果想把各平台的页面文件更彻底的分开，也可以在uni-app项目根目录创建`platforms`目录，然后在下面进一步创建`app-plus`、`mp-weixin`等子目录，存放不同平台的文件。

**注意**

- `platforms`目录下只支持放置页面文件（即页面vue文件），如果需要对其他资源条件编译，建议使用[static 目录的条件编译](https://uniapp.dcloud.net.cn/tutorial/platform.html#static)。

### [#](https://uniapp.dcloud.net.cn/tutorial/platform.html#uts)uts 的条件编译

对于`APP-ANDROID`和`APP-IOS`两个平台，

- 在uni-app项目中，仅uts文件中支持（通常是uts插件里使用）
- 在uni-app x项目中，只要是条件编译支持的文件，均可以使用

```javascript
// #ifdef  %PLATFORM%
平台特有的API实现
// #endif
```

### [#](https://uniapp.dcloud.net.cn/tutorial/platform.html#uni-app-x)uni-app x项目的条件编译

使用`UNI-APP-X`条件编译，来区分uni-app x项目和uni-app项目。

uni-app x项目

uni-app项目

```js
// #ifdef UNI-APP-X
代码会生效
// #endif
// #ifndef UNI-APP-X
代码不会生效
// #endif
```

复制代码

### [#](https://uniapp.dcloud.net.cn/tutorial/platform.html#universion)版本的条件编译

> HBuilderX 3.9+

插件作者的插件，需要适配各种插件使用者，使用者的uni-app版本，可能有很多。

有些问题可以在运行期判断适配，有些则需要在编译器处理，尤其是不处理可能会导致低版本编译失败的情况。

为此，uni-app的条件编译新增了`uniVersion`。在uni-app和uni-app x中均可使用。

```javascript
// #ifdef  uniVersion > 3.9
编译器版本大于3.9时生效
// #endif
```

注意，从HBuilderX 3.9起，版本号将由三段式字符串改为小数。

即HBuilderX 3.9.1，将改为 3.91。

这样条件编译判断时，仅需输入一个数字即可。

注意低于3.9版本的HBuilderX的条件编译不识别`uniVersion`。

### [#](https://uniapp.dcloud.net.cn/tutorial/platform.html#hbuilderx-支持)HBuilderX 支持

HBuilderX 为 `uni-app` 的条件编译提供了丰富的支持:

**代码块支持**

在 HBuilderX 中开发 `uni-app` 时，通过输入 **ifdef** 可快速生成条件编译的代码片段

![img](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-022402.png)

**语法高亮**

在 HBuilderX 中对条件编译的代码注释部分提供了语法高亮，可分辨出写法是否正确，使得代码更加清晰（独立js文件需在编辑器右下角切换javascript es6+编辑器，独立css文件暂不支持高亮，但不高亮不影响使用）

![img](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-012403.png)

**正确注释和快速选中**

在 HBuilderX 中，ctrl+alt+/ 即可生成正确注释（js：`// 注释`、css：`/* 注释 */`、vue/nvue模板： `<!-- 注释 -->`）。

![img](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni2019012801.png)

点击 **ifdef** 或 **endif** 可快速选中条件编译部分；点击左侧的折叠图标，可折叠条件编译部分代码。

![img](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-012501.png)

### [#](https://uniapp.dcloud.net.cn/tutorial/platform.html#注意)注意

- Android 和 iOS 平台不支持通过条件编译来区分，如果需要区分 Android、iOS 平台，请通过调用 uni.getSystemInfo 来获取平台信息。支持`ifios`、`ifAndroid`代码块，可方便编写判断。
- 有些跨端工具可以提供js的条件编译或多态，但这对于实际开发远远不够。uni-app不止是处理js，任何代码都可以多端条件编译，才能真正解决实际项目的跨端问题。另外所谓多态在实际开发中会造成大量冗余代码，很不利于复用和维护。举例，微信小程序主题色是绿色，而百度支付宝小程序是蓝色，你的应用想分平台适配颜色，只有条件编译是代码量最低、最容易维护的。
- 有些公司的产品运营总是给不同平台提不同需求，但这不是拒绝uni-app的理由。关键在于项目里，复用的代码多还是个性的代码多，正常都是复用的代码多，所以仍然应该多端。而个性的代码放到不同平台的目录下，差异化维护。
