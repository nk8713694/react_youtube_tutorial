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




  ReactDOM.render(
      <>
       <h1 className="heading ">kya dikhana hai ... 2nd argument kaha dikhana hai </h1>
      <p>Top 5 net flix series</p>
       
       <div class="img-div">
        <img src="https://picsum.photos/200/300"/>
        <img src="https://picsum.photos/200/300"/>
        <img src="https://picsum.photos/200/300"/>


       </div>
      </>
      
      ,
      document.getElementById('root')
    );

