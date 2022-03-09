(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{418:function(_,v,t){"use strict";t.r(v);var o=t(32),s=Object(o.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[_._v("#")]),_._v(" MySQL")]),_._v(" "),t("h2",{attrs:{id:"数据库设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库设计"}},[_._v("#")]),_._v(" 数据库设计")]),_._v(" "),t("ol",[t("li",[_._v("数据库设计中表中字段日期/时间类型的选择\n"),t("ul",[t("li",[_._v("datetime 类型\n"),t("ol",[t("li",[_._v("与时区无关,记录数据的原始时间,不随着时区的变化而变化")]),_._v(" "),t("li",[_._v("5.6 版本之后可以使用当前时间作为默认值,并且由原来的8字节变成5字节")]),_._v(" "),t("li",[_._v("无需任何转换,人类可读")]),_._v(" "),t("li",[_._v("支持更大的时间范围(1000 年 ~ 9999 年)")]),_._v(" "),t("li",[_._v("允许为空值")])])]),_._v(" "),t("li",[_._v("timestamp 类型\n"),t("ol",[t("li",[_._v("随时区变化, 存储时对当前的时区进行转换，检索时再转换回当前的时区")]),_._v(" "),t("li",[_._v("UTC 格式保存")]),_._v(" "),t("li",[_._v("TIMESTAMP值不能早于1970或晚于2038(1901-12-13 到 2038-01-19 03:14:07)")]),_._v(" "),t("li",[_._v("占用4个字节")]),_._v(" "),t("li",[_._v("默认值为当前系统时间,随着记录中其他字段的值变更,该字段也会变更")])])]),_._v(" "),t("li",[_._v("int bigint 存储整数类型\n"),t("ol",[t("li",[_._v("占用4/8 个字节")]),_._v(" "),t("li",[_._v("建立索引后查询速度快")]),_._v(" "),t("li",[_._v("不能时间mysql的时间函数")]),_._v(" "),t("li",[_._v("条件范围搜索可以使用 between")])])])])])]),_._v(" "),t("h2",{attrs:{id:"sql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql"}},[_._v("#")]),_._v(" SQL")]),_._v(" "),t("h2",{attrs:{id:"mysql原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql原理"}},[_._v("#")]),_._v(" MySQL原理")]),_._v(" "),t("h3",{attrs:{id:"mysql基本架构示意图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql基本架构示意图"}},[_._v("#")]),_._v(" Mysql基本架构示意图")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://ling-root-bucket.oss-cn-hangzhou.aliyuncs.com/picgo0d2070e8f84c4801adbfa03bda1f98d9.webp",alt:"Mysql基本架构示意图"}}),_._v("\nMySQL 可以分为 Server 层和存储引擎层两部分。")]),_._v(" "),t("p",[_._v("Server 层包括"),t("strong",[_._v("连接器")]),_._v("、"),t("strong",[_._v("查询缓存")]),_._v("、"),t("strong",[_._v("分析器")]),_._v("、"),t("strong",[_._v("优化器")]),_._v("、"),t("strong",[_._v("执行器")]),_._v("等，涵盖 MySQL 的大多数核心服务功能，以及所有的内置函数（如日期、时间、数学和加密函数等），所有跨存储引擎的功能都在这一层实现，比如"),t("strong",[_._v("存储过程")]),_._v("、"),t("strong",[_._v("触发器")]),_._v("、"),t("strong",[_._v("视图")]),_._v("等。不同的存储引擎共用一个 Server 层。")]),_._v(" "),t("p",[_._v("而存储引擎层负责数据的存储和提取。其架构模式是"),t("strong",[_._v("插件式")]),_._v("的，支持 "),t("strong",[_._v("InnoDB")]),_._v("、"),t("strong",[_._v("MyISAM")]),_._v("、"),t("strong",[_._v("Memory")]),_._v(" 等多个存储引擎。现在最常用的存储引擎是 InnoDB，它从 MySQL 5.5.5 版本开始成为了默认存储引擎。")]),_._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[_._v("存储引擎简单对比：1、InnoDB支持事务，而MyISAM不支持事务 2、InnoDB支持行级锁，而MyISAM支持表级锁 3、InnoDB支持MVCC, 而MyISAM不支持 4、InnoDB支持外键，而MyISAM不支持 5、InnoDB不支持全文索引，而MyISAM支持。")])]),_._v(" "),t("h3",{attrs:{id:"连接器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#连接器"}},[_._v("#")]),_._v(" 连接器")]),_._v(" "),t("p",[_._v("不要将密码直接写在 "),t("code",[_._v("-p")]),_._v(" 之后，这样会导致密码泄漏，通过 "),t("code",[_._v("history")]),_._v(" 可以查看历史输入的命令。")]),_._v(" "),t("p",[_._v("用户名密码认证通过，连接器会到权限表里面查出你拥有的权限。"),t("strong",[_._v("权限信息连接建立时读到的快照")]),_._v("，这个连接里面的权限判断逻辑，都将依赖于此时读到的权限。"),t("strong",[_._v("修改用户权限，不会影响已经存在的连接")]),_._v("，只有再新建的连接才会使用新的权限设置。")]),_._v(" "),t("p",[_._v("连接完成后，如果没有后续的动作，这个连接就处于空闲状态，通过 "),t("code",[_._v("show processlist;")]),_._v(" 命令可以查看当前的连接。客户端如果太长时间没动静，连接器就会自动将它断开。这个时间是由参数 wait_timeout 控制的，默认值是 8 小时。可以通过 "),t("code",[_._v("show variables like 'wait_timeout';")]),_._v("来查看。")]),_._v(" "),t("p",[_._v("如果在连接被断开之后，客户端再次发送请求的话，就会收到一个错误提醒： Lost connection to MySQL server during query。这时候如果你要继续，就需要重连，然后再执行请求了。")]),_._v(" "),t("p",[_._v("数据库中，"),t("strong",[_._v("长连接是指连接成功后，如果客户端持续有请求，则一直使用同一个连接")]),_._v("。"),t("strong",[_._v("短连接则是指每次执行完很少的几次查询就断开连接，下次查询再重新建立一个")]),_._v("。建立连接的过程通常是比较复杂的，"),t("strong",[_._v("使用中要尽量减少建立连接的动作，也就是尽量使用长连接")]),_._v("。")]),_._v(" "),t("p",[_._v("全部使用长连接后，有些时候会导致 MySQL "),t("strong",[_._v("占用内存涨得特别快")]),_._v("，这是因为 "),t("strong",[_._v("MySQL 在执行过程中临时使用的内存是管理在连接对象里面的。这些资源会在连接断开的时候才释放。所以如果长连接累积下来，可能导致内存占用太大，被系统强行杀掉（OOM），从现象看就是 MySQL 异常重启了")]),_._v("。")]),_._v(" "),t("p",[t("strong",[_._v("解决长连接占用内存过大的两种方案")]),_._v("：")]),_._v(" "),t("ol",[t("li",[_._v("定期断开长连接。使用一段时间，或者程序里面判断执行过一个占用内存的大查询后，断开连接，之后要查询再重连。")]),_._v(" "),t("li",[_._v("如果你用的是 MySQL 5.7 或更新版本，可以在每次执行一个比较大的操作后，通过执行 mysql_reset_connection 来重新初始化连接资源。这个过程不需要重连和重新做权限验证，但是会将连接恢复到刚刚创建完时的状态。")])]),_._v(" "),t("h3",{attrs:{id:"查询缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询缓存"}},[_._v("#")]),_._v(" 查询缓存")]),_._v(" "),t("p",[_._v("Mysql拿到一个查询请求，会优先查看是否具有缓存，历史执行的语句是通过 key-value 对的形式，被直接缓存在内存中的，如果查询能够直接匹配缓存，value会被直接返回给客户端，不再进行后续操作。显然这样的效率会很高，但是"),t("strong",[_._v("查询缓存往往弊大于利")]),_._v("，所以在"),t("strong",[_._v("mysql8.0中直接移除了查询缓存")]),_._v("。")]),_._v(" "),t("h3",{attrs:{id:"分析器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分析器"}},[_._v("#")]),_._v(" 分析器")]),_._v(" "),t("p",[_._v("mysql需要你知道你要做什么，因此需要解析SQL，分析器会优先做词法分析，识别出语句中的字符串分别是什么，代表什么。然后需要做语法分析，根据语法规则判断输入的SQL是否满足语法要求，语句不对会收到“You have an error in your SQL syntax”的错误提醒。")]),_._v(" "),t("p",[_._v("一般语法错误会提示第一个出现错误的位置，所以你要关注的是紧接“use near”的内容。")]),_._v(" "),t("h3",{attrs:{id:"优化器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优化器"}},[_._v("#")]),_._v(" 优化器")]),_._v(" "),t("p",[_._v("mysql知道你要做什么，还需要根据需求选择一个最优方案，决定怎么做，原则是尽可能扫描少的行记录。优化器"),t("strong",[_._v("会决定使用哪个索引，以及多表关联的连接顺序")]),_._v("。")]),_._v(" "),t("h3",{attrs:{id:"执行器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行器"}},[_._v("#")]),_._v(" 执行器")]),_._v(" "),t("p",[_._v("执行器在执行时，会判断对这个表有没有权限，没有权限会返回没有权限的错误。权限验证在分析器阶段也会做，叫做 “precheck”, 但是无法对运行中涉及的表进行权限验证，比如使用了触发器的情况，因此执行器阶段也需要做一次权限验证。")]),_._v(" "),t("p",[_._v("执行器会根据表的引擎定义，去调用对应的引擎提供的API进行数据操作，所以数据库引擎是插件形式的。")]),_._v(" "),t("p",[_._v("在没有索引的条件下执行器的执行流程是这样的：")]),_._v(" "),t("ol",[t("li",[_._v("调用 InnoDB 引擎接口取这个表的第一行，判断 是否满足条件，如果不是则跳过，如果是则将这行存在结果集中。")]),_._v(" "),t("li",[_._v("调用引擎接口取“下一行”，重复相同的判断逻辑，直到取到这个表的最后一行。")]),_._v(" "),t("li",[_._v("执行器将上述遍历过程中所有满足条件的行组成的记录集作为结果集返回给客户端。")])]),_._v(" "),t("p",[_._v("有索引的情况，执行器调用的是SQL引擎的API，也就是说无索引是执行器过滤数据，有索引时是引擎接口过滤数据。")]),_._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[_._v("TIP")]),_._v(" "),t("p",[_._v("有些场景下，执行器调用一次，在引擎内部则扫描了多行，因此"),t("strong",[_._v("引擎扫描行数跟 rows_examined 并不是完全相同的")]),_._v(" 。rows_examined代表执行器调用存储引擎的次数，一般情况小于引擎扫描行数。")])]),_._v(" "),t("h3",{attrs:{id:"日志模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#日志模块"}},[_._v("#")]),_._v(" 日志模块")]),_._v(" "),t("h4",{attrs:{id:"redo-log-重做日志-innodb-特有"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redo-log-重做日志-innodb-特有"}},[_._v("#")]),_._v(" redo log (重做日志 InnoDB 特有)")]),_._v(" "),t("p",[_._v("mysql redo log 是 WAL（Write-Ahead-Logging），先写日志（redolog也在磁盘上，但是是连续的，顺序IO）后再择机（空闲时）持久化随机IO写回到磁盘，说白了就是把随机 IO 优化成顺序 IO, 使用最低的成本完成记录。有了 redo log InnoDB 就可以保证数据库发生异常重启时，之前提交的记录都不会丢，这个能力称为 "),t("strong",[_._v("crash-safe")]),_._v("。")]),_._v(" "),t("blockquote",[t("p",[_._v("这里对比 Redis 是AOF，它是先做存储（Redis 是基于内存的，直接写入更快），再持久化到AOF日志中。")])]),_._v(" "),t("p",[_._v("InnoDB 的 redo log 是固定大小的，比如可以配置一个4个文件每个文件是1G，从头开始写，写到末尾就回到开头循环写。如下图所示：")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://ling-root-bucket.oss-cn-hangzhou.aliyuncs.com/picgo16a7950217b3f0f4ed02db5db59562a7.webp",alt:""}})]),_._v(" "),t("p",[_._v("write pos 是当前记录的位置，一边写一边后移，写到第 3 号文件末尾后就回到 0 号文件开头。checkpoint 是当前要擦除的位置，也是往后推移并且循环的，擦除记录前要把记录更新到数据文件。")]),_._v(" "),t("p",[_._v("write pos 和 checkpoint 之间的空着的部分，可以用来记录新的操作。如果 write pos 追上 checkpoint，表示写满了，这时候不能再执行新的更新，得停下来先擦掉一些记录，把 checkpoint 推进一下。")]),_._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[_._v("TIP")]),_._v(" "),t("p",[_._v("写满后“刷脏”，只是刷脏的一种方式，还有如下几种：")]),_._v(" "),t("p",[_._v("1.后台线程定期会刷脏页")]),_._v(" "),t("p",[_._v("2.清理LRU链表时会顺带刷脏页")]),_._v(" "),t("p",[_._v("3.redoLog写满会强制刷")]),_._v(" "),t("p",[_._v("4.数据库关闭时会将所有脏页刷回磁盘")]),_._v(" "),t("p",[_._v("5.脏页数量过多（默认占缓冲池75%）时，会强制刷")])]),_._v(" "),t("p",[_._v("一些核心配置参数：")]),_._v(" "),t("ul",[t("li",[t("p",[t("code",[_._v("innodb_log_file_size")])]),_._v(" "),t("p",[_._v("该参数用来调整 redo log file 的大小，也就是我们在 mysql data 目录下看到的 iblogfile 文件。")]),_._v(" "),t("p",[_._v("配置太小：会导致重做日志很容易写满，写满会切换日志文件，切换日志文件会导致强制刷大量“脏页”，影响服务器 TPS；")]),_._v(" "),t("p",[_._v("配置太大：会加长 mysql 意外宕机的恢复时间，因为 Mysql 启动时会用 redo log 重做上次数据库关闭未及时刷盘的的数据页，重做页面越多，启动时间越长。")])]),_._v(" "),t("li",[t("p",[t("code",[_._v("innodb_log_files_in_group")]),_._v(" 控制文件数")])]),_._v(" "),t("li",[t("p",[t("code",[_._v("innodb_adaptive_flushing")]),_._v(" （mysql 5.5 新增）")]),_._v(" "),t("p",[_._v("该参数影响每秒刷新脏页的操作，开启此配置后，刷新脏页会通过判断产生重做日志的速度来判断最合适的刷新脏页的数量。关闭会导致MySQL服务器的tps有明显的波动。每当重做日志写满了，MySQL就会停下手头的任务，先把脏页刷到磁盘里，才能继续干活")])]),_._v(" "),t("li",[t("p",[t("code",[_._v("innodb_adaptive_flushing_lwm")]),_._v("（mysql 5.5 新增）")]),_._v(" "),t("p",[_._v("该参数可以设置redo log flush低水位线，当需要flush的redo log超过这个低水位时，innodb会立即启用adaptive flushing。")])]),_._v(" "),t("li",[t("p",[t("code",[_._v("innodb_flush_log_at_trx_commit")])]),_._v(" "),t("p",[_._v("0：事务提交时不会将 log buffer 中日志写入到 os buffer (什么都不做)，而是每秒写入 "),t("code",[_._v("os buffer")]),_._v(" 并调用 "),t("code",[_._v("fsync()")]),_._v(" 写入到 磁盘中的 log file。也就是说设置为0时是(大约)每秒刷新写入到磁盘中的，当系统崩溃，会丢失1秒钟的数据，但性能最好。")]),_._v(" "),t("p",[_._v("1：事务每次提交都会将 log buffer 中的日志写入 os buffer 并调用 "),t("code",[_._v("fsync()")]),_._v(" 刷到磁盘中的 log file。这种方式即使系统崩溃也不会丢失任何数据，但是因为每次提交都写入磁盘，IO的性能较差 但最安全。")]),_._v(" "),t("p",[_._v("2：每次提交都仅写入到os buffer，然后是每秒调用fsync()将 os buffer 中的日志写入到磁盘中的 log file。")])])]),_._v(" "),t("h4",{attrs:{id:"bin-log-归档日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bin-log-归档日志"}},[_._v("#")]),_._v(" bin log (归档日志)")]),_._v(" "),t("p",[_._v("binlog 是 server 层的日志，redo log 是 InnoDB 特有的日志，binlog有两种模式，statement 格式的话是记sql语句， row格式会记录行的内容，记两条，更新前和更新后都有。")]),_._v(" "),t("p",[t("strong",[_._v("为什么会有两种日志？")])]),_._v(" "),t("p",[_._v("因为最开始 MySQL 里并没有 InnoDB 引擎。MySQL 自带的引擎是 MyISAM，但是 MyISAM 没有 crash-safe 的能力，binlog 日志只能用于归档。而 InnoDB 是另一个公司以插件形式引入 MySQL 的，既然只依靠 binlog 是没有 crash-safe 能力的，所以 InnoDB 使用另外一套日志系统——也就是 redo log 来实现 crash-safe 能力。")]),_._v(" "),t("p",[t("strong",[_._v("这两种日志有以下三点不同")]),_._v("：")]),_._v(" "),t("ol",[t("li",[_._v("redo log 是 InnoDB 引擎特有的；binlog 是 MySQL 的 Server 层实现的，所有引擎都可以使用。")]),_._v(" "),t("li",[_._v("redo log 是物理日志，记录的是“在某个数据页上做了什么修改”；binlog 是逻辑日志，记录的是这个语句的原始逻辑，比如“给 ID=2 这一行的 c 字段加 1 ”")]),_._v(" "),t("li",[_._v("redo log 是循环写的，空间固定会用完；binlog 是可以追加写入的。“追加写”是指 binlog 文件写到一定大小后会切换到下一个，并不会覆盖以前的日志。")])]),_._v(" "),t("p",[t("strong",[_._v("update 语句的执行流程")]),_._v("：")]),_._v(" "),t("ol",[t("li",[_._v("执行器先找引擎取 ID=2 这一行。ID 是主键，引擎直接用树搜索找到这一行。如果 ID=2 这一行所在的数据页本来就在内存中，就直接返回给执行器；否则，需要先从磁盘读入内存，然后再返回。")]),_._v(" "),t("li",[_._v("执行器拿到引擎给的行数据，把这个值加上 1，比如原来是 N，现在就是 N+1，得到新的一行数据，再调用引擎接口写入这行新数据。")]),_._v(" "),t("li",[_._v("引擎将这行新数据更新到内存中，同时将这个更新操作记录到 redo log 里面，此时 redo log 处于 prepare 状态。然后告知执行器执行完成了，随时可以提交事务。")]),_._v(" "),t("li",[_._v("执行器生成这个操作的 binlog，并把 binlog 写入磁盘。")]),_._v(" "),t("li",[_._v("执行器调用引擎的提交事务接口，引擎把刚刚写入的 redo log 改成提交（commit）状态，更新完成。")])]),_._v(" "),t("p",[_._v("update 语句的执行流程图，图中浅色框表示是在 InnoDB 内部执行的，深色框表示是在执行器中执行的：")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://ling-root-bucket.oss-cn-hangzhou.aliyuncs.com/picgo2e5bff4910ec189fe1ee6e2ecc7b4bbe.webp",alt:""}})]),_._v(" "),t("p",[t("strong",[_._v("两阶段提交")]),_._v("：")]),_._v(" "),t("p",[_._v('将 redo log 的写入拆成了两个步骤：prepare 和 commit，这就是"两阶段提交"。如果不使用“两阶段提交”，那么'),t("strong",[_._v("数据库的状态就有可能和用它的日志恢复出来的库的状态不一致")]),_._v("，"),t("strong",[_._v("两阶段提交就是让这两个状态保持逻辑上的一致")]),_._v("。"),t("strong",[_._v("两阶段提交是跨系统维持数据逻辑一致性时常用的一个方案")]),_._v("。")]),_._v(" "),t("p",[t("strong",[_._v("建议设置")]),_._v("：")]),_._v(" "),t("p",[_._v("redo log 用于保证 crash-safe 能力。innodb_flush_log_at_trx_commit 这个参数设置成 1 的时候，表示每次事务的 redo log 都直接持久化到磁盘。这个参数我建议你设置成 1，这样可以保证 MySQL 异常重启之后数据不丢失。")]),_._v(" "),t("p",[_._v("sync_binlog 这个参数设置成 1 的时候，表示每次事务的 binlog 都持久化到磁盘。这个参数我也建议你设置成 1，这样可以保证 MySQL 异常重启之后 binlog 不丢失。")]),_._v(" "),t("h3",{attrs:{id:"事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务"}},[_._v("#")]),_._v(" 事务")]),_._v(" "),t("h4",{attrs:{id:"事务的特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务的特性"}},[_._v("#")]),_._v(" 事务的特性")]),_._v(" "),t("p",[_._v("ACID: 原子性（Atomicity），一致性（Consistency），隔离性（Isolation），持久性（Durability）")]),_._v(" "),t("ul",[t("li",[_._v("原子性：一个事务中的所有操作，要不全部成功，要不全部失败，不会结束在某个中间环节。事务执行过程中如果发生错误，会被回滚到事务开始之前的状态，就像这个事务从来没有执行过一样。原子性的关注点在于事务的可中断性和异常的可恢复性。")]),_._v(" "),t("li",[_._v("一致性：在事务开始之前和结束之后，数据库的完整性没有被破坏。这表示写入的资料必须完全符合所有的预设约束、触发器、级联回滚等。一致性的本质上是应用层对数据结果的预期结果。")]),_._v(" "),t("li",[_._v("隔离性：数据库允许多个并发事务同时对数据进行读写和修改的能力，隔离性可以防止多个事务并发执行时由于交叉执行导致数据的不一致。隔离性关注并发访问的数据可见性。")]),_._v(" "),t("li",[_._v("持久性：事务处理结束后，对数据的修改是永久的，即便系统故障也不会丢失。持久性关注 "),t("code",[_._v("commit")]),_._v(" 的事务数据被正确存储，异常断电数据也不会丢失。")])]),_._v(" "),t("h4",{attrs:{id:"隔离性与隔离级别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#隔离性与隔离级别"}},[_._v("#")]),_._v(" 隔离性与隔离级别")]),_._v(" "),t("p",[_._v("多个事务同时执行并且存在交叉时，可能出现脏读，幻读，不可重复读。")]),_._v(" "),t("ul",[t("li",[_._v("脏读：读取到其他事务未提交的数据。")]),_._v(" "),t("li",[_._v("幻读：多次读取的记录条数不一样。")]),_._v(" "),t("li",[_._v("不可重复读：多次读取的记录的内容不一致。")])]),_._v(" "),t("p",[t("strong",[_._v("事务隔离级别")]),_._v("：")]),_._v(" "),t("ul",[t("li",[_._v("读未提交：一个事务还没提交时，他做的变更就能被别的事务读取到。")]),_._v(" "),t("li",[_._v("读提交：一个事务提交之后，它做的更改才会被其他事务读取到。")]),_._v(" "),t("li",[_._v("可重复读：一个事务执行过程中所看到的数据，总是与启动时看到的数据一致。实际上是锁定已经读取的数据，未提交前不允许其他事务修改。")]),_._v(" "),t("li",[_._v("串行化：对于同一行记录的 “写” 会 “加锁”， “读” 也会 “加锁”，出现读写冲突时，后访问的事务必须等前一个事务执行完成，才能继续执行。")])]),_._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[_._v("TIP")]),_._v(" "),t("p",[_._v("以上隔离级别依次上升，隔离级别越高，并发性能越低，安全性越高。MySQL默认 可重复读（RR），Oracle 读提交（RC），postgresql 读提交（RC）。")])]),_._v(" "),t("p",[t("strong",[_._v("隔离实现")]),_._v("：")]),_._v(" "),t("p",[_._v("视图解释：")]),_._v(" "),t("ul",[t("li",[_._v("读未提交： 直接返回记录上的最新值，没有视图概念。")]),_._v(" "),t("li",[_._v("读提交：MVCC视图会在每一个语句开始执行前创建一个。")]),_._v(" "),t("li",[_._v("可重复读：MVCC视图在开始事务的时候就创建好了，这个视图会一直使用，直到事务结束。注意："),t("strong",[_._v("开起事务方式为 begin 时， 视图是在第一条 select 语句执行前创建")]),_._v("。")]),_._v(" "),t("li",[_._v("串行化：直接加锁避免并行访问。")])]),_._v(" "),t("p",[_._v("更新回滚：")]),_._v(" "),t("p",[_._v("每条记录在更新的时候，除了记录变更记录，还会记录一条变更记录相反的回滚操作记录，前者记录在 redo log, 后者记录在 undo  log。")]),_._v(" "),t("p",[t("strong",[_._v("配置方式")]),_._v("：")]),_._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("-- 显示当前配置\nshow variables like 'transaction_isolation';\n-- 设置全局\nset global transaction isolation level read committed;\n-- 设置当前会话\nset session transaction isolation level read committed; \n")])])]),t("h2",{attrs:{id:"疑难解答"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#疑难解答"}},[_._v("#")]),_._v(" 疑难解答")]),_._v(" "),t("ol",[t("li",[t("code",[_._v("select * from tableA group by cid")]),_._v(" 语句返回的非 group 字段值到底是什么?")])]),_._v(" "),t("p",[_._v("答: group by 时，那些不参与 grouping 的字段具体返回哪条数据在 MySQL5.7 (包括5.7) 之前的版本处于未定义规则状态，官方文档不承诺一定会返回哪条数据， group by 返回的是根据主键顺序，也是没有依据的。")])])}),[],!1,null,null,null);v.default=s.exports}}]);