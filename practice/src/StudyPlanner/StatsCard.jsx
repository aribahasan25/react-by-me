function StatsCard({ title, value, color }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border">

      <p className="text-gray-500 text-sm">
        {title}
      </p>

      <h2 className={`text-3xl font-bold mt-3 ${color}`}>
        {value}
      </h2>

    </div>
  );
}

export default StatsCard;