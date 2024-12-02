import React from "react"; 
import { useEffect } from "react";


function Todo(props){
    useEffect(()=>{console.log("todo re-rendering")},[])
    return <div>
        <ul>
        <li>{props.t}</li><button onClick={()=>{props.deletetodo(props.i)}}>Delete</button>
       </ul>
          </div>
          
   
}

export default React.memo(Todo)