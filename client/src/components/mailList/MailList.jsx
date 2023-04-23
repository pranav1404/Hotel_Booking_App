import { useState } from "react";
import "./mailList.css"

const MailList = () => {
  const [html,setHtml]= useState('');
  const [show, setShow] = useState('1');

  const handleClick = async (e)=>{
    e.preventDefault();

    console.log("handle click active...")

    setTimeout(function() {

      console.log('time1')
      setShow('0');
      setHtml("Successfully updated email!")
    }, 1000);
    

  }
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">

          <input show={show} required type="text" placeholder="Your Email" />
          <button onClick={handleClick}>Subscribe</button>

        
        </div>
        <div className="success">{html}</div>
        
    </div>
  )
}

export default MailList