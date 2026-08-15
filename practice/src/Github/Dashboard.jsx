import React from 'react'
import {useState,useEffect} from "react"
import {useParams,useNavigate,Link} from 'react-router-dom'

function Dashboard() {
    const {username}=useParams()
    const navigate = useNavigate()
    const[search,setSearch] = useState("");
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(false)

    useEffect(() => {

      async function FetchData(){
        setLoading(true)
        try {
            const res = await fetch(`https://api.github.com/users/${username}`)
            const Result = await res.json()
            setData(Result);
        } catch (error) {
            console.error(error);
            setData(null);
        }
        finally {
            setLoading(false)
        }
      }
    if(username){
        FetchData();
    }
     
      
    }, [username])

    function HandleSearch(event) {
        event.preventDefault();
        if (search.trim()){
            navigate( `/github/${search.trim()}`)
            setSearch("")
        }
        
    }
    
  return (
    <div>
        <h1>dash</h1>
        <hr/>
           
             {username}
              
             <form onSubmit= {HandleSearch}>

                <input type="text" 
               value = {search }
               onChange={(e)=>setSearch(e.target.value)} 
             />
             <button type = "submit">
                click me
             </button>
             </form>
            {loading ? (
                <p>loading..</p>
            ) : 
            data && (data.login || data.name) ?
            (
                <div>
                    <img src={data.avatar_url} width = "200"  />

                    <h2>{data.name}</h2>
                </div>
            ) : null
            }
        </div>
  )
}

export default Dashboard