import React from 'react'
import {Outlet} from "react-router-dom"


function College() {
  return (
    <div style = {{textAlign:'center'}}>
        <h1>College Page</h1>
       <Outlet/>
        
    </div>
  )
}

export default College