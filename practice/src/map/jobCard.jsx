function JobCard({ job }) {
  return (
    <div className="w-80 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6">
      
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-900">
        {job.title}
      </h2>

      {/* Company */}
      <p className="text-blue-600 font-semibold mt-1">
        {job.company}
      </p>

      {/* Details */}
      <div className="mt-5 space-y-3 text-gray-600">
        <div className="flex items-center gap-2">
          <span>📍</span>
          <span>{job.location}</span>
        </div>

        <div className="flex items-center gap-2">
          <span>💼</span>
          <span>{job.type}</span>
        </div>

        <div className="flex items-center gap-2">
          <span>💰</span>
          <span className="font-semibold text-green-600">
            {job.salary}
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-6">
        <button className="flex-1 bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition">
          Apply Now
        </button>

        <button className="px-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
          ❤️
        </button>
      </div>
    </div>
  );
}

export default JobCard;