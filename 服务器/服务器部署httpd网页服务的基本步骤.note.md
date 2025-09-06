# 服务器部署httpd网页服务

## 1.检查更新

```shell
yum update
```

## 2.下载httpd

```shell
yum install httpd
```

## 3.在云服务器安全组（防火墙）开放http（80）和https（443）

## 4.将网站放置于路径/var/www/html