## OpenClaw 文档

## 安装教程

* **Windows**

  1. 手动安装 node 22 以上 和 git 

  2. 尝试执行命令（管理员窗口）

     ```powershell
     iwr -useb https://openclaw.ai/install.ps1 | iex
     ```

* **Linux/Mac**

  1. 尝试执行命令

     ```bash
     curl -fsSL https://openclaw.ai/install.sh | bash
     ```

  2. 配置开启启动

     ```bash
     systemctl --user enable --now openclaw-gateway.service
     ## 查看状态
     systemctl --user status openclaw-gateway
     ```

     

## 卸载教程

* **Windows**

  1. 执行卸载命令

     ```powershell
     openclaw uninstall
     ```

  2. 清理遗留文件

     ```powershell
     Remove-Item -Recurse -Force "$env:USERPROFILE\.openclaw"
     Remove-Item -Recurse -Force "$env:USERPROFILE\.clawdbot"
     Remove-Item -Recurse -Force "$env:USERPROFILE\.moltbot"
     Remove-Item -Recurse -Force "$env:APPDATA\OpenClaw"
     ```

  3. 卸载 openclaw 命令

     ```powershell
     npm uninstall -g openclaw
     ```

* **Linux/Mac**

  1. 执行卸载命令

     ```bash
     openclaw uninstall
     ```

  2. 清理遗留文件

     ```
     rm -rf ~/.clawdbot
     rm -rf ~/.moltbot
     rm -rf ~/.molthub
     
     
     ## Mac 特有
     rm -rf /Applications/OpenClaw.app
     rm -rf /tmp/openclaw/
     rm -f ~/Library/LaunchAgents/ai.openclaw.gateway.plist
     rm -f ~/Library/LaunchAgents/bot.molt.gateway.plist
     rm -f ~/Library/LaunchAgents/com.openclaw.plist
     ```

  3. 卸载 openclaw 命令

     ```powershell
     npm uninstall -g openclaw
     ```

## 配置教程

> 按方向建选择

1. 执行配置命令开始配置（首次安装会默认运行该命令）

   ```bash
   openclaw onboard --install-daemon
   ```

2. 安全协议，方向键选择Yes

   ![image-20260312132702937](https://ling-root-bucket.oss-cn-hangzhou.aliyuncs.com/picgo/image-20260312132702937.png)

2. 选择安装配置方式(推荐手动 Manual)

   ![image-20260312132930109](https://ling-root-bucket.oss-cn-hangzhou.aliyuncs.com/picgo/image-20260312132930109.png)

3. 选择网关配置 (local)

   ![image-20260312133106296](https://ling-root-bucket.oss-cn-hangzhou.aliyuncs.com/picgo/image-20260312133106296.png)

4. 配置工作目录(保持默认即可，有需求根据需求配置指定目录)

   ![image-20260312133300934](https://ling-root-bucket.oss-cn-hangzhou.aliyuncs.com/picgo/image-20260312133300934.png)

5. 选择底层大模型提供商并根据不同的验证方式进行配置（也可以选择跳过，通过网关配置）

   ![image-20260312133355982](https://ling-root-bucket.oss-cn-hangzhou.aliyuncs.com/picgo/image-20260312133355982.png)

   ![image-20260312134414288](https://ling-root-bucket.oss-cn-hangzhou.aliyuncs.com/picgo/image-20260312134414288.png)

6. 设置网关端口（强烈建议修改，使用默认 18789 端口安全风险极高）

   ![image-20260312134939581](https://ling-root-bucket.oss-cn-hangzhou.aliyuncs.com/picgo/image-20260312134939581.png)

7. 设置网关绑定的网卡（建议根据实际需求，选择绑定内网IP、本地回环、0.0.0.0）

   ![image-20260312135258762](https://ling-root-bucket.oss-cn-hangzhou.aliyuncs.com/picgo/image-20260312135258762.png)

8. 设置Gateway 的验证方式

   ![image-20260312135401440](https://ling-root-bucket.oss-cn-hangzhou.aliyuncs.com/picgo/image-20260312135401440.png)

9. 设置 Tailscale exposure 的方式，如果没有Tailscale 网络选择 Off

   ![image-20260312135551475](https://ling-root-bucket.oss-cn-hangzhou.aliyuncs.com/picgo/image-20260312135551475.png)

10. 设置网关密码

    ![image-20260312135716462](https://ling-root-bucket.oss-cn-hangzhou.aliyuncs.com/picgo/image-20260312135716462.png)

11. 设置于聊天软件的集成，可以暂时跳过，通过网关配置

    ![image-20260312135839308](https://ling-root-bucket.oss-cn-hangzhou.aliyuncs.com/picgo/image-20260312135839308.png)

12. 配置网络搜索，可以暂时跳过

    ![image-20260312135924023](https://ling-root-bucket.oss-cn-hangzhou.aliyuncs.com/picgo/image-20260312135924023.png)

13. 配置 Skills，可以先选个Skills 市场，注意Skills 市场存在安全风险，Openclawk 可以自己装，可能装到包含恶意代码的Skills。（空格选择）

    ![image-20260312140043547](https://ling-root-bucket.oss-cn-hangzhou.aliyuncs.com/picgo/image-20260312140043547.png) 

14. 配置生图的API Key,如果没有全部选择No

    ![image-20260312141703712](https://ling-root-bucket.oss-cn-hangzhou.aliyuncs.com/picgo/image-20260312141703712.png)

15. 配置 Hooks

    ![image-20260312141802905](https://ling-root-bucket.oss-cn-hangzhou.aliyuncs.com/picgo/image-20260312141802905.png)



## Channel集成

* **Telegram**

  1. 创建 Telegram Bot（只做一次）

     1. 打开 Telegram，搜索 @BotFather 并发起聊天。

     2. 发送指令 /newbot，按照提示为机器人取 名称（可随意）和 用户名（必须以 bot 结尾，例如 xxx_bot）。

     3. 完成后 BotFather 会回复一条消息，里面包含 Bot Token，类似：

        ```bash
        Use this token to access the HTTP API:
        123456:AGcd-Wougfdjgkfguio
        ```

        把这段 token 记下来，后面会用到。切记不要泄露。

  2. 配对 Telegram 账户

     1. 添加一个Channel

        ```bash
        openclaw channels add
        # 按照一下步骤进行选择
        # Configure chat channels now?
        # Yes
        # Select a channel
        # Telegram
        # How do you want to provide this Telegram bot token?
        # Enter Telegram bot token
        # 输入 BotFather 回复的内容中的Token
        ```

     2. 在 Telegram 搜索刚才创建的机器人，发送一条消息给他，他会回复类似如下内容：

        ```
        OpenClaw: access not configured.
        Your Telegram user id: xxxx
        Pairing code: DQxxxx
        Ask the bot owner to approve with:
        openclaw pairing approve telegram DQxxxx
        ```

     3. 在 Openclaw 安装的主机上执行（Code 需要换成你自己的Code，可以直接复制机器人回复的最后一行）。

        ```bash
        openclaw pairing approve telegram {code}
        ```

     4. 然后就可以对话了

     5. （可选）永久配对配置

        ```
        "channels": {
            "telegram": {
              "allowFrom": ["输入第二步机器人回复中的 user id"]
            }
          }
        
        ```

* **飞书**

  

* **QQ**

## 常见问题

* Windows 安装卡在 Installing OpenClaw 步骤长时间不动

  ```powershell
  # 管理员方式执行
  Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
  ```
  
  
  
* 提示未注册网关密码

  ![image-20260312143733489](https://ling-root-bucket.oss-cn-hangzhou.aliyuncs.com/picgo/image-20260312143733489.png)

  

  解决方式：配置网关验证方式为密码方式时需要再启动的UI界面输入一下密码

  ![](https://ling-root-bucket.oss-cn-hangzhou.aliyuncs.com/picgo/image-20260312165104014.png)

* 修改网关授权模式为 token

  ```bash
  openclaw config set gateway.auth.mode token
  openclaw gateway restart
  ```

* 远程访问网关（此方式及其不安全，建议通过Nginx 反向代理）

  ```json
  # 添加外部IP，允许Http访问
  "controlUi": {
        "allowedOrigins": [
          "http://localhost:18789",
          "http://127.0.0.1:18789",
          "http://{外部IP}:18789"
        ],
        "allowInsecureAuth": true,
        "dangerouslyDisableDeviceAuth": true
  }
  ```

  