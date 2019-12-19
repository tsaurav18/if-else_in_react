import React, { Component } from 'react'

export default class Guest extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>welcome Guest</h1>
                <button onClick={this.props.clickData}>Login</button>
                <button >Signup</button>
            </React.Fragment>
                
          
        )
    }
}
