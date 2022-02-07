(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{421:function(t,a,v){"use strict";v.r(a);var s=v(32),_=Object(s.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"动态代理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#动态代理"}},[t._v("#")]),t._v(" 动态代理")]),t._v(" "),v("ul",[v("li",[t._v("基于接口 ( JDK动态代理 )")]),t._v(" "),v("li",[t._v("基于类 ( cglib )")]),t._v(" "),v("li",[t._v("字节码实现 ( javassist )")])]),t._v(" "),v("h2",{attrs:{id:"并发编程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#并发编程"}},[t._v("#")]),t._v(" 并发编程")]),t._v(" "),v("h3",{attrs:{id:"并发编程的建议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#并发编程的建议"}},[t._v("#")]),t._v(" 并发编程的建议")]),t._v(" "),v("h4",{attrs:{id:"锁的使用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#锁的使用"}},[t._v("#")]),t._v(" 锁的使用")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("为了保证性能，应尽可能保证锁的"),v("strong",[t._v("细粒度")]),t._v("。")])]),t._v(" "),v("li",[v("p",[v("code",[t._v("wait")]),t._v(" 方法用来使线程等待某个条件，它必须在同步快内部被调用，标准使用方式如下：")]),t._v(" "),v("div",{staticClass:"language-java extra-class"},[v("pre",{pre:!0,attrs:{class:"language-java"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("condition"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),v("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wait"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),v("li",[v("p",[t._v("始终使用 "),v("code",[t._v("wait")]),t._v(" 循环来调用 wait 方法，永远不要在循环之外调用 "),v("code",[t._v("wait")]),t._v(" 方法，这样做的原因是"),v("strong",[t._v("尽管并不满足被唤醒条件，但是由于其他线程调用 "),v("code",[t._v("notifyAll()")]),t._v(" 方法会导致被阻塞线程意外唤醒，此时执行条件并不满足，它将破坏被锁保护的约定关系，导致约束失效")]),t._v("。")])]),t._v(" "),v("li",[v("p",[t._v("唤醒线程，应该使用 "),v("code",[t._v("notify")]),t._v(" 还是 "),v("code",[t._v("notifyAll")]),t._v("，"),v("strong",[t._v("当你不知道究竟调用哪个方法的时，保守的做法是调用 "),v("code",[t._v("notifyAll")]),t._v(" 唤醒所有等待线程")]),t._v("。从优化的角度看，如果处于等待的所有线程都在等待同一条件，而每次只有一个线程可以从这个条件中被唤醒，那么应该选择调用 "),v("code",[t._v("notify")]),t._v("。")])]),t._v(" "),v("li",[v("p",[t._v("当多个线程共享同一个变量的时候，每个读或者写数据的操作方法都必须加锁同步，如果没有正确的同步就无法保证一个线程所做的修改被其他线程共享，但通过增加 "),v("code",[t._v("volatile")]),t._v(" 关键字，可以再一定程度上避免读操作加锁。")])])]),t._v(" "),v("h4",{attrs:{id:"volatile的使用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#volatile的使用"}},[t._v("#")]),t._v(" volatile的使用")]),t._v(" "),v("ul",[v("li",[t._v("当一个变量被 "),v("code",[t._v("volatile")]),t._v(" 修饰后，具备如下两种特性：\n"),v("ul",[v("li",[t._v("线程可见性：当一个线程修改了呗 "),v("code",[t._v("volatile")]),t._v(" 修饰的变量后，无论是否加锁其他线程可以立即看到最新的修改。")]),t._v(" "),v("li",[t._v("禁止指令重排序优化，普通的变量仅仅保证在该方法的执行过程中所有依赖赋值结果的地方获取正确的结果，而不能保证变量赋值。")])])]),t._v(" "),v("li",[v("code",[t._v("volatile")]),t._v(" 仅仅解决了可见性问题，但是它并不能保证互斥性，多个线程并发修改某个变量时，仍旧会产生多线程问题。因此不能靠 "),v("code",[t._v("volatile")]),t._v(" 来完全代替传统的锁。")]),t._v(" "),v("li",[v("code",[t._v("volatile")]),t._v(" 最适合使用的是一个线程写，其他线程读的场合，如果有多个线程并发写操作，仍然需要使用锁或者线程安全的容器或者原子变量来代替。")])]),t._v(" "),v("h4",{attrs:{id:"cas指令和原子类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cas指令和原子类"}},[t._v("#")]),t._v(" CAS指令和原子类")]),t._v(" "),v("ul",[v("li",[t._v("互斥同步最主要的问题是进行线程阻塞和唤醒所带来的性能的额外损耗，这种同步被称为"),v("strong",[t._v("阻塞同步")]),t._v("，属于一种悲观的并发策略，称之为悲观锁。与此相对的是非阻塞同步，被称为"),v("strong",[t._v("乐观锁")]),t._v("，Java中应用最广泛的非阻塞同步就是CAS，JDK 1.5 以后提供了很多CAS包装类来简化使用，如 "),v("code",[t._v("AtomicInteger")]),t._v("。")]),t._v(" "),v("li",[t._v("常见的我们可以使用"),v("strong",[t._v("CAS自旋操作")]),t._v("进行更新操作，判断更新操作是否成功. 成功则退出循环，如果失败，进行相应的补偿操作，例如更新旧值并重新计算继续循环直到成功。使用自带的 Atomic 原子类，可以避免同步锁带来的并发访问性能降低的问题。")])]),t._v(" "),v("h4",{attrs:{id:"线程安全类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#线程安全类"}},[t._v("#")]),t._v(" 线程安全类")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("JDK1.5 新的并发工具包分为如下4类：")]),t._v(" "),v("ul",[v("li",[t._v("线程池Executor Framework 以及定时任务相关的类库。")]),t._v(" "),v("li",[t._v("并发集合，包括List、Queue、Map 和 Set 等。")]),t._v(" "),v("li",[t._v("新的同步器，例如读写锁 ReadWriteLock，重入锁 ReentrantLock 等。")]),t._v(" "),v("li",[t._v("新的原子包装类，例如AtomicInteger 等。")])])]),t._v(" "),v("li",[v("p",[t._v("建议使用线程池、Task、原子类和线程安全容器来代替传统的同步锁、wait 和 notify，从而提升并发访问的性能、降低多线程编程的难度。")])])]),t._v(" "),v("h4",{attrs:{id:"读写锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#读写锁"}},[t._v("#")]),t._v(" 读写锁")]),t._v(" "),v("ul",[v("li",[t._v("读写锁主要用于读多写少的场景，用来替代传动的同步锁，以提升并发访问性能，JDK1.6及以上版本对 "),v("code",[t._v("synchronized")]),t._v(" 进行了优化，性能差距缩小，大约相差 20%~30% 左右。")]),t._v(" "),v("li",[t._v("读写锁是可重入、可降级的，一个线程获取读写锁后，可以继续递归获取; 从写锁可以降级为读锁，以便快速释放资源。")]),t._v(" "),v("li",[t._v("ReentrantReadWriteLock 支持设置锁的公平策略，在某些特殊的应用场景下，可以提升并发访问性能，同时兼顾线程等待公平性。")]),t._v(" "),v("li",[t._v("读写锁支持非阻塞的尝试获取锁，如果获取失败，直接返回 false，而不是同步阻塞，这个功能在一些场景下非常有用。例如多个线程同步读写某个资源，当发生异常或者需要释放资源的时候，由哪个线程释放是个难题，因为某些资源不能重复释放或者重复执行，这样可以通过 tryLock 尝试获取锁，如果拿不到，说明已经被其他线程占用，直接退出即可。")]),t._v(" "),v("li",[t._v("获取锁之后一定要释放锁，否则会发生锁溢出异常，通常的做法是通过 finally 块释放锁。如果是 tryLock，获取锁成功才需要释放锁。")])]),t._v(" "),v("h4",{attrs:{id:"其他建议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#其他建议"}},[t._v("#")]),t._v(" 其他建议")]),t._v(" "),v("ul",[v("li",[t._v("应该尽可能的在类文档中增加其行为的并发情况描述，以帮助使用者了解是否需要额外考虑线程同步和并发问题。")]),t._v(" "),v("li",[t._v("在任何情况下程序都不能依赖JDK自带的线程优先级来保证执行顺序、比例和策略，因为各个操作系统的线程调度器实现大相径庭，JDK自带线程优先级设置的优先级策略是非平台可移植的。")])]),t._v(" "),v("h3",{attrs:{id:"线程状态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#线程状态"}},[t._v("#")]),t._v(" 线程状态")]),t._v(" "),v("ul",[v("li",[t._v("线程状态图")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://ling-root-bucket.oss-cn-hangzhou.aliyuncs.com/picgo/3756800208-5c1b354a84566_fix732.jpg",alt:""}})])])}),[],!1,null,null,null);a.default=_.exports}}]);