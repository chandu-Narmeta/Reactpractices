import React, { useEffect, useState } from "react";
import Todo from "./todo";

function Todolist(){
   var [todo,setTodo]= useState(["pay rent","pay bill"])
   useEffect(()=>{console.log("on mounting time")},[])
  

   var [nwtd,setNwtd]=useState()

   function newtodo(e){
       setNwtd(e.target.value)
   }
   function updatetodo(){
     setTodo([...todo,nwtd])
   }
   function deletetodo(ind){
      var temp=[...todo]
      temp.splice(ind,1)
      setTodo([...temp])
   }


return(
    <div>
        <input type="text" onKeyUp={(e)=>{newtodo(e)}} />
        <button onClick={()=>{updatetodo()}}>addTodo</button>
        <div>
            {
                todo.map(function(td,i){
                    return  <Todo key={i} t={td} i={i} deletetodo={deletetodo}></Todo>
                })
            }
        </div>
    </div>
)
}

export default Todolist