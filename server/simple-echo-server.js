'use strict'

const WebSocketServer = require('ws').Server
const EchoServer = new WebSocketServer({
    port: 8787
})

// 當有新連線發生時的 handler
EchoServer.on('connection', websocket => {

    // 當這個連線有新訊息進來時的 handler
    websocket.on('message', msg => {
        console.log('received: %s', msg)

        // 然後我們回應
        websocket.send('EchoServer: 你剛剛說 "' + msg + '"')
    })

    // 凡是第一次連線，就發送此訊息
    websocket.send('你已經連上 EchoServer')
})