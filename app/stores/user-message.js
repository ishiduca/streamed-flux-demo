'use strict'
var es = require('event-stream')
module.exports = es.map(function (data, cb) {
    if ('user.message' === data.actionType)
        cb(null, data.value)
    else
        cb()
})
