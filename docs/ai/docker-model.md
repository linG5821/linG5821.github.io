## Docker 模型文档

docker model runner 原始 docker 运行模型的方案

> windows 桌面版本只支持llama.cpp 作为后端

### 拉取模型

```shell 
docker model pull qwen2.5:0.5B-F16
```

### 运行模型
```shell
docker model run qwen2.5:0.5B-F16 -d
```
> 不加 -d 会通过交互式运行

### 停止模型
```shell
docker model unload qwen2.5:0.5B-F16
```

### 通过API访问
```shell
# OpenAI 兼容的方式
curl http://localhost:12434/engines/v1/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "qwen2.5:0.5B-F16",
    "prompt": "你好"
  }'
```

### 查看 Model Runner 的状态
```shell
docker model status
```

![image-20260331134937235](https://ling-root-bucket.oss-cn-hangzhou.aliyuncs.com/picgo/image-20260331134937235.png)

### 其他命令
```shell
# 查看运行中的模型
docker model ps 

# 搜索模型
docker model search [关键字]

# 查看已经下载的模型
docker model list
```
