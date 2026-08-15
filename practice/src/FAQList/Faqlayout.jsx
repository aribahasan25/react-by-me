import Nav2 from "./Nav2.jsx";
import Header from "./header.jsx";
import Footer2 from "./footer2.jsx";

function FAQLayout({ children }) {
  return (
    <div >

      <Nav2 />

      <Header />

      <main >
        {children}
      </main>

      <Footer2 />

    </div>
  );
}

export default FAQLayout;