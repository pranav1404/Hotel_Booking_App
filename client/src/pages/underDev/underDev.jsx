import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import "./underDev.css"
const Underdev = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className='content'>
        <h1>Under development...</h1> 
      </div>
      <MailList />
        <Footer />

    </div>
  )
}

export default Underdev