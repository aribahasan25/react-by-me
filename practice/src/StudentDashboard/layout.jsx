import Nav from "./nav.jsx";
import Wrapper from "./Wrapper";
import Foot from "./foot.jsx";


function Layout({children}){


 return(

  <>

   <Nav/>

   
 
   <main>
      <Wrapper/>
      {children}
   </main>


   <Foot/>

  </>

 )


}


export default Layout;