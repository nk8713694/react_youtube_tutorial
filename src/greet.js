import React from 'react'

export default function greet()
{
var curDate= new Date()
curDate=curDate.getHours();

  const cssStyle={}
  var greeting=""
console.log(curDate)
  if(curDate >= 1 && curDate<10)
  {
    greeting="Good  Morning"
    cssStyle.color="green"
  }
  else if( curDate > 12 && curDate<=19 )
  {
    greeting="good afternoon"
    cssStyle.color="orange"
  }
  else{
    greeting="good night"
    cssStyle.color="brown"
  }

     return (
        <div>

        <h1 >hello nitish <span style={cssStyle}> {`${greeting}`} </span></h1>
        </div>
       
     );
        
       
 }
        
       
  