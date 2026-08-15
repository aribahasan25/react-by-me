import { useState, useEffect } from "react";

const quotes = [
  {
    text: "Believe in yourself.",
    author: "Unknown"
  },
  {
    text: "Never stop learning.",
    author: "Student"
  }
];

function Quotes() {
  const [quote, setQuote] = useState({});
  const [quoteNumber, setQuoteNumber] = useState(0);

  function handleQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);

    setQuote(quotes[randomIndex]);
    setQuoteNumber(randomIndex);
  }

  useEffect(() => {
    handleQuote();
  }, []);

  return (
    <>
      <h2>{quote.text}</h2>
      <p>{quote.author}</p>
      <p>Quote No: {quoteNumber }</p>

      <button onClick={handleQuote}>
        Next Quote
      </button>
    </>
  );
}

export default Quotes;