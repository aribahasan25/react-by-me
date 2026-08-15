import Employees from "./data";
import EmployeeCard from "./employeeCard";




function EmployeeList() {
  return (
    <>
        <h1 className="text-2xl font-bold mb-4">Employee List</h1>

        {

Employees.map(
    (emp) => (
            <EmployeeCard key={emp.id} ariba={emp} />
        )
    )

        }
    </>
  )
}

export default EmployeeList
 