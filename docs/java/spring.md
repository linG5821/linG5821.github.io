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

## Bean的生命周期

### Bean的作用域
* `singleton` 单例作用域

Bean 在 IOC 容器中仅存在一个实例

* `prototype` 原型作用域

每次从容器中调用Bean(getBean())时, 都返回一个新的实例

* `request` HTTP 请求作用域(WEB)

每次HTTP请求都会创建一个 Bean

* `session` HTTP Session 作用域(WEB)    

同一个 HTTP Session 共享一个 Bean, 不同的 Session 使用不同的 Bean

* `global-session` 全局 session 作用域(WEB)   

用于 Portlet 应用, Spring 5 已经没有了

:::tip
Portlet 是能够生成语义代码（例如：HTML）片段的小型 Java Web 插件。它们基于 portlet 容器，可以像 servlet 一样处理 HTTP 请求。但是，与 servlet 不同，每个 portlet 都有不同的会话。
:::

### 生命周期阶段
1. 实例化阶段
2. 属性赋值阶段
3. 初始化阶段
4. 销毁阶段

### 生命周期接口

#### 容器级接口方法
* InstantiationAwareBeanPostProcessor 实例化感知后处理器
  - InstantiationAwareBeanPostProcessor#postProcessBeforeInstantiation 
  
  Bean 实例化之前调用, 如果返回值不为 null, 后续的 Bean 创建流程(实例化、初始化)都不会执行, 返回值会替换原有的 bean 作为代理, 是实现 AOP 的关键

  - InstantiationAwareBeanPostProcessor#postProcessAfterInstantiation

  Bean 实例化之后属性填充之前调用, 如果返回 false 后续的属性填充和属性依赖注入都不会执行

  - InstantiationAwareBeanPostProcessor#postProcessPropertyValues

  在 applyPropertyValues 属性填充方法之前 如果返回 null 将不会进行后续的属性填充

* BeanPostProcessor Bean 后处理方法
  - postProcessBeforeInitialization 在属性赋值之后, 在各种 Bean级别的 Aware 之后
  - postProcessAfterInitialization 在任何 bean 初始化回调(InitializingBean、afterPropertiesSet、自定义初始化方法) 执行之后

* BeanFactoryPostProcessor 工厂后处理方法
BeanDefinitionRegistryPostProcessor 实现 BeanFactoryPostProcessor 接口的接口

  - BeanDefinitionRegistryPostProcessor#postProcessBeanDefinitionRegistry(registry) 优先调用传入 beanFactoryPostProcessors 的 postProcessBeanDefinitionRegistry, 之后获取容器中注册的 BeanDefinitionRegistryPostProcessor, 会根据是否实现排序接口分别进行处理

  - BeanFactoryPostProcessor#postProcessBeanFactory(beanFactory) 先处理属于 BeanDefinitionRegistryPostProcessor 接口的实例, 会根据是否实现排序接口分别进行处理

#### Bean级接口方法
Bean 类直接实现接口的方法，比如 `BeanNameAware`、`BeanFactoryAware`、`ApplicationContextAware`、`InitializingBean``、DisposableBean` 等方法，这些方法只对当前 Bean 生效。

1. **Aware 类型接口**
    
    可以帮我们拿到 Spring 容器中的一些资源, 所有的 Aware 都是在初始化之前调用的

  * Beanxxx 直接调用组(先执行)
    - BeanNameAware
    - BeanClassLoaderAware
    - BeanFactoryAware 
      
  * 环境资源注入组(后执行)

    - EnvironmentAware
    - EmbeddedValueResolverAware 
    
      实现该接口能够获取 Spring EL 解析器，用户的自定义注解需要支持 SPEL 表达式的时候可以使用。

    - ApplicationContextAware(ResourceLoaderAware/ApplicationEventPublisherAware/MessageSourceAware)
    
      这几个接口的返回值实质上都是当前的 ApplicationContext 对象，因为 ApplicationContext 是一个复合接口。与此相关的 Aware 都是通过BeanPostProcessor#postProcessBeforeInitialization()， 通过 ApplicationContextAwareProcessor#invokeAwareInterfaces 可以得知。
2. **生命周期接口**

  * InitializingBean 初始化阶段
  * DisposableBean 销毁阶段

### 生命周期流程图
![生命周期流程图](https://ling-root-bucket.oss-cn-hangzhou.aliyuncs.com/picgo/3470413121-2abed99e085c254a.webp)