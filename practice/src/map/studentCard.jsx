

const StudentCard = ({ student }) => {
  return (
    <div className="flex justify-center items-center">
    <div className="bg-amber-200 w-50 border-2 border-lg  ">
         < img src={student.image} alt={student.name}   className="w-20 h-20 rounded-full" />
      <h2>{student.name}</h2>
      <p>Course: {student.course}</p>
      <p>Year: {student.year}</p>
      <p>CGPA: {student.cgpa}</p>
      <p>Status: {student.status}</p>
    
    </div>
    </div>
  )
}

export default StudentCard