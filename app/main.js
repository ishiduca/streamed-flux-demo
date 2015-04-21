'use strict'
var shoe           = require('shoe')
var es             = require('event-stream')
var actUserMessage = require('./actions/user-message')
var dispatcher     = require('./dispatcher')

var prefix = '/shoes'

window.onload  = function () {
    var shoes = shoe(prefix)

//es.merge(
    shoes.on('error', onError)
        .pipe(es.parse()).on('error', onError)
//)
        .pipe(dispatcher)

    actUserMessage
        .pipe(es.stringify()).on('error', onError)
        .pipe(shoes)
}

function onError (err) {
    console.log(err)
}

var React = require('react')
var App   = require('./components/app')

React.render(<App />, document.querySelector('#react-app'))
