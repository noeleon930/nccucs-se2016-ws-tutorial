'use strict'

let ws = new WebSocket('ws://localhost:8787')

ws.onmessage = ev => {
    console.log(ev.data)
}

function simpleSend(msg) {
    ws.send(msg)
}
