'use strict'
var shoe = require('shoe')
var es   = require('event-stream')

var broadcast = es.map(function (data, cb) {
    data.value.time = Date.now()
    console.log(data)
    cb(null, data)
})

module.exports = shoe(function (shoes) {
    console.log(String(shoes))

    shoes.on('close', function () {
        broadcast.write({
            actionType: 'user.signout'
          , value: {id: shoes.id}
        })
        console.log('[closed %s]', String(shoes))
    })

    shoes
        .pipe(es.parse()).on('error', onError)
        .pipe(broadcast, {end: false})
        .pipe(es.stringify()).on('error', onError)
        .pipe(shoes)

    broadcast.write({
        actionType: 'user.signin'
      , value: {id: shoes.id}
    })
})

function onError (err) {
    console.log(err)
}
