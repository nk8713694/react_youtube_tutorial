import React, { Component } from 'react'
// uisng class component
//  class Profile extends Component {
//    constructor()
//    {
//        super()
//    }
//    componentDidMount()
//    {
//        console.log("life cycle method called");
       
//    }




//   render() {
//     return (
//       // ek hi parent rahega
//      <div>
//          <h1>profile baby</h1>
//      </div>
//     )
//   }
// }

// export default Profile

// using functional Component


function Profile(props)
{
    const red=()=>{
        alert("helllo baby")
    }
    return <div>
        <h1 onClick={red}> {props.text} </h1></div>
}

export default Profile