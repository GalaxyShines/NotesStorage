## [事件绑定](https://mui.dcloud.net.cn/event/#on)

除了可以使用`addEventListener()`方法监听某个特定元素上的事件外， 也可以使用`.on()`方法实现批量元素的事件绑定。

- .on( event , selector , handler )

  - **event**

    Type: [String](https://mui.dcloud.net.cn/event/)

    需监听的事件名称，例如：'tap'

  - **selector**

    Type: [String](https://mui.dcloud.net.cn/event/)

    选择器

  - **handler**

    Type: [Function](https://mui.dcloud.net.cn/event/)( [Event](https://mui.dcloud.net.cn/event/) event )

    事件触发时的回调函数，通过回调中的event参数可以获得事件详情

### 示例

点击新闻列表，获取当前列表项的id，并将该id传给新闻详情页面，然后打开新闻详情页面

```
mui(".mui-table-view").on('tap','.mui-table-view-cell',function(){
  //获取id
  var id = this.getAttribute("id");
  //传值给详情页面，通知加载新数据
  mui.fire(detail,'getDetail',{id:id});
  //打开新闻详情
  mui.openWindow({
    id:'detail',
    url:'detail.html'
  });
}) 
```

### 扩展阅读

代码块激活字符:  

mmon

## [事件取消](https://mui.dcloud.net.cn/event/#off)

使用`on()`方法绑定事件后，若希望取消绑定，则可以使用`off()`方法。 `off()`方法根据传入参数的不同，有不同的实现逻辑。

- version added: 2.0.0.off( event , selector , handler )

  - **event**

    Type: [String](https://mui.dcloud.net.cn/event/)

    需取消绑定的事件名称，例如：'tap'

  - **selector**

    Type: [String](https://mui.dcloud.net.cn/event/)

    选择器

  - **handler**

    Type: [Function](https://mui.dcloud.net.cn/event/)

    之前绑定到该元素上的事件函数，不支持匿名函数

- version added: 2.0.0.off( event , selector)

  - **event**

    Type: [String](https://mui.dcloud.net.cn/event/)

    需取消绑定的事件名称，例如：'tap'

  - **selector**

    Type: [String](https://mui.dcloud.net.cn/event/)

    选择器

- version added: 2.2.0.off( event )

  - **event**

    Type: [String](https://mui.dcloud.net.cn/event/)

    需取消绑定的事件名称，例如：'tap'

- version added: 2.2.0.off( )

  - 空参数，删除该元素上所有事件

### 示例

`off(event,selector,handle)`适用于取消对应选择器上特定事件所执行的特定回调，例如：

```
//点击li时，执行foo_1函数
mui("#list").on("tap","li",foo_1);
//点击li时，执行foo_2函数
mui("#list").on("tap","li",foo_2);

function foo_1(){
  console.log("foo_1 execute");
}

function foo_2(){
  console.log("foo_2 execute");
}
//点击li时，不再执行foo_1函数，但会继续执行foo_2函数
mui("#list").off("tap","li",foo_1);
```

`off(event,selector)`适用于取消对应选择器上特定事件的所有回调，例如：

```
//点击li时，执行foo_1函数
mui("#list").on("tap","li",foo_1);
//点击li时，执行foo_2函数
mui("#list").on("tap","li",foo_2);

function foo_1(){
  console.log("foo_1 execute");
}

function foo_2(){
  console.log("foo_2 execute");
}
//点击li时，foo_2、foo_2两个函数均不再执行
mui("#list").off("tap","li");
```

`off(event)`适用于取消当前元素上绑定的特定事件的所有回调，例如：

```
//点击li时，执行foo_1函数
mui("#list").on("tap","li",foo_1);
//点击p时，执行foo_3函数
mui("#list").on("tap","p",foo_3);

function foo_1(){
  console.log("foo_1 execute");
}

function foo_3(){
  console.log("foo_3 execute");
}
//点击li时，不再执行foo_1函数；点击p时，也不再执行foo_3函数
mui("#list").off("tap");
```

`off()`适用于取消当前元素上绑定的所有事件回调，例如：

```
//点击li时，执行foo_1函数
mui("#list").on("tap","li",foo_1);
//双击li时，执行foo_4函数
mui("#list").on("doubletap","li",foo_4);
//点击p时，执行foo_3函数
mui("#list").on("tap","p",foo_3);

function foo_1(){
  console.log("foo_1 execute");
}

function foo_3(){
  console.log("foo_3 execute");
}

function foo_4(){
  console.log("foo_4 execute");
}
//点击li时，不再执行foo_1函数；点击p时，也不再执行foo_3函数；双击li时，也不再执行foo_4函数；
mui("#list").off();
```

### 扩展阅读

代码块激活字符:  

mmoff

## [事件触发](https://mui.dcloud.net.cn/event/#trigger)

使用`mui.trigger()`方法可以动态触发特定DOM元素上的事件。

- .trigger( element , event , data )

  - **element**

    Type: [Element](https://mui.dcloud.net.cn/event/)

    触发事件的DOM元素

  - **event**

    Type: [String](https://mui.dcloud.net.cn/event/)

    事件名字，例如：'tap'、'swipeleft'

  - **data**

    Type: [Object](https://mui.dcloud.net.cn/event/)

    需要传递给事件的业务参数

### 示例

自动触发按钮的点击事件：

```
var btn = document.getElementById("submit");
//监听点击事件
btn.addEventListener("tap",function () {
  console.log("tap event trigger");
});
//触发submit按钮的点击事件
mui.trigger(btn,'tap');
```

#### 部分mui控件监听的事件无法通过`mui.trigger`触发

比如无法实现自动触发mui返回图标，实现关闭当前页面的功能，该部分逻辑正在优化中

### 扩展阅读

代码块激活字符:  

mtrigger

## [手势事件](https://mui.dcloud.net.cn/event/#gesture)

在开发移动端的应用时，会用到很多的手势操作，比如滑动、长按等，为了方便开放者快速集成这些手势，mui内置了常用的手势事件，目前支持的手势事件见如下列表：

| 分类       | 参数      | 描述     |
| :--------- | :-------- | :------- |
| 点击       | tap       | 单击屏幕 |
| doubletap  | 双击屏幕  |          |
| 长按       | longtap   | 长按屏幕 |
| hold       | 按住屏幕  |          |
| release    | 离开屏幕  |          |
| 滑动       | swipeleft | 向左滑动 |
| swiperight | 向右滑动  |          |
| swipeup    | 向上滑动  |          |
| swipedown  | 向下滑动  |          |
| 拖动       | dragstart | 开始拖动 |
| drag       | 拖动中    |          |
| dragend    | 拖动结束  |          |

### 手势事件配置

根据使用频率，mui默认会监听部分手势事件，如点击、滑动事件；为了开发出更高性能的moble App，mui支持用户根据实际业务需求，通过mui.init方法中的gestureConfig参数，配置具体需要监听的手势事件，。

 

```
mui.init({
  gestureConfig:{
   tap: true, //默认为true
   doubletap: true, //默认为false
   longtap: true, //默认为false
   swipe: true, //默认为true
   drag: true, //默认为true
   hold:false,//默认为false，不监听
   release:false//默认为false，不监听
  }
});
```

**注意:**dragstart、drag、dragend共用drag开关，swipeleft、swiperight、swipeup、swipedown共用swipe开关

### 事件监听

单个元素上的事件监听，直接使用`addEventListener()`即可，如下：

```
elem.addEventListener("swipeleft",function(){
     console.log("你正在向左滑动");
});
```

若多个元素执行相同逻辑，则建议使用[事件绑定(`on()`)](https://mui.dcloud.net.cn/event/#on)。

### 扩展阅读

代码块激活字符:  

minitgesture

## [自定义事件](https://mui.dcloud.net.cn/event/#customevent)

在App开发中，经常会遇到页面间传值的需求，比如从新闻列表页进入详情页，需要将新闻id传递过去； Html5Plus规范设计了[evalJS](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewObject.evalJS)方法来解决该问题； 但evalJS方法仅接收字符串参数，涉及多个参数时，需要开发人员手动拼字符串； 为简化开发，mui框架在evalJS方法的基础上，封装了自定义事件，通过自定义事件，用户可以轻松实现多webview间数据传递。

#### 仅能在5+ App及流应用中使用

因为是多webview之间传值，故无法在手机浏览器、微信中使用；

### 监听自定义事件

添加自定义事件监听操作和标准js事件监听类似，可直接通过window对象添加，如下：

```
window.addEventListener('customEvent',function(event){
  //通过event.detail可获得传递过来的参数内容
  ....
});
```

**触发自定义事件**

通过`mui.fire()`方法可触发目标窗口的自定义事件：

- .fire( target , event , data )

  - **target**

    Type: [WebviewObject](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewObject)

    需传值的目标webview

  - **event**

    Type: [String](https://mui.dcloud.net.cn/event/)

    自定义事件名称

  - **data**

    Type: [JSON](https://mui.dcloud.net.cn/event/)

    json格式的数据

#### 目标webview必须触发loaded事件后才能使用自定义事件

若新创建一个webview，不等该webview的loaded事件发生，就立即使用webview.evalJS()或mui.fire(webview,'eventName',{})，则可能无效；案例参考：[这里](https://ask.dcloud.net.cn/question/11022)

### 示例

假设如下场景：从新闻列表页面进入新闻详情页面，新闻详情页面为共用页面，通过传递新闻ID通知详情页面需要显示具体哪个新闻，详情页面再动态向服务器请求数据，mui要实现类似需求可通过如下步骤实现：

- 在列表页面中预加载详情页面（假设为detail.html）
- 列表页面在点击新闻标题时，首先，获得该新闻id，触发详情页面的newsId事件，并将新闻id作为事件参数传递过去；然后再打开详情页面；
- 详情页面监听newsId自定义事件



列表页面代码如下：

```
//初始化预加载详情页面
mui.init({
  preloadPages:[{
    id:'detail.html',
    url:'detail.html'           
  }
  ]
});

var detailPage = null;
//添加列表项的点击事件
mui('.mui-content').on('tap', 'a', function(e) {
  var id = this.getAttribute('id');
  //获得详情页面
  if(!detailPage){
    detailPage = plus.webview.getWebviewById('detail.html');
  }
  //触发详情页面的newsId事件
  mui.fire(detailPage,'newsId',{
    id:id
  });
//打开详情页面          
  mui.openWindow({
    id:'detail.html'
  });
});  
```

详情页面代码如下：

```
//添加newId自定义事件监听
window.addEventListener('newsId',function(event){
  //获得事件参数
  var id = event.detail.id;
  //根据id向服务器请求新闻详情
  .....
});
```

### 扩展阅读

代码块激活字符:  

mfire