import {useCallback,useState} from 'react'
import ReactMemo from './reactMemo'

  function CallBack() {

    const [count, setCount] = useState(0);

    const clickwalafunction = useCallback(
      () => {
        console.log("count:", count);
        setCount(count + 1);
      },
      [count]
    )
    
    return (
   <>
   <h2>{count}</h2>
   
  <ReactMemo handleClick = {clickwalafunction}/>
   </>
    )
  }
  
  export default CallBack