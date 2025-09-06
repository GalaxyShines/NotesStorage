# 后端向前端传输图片+前端的请求与接收处理

## 前言：

本文示例文件结构图：

![图001-001](./assets/img/001-001.png)

<p align=center>图001-001</p>

> 红框为常用文件

## 一、前端发送请求（Axios）

```javascript
axios.get(REQ_BASE_URL + '/user/ulogo', {   // REQ_BASE_URL是我在api/index.js中的变量，记录了请求路径的主体部分，比如http://localhost:8080，这样只需要在一处进行修改就能改变全局的axios请求路径主体
      params: {
        uname: this.uname  // 携带一个参数uname，该参数在SpringBoot中使用@RequestParam接收
      },
      responseType: 'blob'  // 指定返回类型为二进制类型
    })
      .then((response) => {
        const imgElement = document.getElementById('showww')  // 获取html中id对应的元素
        const imageUrl = URL.createObjectURL(response.data)		// 不知道作用，照搬的
        imgElement.src = imageUrl  // 将img对象的src设置为imageUrl
      })
      .catch((error) => {
        console.log(error)  // 错误捕捉处理
      })
```

## 二、后端接收处理请求

在[图001-001]的UserController.java中，使用了以下代码用于创建接口和接收参数

注意：import按需导入

代码有删减

```java
package com.example.eatapp.controller;

import com.example.eatapp.entity.User;
import com.example.eatapp.mapper.UserMapper;
//import org.springframework.core.io.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserMapper userMapper;
    @CrossOrigin(origins = "*", maxAge = 3600)
    @GetMapping("/ulogo")
    public ResponseEntity<org.springframework.core.io.Resource> getUserLogo(@RequestParam String uname) throws IOException {
        // 查询数据库获取user_logo_url字段
        String userLogoUrl = userMapper.getUserLogoUrl(uname);

        // 构建图片文件路径
        Path imagePath = Paths.get(userLogoUrl);
        org.springframework.core.io.Resource imageResource = new UrlResource(imagePath.toUri());

        // 返回图片文件
        return ResponseEntity.ok()
                .contentType(MediaType.IMAGE_JPEG) // 根据实际图片类型设置contentType
                .body(imageResource);
    }
}
```

在UserMapper.java中

```java
package com.example.eatapp.mapper;

import com.example.eatapp.entity.User;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
@Mapper
@Component
@Repository


public interface UserMapper {
    @Select("SELECT user_logo_url FROM userinfo WHERE uname = #{uname}")
    String getUserLogoUrl(String uname);

}
```

