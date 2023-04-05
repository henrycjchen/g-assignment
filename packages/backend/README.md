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

为保证消息的触达成功率，这里采用消息队列的方式，先将发送方的数据存到消息队列里，再根据接收方的连接状态，异步从消息队列里获取接收方的信息，发送给接收方。

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
