## 选择器的使用

## 依赖导入

<span style="color:red">*</span>poppicker组件依赖`mui.picker.js/.css` `mui.poppicker.js/.css`请务必在mui.js/css后中引用,也可统一引用 压缩版本:`mui.picker.min.js/.css`

## 一、PopPicker

```js
 var picker = new mui.PopPicker({
     layer: 2
 }); 

picker.setData([{
    value: '110000',
    text: '北京市',
    children: [{
            value: "110101",
            text: "东城区"
    }]
}, {
    value: '120000',
    text: '天津市',
    children: [{
        value: "120101",
        text: "和平区"
    }, {
        value: "120102",
        text: "河东区"
    }, {
        value: "120104",
        text: "南开区"
    }
    ]
}])
```