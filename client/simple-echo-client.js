'use strict'

let ws = new WebSocket('ws://localhost:8787')

ws.onmessage = ev => {
    console.log(ev.data)
}

ws.onopen = () => {
    send('hi!')
}

function send(msg) {
    ws.send(msg)
}