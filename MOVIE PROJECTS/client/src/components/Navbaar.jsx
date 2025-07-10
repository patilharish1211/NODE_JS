import { Link, useNavigate } from "react-router-dom";
import "./Navbaar.css"
import { useCookies } from "react-cookie";

export default function Navbaar() {

  const navigate=useNavigate()
  const user=JSON.parse(localStorage.getItem("userData"))
  const [cookies, removeCookie] = useCookies(['verificationToken']);
  const isAuth=(cookies.verificationToken) 
  const handelLogout=()=>{
    
    removeCookie("verificationToken")
    localStorage.removeItem("userData")
    alert("You Are Log Out")
    navigate("/singin")
  }

  return (
    <>
      <div class="landing-page">
      <header>
          <div class="container">
            <a href="/" class="logo" style={{fontSize:"25px",textDecoration:"none"}} >Your <b style={{color:"red"}}>Movies</b></a>
            <ul class="links ps-0">

              <Link to="/about" style={{fontSize:"20px",textDecoration:"none",color:"white"}}>About Us</Link>
              <Link to="/movies" style={{fontSize:"20px",textDecoration:"none",paddingLeft:"30px",color:"white"}}>All Movies</Link>
              <Link to="/create" style={{fontSize:"20px",textDecoration:"none",paddingLeft:"30px",color:"white"}}>Add Movies</Link>
       {!isAuth ? (
        <Link
          to="/singin"
          style={{
            fontSize: "20px",
            textDecoration: "none",
            color: "white",
          }}
        >
          <li>Get Start</li>
        </Link>
      ) : (
        <Link
          to="#"
          style={{
            fontSize: "20px",
            textDecoration: "none",
            color: "white",
          }}
        >
          <li onClick={handelLogout}>Log Out</li>
        </Link>
      )}

              {user?.role=="admin" &&
                <Link to="/AllNotesAdmin" style={{fontSize:"20px",textDecoration:"none",color:"white"}}><li>Get All Notes</li></Link>}
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}
