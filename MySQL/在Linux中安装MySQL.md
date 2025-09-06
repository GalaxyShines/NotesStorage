# 在Linux中安装MySQL的步骤

## 1.1 MySQL安装

### 1.1.1 下载wget命令

```
yum -y install wget
```

### 1.1.2 在线下载MySQL安装包

```
wget https://dev.mysql.com/get/mysql57-community-release-el7-8.noarch.rpm
```

### 1.1.3 安装MySQL

```
rpm -ivh mysql57-community-release-el7-8.noarch.rpm
```

> 请确保本地没有其他版本MySQL残留，否则可能会导致安装报错

### 1.1.4 安装MySQL服务

- 首先进入`/etc/yum.repos.d/`目录

  ```
  cd /etc/yum.repos.d
  ```

- 安装MySQL服务（过程比较慢，耐心等待）

  ```
  yum -y install mysql-server
  ```

### 1.1.5 启动MySQL服务

```
systemctl start mysqld
```

## 1.2 修改MySQL临时密码

### 1.2.1 获取MySQL临时密码

```
grep 'temporary password' /var/log/mysqld.log
```

### 1.2.2 使用临时密码登录

```
mysql -u root -p
```

### 1.2.3 把MySQL的密码校验强度改为低风险

```sql
set global validate_password_policy=LOW;
```

### 1.2.4 修改MySQL密码长度

```sql
set global validate_password_length=5;
```

### 1.2.5 修改MySQL密码

```sql
ALTER USER 'root'@'localhost' IDENTIFIED BY '新密码'; 
```

### 1.2.6 退出MySQL

```sql
exit;
```



## 1.3 允许远程访问

### 1.3.1 登录MySQL

```
mysql -u root -p
```

### 1.3.2 切换到mysql数据库

```sql
use mysql;
```

### 1.3.3 查看user表

```sql
select host, user from user;
```

### 1.3.4 修改为允许任何地址访问

```sql
update user set host='%' where user='root';
```

### 1.3.5 刷新权限

```sql
flush privileges;
```



## 1.4 关闭CentOS防火墙

```sql
sudo systemctl disable firewalld
```



