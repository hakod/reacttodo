import React, { Component } from 'react'

export default class Add extends Component {
    addItem() {
        this.props.add();
    }
    render() {
        return (
            <div>
                <button onClick={this.addItem.bind(this)}>+</button>
            </div>
        )
    }
}
