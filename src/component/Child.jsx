import React from 'react'
import './comp.css'

function Child(props,chref) {
    console.log(props.addname)
  return (
    <div className="child">
        <h1>child component</h1>
        <input type="text" ref={chref} />
         {
          props.addname?.map(function(e){
              return <li>{e}</li>
          })
         }
    </div>
  )
}

export default React.forwardRef(Child)
