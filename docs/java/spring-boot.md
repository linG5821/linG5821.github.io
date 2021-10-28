## 项目配置优先级
1. **file:config/application.yml**
2. **file:application.yml**
3. **classpath:config/application.yml**
4. **classpath:application.yml**

::: tip
从上到下优先级依次变低
::: 

## 默认静态资源优先级
1. **resources**
2. **static**
3. **public**

::: tip
从上到下优先级依次变低
::: 