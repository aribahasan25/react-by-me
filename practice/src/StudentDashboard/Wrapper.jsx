function Wrapper({ children }) {
  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white shadow-xl rounded-xl p-6">
      {children}
    </div>
  );
}

export default Wrapper;