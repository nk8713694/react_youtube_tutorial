import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

// ReactDOM.render(
//   [
//   <h1>kya dikhana hai ... 2nd argument kaha dikhana hai </h1>,
//   <p>like and subsribe me everywhere</p>,
//   <p> and share it with your friends</p>
//   ],
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.Fragment>
//    <h1>kya dikhana hai ... 2nd argument kaha dikhana hai </h1>
//   <p>like and subsribe me everywhere</p>
//   <p> and share it with your friends</p>

//   </React.Fragment>
  
//   ,
//   document.getElementById('root')
// );

// ReactDOM.render(
//     <>
//      <h1>kya dikhana hai ... 2nd argument kaha dikhana hai </h1>
//     <p>Top 5 net flix series</p>
//     <ol start="1">
//       <li>wear1 </li>
//       <li>wear2 </li>
//       <li>wear3 </li>
//       <li>wear4 </li>
//       <li>wear5 </li>
//     </ol>
   
  
//     </>
    
//     ,
//     document.getElementById('root')
//   );

var day = new Date().toLocaleDateString();
var  time = new Date().toLocaleTimeString();
  // ReactDOM.render(
  //   <>
  //    <h1 contentEditable="true">kya dikhana hai ... 2nd argument kaha dikhana hai </h1>
  //   <p>Top 5 net flix series</p>
      
  //    <h1> {` ${day}` } </h1>
  //    <h1> {` ${time}` } </h1>
  
  //   </>
    
  //   ,
  //   document.getElementById('root')
  // );


  // inline css

  // const heading ={
  //   color:"red",
  //   textTransform:'capitalize'
  // }


  // ReactDOM.render(
  //     <>
  //      <h1 style={{ color:"red", textTransform:'capitalize', textAlign:"center" }}>kya dikhana hai ... 2nd argument kaha dikhana hai </h1>
  //     <p className="heading1">Top 5 net flix series</p>
       
  //      <div class="img-div">
  //       <img src="https://i.picsum.photos/id/465/536/354.jpg?hmac=WEXd5GqsLQ1Wiw0QZw0SEHS4wVLetFejAcyF-jkNH3A"/>
  //       <img src="https://i.picsum.photos/id/665/536/354.jpg?hmac=ZUP396BZVlcimGikLaoXdSIZnc1itqxDyMOlOJv84hU"/>
  //       <img src="https://picsum.photos/536/354"/>


  //      </div>
  //     </>
      
  //     ,
  //     document.getElementById('root')
  //   );

  
  var curDate= new Date().getHours();

  const cssStyle={}
  var greeting=""

  if(curDate >= 1 && curDate<=12)
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
    cssStyle.color="pink"
  }

    ReactDOM.render(
      <>
     
        
         <div>


         <h1 >hello nitish <span style={cssStyle}> {`${greeting}`} </span></h1>
         </div>
        
       
        
       
      </>
      
      ,
      document.getElementById('root')
    );




    
