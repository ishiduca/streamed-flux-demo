'use strict'
var React = require('react')
var Form  = require('./form')
var View  = require('./view')

module.exports = React.createClass({
    render: function () {
        return (
            <section>
                <Form />
                <View />
            </section>
        )
    }
})
