'use strict'
var es = require('event-stream')
module.exports = es.map(function (data, cb) {
    if ('user.signin' === data.actionType || 'user.signout' === data.actionType)
        cb(null, data.value)
    else
        cb()
})
