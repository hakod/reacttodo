import React, { Component } from 'react'

export default class AddTodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }
    addList() {
        this.props.addList(this.state.input)
        this.setState({
            input: ''
        })
    }
    handle(e) {
        this.setState({
            input: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input type='text' onChange={this.handle.bind(this)} value={this.state.input} ></input>
                <button onClick={this.addList.bind(this)}>Add a list</button>
            </div>
        )
    }
}
