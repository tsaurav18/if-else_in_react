// import React, { Component } from 'react'

// export default class User extends Component {
//     render() {
//         return <h3>Prime Member</h3>
        
//     }
// }

//if else statement
import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
           <React.Fragment>
               <h1>welcome saurav</h1>
               <button onClick={this.props.clickData}>Logout</button>
           </React.Fragment>
        )
    }
}
