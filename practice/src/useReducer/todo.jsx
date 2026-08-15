import { useReducer, useState } from "react";

function Todo() {

  const initialState = {
    todos: []
  };


  function reducer(state, action) {

    switch(action.type) {

      case "ADD_TODO":
        return {
          ...state,
          todos: [
            ...state.todos,
            action.payload
          ]
        };


      case "DELETE_TODO":
        return {
          ...state,
          todos: state.todos.filter(
            (_, index) => index !== action.payload
          )
        };


      default:
        return state;
    }

  }


  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );


  const [note, setNote] = useState("");


  function addNote(){

    if(note === "") return;

    dispatch({
      type:"ADD_TODO",
      payload:note
    });

    setNote("");

  }


  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white p-6 rounded-lg shadow-md w-96">

      <input
        type="text"
        value={note}
        onChange={(event)=>{
          setNote(event.target.value);
        }}
        placeholder="Write your todo..."
        className="w-full border border-gray-300 rounded-md p-2 mb-3"
      />


      <button 
        onClick={addNote}
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Add
      </button>


      {
        state.todos.map((todo,index)=>(

          <div 
            key={index}
            className="flex justify-between items-center mt-3 bg-gray-50 p-3 rounded-md"
          >

            <p className="text-gray-700">
              {todo}
            </p>


            <button
              onClick={()=>{
                dispatch({
                  type:"DELETE_TODO",
                  payload:index
                })
              }}

              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
            >
              Delete
            </button>


          </div>

        ))
      }

      </div>

    </div>
  )
}


export default Todo;



import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <h1>useState Counter</h1>

      <h2>{count}</h2>

      <button onClick={decrement}>-</button>

      <button
        onClick={reset}
        style={{ margin: "0 10px" }}
      >
        Reset
      </button>

      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;