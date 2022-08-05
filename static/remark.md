码云上新建一个项目 XXXX （项目名）
2、本地创建一个文件夹E:/XXXX，然后使用git bash

3、cd 到本地文件夹中E:/XXXX //如果是在创建的文件中git bash 则此步骤可省略

4、使用 git init 命令 //初始化一个git 本地仓库此时会在本地创建一个 .git 的文件夹

5、使用git remote add origin https://gitee.com/你的码云用户名/XXXX //添加远程仓库

6、使用 git pull origin master 命令，将码云上的仓库pull到本地文件夹

7、将要上传的文件，添加到刚刚创建的文件夹

8、使用git add . （. 表示所有的）或者 git add + 文件名 // 将文件保存到缓存区

9、使用git commit -m ‘新添加的文件内容描述’ //添加文件描述

10、使用git push origin master ，将本地仓库推送到远程仓库


 git config --global http.sslVerify false


 git reset --hard HEAD~1 回退上一个（1）git版本