## Java 多版本管理
> 使用Jenv 之类的切换软件可以实现多Java 版本管理，但亲测使用Jenv 命令执行速度变得异常缓慢，本内容主要针对临时切换使用的场景，仅通过命令行使用
> 前置条件：针对Widows版本，多个版本的Java装在同一主目录，我的目录结构是 D:\Dev\Java\jdkxxxx, 且通过JAVA版本_HOME 方式配置了不同版本的路径，
> 例如：JAVA17_HOME  默认的 JAVA_HOME 指向了其中某个版本 例如 JAVA_HOME=%JAVA17_HOME%， Path 变量中配置了 %JAVA_HOME%\bin

1. 当前会话临时切换Java版本
```powershell
# 顺序不可以变
$env:JAVA_HOME = $env:JAVA21_HOME
$env:PATH = ($env:PATH -split ';' | Where-Object { $_ -notmatch 'D:\\Dev\\Java\\jdk.*\\bin' }) -join ';'
$env:PATH = "$env:JAVA_HOME\bin;" + $env:PATH
```
2. 切换全局Java版本
```powershell
# 切换之后仍然需要重启各个应用
Start-Process powershell -Verb runAs -ArgumentList "-NoExit", "-Command", "[Environment]::SetEnvironmentVariable('JAVA_HOME', `$env:JAVA21_HOME`, 'Machine')"
```
