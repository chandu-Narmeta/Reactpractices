import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Features() {
  return (
    <div>
       <h1>Features</h1>
       <ul>
        <li><Link to="angular">angular</Link></li>
        <li><Link to="react">react</Link></li>
       </ul>
       <Outlet></Outlet>
    </div>
  )
}

export default Features
