import React, { useCallback, useEffect, useRef, useState } from 'react'
import Child from './Child'
import './comp.css'

function Parent() {
var [name,setName] = useState()
var pref1 = useRef()
var pref2 = useRef()
var cref = useRef()

 var addname = useCallback( function (){
   var temp = pref1.current.value
   var temp2 = pref2.current.value
   setName([temp,temp2])  
 }) 

useEffect(()=>{
    pref1.current.focus()
},[name])

function changeref(event){
    if(event.key==='Enter'){
        pref2.current.focus()
     }
}
var changechildref = useCallback(
       function (event){
          if(event.key==="Enter"){
            cref.current.focus()
            }
            }
)

  return (
    <div className="parent">
      <input type="text" ref={pref1} onKeyUp={(e)=>{changeref(e)}} />
      <br />
      <input type="text" ref={pref2} onKeyUp={(e)=>{changechildref(e)}} />
       <button onClick={()=>{addname()}}>add name</button>
      <div>
        <Child ref={cref} parname={addname} />
      </div>
    </div>
  )
}

export default Parent
