'use strict'
var React        = require('react')
var merge        = require('deepmerge')
var es           = require('event-stream')
var dispatcher   = require('../dispatcher')
var storeUserMsg = require('../stores/user-message')
var storeUserSgn = require('../stores/user-signin')

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
                            <li key={data.time} style={{listStyle: 'none', width: '100%'}}>
                                <div style={styles.name}>{data.name || data.id}</div>
                                <p style={styles.msg}>{data.msg || '> signin'}</p>
                                <div style={styles.time}>
                                    {(new Date(data.time)).toUTCString()}
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
        var me = this
        dispatcher.pipe(storeUserMsg)
        dispatcher.pipe(storeUserSgn)
        
        es.merge(
            storeUserMsg
          , storeUserSgn
        )
        .on('data', onData)

        function onData (data) {
            me.setState({list: [data].concat(me.state.list)})
        }
    }
})
