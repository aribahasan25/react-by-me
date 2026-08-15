import Jobs from "./data2";
import JobCard from "./jobCard";
import {useState} from "react";

function JobPortal() {
    const [searchTerm, setSearchTerm] = useState("");
    function handleSearch(event) {
        setSearchTerm(event.target.value); 
    }
  const filteredJobs = Jobs.filter((jb) =>
    jb.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    jb.company?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="bg-white p-4 rounded shadow-md w-80 mb-6">
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="min-h-screen bg-gray-100 p-8 flex flex-wrap justify-center gap-6">
        {filteredJobs.map((jb) => (
          <JobCard key={jb.id} job={jb} />
        ))}
      </div>
    </>
  );
}

export default JobPortal;