'use strict'
var es = require('event-stream')
module.exports = es.map(function (data, cb) {
    cb(null, {actionType: 'user.message', value: data})
})
