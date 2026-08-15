import React from 'react'
 function Wrapp({children}) {
  return (
    <div style = {{color:"geen",border:"5px solid green",width:"800px", padding:"20px" ,margin:"60px"}} >

        {children}

    </div>
  )
}

export default Wrapp;
