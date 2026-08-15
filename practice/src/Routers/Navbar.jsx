import {Link}  from "react-router";
import './header.css'

export default function NavBar(){
    return <div>
<Link className="link" to ={"/"}><h2>Logo</h2></Link>
  
    
    <div >
        {/* <ul>
            <li>
                <Link className = "link" to = "/">Home</Link>
            </li>
             <li>
                <Link className = "link" to = "/login">Login</Link>
            </li>
             <li>
                <Link className = "link" to = "/about">About</Link>
            </li>

            <li>
                <Link className = "college" to = "/college">College</Link>
            </li>
        </ul> */}
  </div>
    </div>
}