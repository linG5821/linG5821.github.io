### 终端打造

1. Windows Terminal

    * oh-my-posh 和 posh-git

      ``` shell
      code $PROFILE
      ## C:\Users\linG\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1
      
      ## 输入文件内容
      Import-Module posh-git
      oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH/ys.omp.json" | Invoke-Expression
      ```

    * 字体配置从百度云下载

    * 关注一下 starship, 加载速度比 oh-my-posh 快