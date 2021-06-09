## Feign
### 注意事项
1. Feign集成需要注册到注册中心（不使用注册中心需要制定具体的服务地址），且需要集成WEB模块
2. Feign超时问题的解决(Read timed out executing...)
   ```yml
   # Feign接口调用分两层，Ribbon的调用和Hystrix调用，理论上设置Ribbon的时间即可，但是Ribbon的超时时间和Hystrix的超时时间需要结合起来，按照木桶原则最低的就是Feign的超时时间，建议最好配置超时时间一致
    #hystrix的超时时间
    hystrix:
        command:
            default:
                execution:
                timeout:
                    enabled: true
                isolation:
                        thread:
                            timeoutInMilliseconds: 30000
    #ribbon的超时时间
    ribbon:
        ReadTimeout: 30000
        ConnectTimeout: 30000
   ```
3. FeignClient GET 请求POJO类型参数的接口 或者接口参数未加@RequestParam("{paramName}"),包括未指定value值导致GET请求转为POST请求。
   * 原因： Feign底层默认使用HttpURLConnection 未加@RequestParam 的参数会被当做Body传递, HttpURLConnection传递Body需要设置 connection.setDoOutput(true); Feign 底层就转换了 GET 为 POST。
  
   * 处理方式1: 拆分 Pojo 对象为多个参数,并添加@RequestParam("{paramName}")。
   * 处理方式2: 更换底层使用Http请求客户端 Apache HttpClient 或 OkHttp 这样会导致 GET 传递的参数无法获取到。
   * 处理方式3: 修改接收端参数为MAP。
4. FeignClient GET请求POJO类型的接口参数无法获取。
   * 处理方式1: 拆分Pojo对象为多个参数,并添加@RequestParam("{paramName}")
   
   * 处理方式2: 修改接收端参数为MAP
   
   * 处理方式3: 参数增加 @RequestBody 注解此时接收的参数是GET发送了 body 参数,所以通过 postman 之类的调用时需要通过body传参

   * 处理方式4: spring-cloud 2.1 之后参数添加 @SpringQueryMap 注解可以当做 query 参数解析