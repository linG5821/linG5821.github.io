(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{423:function(t,e,v){"use strict";v.r(e);var _=v(32),l=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"源码解析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#源码解析"}},[t._v("#")]),t._v(" 源码解析")]),t._v(" "),v("h2",{attrs:{id:"架构设计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#架构设计"}},[t._v("#")]),t._v(" 架构设计")]),t._v(" "),v("h3",{attrs:{id:"逻辑架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#逻辑架构"}},[t._v("#")]),t._v(" 逻辑架构")]),t._v(" "),v("p",[t._v("Netty采用典型的三层网络架构进行设计和开发，逻辑架构如图：\n"),v("img",{attrs:{src:"https://ling-root-bucket.oss-cn-hangzhou.aliyuncs.com/picgo/202202071905948.png",alt:"Netty逻辑架构"}})]),t._v(" "),v("ul",[v("li",[t._v("Reactor通信调度层")])]),t._v(" "),v("p",[t._v("主要负责监听网络的读写和连接操作，负责将网络层的数据读取到内存缓冲区中，然后触发各种网络时事件，例如连接创建、连接激活、读事件、写事件等，将这些事件触发到 "),v("code",[t._v("pipeline")]),t._v(" 中，由 "),v("code",[t._v("pipeline")]),t._v(" 管理的职责链来进行后续的处理。")]),t._v(" "),v("ul",[v("li",[t._v("职责链 ChannelPipeline")])]),t._v(" "),v("p",[t._v("主要负责事件在职责链中的有序传播，同时负责动态的编排职责链。职责链可以选择监听和处理自己关心的事件，它可以拦截处理和向后/向前传播事件。不同应用的 Handler节点功能也不同，通常情况下，往往会开发编解码 Handler 用于消息的编解码，可以将外部的协议消息转换成内部的POJO对象，这样上层业务只需要关心处理业务逻辑即可，不需要感知底层的协议差异和线程模型差异，实现了架构层面的分层隔离。")]),t._v(" "),v("ul",[v("li",[t._v("业务逻辑编排层 Service ChannelHandler")])]),t._v(" "),v("p",[t._v("业务逻辑编排层通常有两类：一类是纯粹的业务逻辑编排，还有一类是其他应用层协议插件，用于特定协议相关的会话和链路管理。例如 CMPP 协议，用于管理和中国移动短信系统的对接。")]),t._v(" "),v("p",[t._v("对于业务开发者，只需要关心职责链拦截的业务 Handler 的编排和服务层的业务逻辑开发即可。各种应用协议以插件的形式提供，只有协议开发人员需要关注协议插件，业务开发人员只需关心业务逻辑即可。")]),t._v(" "),v("h3",{attrs:{id:"关键架构质量属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关键架构质量属性"}},[t._v("#")]),t._v(" 关键架构质量属性")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("高性能")]),t._v(" "),v("ol",[v("li",[t._v("采用异步非阻塞的 I/O 类库，基于Reactor 模式实现，解决了传统同步阻塞 I/O 模式下，一个服务端无法平滑地处理线性增长的客户端的问题。")]),t._v(" "),v("li",[t._v("TCP 接收和发送缓冲区使用直接内存代替堆内存，避免了内存复制，提升了 I/O 读取和写入的性能。")]),t._v(" "),v("li",[t._v("支持通过内存池的方式循环利用 ByteBuf，避免了频繁创建和销毁 ByteBuf 带来的性能损耗。")]),t._v(" "),v("li",[t._v("可配置的 I/O 线程数、TCP参数，为不同的用户场景提供定制化的调优参数，满足不同的性能场景。")]),t._v(" "),v("li",[t._v("采用环形数组缓冲区实现无锁化并发编程，代替传统的线程安全容器或者锁。")]),t._v(" "),v("li",[t._v("合理的使用线程安全容器、原子类等，提升系统的并发处理能力。")]),t._v(" "),v("li",[t._v("关键资源的处理使用单线程串行化的方式，避免多线程并发访问带来的锁竞争和额外的CPU资源消耗问题。")]),t._v(" "),v("li",[t._v("通过引用计数器及时地申请释放不再被引用的对象，细粒度的内存管理降低了 GC 频率，减少了频繁 GC 带来的时延增大和 CPU 损耗。")])])]),t._v(" "),v("li",[v("p",[t._v("可靠性")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("链路有效性检测。由于长连接不需要每次发送消息都创建链路，也不需要在消息交互完成时关闭链路，因此相对于短连接性能更高。为了保证长连接链路的有效性，往往需要通过心跳机制周期性的进行链路检测，为了支持心跳，Netty 提供了如下两种链路空闲检测机制，空闲状态通过事件方式通知，用户可以订阅"),v("strong",[t._v("空闲超时事件")]),t._v("、"),v("strong",[t._v("写空闲超时事件")]),t._v("、"),v("strong",[t._v("读或者写空闲超时事件")]),t._v("，在接收到对应空闲事件之后，灵活的进行定制。")]),t._v(" "),v("ul",[v("li",[t._v("读空闲超时机制：当连续周期 T 没有消息可读时，触发超时 Handler，用户可以基于读空闲超时发送心跳消息，进行链路检测; 如果连续 N 个周期仍然没有读取到心跳消息，可以主动关闭链路。")]),t._v(" "),v("li",[t._v("写空闲超时机制：当连续周期 T 没有消息要发送时，触发超时 Handler，用户可以基于写空闲超时发送心跳消息，进行链路检测; 如果连续 N 个周期仍然接收到到心跳消息，可以主动关闭链路。")])]),t._v(" "),v("blockquote",[v("p",[t._v("使用周期性心跳的原因：在系统空闲时，例如凌晨或者，可能没有任何业务消息。如果此时链路被防火墙 Hang 住 ，或者遇到网络闪断、网络单通等，通信双发无法识别这类链路异常。等到第二天业务高峰期到来时瞬间的海量业务冲击会导致消息积压无法发送给对方，由于链路的重建需要时间，这期间会导致业务大量失败(集群或者分布式组网情况会好一些)。为了解决这个问题，需要周期性的心跳对链路进行检测，一旦发生问题，可以及时关闭链路，重建TCP连接。")])])]),t._v(" "),v("li",[v("p",[t._v("内存保护机制")]),t._v(" "),v("ul",[v("li",[t._v("通过对象引用计数器对 Netty 的 ByteBuf 等内置对象进行细粒度的内存申请和释放，对非法的对象引用进行检测和保护。")]),t._v(" "),v("li",[t._v("通过内存池来重用 ByteBuf，节省内存。")]),t._v(" "),v("li",[t._v("可设置的内存容量上限，包括 ByteBuf、线程池线程数等。")])]),t._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[v("p",[t._v("优雅停机。Netty 所有涉及到资源回收和释放的地方都增加了优雅退出的方法。")]),t._v(" "),v("blockquote",[v("p",[t._v("优雅停机功能指的是当系统退出时，JVM 通过注册的 Shutdown Hook 拦截到退出信号量，然后执行退出操作，释放相关模块的资源占用，将缓冲区的消息处理完成或者清空，将待刷新的数据持久化到磁盘或者数据库中，等到资源回收和缓冲区消息处理完成之后，再退出。优雅停机往往需要设置最大超时时间 T ，如果达到 T 后系统仍然没有退出，则通过 "),v("code",[t._v("kill -9 pid")]),t._v(" 强杀当前进程。")])])])])])])]),t._v(" "),v("li",[v("p",[t._v("可定制性")]),t._v(" "),v("ul",[v("li",[t._v("责任链模式：ChannelPipeline 基于责任链模式开发，便于业务逻辑拦截、定制和扩展。")]),t._v(" "),v("li",[t._v("基于接口的开发：关键的类库都提供了接口或者抽象类， 如果 Netty 自身的实现无法满足用户的需求，可以由用户自定义实现相关接口。")]),t._v(" "),v("li",[t._v("提供了大量工厂类，通过重载这些工厂类可以按需创建出用户实现的对象。")]),t._v(" "),v("li",[t._v("提供了大量的系统参数供用户按需设置，增强系统的场景定制性。")])])]),t._v(" "),v("li",[v("p",[t._v("可扩展性")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("Netty可以方便地进行应用层协议定制，例如 Http 协议栈、FTP 协议栈、目前存在大量基于 Netty 框架的开发的协议，例如 基于Netty 的 Dubbo 协议、RocketMQ 协议、MQTT协议等。\n")])])])])]),t._v(" "),v("h2",{attrs:{id:"经典问题答疑及案例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#经典问题答疑及案例"}},[t._v("#")]),t._v(" 经典问题答疑及案例")]),t._v(" "),v("h3",{attrs:{id:"四种io对比"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#四种io对比"}},[t._v("#")]),t._v(" 四种IO对比")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th"),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("同步阻塞I/O(BIO)")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("伪异步I/O")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("非阻塞I/O(NIO)")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("异步I/O(AIO)")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("客户端个数 : I/O线程")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1 : 1")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("M : N (其中 M 可以大于 N )")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("M : 1(1个 I/O 线程处理多个客户端连接)")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("M : 0(不需要启动额外的 I/O 线程 被动回调)")])]),t._v(" "),v("tr",[v("td",[t._v("I/O 类型(阻塞)")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("阻塞 I/O")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("阻塞 I/O")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("非阻塞 I/O")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("非阻塞 I/O")])]),t._v(" "),v("tr",[v("td",[t._v("I/O 类型(同步)")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("同步 I/O")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("同步 I/O")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("同步 I/O(I/O 多路复用)")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("异步 I/O")])]),t._v(" "),v("tr",[v("td",[t._v("API 使用难度")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("简单")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("简单")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("非常复杂")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("复杂")])]),t._v(" "),v("tr",[v("td",[t._v("调试难度")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("简单")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("简单")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("复杂")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("复杂")])]),t._v(" "),v("tr",[v("td",[t._v("可靠性")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("非常差")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("差")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("高")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("高")])]),t._v(" "),v("tr",[v("td",[t._v("吞吐量")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("低")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("中")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("搞")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("高")])])])]),t._v(" "),v("h3",{attrs:{id:"粘包-半包"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#粘包-半包"}},[t._v("#")]),t._v(" 粘包/半包")]),t._v(" "),v("ul",[v("li",[t._v("TCP 粘包/半包发生的原因\n"),v("ul",[v("li",[t._v("应用程序 write 写入的字节大小大于套接口发送的缓冲区大小。")]),t._v(" "),v("li",[t._v("进行MSS大小的 TCP 分段。")]),t._v(" "),v("li",[t._v("以太网帧的 payload 大于 MTU 进行 IP分片。")])])]),t._v(" "),v("li",[t._v("粘包问题的解决策略\n"),v("ul",[v("li",[t._v("消息定长， 如果不够， 空位补空格。")]),t._v(" "),v("li",[t._v("在包尾增加回车换行符进行分割， 例如 ftp 协议。")]),t._v(" "),v("li",[t._v("将消息分为消息头和消息体， 消息头包含消息总长度(或者消息体总长度)的字段，通常设计思路为消息头的第一个字段使用int32来表示消息的长度。")]),t._v(" "),v("li",[t._v("更复杂的应用层协议。")])])])]),t._v(" "),v("h2",{attrs:{id:"实践案例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#实践案例"}},[t._v("#")]),t._v(" 实践案例")])])}),[],!1,null,null,null);e.default=l.exports}}]);