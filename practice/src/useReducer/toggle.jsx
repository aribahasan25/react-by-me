import React from "react"
const intialState ={

    theme: "light"
}
  function  ReducerFunction(state,action){

    switch(action.type){
        case  "toggle":
         return  {
           ...state,
           theme : state.theme === "light"?"dark":"light"


        }
        default :
        return state;

        
    }
    
   
}
const Toggle = ()=>{
     const[state,dispatch] = React.useReducer(ReducerFunction,intialState)
 return(
    <>
    
    <div style = {{backgroundColor:state.theme==="light"? "white":"Black", minHeight :"100vh",color:state.theme}
     }>
        <p>{state.theme}</p>
        <button onClick={() => dispatch({type:"toggle"}) } className="p-2 bg-amber-700 text-amber-50">
          click
        </button>
    </div>
    </>
 )
}
export default Toggle