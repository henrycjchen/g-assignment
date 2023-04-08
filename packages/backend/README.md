## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## websocket 连接数限制

单机最大连接数为 6w+ 个，取决于可使用的端口数

> 根据TCP/IP协议，由于端口是16位整数，也就只能是0到 65535，而0到1023是预留端口，所以能分配的端口只是1024到65534，也就是64511个。也就是说，一台机器一个IP只能创建六万多个websocket长连接。

关键参数：

- 全局最大连接数 `sysctl kern.maxfiles`

- 单进程最大连接数 `sysctl kern.maxfilesperproc`

- 最大文件描述符 `ulimit -n`

- 端口分配配置 `sysctl net.inet.ip.portrange`

## 消息通知机制

通信人在线的情况下，可以直接采用 socket.to(roomid) 的方式，群发信息

如果要给离线的用户发送消息，则需要采用消息队列的方式，先将发送方的数据存到消息队列里，再根据接收方的连接状态，异步从消息队列里获取接收方的信息，发送给接收方。

流程示意图如下：

```mermaid
sequenceDiagram
    participant User1
    participant Server
    participant Mongodb
    User1 ->> Server: send message
    Server ->> Mongodb: save message into send-listmermaid
```

```mermaid
sequenceDiagram
    participant User2
    participant Server
    participant Mongodb
    Server -->> Server: check connected user, get User2
    loop Every second
        Server ->> MongoDB: get message that send to User2
        Server -->> User2: send message
    end
```

## 多进程部署

多进程部署的情况下，socket 还需要借助数据库/中间服务，来实现跨服务器消息同步
参考：

- Redis 接入：https://socket.io/docs/v4/redis-adapter/
- MongoDB 接入：https://socket.io/docs/v4/mongo-adapter/
- 中间进程接入：https://socket.io/docs/v4/cluster-adapter/

## 待优化

| 分类  | 子分类     | 内容                 | 相关技术                    |
| --- | ------- | ------------------ | ----------------------- |
| 功能  | 注册/登录   | 邮箱、手机号登录           | cookie/token 存储         |
|     |         | 防机器识别              | 验证码                     |
| 安全  | 请求校验    | 用户身份验证             | cookie 验证               |
|     | 通信安全    | 连接安全               | https/wss               |
|     |         | 请求数据加密             | aes 双向加密                |
| 可用性 | 多进程/多服务 | 多进程管理              | pm2                     |
|     |         | 跨进程/跨服务器 socket 通信 | socket + mongodb/redis  |
|     |         | 离线信息触达             | mongodb 消息队列            |
|     | 日志/监控   | 本地/远程日志            | winston<br/>远程日志服务<br/> |
|     |         | 服务状态监控/异常监控        | process api             |
