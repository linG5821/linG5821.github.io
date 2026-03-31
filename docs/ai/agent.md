## Agent（智能体）

### MCP（模型上下文协议）

> MCP 的命名很奇怪，其实应该叫做 ATCP/MTCP 更恰当，此处的 TCP 是 Tool Call Protocol

MCP 规定了 MCP 客户端（Host）与 MCP Server 之间的通信方式，一般情况下MCP Host 由 Agent 集成，标准化了 Agent 调用工具的方式，但是并没有规定 Agent 与模型之间的交互方式。

一个 MCP Server 可以看成是一个工具箱，内部包含了多个可以调用的工具函数，对于模型来说，工具就是函数，函数就是工具。

模型调用工具的本质是，Agent 告诉了模型自己本地有哪些工具函数，如何进行调用，传入什么参数，模型根据任务需要，自行选择合适的工具，输出对应函数的输入参数，**由 Agent 通过 MCP Host 负责调用**

> 所以理论来说，如果本地的 MCP Server 越多，单次对话消耗的 Token 也越多，LLM服务本身无状态，每次都要携带工具列表，教模型查工具会不会好点？


### Skill
Skill 有技能的意思，作用是让模型执行某个特定任务时，知道如何一步一步的做。

目前包含了 SKILL.md, Resource, Script, Asset 等内容。

渐进式披露：Agent 会将 SKILL 列表的元数据，名称描述等信息发送给模型，模型根据任务需要告诉 Agent 想要查看某个具体的SKILL，才会将内容发送给模型，减少了 Token 的使用