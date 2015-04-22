'use strict'
var es = require('event-stream')

var list = []
var oks  = ('signin signout message').split(' ').map(function (s) { return 'user.' + s })

module.exports = es.map(function (data, cb) {
    if (oks.indexOf(data.actionType) === -1) return cb()

    list.unshift(data)
    cb(null, list)
})
