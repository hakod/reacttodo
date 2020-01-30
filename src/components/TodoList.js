import React, { Component } from 'react';
import AddTodoList from './AddTodoList';
import Search from './Search';

export default class TodoList extends Component {
    pickList(e) {
        this.props.choose(e)
    }
    render() {
        let dstyle = {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '50%',
            justifyContent: 'space-between',
            backgroundColor: 'gray'
        }
        let dstyle2 = {
            flex: '1',
            width: '100%'
        }
        let dd = {            
            marginTop: '10px',
            borderBottom: 'solid 1px black',
            backgroundColor: 'lightgray',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'scroll',
            height: '500px'
        }
        let p = {           
            backgroundColor: 'darkgray',
            margin: '0',
            marginTop: '10px',
            marginLeft: '30px',
            marginRight: '30px',
            marginBottom: '10px'
        }
        return (
            <div style={dstyle}>
                <div style={dstyle2}>
                <Search searching={this.props.searching} search={this.props.search}/>
                <div style={dd}>
                {this.props.lists.map(a=>{
                    return <p style={p} onClick={this.pickList.bind(this, a.title)}>{a.title}</p>
                })}
                </div>
                </div>
                <AddTodoList addList={this.props.addList} />
            </div>
        )
    }
}
