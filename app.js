'use strict'
var path    = require('path')
var express = require('express')

var app = express()

app.use(express.static(path.join(__dirname, '/public')))
app.use(require('dashboard'))

var prefix = '/shoes'
var port   = process.env.PORT || 3000

require('shoes/app').install(app.listen(port), prefix)

console.log('[process.pid %s]', process.pid)
console.log('[server start to listen on port %s]', port)
