import React, { useEffect, useState } from "react";

function Header(){
    var [count,setCount] = useState(0)

    console.log("counter re-rendering")

    function inc(){
        setCount(count+1)
    }
    function dec(){
        setCount(count-1)
    }
    return (
        <div className="p-2 border border-success">
            <h1>counter:{count}</h1>
            <button onClick={()=>{inc()}}>increment</button>
            <button onClick={()=>{dec()}}>decrement</button>
        </div>
    )
}

export default Header