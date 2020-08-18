import React, { useState } from 'react'


 const Count=()=>
{
    const state=useState()
 const [count,setCount]=useState(0);
function inSum()
{
    console.log("hello");
    console.log(state);
    
    setCount(count+1);
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

export default Count;

