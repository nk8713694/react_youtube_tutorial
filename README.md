import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

import {add,sub,mult,divide}  from './Calc'
import List from './Profile'

import Greet from './greet'

import Func from './Netflix'

import Count from './lec30'

import Count1 from './Challenge6'
import spreadOperator  from './spreadOperator'
import TodoList from './TodoList'
import { ComA } from './ComA';



const FirstName = createContext(); 

const LastName = createContext(); 

export default function App()
{
   


   return (
    <>
    <FirstName.Provider value={" noob ki DUA"}>
    <LastName.Provider value={"MAA KI DUA"}>
    <ComA></ComA>
    </LastName.Provider>
    </FirstName.Provider>


    </>

   );

}

export {FirstName,LastName};

//    {/* <Func imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"/>
//     <h1> the subtract of two nos is  {sub(2,3)}</h1> 
//     <h1> the mult of two nos is  {mult(2,3)}</h1> 
//     <h1> the divide of two nos is  {divide(2,3)}</h1>   */}

//     {/* <Count/> */}
// {/* 
//     <Count1/> */}

// {/* 
//     <TodoList/> */}
    
