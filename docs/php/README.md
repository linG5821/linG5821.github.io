## 环境搭建
### Homestead 搭建基本环境
  1. 拉取项目，添加env文件,并将项目放入虚拟机的映射文件中
  2. 修改项目权限，简单起见chmod 777
  3. 配置Homestead.yml文件的项目访问域名映射
  4. 修改/etc/hosts 文件,添加域名和IP的映射解析 例如:192.168.10.10  homestead.linde
  5. vagrant up --provision 启动虚拟机
  6. vagrant ssh 连接虚拟机 进入映射项目目录执行composer install 安装项目依赖
  7. sudo killall -HUP mDNSResponder 刷新hosts文件的修改
  8. PHP远程调试携带参数:Cookie: XDEBUG_SESSION=PHPSTORM
  9. homestead nginx 配置php版本修改重启失效,可以在Homestead.yaml文件中单独指定每个站点的php版本，此时虚拟机的nginx配置改变
  
      ```yaml
          - map: homestead.linde
            to: /home/vagrant/code/linde_web/public
            php: "7.1"
      ```
### Docker 搭建基本环境
  1. Docker安装
    * 官网地址： https://www.docker.com/  
    * 下载地址： https://www.docker.com/get-started
    * **安装步骤不在赘述。**

  2. 获取开发环境PHP docker镜像

      ```
      # github项目地址： https://github.com/Laradock/laradock
      # 克隆代码 克隆的位置比较敏感，PHP Workspace会以克隆地址目录作为基础。
      git clone git@github.com:laradock/laradock.git
      ```
  3. 拉取部署镜像，首先要配置好docker的国内的源，用来加速镜像。配置位于： ~/.docker/daemon.json

      ```json
      {
      "registry-mirrors": [
          "https://registry.docker-cn.com",
          "https://dockerhub.azk8s.cn",
          "https://reg-mirror.qiniu.com"
      ],
      "insecure-registries": [],
      "debug": true,
      "experimental": false
      }
      ```
  4. 复制切换到源码目录，打开终端构建镜像。这要花费一定的时间。
    
      ```
      docker-compose build
      ```

  5. 启动PHP工作容器。
    <p>根据自己的需要启动组件。比如mysql，redis，mongo之类的。nginx应该是必须要的这样访问localhost可以看到自己的项目</p>
    <p>还有一些组件laradock_php-fpm，laradock_workspace是默认启动的，因为其他组件依赖这些组件。而且这些组件也算是基础必须的组件了。</p>
    
      ```
      docker-compose up -d nginx mysql
      ```

  6. 构建第一个项目
    在这之前已经顺利启动了相关组件以及workspace。 通过“docker-compose ps”命令查看启用状况。 
    
      ```
              Name                          Command              State                    Ports
      --------------------------------------------------------------------------------------------------------------
      laradock_docker-in-docker_1   dockerd-entrypoint.sh           Up      2375/tcp
      laradock_mysql_1              docker-entrypoint.sh mysqld     Up      0.0.0.0:3306->3306/tcp, 33060/tcp
      laradock_nginx_1              /bin/bash /opt/startup.sh       Up      0.0.0.0:443->443/tcp, 0.0.0.0:80->80/tcp
      laradock_php-fpm_1            docker-php-entrypoint php-fpm   Up      9000/tcp
      laradock_workspace_1          /sbin/my_init                   Up      0.0.0.0:2222->22/tcp
      ```

  7. 在这里需要作出一些说明
     - PHP所需要的SDK和Runtime已经安装在了docker容器中，并且容器正在运行。
     - 想要创建新的项目，只能利用容器。因为主机只有docker，docker容器中才有SDK。
     - docker利用和主机共享目录的方式创建项目和开发项目。主机利用共享目录开发，容器利用共享目录支撑运行。
 
  8. 进入workspace容器
  
      ```
      docker-compose exec --user=laradock workspace bash
      ```
      ::: tip
      **必须使用laradock用户权限进入创建项目。如果用root权限创建是不行的，具体会有提示。** 
      :::

  9. 脚手架安装和使用
      * 创建项目的命令包括:（没有配置国内源，先配置。见下）
      
          ```
          composer create-project laravel/laravel demo
          # or
          laravel new demo
          ```
      * 其中laravel脚手架需要额外进行安装。安装完就可以用脚手架搭建项目了。
      
          ```
          composer global require laravel/installer
          ```

      * 进入容器后，使用脚手架需要配置国内源，否则很难创建项目。
      
          ```
          composer config -g repo.packagist composer https://packagist.phpcomposer.com
          ```
  10. 运行之前，这里需要修改
    
        ```
        # 修改.env文件，将基础目录直接映射至自己的项目。
        # Point to the path of your applications code on your host
        APP_CODE_PATH_HOST=../wwwroot/demo

        # 重启niginx
        docker-compose up -d nginx
        ```

  11. 运行

  打开[http://localhost](http://localhost)此时应该会显示Laravel的项目开始图片。
  ![image](https://laravelacademy.org/wp-content/uploads/2017/09/15051482331119.jpg)
  <center><font size=32>GOOD LUCK</font></center>


  一些有用的网址以及教程参考：  
  [https://laravel.com/](https://note.youdao.com/)

  [https://laravel.com/docs/5.7](https://note.youdao.com/)
  
  [https://pkg.phpcomposer.com/](https://pkg.phpcomposer.com/)

  [https://laravelacademy.org/post/7691.html](https://laravelacademy.org/post/7691.html])

  [https://laravelacademy.org/post/6569.html](https://laravelacademy.org/post/6569.html)

  [https://learnku.com/articles/14767/](https://learnku.com/articles/14767/)

  [self-built-laravel-docker-development-environment](https://note.youdao.com/)

### AMQP 扩展安装
  1. 安装 rabbitmq-c

      ```shell
      git clone https://github.com/alanxz/rabbitmq-c.git
      cd rabbitmq-c/
      mkdir build && cd build
      # 这一步是在rabbitmq-c的根目录下创建一个build子目录
      cmake -DCMAKE_INSTALL_PREFIX=/usr/local/rabbitmq-c ..
      # 这一步是让cmake根据../CMakeList.txt，即rabbitmq-c的根目录下的CMakeList.txt创建Makefile文件，Makefile文件会被创建到build目录中
      cmake --build .  --target install
      # 这一步是真正的build rabbitmq-c库的，注意，不要漏掉点 '.'此时，rabbitmq-c已安装完毕,我们查询一下安装目录/usr/local/rabbitmq-c
      whereis rabbitmq-c
      ```
  2. 安装 amqp PHP 扩展

      ```shell
      wget https://pecl.php.net/get/amqp-1.9.3.tgz
      tar -xvf amqp-1.9.3.tgz
      cd amqp-1.9.3
      phpize
      ./configure --with-php-config=/usr/local/php/bin/php-config
      --with-amqp --with-librabbitmq-dir=/usr/local/rabbitmq-c
      ./configure --with-php-config=/usr/bin/php-config --with-amqp --with-librabbitmq-dir=/usr/local/rabbitmq-c
      make && make install
      # 此时，扩展生成完毕啦，大功告成。
      ```
  3. 安装 amqp

      ```shell
      pecl install amqp
      ```
  4. 配置amqp扩展

      ```shell
      # 查找php.ini位置
      find / -name 'php.ini'
      vi /usr/local/php/etc/php.ini
      # 添加 extension=amqp.so
      ```