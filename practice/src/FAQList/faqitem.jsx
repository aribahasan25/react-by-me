import { useState } from "react";

function FAQItem({ data }) {
  const [isAnswerOpen, setIsAnswerOpen] = useState(false);

  function handleClick() {
    setIsAnswerOpen(!isAnswerOpen);
  }

  return (
    <div
      onClick={handleClick}
      
    >
      
      <div className="flex justify-between items-center px-5 py-4">
        <h1 >
          {data.question}
        </h1>
        <span className>
          {isAnswerOpen ? "hide" : "show"}
        </span>
      </div>

    
      {isAnswerOpen && (
        <div>
          <p >
            {data.answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default FAQItem;