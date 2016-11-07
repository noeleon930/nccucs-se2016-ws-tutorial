'use strict'

var socket = io.connect('http://localhost:8787')

socket.on('connect', () => {
    console.log('連接成功')

    console.log('透過 頻道 A 傳東西')
    socket.emit('頻道 A', {
        '自己決定': '要填什麼 payload'
    })

    console.log('透過 頻道 B 傳東西')
    socket.emit('頻道 B', {
        '而且': '可以好幾個頻道'
    })
})

socket.on('頻道 A', data => {
    console.log('來自頻道 A', data)
})

socket.on('頻道 B', data => {
    console.log('來自頻道 B', data)
})