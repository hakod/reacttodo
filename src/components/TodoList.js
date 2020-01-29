import React, { Component } from 'react';
import AddTodoList from './AddTodoList';

export default class TodoList extends Component {
    pickList(e) {
        this.props.choose(e)
    }
    render() {
        return (
            <div>
                {this.props.lists.map(a=>{
                    return <p onClick={this.pickList.bind(this, a.title)}>{a.title}</p>
                })}
                <AddTodoList addList={this.props.addList} />
            </div>
        )
    }
}
