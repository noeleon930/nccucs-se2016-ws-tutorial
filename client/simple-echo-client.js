'use strict'

let ws = new WebSocket('ws://localhost:8787')

ws.onmessage = ev => {
    console.log(ev.data)
}

function send(msg) {
    ws.send(msg)
}
