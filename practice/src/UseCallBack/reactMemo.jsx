import React from 'react'


const ReactMemo = React.memo(({handleClick}) => {
  return (
    <>
    <button onClick= {handleClick}>
        increment
    </button>
    </>
    
  )
}
)
export default ReactMemo