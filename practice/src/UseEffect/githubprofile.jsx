// import React, { useEffect, useState } from "react";

// const Github = () => {
//   const [users, setUsers] = useState([]);
//   const [search, setSearch] = useState("");
//   const [filteredUsers, setFilteredUsers] = useState([]);

//   // API sirf ek baar call hogi
//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch("https://api.github.com/users");
//       const data = await res.json();

//       setUsers(data);
//       setFilteredUsers(data);
//     };

//     fetchData();
//   }, []);

//   // Search
//   useEffect(() => {
//     const result = users.filter((user) =>
//       user.login.toLowerCase().includes(search.toLowerCase())
//     );

//     setFilteredUsers(result);
//   }, [search, users]);

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Search User"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//      {filter.map((ocd) => (
//   <div key={ocd.id}>
//     <img src={ocd.avatar_url} alt={ocd.login} />
//     <h2>{ocd.login}</h2>
//   </div>
//   ))}
      
//     </>
//   );
// };

// export default Github;


import { useEffect, useState } from "react";

const Githubprofile = () => {
  const [profile, setProfile] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);


  useEffect(() => {
     const getProfile = async () => {
    const response = await fetch(`https://api.github.com/users`);
    const data = await response.json();
    setProfile(data);
    setFilter(data);
  };

    getProfile();

  }, []);
  useEffect(()=>{
    const result = profile.filter((ocd)=>
    ocd.login.toUpperCase().includes(search.toUpperCase())


    );
  setFilter(result);

},[search,profile]);

  
  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filter.map((ocd) => (
  <div key={ocd.id}>
    <img src={ocd.avatar_url} alt={ocd.login} />
    <h2>{ocd.login}</h2>
  </div>
))}
    </>
  );
};

export default Githubprofile;