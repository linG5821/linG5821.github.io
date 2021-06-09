(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{374:function(t,a,e){"use strict";e.r(a);var n=e(44),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"feign"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#feign"}},[t._v("#")]),t._v(" Feign")]),t._v(" "),e("h3",{attrs:{id:"注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),e("ol",[e("li",[t._v("Feign集成需要注册到注册中心（不使用注册中心需要制定具体的服务地址），且需要集成WEB模块")]),t._v(" "),e("li",[t._v("Feign超时问题的解决(Read timed out executing...)"),e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Feign接口调用分两层，Ribbon的调用和Hystrix调用，理论上设置Ribbon的时间即可，但是Ribbon的超时时间和Hystrix的超时时间需要结合起来，按照木桶原则最低的就是Feign的超时时间，建议最好配置超时时间一致")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#hystrix的超时时间")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hystrix")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n         "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n             "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("execution")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n             "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("timeout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                 "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n             "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("isolation")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                     "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("thread")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                         "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("timeoutInMilliseconds")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("30000")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#ribbon的超时时间")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ribbon")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ReadTimeout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("30000")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ConnectTimeout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("30000")]),t._v("\n")])])])]),t._v(" "),e("li",[t._v('FeignClient GET 请求POJO类型参数的接口 或者接口参数未加@RequestParam("{paramName}"),包括未指定value值导致GET请求转为POST请求。\n'),e("ul",[e("li",[e("p",[t._v("原因： Feign底层默认使用HttpURLConnection 未加@RequestParam 的参数会被当做Body传递, HttpURLConnection传递Body需要设置 connection.setDoOutput(true); Feign 底层就转换了 GET 为 POST。")])]),t._v(" "),e("li",[e("p",[t._v('处理方式1: 拆分 Pojo 对象为多个参数,并添加@RequestParam("{paramName}")。')])]),t._v(" "),e("li",[e("p",[t._v("处理方式2: 更换底层使用Http请求客户端 Apache HttpClient 或 OkHttp 这样会导致 GET 传递的参数无法获取到。")])]),t._v(" "),e("li",[e("p",[t._v("处理方式3: 修改接收端参数为MAP。")])])])]),t._v(" "),e("li",[t._v("FeignClient GET请求POJO类型的接口参数无法获取。\n"),e("ul",[e("li",[e("p",[t._v('处理方式1: 拆分Pojo对象为多个参数,并添加@RequestParam("{paramName}")')])]),t._v(" "),e("li",[e("p",[t._v("处理方式2: 修改接收端参数为MAP")])]),t._v(" "),e("li",[e("p",[t._v("处理方式3: 参数增加 @RequestBody 注解此时接收的参数是GET发送了 body 参数,所以通过 postman 之类的调用时需要通过body传参")])]),t._v(" "),e("li",[e("p",[t._v("处理方式4: spring-cloud 2.1 之后参数添加 @SpringQueryMap 注解可以当做 query 参数解析")])])])])])])}),[],!1,null,null,null);a.default=s.exports}}]);