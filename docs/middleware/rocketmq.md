## 基本概念

### 消息生产者(Producer)
负责: 生产消息

#### 消息发送方式
* 同步发送(需要Broker返回确认消息)
* 异步发送(需要Broker返回确认消息)
* 顺序发送(需要Broker返回确认消息)
* 单向发送(不需要确认)

### 消息消费者(Consumer)
负责: 消费消息

#### 消息消费形式
* 拉取式消费(Pull Consumer)

  特点: 主动调用 Consumer 的拉消息方法从 Broker 的服务器拉消息、主动权由应用控制

* 推送式消费(Push Consumer)

  特点: Broker 收到消息会主动推送给客户端, 一般实时性较高

#### 消费模式
* 集群消费(Clustering)

  相同消费模式下, 相同的 Consumer Group 的每个 Consumer 实例平摊消息

* 广播消费(Broadcasting)

  广播消费模式下, 相同的 Consumer Group 的每个 Consumer 实例接收全量消息
### 主题(Topic)
一类消息的集合, 每条消息只能属于一个主题, 是 RocketMQ 消息订阅的基本单位

### 代理服务器(Broker Server)
负责: 存储消息、转发消息、存储消息元数据, 包括消费组, 消费进度偏移和主题队列消息

### 名字服务(Name Server)
负责: 充当路由消息提供者, 生产者或消费者可以通过名字服务查找各主题相应的 Broker IP 列表。多个 NameServer 实例组成集群, 但相互独立没有信息交换。

### 生产者组(Producer Group)
同一类生产者的集合, 这类 Producer 发送同一类消息且发送逻辑一致。如果发送的是事务消息且原始生产者在发送之后崩溃, 则 Broker 会通知同一生产组的其他生产者以提交或者回溯

### 消费者组(Consumer Group)
同一类消费者的集合，这类 Consumer 通常消费同一类消息且消费逻辑一致。同一消费组的消费者是必须订阅同一主题。消费组使得负载均衡和容错变得容易

### 消息顺序
#### 普通顺序消息(Normal Ordered Message)
普通顺序消费模式下, 消费者通过同一个消息队列(Topic 分区, 称作 Message Queue) 收到的消息是有顺序的, 不同消息队列收到的消息则可能是无顺序的。

#### 严格顺序消息(Strictly Ordered Message)
严格顺序消息模式下，消费者收到的所有消息均是有顺序的。

### 消息(Message)
消息系统传输信息的物理载体, 生产和消费数据的最小单位, 每条消息必须属于一个主题, 每个消息拥有唯一的 Message ID, 且可以携带加油业务标识的 key, 可通过 Message ID 和 Key 查询消息

### 标签(Tag)
为消息设置的标志, 用于同一主题下区分不同类型的消息, 来自同一个业务单元的消息, 可以根据不同业务目的在同一主题下设置不同的标签, 消费者可以根据不同的 tag 实现对不同子主题的不同消费逻辑。