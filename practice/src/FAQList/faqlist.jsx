import FAQItem from "./faqitem";

function FAQList() {

  let questions = [
    {
      id: 1,
      question: "React kya hai?",
      answer: "React ek JavaScript library hai jo UI banane ke liye use hoti hai. Yeh Facebook ne banaya tha aur ab yeh duniya ki sabse popular front-end library hai."
    },
    {
      id: 2,
      question: "useState kya hai?",
      answer: "useState React ka ek built-in hook hai jo functional components mein local state manage karne ke liye use hota hai. Yeh ek array return karta hai jisme current value aur setter function hota hai."
    },
    {
      id: 3,
      question: "Component kya hota hai?",
      answer: "Component UI ka reusable aur independent part hota hai. React mein har cheez ek component hai — button, card, navbar, sab kuch."
    },
    {
      id: 4,
      question: "State kya hoti hai?",
      answer: "State component ka wo data hota hai jo change hone par UI ko dobara render karta hai. Jab state update hoti hai, React automatically screen update kar deta hai."
    },
    {
      id: 5,
      question: "Conditional Rendering kya hoti hai?",
      answer: "Condition ke basis par alag-alag UI dikhana conditional rendering kehlata hai. Jaise agar user logged in hai toh 'Welcome' dikhao, warna 'Login' dikhao."
    },
    {
      id: 6,
      question: "Props kya hote hain?",
      answer: "Props (properties) parent component se child component mein data bhejne ka tarika hai. Props read-only hote hain — child unhe change nahi kar sakta."
    },
    {
      id: 7,
      question: "JSX kya hota hai?",
      answer: "JSX (JavaScript XML) JavaScript ka syntax extension hai jisme HTML jaisa code likh sakte hain. Browser directly JSX nahi samajhta, Babel isko normal JavaScript mein convert karta hai."
    },
    {
      id: 8,
      question: "Virtual DOM kya hota hai?",
      answer: "Virtual DOM React ka ek lightweight JavaScript object hai jo real DOM ka copy hota hai. Jab state change hoti hai, React pehle Virtual DOM update karta hai, phir sirf changed parts ko real DOM mein update karta hai — isse performance fast rehti hai."
    },
    {
      id: 9,
      question: "Event Handling React me kaise hoti hai?",
      answer: "React mein events jaise onClick, onChange ko JSX mein directly functions ke through handle kiya jata hai. React apna Synthetic Event system use karta hai jo sab browsers mein ek jaise kaam karta hai."
    },
    {
      id: 10,
      question: "React me key ka use kyu hota hai?",
      answer: "Key list ke elements ko uniquely identify karne ke liye use hoti hai. Jab list update hoti hai, React keys ki madad se efficiently decide karta hai kaunse elements add, remove ya update hue hain."
    }
  ];

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      {questions.map((item) => (
        <FAQItem
          key={item.id}
          data={item}
        />
      ))}
    </div>
  );
}

export default FAQList;