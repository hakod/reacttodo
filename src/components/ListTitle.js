import React, { Component } from 'react'

export default class ListTitle extends Component {
    render() {
        let style = {
            color: 'white',
            fontSize: '1.2em'
        }
        return (
            <div>
                <h2 style={style}>{this.props.list.title}</h2>
            </div>
        )
    }
}
