import React, { Component } from 'react';
import ListTitle from './ListTitle';
import ListItem from './ListItem';
import Add from './Add';

export default class List extends Component {
    render() {
        return (
            <div>
                <ListTitle list={this.props.list} />
                <Add add={this.props.add} />
                {this.props.list.items.map(item=>{
                    return <ListItem toggle={this.props.toggle} update={this.props.update} give={this.props.give} del={this.props.del} i={item} />
                })}
            </div>
        )
    }
}
