import React, { Component } from 'react'

export default class Add extends Component {
    addItem() {
        if (!this.props.searching) {
            this.props.add();
        }
    }
    render() {
        let style = {
            backgroundColor: 'darkgray',
            color: 'white',
            border: 'none',
            height: '35px',
            width: '55px',
            fontSize: '1em'
        }
        let style2 = {
            marginRight: '30px'
        }
        return (
            <div style={style2}>
                <button style={style} onClick={this.addItem.bind(this)}>+</button>
            </div>
        )
    }
}
