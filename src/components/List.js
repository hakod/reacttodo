import React, { Component } from 'react';
import ListTitle from './ListTitle';
import ListItem from './ListItem';
import Add from './Add';

export default class List extends Component {
    render() {
        let dstyle = {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '50%',
            backgroundColor: 'black'
        }
        let dstyle2 = {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: '30px'
        }
        let dstyle3 = {
            paddingLeft: '30px',
            overflowY: 'scroll'
        }
        return (
            <div style={dstyle}>
                <div style={dstyle2}>
                <ListTitle list={this.props.list} />
                <Add searching={this.props.searching} add={this.props.add} />
                </div>
                <div style={dstyle3}>
                {this.props.list.items.map(item=>{
                    return <ListItem toggle={this.props.toggle} update={this.props.update} give={this.props.give} del={this.props.del} i={item} />
                })}
                </div>
            </div>
        )
    }
}
