'use strict'
var express = require('express')
var printf  = require('printf')
var pack    = require('../../package')
var app = module.exports = express()

app.set('views', __dirname)
app.set('view engine', 'hjs')

app.get('/', function (req, res) {
    res.render('dashboard', {
        title: printf('%s v%s', pack.name, pack.version)
      , description: pack.description
      , bundle_js: '/js/bundle.js'
    })
})
