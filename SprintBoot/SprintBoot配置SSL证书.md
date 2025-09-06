1、 在`application.properties`或`application.yml`中添加以下内容

```properties
server.ssl.key-store=pfx证书在服务器的路径
server.ssl.key-store-password=f80qrbfr
server.ssl.key-store-type=PKCS12
server.ssl.enabled=true
```

2、 将ssl证书pfx文件放在设置的路径