import React, { Component } from 'react'

export default class ListTitle extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.list.title}</h2>
            </div>
        )
    }
}
