'use strict'
var React = require('react')
var merge = require('deepmerge')
var es    = require('event-stream')
var store = require('../stores/user')

var baseStyle = {
    display: 'inline-block'
  , padding: '6px 6px 0 6px'
  , margin: '0'
}

var styles = {
    name: merge(baseStyle, {
        fontWeight: 'bold'
    })
  , msg: merge(baseStyle, {})
  , time: merge(baseStyle, {
        fontSize: 'x-small'
    })
}

module.exports = React.createClass({
    render: function () {
        return (
            <ul>
                {
                    this.state.list.map(function (data) {
                        return (
                            <li key={data.value.time} style={{listStyle: 'none', width: '100%'}}>
                                <div style={styles.name}>
                                    {data.value.name || data.actionType}
                                </div>
                                <p style={styles.msg}>
                                    {data.value.msg || data.value.id}
                                </p>
                                <div style={styles.time}>
                                    {(new Date(data.value.time)).toUTCString()}
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
  , getInitialState: function () {
        return {list: []}
    }
  , componentDidMount: function () {
        store.on('data', function onData (data) {
            this.setState({list: data})
        }.bind(this))
    }
})
