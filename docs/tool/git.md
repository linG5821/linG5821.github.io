## 命令速查表

![](https://ling-root-bucket.oss-cn-hangzhou.aliyuncs.com/picgo/011500266295799.jpg)

## 常见问题
1. 没有共同祖先的分支进行pull操作时需要添加--allow-unrelated-histories,也就是当本地仓库已经存在，而又重新创建一个新的远程仓库，当该远程仓库已经有提交历史时，这个仓库和本地仓库不是同源的分支，再pull是被拒绝的
2. git子模块批量添加远程仓库
   ```shell
   #!/usr/bin/env bash
   remote_name=$1
   remote_url=$2

   modules=$(git submodule  | awk '{print $2 }')
   for module in ${modules[@]};
   do
    cd ./$module
    url="$remote_url/$module.git"
    if [[ $module ==  jetlinks-manager* ]]; then
        url="$remote_url/"$(echo $module | awk -F '/' '{print $2}')".git"
    fi
    echo $url
    git remote add $remote_name $url
    cd ..
    if [[ $module ==  jetlinks-manager* ]]; then
        cd ..
    fi
   done
   ```
3. git clone 代码自动转换为CRLF 
   ```shell
   # 全局关闭Git自动转换功能
   git config --global core.autocrlf false
   ```