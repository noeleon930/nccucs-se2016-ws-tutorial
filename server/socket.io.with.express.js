'use strict'

const path = require('path')

const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

server.listen(8787)

app.use(express.static(path.join(__dirname, 'socketio-static')))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/socketio-static/index.html')
})

io.on('connection', socket => {
    console.log('連接成功，透過 頻道 A 傳東西')
    socket.emit('頻道 A', {
        '嗨': '你好',
        '其實': {
            '物件序列化': '會自動做好耶',
            '而且': ['陣列也可以唷']
        }
    })

    socket.on('頻道 A', data => {
        console.log('來自頻道 A', data)

        console.log('然後透過 頻道 B 傳東西')
        socket.emit('頻道 B', '你剛剛傳了東西到 頻道 A 對不對，且其實傳一個字串也行')
    })

    socket.on('頻道 B', data => {
        console.log('來自頻道 B', data)
    })
})