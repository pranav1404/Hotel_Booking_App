import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usercredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    // setUsername(e.target.value)
    setUserCredentials({...usercredentials, [e.target.name]:e.target.value});
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      // console.log(username);
      // console.log(usercredentials)
      // const user2 = { usercredentials }
      localStorage.setItem('user1', JSON.stringify(usercredentials));
      // console.log(usercredentials.username)
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };


  return (
    <div className="login">
      <div className="lContainer">
      <span class="subtitle">USERNAME</span>
        <input
          type="text"
          name="username"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <span class="subtitle">PASSWORD</span>
        <input
          type="password"
          name="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        {error && <span className="err-msg">{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
