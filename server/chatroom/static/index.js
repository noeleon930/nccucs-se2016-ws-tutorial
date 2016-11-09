'use strict'

var socket = io.connect(window.location.origin)

socket.on('others', data => {
    console.log(data.from, ':', data.msg)
})

socket.on('welcome', data => {
    console.log('welcome!', data)
})

var me = ''

function iam(_me) {
    me = _me

    socket.emit('welcome', me)
}

function isay(msg) {
    if (me === '') return 'please use iam("username") first ^^'

    socket.emit('say', {
        from: me,
        msg: msg
    })

    console.log(me, ':', msg)
}