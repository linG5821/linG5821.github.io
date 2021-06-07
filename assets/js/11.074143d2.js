(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{365:function(t,l,v){"use strict";v.r(l);var _=v(44),i=Object(_.a)({},(function(){var t=this,l=t.$createElement,v=t._self._c||l;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h3",{attrs:{id:"mysql"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[t._v("#")]),t._v(" MySQL")]),t._v(" "),v("h4",{attrs:{id:"数据库设计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据库设计"}},[t._v("#")]),t._v(" 数据库设计")]),t._v(" "),v("ol",[v("li",[t._v("数据库设计中表中字段日期/时间类型的选择\n"),v("ul",[v("li",[t._v("datetime 类型\n"),v("ol",[v("li",[t._v("与时区无关,记录数据的原始时间,不随着时区的变化而变化")]),t._v(" "),v("li",[t._v("5.6 版本之后可以使用当前时间作为默认值,并且由原来的8字节变成5字节")]),t._v(" "),v("li",[t._v("无需任何转换,人类可读")]),t._v(" "),v("li",[t._v("支持更大的时间范围(1000 年 ~ 9999 年)")]),t._v(" "),v("li",[t._v("允许为空值")])])]),t._v(" "),v("li",[t._v("timestamp 类型\n"),v("ol",[v("li",[t._v("随时区变化, 存储时对当前的时区进行转换，检索时再转换回当前的时区")]),t._v(" "),v("li",[t._v("UTC 格式保存")]),t._v(" "),v("li",[t._v("TIMESTAMP值不能早于1970或晚于2038(1901-12-13 到 2038-01-19 03:14:07)")]),t._v(" "),v("li",[t._v("占用4个字节")]),t._v(" "),v("li",[t._v("默认值为当前系统时间,随着记录中其他字段的值变更,该字段也会变更")])])]),t._v(" "),v("li",[t._v("int bigint 存储整数类型\n"),v("ol",[v("li",[t._v("占用4/8 个字节")]),t._v(" "),v("li",[t._v("建立索引后查询速度快")]),t._v(" "),v("li",[t._v("不能时间mysql的时间函数")]),t._v(" "),v("li",[t._v("条件范围搜索可以使用 between")])])])])])]),t._v(" "),v("h4",{attrs:{id:"sql"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#sql"}},[t._v("#")]),t._v(" SQL")]),t._v(" "),v("h4",{attrs:{id:"疑难解答"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#疑难解答"}},[t._v("#")]),t._v(" 疑难解答")]),t._v(" "),v("ol",[v("li",[t._v("select * from tableA group by cid 语句返回的非 group 字段值到底是什么?\n答: group by 时，那些不参与 grouping 的字段具体返回哪条数据在 MySQL5.7 (包括5.7) 之前的版本处于未定义规则状态，官方文档不承诺一定会返回哪条数据， group by 返回的是根据主键顺序，也是没有依据的。")])])])}),[],!1,null,null,null);l.default=i.exports}}]);