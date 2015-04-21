'use strict'
var React = require('react')
var act   = require('../actions/user-message')

module.exports = React.createClass({
    render: function () {
        return (
            <form onSubmit={this.handleSubmit}>
                <dl>
                    <dt>name</dt>
                    <dd>
                        <input type="text"
                            required="required"
                            placeholder="your name"
                            ref="name"
                        />
                    </dd>
                    <dt>message</dt>
                    <dd>
                        <input type="text"
                            required="required"
                            placeholder="message"
                            ref="msg"
                        />
                    </dd>
                    <div style={{padding: '12px'}}>
                        <button type="submit">post</button>
                    </div>
                </dl>
            </form>
        )
    }
  , handleSubmit: function (ev) {
        ev.preventDefault()

        act.write({
            name: this.refs.name.getDOMNode().value
          , msg:  this.refs.msg.getDOMNode().value
        })

        this.refs.msg.getDOMNode().value = ''
        this.refs.msg.getDOMNode().focus()
    }
  , componentDidMount: function () {
        this.refs.name.getDOMNode().value = ''
        this.refs.msg.getDOMNode().value = ''
        this.refs.name.getDOMNode().focus()
    }
})
