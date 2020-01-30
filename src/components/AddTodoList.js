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
        let dstyle2 = {
            width: '100%',
            marginLeft: '30px',
            marginBottom: '20px'
        }
        let style = {
            backgroundColor: 'darkgray',
            color: 'white',
            border: 'none',
            height: '35px',
            width: '120px',
            marginLeft: '30px'
        }
        return (
            <div style={dstyle2}>
                <input placeholder='Add list' type='text' onChange={this.handle.bind(this)} value={this.state.input} ></input>
                <button style={style} onClick={this.addList.bind(this)}>Add a list</button>
            </div>
        )
    }
}
