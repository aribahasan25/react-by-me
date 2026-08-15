import { useState, useContext } from "react";
import { ThemeContext } from "./navbar";

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message Sent Successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  const inputClass = `w-full px-5 py-3 mb-5 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500 transition
    ${theme === "dark"
      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
      : "border-gray-300"}`;

  return (
    <section
      id="contact"
      className={`py-20 transition-colors duration-300
        ${theme === "dark" ? "bg-gray-900" : "bg-blue-50"}`}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            Contact Me
          </h2>
          <p className={`mt-3 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            Have a project idea? Let's discuss it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Content */}
          <div>
            <h3 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              Let's Work Together 🚀
            </h3>

            <p className={`mt-5 leading-7 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              I'm always interested in learning new technologies and
              building creative frontend applications.
            </p>

            <div className="mt-8 space-y-4">
              <p className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>📧 Email: ariba@example.com</p>
              <p className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>📍 Location: India</p>
              <p className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>💻 Role: Frontend Developer</p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={`p-8 rounded-3xl shadow-lg ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className={inputClass}
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              className={inputClass}
            />
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;