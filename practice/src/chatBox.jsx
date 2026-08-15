import React, { useReducer, useState, useEffect } from "react";


const initialState = {
  messages: []
};


function reducer(state, action) {

  switch(action.type){

    case "ADD_MESSAGE":
    case "BOT_REPLY":
      return {
        ...state,
        messages:[
          ...state.messages,
          action.payload
        ]
      };


    default:
      return state;
  }

}



const ChatBox = () => {


  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );


  const [input, setInput] = useState("");



  function sendMessage(){

    if(!input.trim()) return;


    dispatch({
      type:"ADD_MESSAGE",
      payload:{
        sender:"user",
        text:input
      }
    });


    setInput("");

  }



  useEffect(()=>{


    const lastMessage =
      state.messages[state.messages.length - 1];


    if(lastMessage?.sender === "user"){

      getGeminiReply(lastMessage.text);

    }


  },[state.messages]);





  async function getGeminiReply(message){

    const response = await fetch(
      "AIzaSyBvfjcZh74NvYnPChf93MTZl8C5iG1KfXo",
      {

      method:"POST",

      headers:{
        "Content-Type":"application/json"
      },


      body:JSON.stringify({

        contents:[
          {
            parts:[
              {
                text:message
              }
            ]
          }
        ]

      })

    });


    const data = await response.json();


    const reply =
      data.candidates[0].content.parts[0].text;



    dispatch({

      type:"BOT_REPLY",

      payload:{
        sender:"bot",
        text:reply
      }

    });


  }





  return (

    <div>

      <h2>AI Chatbot</h2>


      {
        state.messages.map((msg,index)=>(

          <p key={index}>
            <b>{msg.sender}:</b> {msg.text}
          </p>

        ))
      }


      <input

        value={input}

        onChange={(e)=>setInput(e.target.value)}

        placeholder="Ask anything..."

      />


      <button onClick={sendMessage}>
        Send
      </button>


    </div>

  );

};


export default ChatBox;