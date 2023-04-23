import { useContext } from "react"
import "./navbar.css"
import {Link, useNavigate} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { useEffect, useState } from "react"
import Reserve from "../../components/reserve/reserve";
import User from "../user/user"

const Navbar = () => {
  const {user} = useContext(AuthContext)
  // let user = localStorage.getItem(user.data)
  // console.log("navbar loaded...")
  const [userData, setUserData] = useState();
  const [openModal, setOpenModal] = useState(false);

    // useEffect(() => {
    // setUserData(JSON.parse(localStorage.getItem('user')));
    // // console.log(userData)
    // });
    useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem('user1')));
    // console.log(userData)
    console.log('page reloaded...')
    },[]);

    const navigate = useNavigate();
    const handleClick = ()=>{
      navigate('/login');
    }

    const handleUser = (e)=>{
      e.preventDefault();
      setOpenModal(true);
    }
    // ,[localStorage.getItem('user')]
  return (
    <div className="navbar">
      <div className="navContainer">
      <Link to="/">
      <span className="logo">book.it</span>
      </Link>
      
      {userData ? <a className="username" onClick={handleUser} href="/">{userData.username}</a> :
        (<div className="navItems">
          {/* <button className="navButton">Register</button> */}
          <button className="navButton"onClick={handleClick} >Login</button>
        </div>)}
      </div>

      {openModal &&  <User userData={userData} setOpen={setOpenModal}></User> }
    </div>
  )
}

export default Navbar