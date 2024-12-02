import React from 'react'
import './comp.css'

function Child(prop,chref) {
  return (
    <div class="child">
        <h1>child component</h1>
        <input type="text" ref={chref} />
    </div>
  )
}

export default React.forwardRef(Child)
