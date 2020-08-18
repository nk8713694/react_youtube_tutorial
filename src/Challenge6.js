import React, { useState } from 'react'


 const Count1=()=>
{
    const state=useState()
 const [count,setCount]=useState(new Date().toLocaleTimeString());
function inSum()
{
    console.log("hello");
    console.log(state);
    
    setCount(new Date().toLocaleTimeString());
   // console.log();
    
}
    return(
      <>
       <div>
       <h1>{count}</h1>
      
      <button onClick={inSum}> Click Me </button>
       </div>
     

      </>
    );
}

export default Count1;

