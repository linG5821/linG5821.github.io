## 项目配置优先级
1. **file:config/application.yml**
2. **file:application.yml**
3. **classpath:config/application.yml**
4. **classpath:application.yml**

::: tip
从上到下优先级依次变低
::: 

## 默认静态资源优先级
1. **resources/META-INF/resources**
2. **resources/resources**
3. **resources/static**
4. **resources/public**

::: tip
从上到下优先级依次变低
实际上是代码中资源路径数组的生命顺序
::: 

## Spring中的路径匹配规则

1. `?` 匹配一个字符
2. `*` 匹配零个或者多个字符
3. `**` 匹配零个或者多个路径中的目录
4. `{spring:[a-z]+}` 匹配一个正则 `[a-z]+` 作为一个路径变量 `"spring"` 的值

::: tip
**例子**

* `com/t?st.jsp` — 匹配 `com/test.jsp` 也匹配 `com/tast.jsp` 或者 `com/txst.jsp`

* `com/*.jsp` — 匹配所有 `com` 目录下的 `.jsp` 文件

* `com/**/test.jsp` — 匹配所有 `com` 目录下的 test.jsp 文件

* `org/springframework/**/*.jsp` — 匹配所有 `org/springframework` 目录下的所有 `.jsp` 文件

* `org/**/servlet/bla.jsp` — 匹配 `org/springframework/servlet/bla.jsp` 也匹配 `org/springframework/testing/servlet/bla.jsp` 和 `org/servlet/bla.jsp`

* `com/{filename:\\w+}.jsp` 将匹配 `com/test.jsp` 并将 `"test"` 赋值给 `"filename"` 变量
::: 