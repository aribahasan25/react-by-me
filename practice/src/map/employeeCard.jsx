 
  
  const EmployeeCard = ({ariba}) => {
    return (
        <>
     
 
         <div className="card bg-amber-50 shadow-lg rounded-lg p-4 m-4 w-80"> 

           
            <h2 className="text-xl font-bold mb-2">{ariba.name}</h2>     
            <p className="text-gray-700">Role: {ariba.role}</p>
            <p className="text-gray-700">Department: {ariba.department}</p>
            <p className="text-gray-700">Salary: ${ariba.salary}</p>
            <p className="text-gray-700">Experience: {ariba.experience} years</p>
            <p className="text-gray-700">City: {ariba.city}</p>
            <p className="text-gray-700">Status: {ariba.status}</p>    

            </div>


    </>  
    )
  }
  
  export default EmployeeCard


