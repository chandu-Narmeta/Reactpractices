import React from "react"; 
import { useEffect } from "react";


function Todo(props){
    useEffect(()=>{},[])

    return <div>
        <ul>
            <h1>TODOLISt</h1>
        <li>{props.t}</li><button onClick={()=>{props.deletetodo(props.i)}}>Delete</button>
       </ul>
          </div>
          
   
}

export default Todo