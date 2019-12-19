// import React, { Component} from 'react'
// import User from './User'
// export default class App extends Component {
//   render() {
//     const primeMember = this.props.primeMember;
//     return (
//       <React.Fragment>
//         <h1>welcome user</h1>
//         {primeMember && <User />}
//       </React.Fragment>
//     );
//   }
// }
import React, { Component } from 'react'
import User from './User'
import Guest from './Guest'
export default class App extends Component {
  state ={
    isLoggedIn:false
  }
  clickLogin=()=>{
    console.log("login clicked")
    this.setState({isLoggedIn:true})
  }
  clickLogout=()=>{
    console.log("logout clicked")
    this.setState({isLoggedIn:false})
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    // if(isLoggedIn){
    //   return <User clickData={this.clickLogout} />
    // }else{
    //   return <Guest clickData={this.clickLogin}/>
    // }
    return (
      <div>
        {(
           ()=>{
            if(isLoggedIn){
              return <User clickData={this.clickLogout}/>
            }else{
              return <Guest clickData={this.clickLogin}/>
            }
          }
        )
        ()  
        }
      </div>
    )
    
  }
}

