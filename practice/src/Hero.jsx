
import Navbar from "./Navbar.jsx";

function Hero() {
  return (
        <>
        <Navbar/>
        
    <section className="bg-black-100 h-[500px] flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold mb-5">
        Learn React with Projects
      </h1>

      <p className="text-gray-600 text-lg mb-6">
        Practice Import & Export using Components
      </p>

      <button className="bg-blue-600 text-black px-6 py-3 rounded-lg hover:bg-blue-700">
        Start Learning
      </button>
  
    </section>
    </>
  );
}

export default Hero;