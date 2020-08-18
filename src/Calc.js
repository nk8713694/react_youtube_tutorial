

import React from 'react'



function add(a,b)
{
    let sum=a+b
    return sum
}

function sub(a,b)
{
    let sum=a-b
    return sum
}

function mult(a,b)
{
    let sum=a*b
    return sum
}

function divide(a,b)
{
    let sum=a/b
    sum=sum.toFixed(2)
    return sum
}

export {add,mult,sub,divide};

