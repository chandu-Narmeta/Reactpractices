import React, { useCallback, useEffect, useRef } from 'react'
import Child from './Child'
import './comp.css'

function Parent() {
var pref1 = useRef()
var pref2 = useRef()
var cref = useRef()

useEffect(()=>{
    pref1.current.focus()
},[])

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
    <div class="parent">
      <input type="text" ref={pref1} onKeyUp={(e)=>{changeref(e)}} />
      <br />
      <input type="text" ref={pref2} onKeyUp={(e)=>{changechildref(e)}} />
      <div>
        <Child ref={cref}/>
      </div>
    </div>
  )
}

export default Parent
