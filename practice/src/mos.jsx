


function Mos() {
    const userNames = ['John', 'Jane', 'Alice', 'Bob'];
    const userData = [
        {
            id: 1,
            name: 'John',
            age: 25,
            email: "joh@12"
        },
        {
            id: 2,
            name: 'Jane',
            age: 30,
            email: "jane@12"
        },
        {
            id: 3,
            name: 'Alice',  
            age: 28,
            email: "alice@12"
        },
        {
            id: 4,
            name: 'Bob',
            age: 35,
            email: "bob@12"
        }
    ];  


  return (
   <div>
    <h1>Loop in jsx with map function </h1>
    <table border = "4" padding = "10" cellspacing = "10" cellpadding = "10" >
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
            </tr>
        </thead>
       <tbody >
        {userData.map((user) => (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
            </tr>
        ))}
       </tbody>
    </table>
       
        

        
    
    </div>

  
  )
}

export default Mos