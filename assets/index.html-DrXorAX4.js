import{_ as s,c as a,b as i,o as e}from"./app-3lqNtXnG.js";const l={};function d(c,n){return e(),a("div",null,n[0]||(n[0]=[i(`<h2 id="环境-配置" tabindex="-1"><a class="header-anchor" href="#环境-配置"><span>环境/配置</span></a></h2><ul><li><p>go程序交叉编译</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"># Mac 下编译 Linux 和 Windows 64位可执行程序</span>
<span class="line">CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build main.go</span>
<span class="line">CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build main.go</span>
<span class="line"></span>
<span class="line"># Linux 下编译 Mac 和 Windows 64位可执行程序</span>
<span class="line">CGO_ENABLED=0 GOOS=darwin GOARCH=amd64 go build main.go</span>
<span class="line">CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build main.go</span>
<span class="line"></span>
<span class="line"># Windows 下编译 Mac 和 Linux 64位可执行程序</span>
<span class="line"># 必须用CMD 不能使用powershell或者git bash 和 cmder等工具</span>
<span class="line">SET CGO_ENABLED=0</span>
<span class="line">SET GOOS=darwin</span>
<span class="line">SET GOARCH=amd64</span>
<span class="line">go build main.go</span>
<span class="line"></span>
<span class="line">SET CGO_ENABLED=0</span>
<span class="line">SET GOOS=linux</span>
<span class="line">SET GOARCH=amd64</span>
<span class="line">go build main.go</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,2)]))}const p=s(l,[["render",d]]),r=JSON.parse('{"path":"/go/","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1767610634000,"contributors":[{"name":"lsj","username":"lsj","email":"lishaojie@aithu.com","commits":1,"url":"https://github.com/lsj"}],"changelog":[{"hash":"17baf412b013554d38091cfb93e0117b0a71116d","time":1767610634000,"email":"lishaojie@aithu.com","author":"lsj","message":"add javaenv"}]},"filePathRelative":"go/README.md"}');export{p as comp,r as data};
