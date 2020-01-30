import React, { Component } from 'react'

export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false,
            old: this.props.i.name,
            input: this.props.i.name,
            edit: false,
            finished: this.props.i.done
        }
    }
    leave() {
        if (this.state.input!=='' && !this.state.edit) {
            this.props.give(this.state.input)
            this.setState({old: this.state.input})
        } else if (!this.state.edit) {
            this.props.del();
        }
        if (this.state.edit) {
            this.props.update(this.state.input, this.state.old)   
            this.setState({edit: false, old: this.state.input})         
        }
    }
    handleKey(e) {
        if (this.state.edit && (e.key==='Escape' || e.key==='Enter')) {
            this.props.update(this.state.input, this.state.old)
            this.setState({edit: false, old: this.state.input})
        }
        if (e.key==='Escape' && !this.state.edit) {
            this.props.del();
        }
        if (e.key==='Enter' && !this.state.edit) {
            if (this.state.input.length > 0) {
                this.props.give(this.state.input)
                this.setState({old: this.state.input})
            }
        }
    }
    handleInput(e) {
        this.setState({
            input: e.target.value
        })
    }
    edit() {
        this.setState({
            focused: false,
            old: this.props.i.name,
            input: this.props.i.name,
            edit: true,
            finished: this.props.i.done})
    }
    toggle() {
        this.setState({old: this.props.i.name},()=>{
            this.props.toggle(this.state.old)
            this.setState({finished: this.props.i.done})
        })
    }
    render() {
        let style = {
            height: '30px',
            width: '30px',
            borderRadius: '50%',
            backgroundColor: this.props.i.done?'blue':'red',
            marginRight: '20px'
        }
        let dstyle = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            borderBottom: '1px solid gray'
        }
        let p = {
            display: 'block',
            marginLeft: '0',
            marginBottom: '.7em',
            marginTop: '.7em',
            marginRight: '0',
            fontSize: '1em',
            color: 'gray'

        }
        return (
            <div style={dstyle}>
                <span onClick={this.toggle.bind(this)} style={style}></span>
                {this.props.i.name && !this.state.edit?
                <p style={p} onClick={this.edit.bind(this)}>{this.props.i.name}</p>:<input style={p} onChange={this.handleInput.bind(this)} onKeyDown={this.handleKey.bind(this)} onBlur={this.leave.bind(this)} autoFocus type='text' value={this.state.input}></input>}
            </div>
        )
    }
}
