import React, { useEffect, useMemo, useState ,useCallback, useRef} from "react";
import Todo from "./todo";

function Todolist(){
   var [todo,setTodo]= useState(["pay rent","pay bill"])
   var [nwtd,setNwtd]=useState()
  var nref =useRef()
     useEffect(()=>{console.log("re-rendering")
        nref.current.focus()
     },[todo])

   function newtodo(e){
       setNwtd(e.target.value)
   }
   function updatetodo(){
     setTodo([...todo,nwtd])
   }
  
  var deletetodo =useCallback(
    function (ind){
        var temp=[...todo]
        temp.splice(ind,1)
        setTodo([...temp])
     },[todo]
  )


return(
    <div>
        <input type="text" onKeyUp={(e)=>{newtodo(e)}}  ref={nref} />
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