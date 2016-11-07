'use strict'

const path = require('path')

const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

server.listen(8787)

app.use(express.static(path.join(__dirname, 'static')))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html')
})

io.on('connection', socket => {
    socket.on('welcome', data => {
        socket.emit('welcome', data)
    })

    socket.on('say', data => {
        socket.broadcast.emit('others', data)
    })
})