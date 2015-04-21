'use strict'
var es = require('event-stream')
module.exports = es.map(function (data, cb) {
console.log(data)
   cb(null, data)
})
