import React from 'react'
import { useNavigate } from "react-router-dom";
import "./login2.css";

const login2 = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState()
    console.log(username);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // localStorage
        const user = { username, password };
        localStorage.setItem('user' , JSON.stringify(user))
        console.log(user);
        navigate('/')
    };
  return (
    <form className="login" onSubmit={handleSubmit}>
      <div className="lContainer">
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        value={username}
        placeholder="enter a username"
        onChange={({ target }) => setUsername(target.value)}
        className="lInput"
/>
      <div>
        <label htmlFor="password">password: </label> <br />
        <input
          type="password"
          value={password}
          placeholder="enter a password"
          onChange={({ target }) => setPassword(target.value)}
          className="lInput"
        />
      </div>
      <button className="lButton" type="submit">Login</button>
      </div>
    </form>
  );
}

export default login2