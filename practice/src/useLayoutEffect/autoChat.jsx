import React, { useState, useRef, useLayoutEffect } from "react";

function AutoChat() {
  const chatRef = useRef(null);
  const inputRef = useRef(null);

  const [messages, setMessages] = useState([
    { id: 1, sender: "Ali", text: "Assalamualaikum bhai!" },
    { id: 2, sender: "You", text: "Walaikum Assalam 😄" },
    { id: 3, sender: "Ali", text: "React padh raha hai?" },
    { id: 4, sender: "You", text: "Haan bhai, hooks chal rahe hain." },
    { id: 5, sender: "Ali", text: "useEffect samajh aaya?" },
    { id: 6, sender: "You", text: "Thoda sa, useLayoutEffect confuse kar raha hai." },
    { id: 7, sender: "Ali", text: "Project bana, sab clear ho jayega." },
    { id: 8, sender: "You", text: "Bas wahi kar raha hoon 😂" },
    { id: 9, sender: "Ali", text: "Complete ho jaye to bhejna." },
    { id: 10, sender: "You", text: "Done bhai! 💪" }
  ]);

  useLayoutEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);

  function handleSendMessage() {
    const text = inputRef.current.value.trim();

    if (!text) return;

    const newMessage = {
      id: messages.length + 1, 
      sender: "You",
      text,
    };

    setMessages([...messages, newMessage]);
    inputRef.current.value = "";
  }

  return (
    <div className="w-96 mx-auto mt-10">
      <div
        ref={chatRef}
        className="h-80 overflow-y-auto border rounded p-4"
      >
        {messages.map((msg) => (
          <div key={msg.id} className="mb-3">
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <input
        ref={inputRef}
        type="text"
        placeholder="Type a message..."
        className="border p-2 rounded w-full mt-4"
      />

      <button
        onClick={handleSendMessage}
        className="bg-blue-500 text-white p-2 rounded mt-2 w-full"
      >
        Send
      </button>
    </div>
  );
}

export default AutoChat;