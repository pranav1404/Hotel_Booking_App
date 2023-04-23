import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./user.css";
import { useNavigate } from "react-router-dom";

const User = ({ setOpen, userData }) => {
  const navigate = useNavigate();

  const handleLogOut = (e)=>{
    e.preventDefault()
    localStorage.removeItem("user1");
    navigate('/login')
  }
  return (
    <div className="popup">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span><h2>User Info</h2> </span>
        <div className="username1">username: {userData.username}</div>
        <button className="uButton" onClick={handleLogOut}>Log Out</button>
      </div>
    </div>
  );
};

export default User;