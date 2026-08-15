function Card({ count,setCount }) {
  return(
    <div style={{border:"1px solid black",width:"200px",height:"200px",margin:"auto"}}>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
  
}

export default Card;