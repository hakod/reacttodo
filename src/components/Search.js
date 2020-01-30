import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }
    handleInput(e) {
        this.setState({input: e.target.value},()=>{
            if (this.state.input.length > 0) {
                this.props.search(this.state.input)
            } else {
                this.props.search('')
            }
        })
    }
    render() {
        let style = {
            marginLeft: '30px',
            marginTop: '20px'
        }
        let t = !this.props.searching?'':this.state.input
        return (
            <div style={style}>
                <input placeholder='Search' value={t} type='text' onChange={this.handleInput.bind(this)}/>
            </div>
        )
    }
}
