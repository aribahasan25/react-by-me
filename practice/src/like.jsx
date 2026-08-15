import {  useState} from "react";


const Like = () => {

    const  [ isLiked, setIsLiked] = useState(false);
    const [ likes, setLikes] = useState(0);

    function HandleLike() {
        if (isLiked){
           setIsLiked(false)
           setLikes(likes-1)

        }
        else
           setIsLiked(true)
           setLikes(likes+1)
    }
  return (
        
      <>
      <h1>Like:{likes}</h1>
          <button onClick = {HandleLike}>
            {isLiked?"unlike":"like"}
          </button>
         
          </>
  )
}

export default Like