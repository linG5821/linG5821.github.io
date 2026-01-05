import{_ as n,c as a,b as e,o as p}from"./app-CYKM0tKh.js";const l={};function i(t,s){return p(),a("div",null,s[0]||(s[0]=[e(`<h2 id="powershell" tabindex="-1"><a class="header-anchor" href="#powershell"><span>Powershell</span></a></h2><ol><li>执行多个命令使用 <code>;</code> 分割 linux 中使用 &amp;&amp;</li><li>设置环境变量使用 $env:KEY=&quot;VALUE&quot; 而 CMD 使用 set KEY=VALUE</li></ol><h2 id="win下gpg的使用" tabindex="-1"><a class="header-anchor" href="#win下gpg的使用"><span>Win下GPG的使用</span></a></h2><ol><li><p>安装Gpg4win, 下载地址: <a href="https://gpg4win.org/download.html" target="_blank" rel="noopener noreferrer">https://gpg4win.org/download.html</a></p></li><li><p>修改Git配置使用安装的gpg</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">git</span> config <span class="token parameter variable">--global</span> gpg.program <span class="token string">&quot;yourpath\\GnuPG<span class="token entity" title="\\b">\\b</span>in\\gpg.exe&quot;</span></span>
<span class="line"><span class="token comment"># 显示配置</span></span>
<span class="line"><span class="token function">git</span> config <span class="token parameter variable">--global</span> gpg.program</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建与设置秘钥</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">gpg --full-generate-key</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 选择加密方式 选择默认的1即可，表示加密和签名均使用 RSA 算法</span></span>
<span class="line">Please <span class="token keyword">select</span> what kind of key you want:</span>
<span class="line">   <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> RSA and RSA <span class="token punctuation">(</span>default<span class="token punctuation">)</span></span>
<span class="line">   <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> DSA and Elgamal</span>
<span class="line">   <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> DSA <span class="token punctuation">(</span>sign only<span class="token punctuation">)</span></span>
<span class="line">   <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> RSA <span class="token punctuation">(</span>sign only<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token number">14</span><span class="token punctuation">)</span> Existing key from card</span>
<span class="line">Your selection? <span class="token number">1</span></span>
<span class="line"><span class="token comment"># 最长为4096位，设置为4096位即可</span></span>
<span class="line">RSA keys may be between <span class="token number">1024</span> and <span class="token number">4096</span> bits long.</span>
<span class="line">What keysize <span class="token keyword">do</span> you want? <span class="token punctuation">(</span><span class="token number">3072</span><span class="token punctuation">)</span> <span class="token number">4096</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置密钥有效期 选择0为永久有效</span></span>
<span class="line">Please specify how long the key should be valid.</span>
<span class="line">         <span class="token number">0</span> <span class="token operator">=</span> key does not expire</span>
<span class="line">      <span class="token operator">&lt;</span>n<span class="token operator">&gt;</span>  <span class="token operator">=</span> key expires <span class="token keyword">in</span> n days</span>
<span class="line">      <span class="token operator">&lt;</span>n<span class="token operator">&gt;</span>w <span class="token operator">=</span> key expires <span class="token keyword">in</span> n weeks</span>
<span class="line">      <span class="token operator">&lt;</span>n<span class="token operator">&gt;</span>m <span class="token operator">=</span> key expires <span class="token keyword">in</span> n months</span>
<span class="line">      <span class="token operator">&lt;</span>n<span class="token operator">&gt;</span>y <span class="token operator">=</span> key expires <span class="token keyword">in</span> n years</span>
<span class="line">Key is valid for? <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 完成上述设置后，会要求确认 确认即可</span></span>
<span class="line">Is this correct? <span class="token punctuation">(</span>y/N<span class="token punctuation">)</span>y</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置用户ID 邮箱  备注等信息  还需要输入密码</span></span>
<span class="line">GnuPG needs to construct a user ID to identify your key.</span>
<span class="line">Real name:</span>
<span class="line">Email address: </span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示秘钥列表 此例子中GPG 密钥 ID 是 3AA5C34371567BD2</span></span>
<span class="line">gpg --list-secret-keys --keyid-format<span class="token operator">=</span>long</span>
<span class="line">or</span>
<span class="line">gpg <span class="token parameter variable">-K</span></span>
<span class="line">/Users/hubot/.gnupg/secring.gpg</span>
<span class="line">------------------------------------</span>
<span class="line">sec   4096R/3AA5C34371567BD2 <span class="token number">2016</span>-03-10 <span class="token punctuation">[</span>expires: <span class="token number">2017</span>-03-10<span class="token punctuation">]</span></span>
<span class="line">uid                          Hubot </span>
<span class="line">ssb   4096R/42B317FD4BA89E7A <span class="token number">2016</span>-03-10</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 输出 秘钥内容  </span></span>
<span class="line">gpg <span class="token parameter variable">--armor</span> <span class="token parameter variable">--export</span> 3AA5C34371567BD2</span>
<span class="line"><span class="token comment"># 输出秘钥到文件</span></span>
<span class="line">gpg <span class="token parameter variable">--armor</span> <span class="token parameter variable">--output</span> public-key.txt <span class="token parameter variable">--export</span> 3AA5C34371567BD2</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 生成吊销证书(推荐生成, gpg默认会生成, 位置: C:\\Users\\xxx\\AppData\\Roaming\\gnupg\\openpgp-revocs.d\\keyid.rev)</span></span>
<span class="line"><span class="token comment"># 如果要使用需要去除 &quot;-----BEGIN PGP PUBLIC KEY BLOCK-----&quot; 前的 &quot;:&quot;</span></span>
<span class="line">gpg --gen-revoke 3AA5C34371567BD2</span>
<span class="line"><span class="token comment"># 生成吊销证书的交互, 最后复制吊销内容到文件</span></span>
<span class="line">Create a revocation certificate <span class="token keyword">for</span> this key? <span class="token punctuation">(</span>y/N<span class="token punctuation">)</span> y</span>
<span class="line">Please <span class="token keyword">select</span> the reason <span class="token keyword">for</span> the revocation:</span>
<span class="line">  <span class="token number">0</span> <span class="token operator">=</span> No reason specified</span>
<span class="line">  <span class="token number">1</span> <span class="token operator">=</span> Key has been compromised</span>
<span class="line">  <span class="token number">2</span> <span class="token operator">=</span> Key is superseded</span>
<span class="line">  <span class="token number">3</span> <span class="token operator">=</span> Key is no longer used</span>
<span class="line">  Q <span class="token operator">=</span> Cancel</span>
<span class="line"><span class="token punctuation">(</span>Probably you want to <span class="token keyword">select</span> <span class="token number">1</span> here<span class="token punctuation">)</span></span>
<span class="line">Your decision? <span class="token number">0</span></span>
<span class="line">Enter an optional description<span class="token punctuation">;</span> end it with an empty line:</span>
<span class="line"><span class="token operator">&gt;</span> To prevent leakage</span>
<span class="line">Reason <span class="token keyword">for</span> revocation: No reason specified</span>
<span class="line">To prevent leakage</span>
<span class="line">Is this okay? <span class="token punctuation">(</span>y/N<span class="token punctuation">)</span>y</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 导出</span></span>
<span class="line"><span class="token comment"># 导出公钥 ASCII 形式</span></span>
<span class="line">gpg <span class="token parameter variable">--armor</span> <span class="token parameter variable">--output</span> keyid.gpg.pub <span class="token parameter variable">--export</span> keyid</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 导出私钥 ASCII 形式</span></span>
<span class="line">gpg <span class="token parameter variable">--armor</span> <span class="token parameter variable">--output</span> keyid.gpg --export-secret-keys keyid</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 列出所有秘钥</span></span>
<span class="line">gpg --list-keys</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 导入吊销证书(导入后悔直接吊销对应的秘钥), 如果公钥已经发布还需要重新发布一下才能吊销已经上传的秘钥</span></span>
<span class="line">gpg <span class="token parameter variable">--import</span> /path/xxxx.rev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>GPG秘钥的使用</p><ul><li><p>配置到github</p><ol><li><p>复制公钥内容到 github 添加 GPG Key</p></li><li><p>设置 git 配置</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.signingkey 3AA5C34371567BD2</span>
<span class="line"><span class="token comment"># 确认配置</span></span>
<span class="line"><span class="token function">git</span> config  <span class="token parameter variable">-l</span></span>
<span class="line"><span class="token comment"># 配置全局提交使用该秘钥</span></span>
<span class="line"><span class="token function">git</span> config <span class="token parameter variable">--global</span> commit.gpgsign <span class="token boolean">true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 单次提交中签名</span></span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-S</span> <span class="token parameter variable">-m</span> <span class="token string">&quot;...&quot;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>用于maven发布到中央仓库</p><ol><li><p>发布公钥到公钥服务器</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 目前支持如下如下服务器</span></span>
<span class="line"><span class="token comment"># keyserver.ubuntu.com</span></span>
<span class="line"><span class="token comment"># keys.openpgp.org</span></span>
<span class="line"><span class="token comment"># pgp.mit.edu</span></span>
<span class="line">gpg <span class="token parameter variable">--keyserver</span> hkp://keyserver.ubuntu.com:80 --send-keys 3AA5C34371567BD2</span>
<span class="line"><span class="token comment"># 验证</span></span>
<span class="line">gpg <span class="token parameter variable">--keyserver</span> hkp://keyserver.ubuntu.com:80 --recv-keys 3AA5C34371567BD2</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>本地发布 如果秘钥存在密码 需要正在settings文件中添加如下内容 可以通过 maven-gpg-plugin 插件的配置修改对应的id 等</p><div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre><code class="language-xml"><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>server</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>gpg.passphrase<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>passphrase</span><span class="token punctuation">&gt;</span></span>\${your passphrase}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>passphrase</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>server</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配合github action 进行自动化发布 参考<a href="https://github.com/linG5821/mtime.git" target="_blank" rel="noopener noreferrer">https://github.com/linG5821/mtime.git</a></p></li></ol></li></ul></li></ol><h2 id="问题杂项汇总及解决方案" tabindex="-1"><a class="header-anchor" href="#问题杂项汇总及解决方案"><span>问题杂项汇总及解决方案</span></a></h2><ol><li><p>Hyper-V 将动态端口中的几段范围的端口保留给自己使用,导致产生各种端口被占用的问题</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 查看当前动态端口的范围</span></span>
<span class="line">netsh int ipv4 show dynamicport tcp</span>
<span class="line"><span class="token comment"># 查看tcp ipv4端口排除范围（被系统或者我们自己保留的端口）</span></span>
<span class="line">netsh int ipv4 show excludedport tcp</span>
<span class="line"><span class="token comment"># 管理员身份打开 powershell，然后设置 tcp ipv4 的动态端口范围为 49152 开始的 16384 个端口，也就是 49152~65535 (这个是windows默认的)</span></span>
<span class="line">netsh int ipv4 <span class="token builtin class-name">set</span> dynamicport tcp <span class="token assign-left variable">start</span><span class="token operator">=</span><span class="token number">49152</span> <span class="token assign-left variable">num</span><span class="token operator">=</span><span class="token number">16384</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>截取主机某个网卡的IP</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"># 可以将 select-string 后的关键字改成具体的网卡名称关键字</span>
<span class="line">(ipconfig|select-string &quot;无线&quot; -context 1,4 | findStr &quot;IPv4&quot;).Split(&quot;:&quot;)[-1]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>python脚本获取主机IP</p><ul><li><p>方式一: (此方式可能获取到虚拟IP)</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"><span class="token keyword">import</span> socket</span>
<span class="line">hostname <span class="token operator">=</span> socket<span class="token punctuation">.</span>gethostname<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">ip <span class="token operator">=</span> socket<span class="token punctuation">.</span>gethostbyname<span class="token punctuation">(</span>hostname<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>ip<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>方式二:</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"><span class="token keyword">import</span> socket</span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">get_host_ip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token triple-quoted-string string">&quot;&quot;&quot;</span>
<span class="line">      查询本机ip地址</span>
<span class="line">      :return: ip</span>
<span class="line">      &quot;&quot;&quot;</span></span>
<span class="line">      <span class="token keyword">try</span><span class="token punctuation">:</span></span>
<span class="line">          s <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_DGRAM<span class="token punctuation">)</span></span>
<span class="line">          s<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;8.8.8.8&#39;</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">          ip <span class="token operator">=</span> s<span class="token punctuation">.</span>getsockname<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span></span>
<span class="line">      <span class="token keyword">finally</span><span class="token punctuation">:</span></span>
<span class="line">          s<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">return</span> ip</span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token keyword">print</span><span class="token punctuation">(</span>get_host_ip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ol>`,6)]))}const o=n(l,[["render",i]]),r=JSON.parse('{"path":"/machine/windows/","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1767610787000,"contributors":[{"name":"lsj","username":"lsj","email":"lishaojie@aithu.com","commits":1,"url":"https://github.com/lsj"}],"changelog":[{"hash":"c44cbade27df20e77d4204fe0fa76423b764227a","time":1767610787000,"email":"lishaojie@aithu.com","author":"lsj","message":"add javaenv"}]},"filePathRelative":"machine/windows/README.md"}');export{o as comp,r as data};
