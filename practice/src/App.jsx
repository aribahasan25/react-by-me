// 



// import { Routes, Route } from "react-router-dom";

// import Navbar from "./Code2cash/Navbar";
// import Testimonials from "./Code2cash/Testimonials";
// import Footer from "./Code2cash/Footer";

// import Home from "./Code2cash/Home";
// import AboutPage from "./Code2cash/AboutPage";
// import ServicesPage from "./Code2cash/ServicesPage";
// import CareersPage from "./Code2cash/CareersPage";
// import ContactPage from "./Code2cash/ContactPage";


// function App() {
//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path = "/testimonials" element = {<Testimonials />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/services" element={<ServicesPage />} />
//         <Route path="/careers" element={<CareersPage />} />
//         <Route path="/contact" element={<ContactPage />} />
//       </Routes>

//       <Footer />
//     </>
//   );
// }

// export default App;
import { Routes, Route, Navigate } from "react-router-dom";
//import Navbar from "./Routers/Navbar";
// import Home from "./Routers/Home";
// import College from "./Routers/college"
// import Department from "./Routers/Pages/Department"
// import Course from "./Routers/Pages/course"
// import Students from "./Routers/Pages/StudentsDetail"
// import About from "./Routers/about";
// import Login from "./Routers/login";
// import PageNotFound from "./Routers/PageNotFound";
import Dashboard from "./Github/Dashboard"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/github/:username" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;