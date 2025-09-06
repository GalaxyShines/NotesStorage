# MUI-窗口管理

## [页面初始化](https://mui.dcloud.net.cn/window/#pageinit)

在app开发中，若要使用[HTML5+扩展api](https://www.html5plus.org/#specification)，必须等plusready事件发生后才能正常使用，mui将该事件封装成了`mui.plusReady()`方法，涉及到HTML5+的api，建议都写在mui.plusReady方法中。如下为打印当前页面URL的示例：

```js
mui.plusReady(function(){
     console.log("当前页面URL："+plus.webview.currentWebview().getURL());
});
```

### 扩展阅读

[`mui.init()`](http://dev.dcloud.net.cn/mui/util/#init)  mui插件初始化

[`mui.ready()`](javascript:void(0);)  当DOM准备就绪时，指定一个函数来执行。

代码块激活字符:  

minit

## [创建子页面](https://mui.dcloud.net.cn/window/#subpage)

在mobile app开发过程中，经常会出现共用的导航栏或者选项卡，每次打开页面都需要重新渲染，而且容易出现卡头卡尾的现象。并且此时若使用局部滚动，在android手机上会出现滚动不流畅的问题；

mui现在提供两种解决方案:

第一种（官方推荐）：在plus环境下，使用原生titleNView以及原生tabbar来替换页面的导航栏或者选项卡。在页面打开时，渲染已经完成，让你的应用更接近原生app。具体做法：原生titleNView参考`mui.openWindow`的[示例3](https://mui.dcloud.net.cn/window/#titleNView)，原生tabbar示例参考[ask教程示例](http://ask.dcloud.net.cn/article/12602)

第二种：通过双webview模式解决，此种情况适用于需要上下拉刷新的列表页面。将需要滚动的区域通过单独的webview实现，完全使用原生滚动。具体做法则是：将目标页面分解为主页面和内容页面，主页面显示卡头卡尾区域，比如顶部导航、底部选项卡等；内容页面显示具体需要滚动的内容，然后在主页面中调用mui.init方法初始化内容页面。

```js
mui.init({
    subpages:[{
      url:your-subpage-url,//子页面HTML地址，支持本地地址和网络地址
      id:your-subpage-id,//子页面标志
      styles:{
        top:subpage-top-position,//子页面顶部位置
        bottom:subpage-bottom-position,//子页面底部位置
        width:subpage-width,//子页面宽度，默认为100%
        height:subpage-height,//子页面高度，默认为100%
        ......
      },
      extras:{}//额外扩展参数
    }]
  });
```

**参数说明：**styles表示窗口属性，参考[5+规范中的WebviewStyle](https://www.dcloud.io/docs/api/zh_cn/webview.shtml#plus.webview.WebviewStyle)；特别注意，height和width两个属性,即使不设置，也默认按100%计算；因此若设置了top值为非"0px"的情况，建议同时设置bottom值，否则5+ runtime根据高度100%计算，可能会造成页面真实底部位置超出屏幕范围的情况；left、right同理。

**示例：**Hello mui的首页其实就是index.html加list.html合并而成的，如下：

<img src="http://dev.dcloud.net.cn/mui/assets/img/hello-mui-index.png" alt="img" style="zoom:33%;" align="left"/>

index.html

+

<img src="http://dev.dcloud.net.cn/mui/assets/img/hello-mui-list.png" alt="img" style="zoom:33%;" align="left"/>

list.html

=

<img src="http://dev.dcloud.net.cn/mui/assets/img/hello-mui-list.png" alt="img" style="zoom:33%;" align="left"/>

合并后的首页

index.html的作用就是显示固定导航，list.html显示具体列表内容，列表项的滚动是在list.html所在webview中使用原生滚动，既保证了滚动条不会穿透顶部导航，符合app的体验，也保证了列表流畅滚动，解决了区域滚动卡顿的问题。 list.html就是index.html的子页面，创建代码比较简单，如下：

```js
mui.init({
    subpages:[{
      url:'list.html',
      id:'list.html',
      styles:{
        top:'45px',//mui标题栏默认高度为45px；
        bottom:'0px'//默认为0px，可不定义；
      }
    }]
  });
```

### 扩展阅读

代码块激活字符:  

misubpage

## [打开新页面](https://mui.dcloud.net.cn/window/#openwindow)

做web app，一个无法避开的问题就是转场动画；web是基于链接构建的，从一个页面点击链接跳转到另一个页面，如果通过有刷新的打开方式，用户要面对一个空白的页面等待；如果通过无刷新的方式，用Javascript移入DOM节点（常见的SPA解决方案），会碰到很高的性能挑战：DOM节点繁多，页面太大，转场动画不流畅甚至导致浏览器崩溃； mui的解决思路是：单webview只承载单个页面的dom，减少dom层级及页面大小；页面切换使用原生动画，将最耗性能的部分交给原生实现.

```js
mui.openWindow({
    url:new-page-url,
    id:new-page-id,
    styles:{
      top:newpage-top-position,//新页面顶部位置
      bottom:newage-bottom-position,//新页面底部位置
      width:newpage-width,//新页面宽度，默认为100%
      height:newpage-height,//新页面高度，默认为100%
      ......
    },
    extras:{
      .....//自定义扩展参数，可以用来处理页面间传值
    },
    createNew:false,//是否重复创建同样id的webview，默认为false:不重复创建，直接显示
    show:{
      autoShow:true,//页面loaded事件发生后自动显示，默认为true
      aniShow:animationType,//页面显示动画，默认为”slide-in-right“；
      duration:animationTime//页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
    },
    waiting:{
      autoShow:true,//自动显示等待框，默认为true
      title:'正在加载...',//等待对话框上显示的提示内容
      options:{
        width:waiting-dialog-widht,//等待框背景区域宽度，默认根据内容自动计算合适宽度
        height:waiting-dialog-height,//等待框背景区域高度，默认根据内容自动计算合适高度
        ......
      }
    }
})
```

**参数：**

- `styles`

  窗口参数，参考[5+规范中的WebviewStyle](https://www.dcloud.io/docs/api/zh_cn/webview.shtml#plus.webview.WebviewStyle)；特别注意，height和width两个属性,即使不设置，也默认按100%计算；因此若设置了top值为非"0px"的情况，建议同时设置bottom值，否则5+ runtime根据高度100%计算，可能会造成页面真实底部位置超出屏幕范围的情况；left、right同理。

- `extras`

  新窗口的额外扩展参数，可用来处理页面间传值；例如：

  ```js
  var webview = mui.openWindow({
  	url:'info.html',
  	extras:{
  		name:'mui'  //扩展参数
  	}
  });
  console.log(webview.name);//输出mui字符串
  ```

  注意：

  扩展参数仅在打开新窗口时有效，若目标窗口为预加载页面，则通过mui.openWindow方法打开时传递的extras参数无效。

  

- `createNew`

  是否重复创建相同id的webview；

  为优化性能、避免app中重复创建webview，mui v1.7.0开始增加createNew参数，默认为false；判断逻辑如下：

  - createNew参数为为true，则不判断重复，每次都新建webview；
  - createNew参数为为fasle，则先查找当前App中是否已存在同样id的webview，若存在则直接显示；否则新创建并根据show参数执行显示逻辑；

  **注意**：plusReady事件仅在webview首次创建时触发，使用`mui.openWindow`方法多次打开已存在的同样id的webview时，是不会重复触发plusReady事件的； 因此若业务写在plusReady事件中，可能会出现执行结果和预期不一致的情况；此时可通过[自定义事件](https://dev.dcloud.net.cn/mui/event/#customevent)触发； 案例参考：[mui.plusReady有时会失效](https://ask.dcloud.net.cn/question/6514);

- `show`

  窗口显示控制参数，具体参数如下：

  - autoShow：目标窗口loaded事件发生后，是否自动显示，默认为true；若为false，则仅创建但不显示webview；若目标页面为预加载页面，则该参数无效；
  - aniShow表示页面显示动画，比如从右侧划入、从下侧划入等，具体可参考[5+规范中的AnimationTypeShow](https://www.dcloud.io/docs/api/zh_cn/webview.shtml#plus.webview.AnimationTypeShow)
  - duration：显示Webview窗口动画的持续时间，单位为ms

- `waiting`

  系统等待框参数

  mui框架在打开新页面时等待框的处理逻辑为：

  显示等待框-->创建目标页面webview-->目标页面loaded事件发生-->关闭等待框；

  因此，只有当新页面为新创建页面（webview）时，会显示等待框，否则若为预加载好的页面，则直接显示目标页面，不会显示等待框。waiting中的具体参数：

  - autoShow：是否自动显示等待框，默认为true；若为false，则不显示等待框；注意：若waiting框的autoShow为true，但目标页面不自动显示，则需在目标页面中通过如下代码关闭等待框：`plus.nativeUI.closeWaiting();`
  - title：等待框上的提示文字
  - options表示等待框显示参数，比如宽高、背景色、提示文字颜色等，具体可参考[5+规范中的WaitingOption](https://www.dcloud.io/docs/api/zh_cn/nativeUI.shtml#plus.nativeUI.WaitingOption)

**示例1：**Hello mui中，点击首页右上角的图标，会打开关于页面，实现代码如下：

```js
//tap为mui封装的单击事件，可参考手势事件章节
document.getElementById('info').addEventListener('tap', function() {
  //打开关于页面
  mui.openWindow({
    url: 'examples/info.html', 
    id:'info'
  });
});
```

因没有传入styles参数，故默认全屏显示；也没有传入show参数，故使用slide-in-right动画，新页面从右侧滑入。

**示例2：**从A页面打开B页面，B页面为一个需要从服务端加载的列表页面，若在B页面loaded事件发生时就将其显示出来，因服务器数据尚未加载完毕，列表页面为空，用户体验不好；可通过如下方式改善用户体验（最好的用户体验应该是通过[预加载](https://mui.dcloud.net.cn/window/#preload)的方式）：第一步，B页面loaded事件发生后，不自动显示；

```js
//A页面中打开B页面，设置show的autoShow为false，则B页面在其loaded事件发生后，不会自动显示；
mui.openWindow({
    url: 'B.html', 
    show:{
      autoShow:false
    }
  });
```

第二步，在B页面获取列表数据后，再关闭等待框、显示B页面

```js
//B页面onload从服务器获取列表数据；
window.onload = function(){
  //从服务器获取数据
  ....
  //业务数据获取完毕，并已插入当前页面DOM；
  //注意：若为ajax请求，则需将如下代码放在处理完ajax响应数据之后；
  mui.plusReady(function(){
    //关闭等待框
    plus.nativeUI.closeWaiting();
    //显示当前页面
    mui.currentWebview.show();
  });
}
```

### 扩展阅读

代码块激活字符:  

mopenwindow

## [打开带原生导航栏的新页面](https://mui.dcloud.net.cn/window/#openWindowWithTitle)

使用父子 webview 或者同屏显示多个 webview 的性能和资源消耗较大。非必要不推荐使用同屏多 webview 的方案，推荐使用原生导航栏方案代替。可以加快窗体进入速度，内存占用更少。

通过在 mui.openWindow 的 styles 节点中设置 titleNView 节点的相关参数，可实现绘制原生导航栏控件，具体可参考 5+ webviewStyles 中的 titleNView 节点中的[ WebviewTitleNViewStyles ](http://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewTitleNViewStyles)的详细文档。示例如下：

```js
mui.openWindow({
  url: webviewUrl,
  id: webviewId,
  styles: {                             // 窗口参数 参考5+规范中的WebviewStyle,也就是说WebviewStyle下的参数都可以在此设置
    titleNView: {                       // 窗口的标题栏控件
      titleText:"标题栏",                // 标题栏文字,当不设置此属性时，默认加载当前页面的标题，并自动更新页面的标题
      titleColor:"#000000",             // 字体颜色,颜色值格式为"#RRGGBB",默认值为"#000000"
      titleSize:"17px",                 // 字体大小,默认17px
      backgroundColor:"#F7F7F7",        // 控件背景颜色,颜色值格式为"#RRGGBB",默认值为"#F7F7F7"
      progress:{                        // 标题栏控件的进度条样式
        color:"#00FF00",                // 进度条颜色,默认值为"#00FF00"  
        height:"2px"                    // 进度条高度,默认值为"2px"         
      },
      splitLine:{                       // 标题栏控件的底部分割线，类似borderBottom
        color:"#CCCCCC",                // 分割线颜色,默认值为"#CCCCCC"  
        height:"1px"                    // 分割线高度,默认值为"2px"
      }
    }
  }
});
```

**说明：**老版本的 `mui.openWindowWithTitle` 已经废除。

## [关闭页面](https://mui.dcloud.net.cn/window/#closewindow)

mui框架将窗口关闭功能封装在`mui.back`方法中，具体执行逻辑是：

- 若当前webview为预加载页面，则hide当前webview；
- 否则，close当前webview；

在mui框架中，有三种操作会触发页面关闭（执行mui.back方法）：

- 点击包含`.mui-action-back`类的控件
- 在屏幕内，向右快速滑动
- Android手机按下back按键

#### iOS平台原生支持从屏幕边缘右滑关闭

iOS平台可通过popGesture参数实现从屏幕边缘右滑关闭webview，参考[5+规范](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewStyle)，若想禁用该功能，可通过setStyle方法设置popGesture为none。

hbuilder中敲`mheader`生成的代码块，会自动生成带有返回导航箭头的标题栏，点击返回箭头可关闭当前页面，原因就是因为该返回箭头包含`.mui-action-back`类，代码如下：

```html
<header class="mui-bar mui-bar-nav">
	<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
	<h1 class="mui-title">标题</h1>
</header>
```

若希望在顶部导航栏之外的其它区域添加关闭页面的控件，只需要在对应控件上添加`.mui-action-back`类即可，如下为一个关闭按钮示例：

```html
<button type="button" class='mui-btn mui-btn-danger mui-action-back'>关闭</button>
```

mui框架封装的页面右滑关闭功能，默认未启用，若要使用右滑关闭功能，需要在`mui.init();`方法中设置swipeBack参数，如下：

```javascript
mui.init({
	swipeBack:true //启用右滑关闭功能
});
```

mui框架默认会监听Android手机的back按键，然后执行页面关闭逻辑； 若不希望mui自动处理back按键，可通过如下方式关闭mui的back按键监听；

```javascript
mui.init({
	keyEventBind: {
		backbutton: false  //关闭back按键监听
	}
});
```

除了如上三种操作外，也可以直接调用`mui.back()`方法，执行窗口关闭逻辑；

`mui.back()`仅处理窗口逻辑，若希望在窗口关闭之前再处理一些其它业务逻辑，则可将业务逻辑抽象成一个具体函数，然后注册为mui.init方法的beforeback参数;beforeback的执行逻辑为：

- 执行beforeback参数对应的函数若返回false，则不再执行`mui.back()`方法；
- 否则（返回true或无返回值），继续执行`mui.back()`方法；

示例：从列表打开详情页面，从详情页面再返回后希望刷新列表界面，此时可注册beforeback参数，然后通过[自定义事件](https://mui.dcloud.net.cn/event/#customevent)通知列表页面刷新数据，示例代码如下：

```js
mui.init({
	beforeback: function(){
		//获得列表界面的webview
		var list = plus.webview.getWebviewById('list');
		//触发列表界面的自定义事件（refresh）,从而进行数据刷新
		mui.fire(list,'refresh');
		//返回true，继续页面关闭逻辑
		return true;
	}
});
```

注意：beforeback的执行返回必须是同步的（阻塞模式），若使用nativeUI这种异步js（非阻塞模式），则可能会出现意想不到的结果；比如：通过`plus.nativeUI.confirm()`弹出确认框，可能用户尚未选择，页面已经返回了（beforeback同步执行完毕，无返回值，继续执行`mui.back()`方法，nativeUI不会阻塞js进程）：在这种情况下，若要自定义业务逻辑，就需要复写`mui.back`方法了；如下为一个自定义示例，每次都需要用户确认后，才会关闭当前页面

```js
//备份mui.back，mui.back已将窗口关闭逻辑封装的比较完善（预加载及父子窗口），因此最好复用mui.back
var old_back = mui.back;
mui.back = function(){
  var btn = ["确定","取消"];
  mui.confirm('确认关闭当前窗口？','Hello MUI',btn,function(e){
    if(e.index==0){
    	//执行mui封装好的窗口关闭逻辑；
    	old_back();
    }
  });
}
```

#### 为何设置了swipeBack: false，在iOS上依然可以右滑关闭？

iOS平台原生支持从屏幕边缘右滑关闭，这个是通过popGesture参数控制的，参考[5+规范](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewStyle)，若需禁用，可通过setStyle方法设置popGesture为none。

#### 能否通过addEventListener增加back按键监听实现自定义关闭逻辑？

addEventListener只会增加新的执行逻辑，老的监听逻辑(mui.back)依然会执行，因此，若需实现自定义关闭逻辑，一定要重写mui.back。

### 扩展阅读

代码块激活字符:  

`mback`

## [预加载](https://mui.dcloud.net.cn/window/#preload)

所谓的预加载技术就是在用户尚未触发页面跳转时，提前创建目标页面，这样当用户跳转时，就可以立即进行页面切换，节省创建新页面的时间，提升app使用体验。mui提供两种方式实现页面预加载。

方式一：通过mui.init方法中的preloadPages参数进行配置.

```js
mui.init({
  preloadPages:[
    {
      url:prelaod-page-url,
      id:preload-page-id,
      styles:{},//窗口参数
      extras:{},//自定义扩展参数
      subpages:[{},{}]//预加载页面的子页面
    }
  ],
  preloadLimit:5//预加载窗口数量限制(一旦超出,先进先出)默认不限制
});
```

该种方案使用简单、可预加载多个页面，但不会返回预加载每个页面的引用，若要获得对应webview引用，还需要通过`plus.webview.getWebviewById`方式获得；另外，因为mui.init是异步执行，执行完mui.init方法后立即获得对应webview引用，可能会失败，例如如下代码：

```js
mui.init({
  preloadPages:[
    {
      url:'list.html',
      id:'list'
    }
  ]
});
var list = plus.webview.getWebviewByid('list');//这里可能返回空；
```

方式二：通过mui.preload方法预加载.

```js
var page = mui.preload({
    url:new-page-url,
    id:new-page-id,//默认使用当前页面的url作为id
    styles:{},//窗口参数
    extras:{}//自定义扩展参数
});
```

通过`mui.preload()`方法预加载，可立即返回对应webview的引用，但一次仅能预加载一个页面；若需加载多个webview，则需多次调用`mui.preload()`方法；

如上两种方案，各有优劣，需根据具体业务场景灵活选择；

### 判断预加载是否成功

#### 方式一、通过直观现象分析

预加载页面会立即打开，不会显示等待框；非预加载页面默认会先显示等待框，再显示新页面；

#### 方式二、增加log分析预加载页面是否已创建

比如：A页面中预加载B页面，则在A页面完全加载（可通过setTimeout模拟）后，打印当前应用所有webview，看是否包含B页面的url，以此来分析。

例如：在A页面增加如下代码：

```js
mui.plusReady(function(){
	setTimeout(function(){
		var array = plus.webview.all();
		if(array){
			for(var i=0,len=array.length;i<len;i++){
			    	console.log(array[i].getURL());
		        }
		}
	},5000)
});
```

### 扩展阅读

代码块激活字符:  

`minitpreload`

`mpreload`(单个webview)