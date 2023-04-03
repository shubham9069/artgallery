import React,{useEffect} from 'react'
import './Contact.css';
import axios from '../../axios';
import Toast from '../../Toast';
import img from '../assest/Rectangle 4007.png' 
import validator from 'validator';
import Loader from '../../component/Loader';
import { useState } from 'react';

const Contact = () => {
const[name,setname]=useState("")
const[email,setemail]=useState("")
const[mobile,setmobile]=useState("")
const[subject,setsubject]=useState("")
const[message,setmessage]=useState("")

// ********************contactus**********************
  const contactsubmit= async(e)=>{ 
    e.preventDefault(); 
    try{
  
     const response= await axios({
       method: "post",
      url:`/contact`,
      data:{
        name,email,mobile,subject,message
      },
      
      })
      
      if(response.status===200){
       const data = response.data
       
       Toast(data.message,response.status)
      
      }
    }
    catch(err){
     const error = err.response.data
  
     Toast(error.message);
     
  
  
    }
    finally{
  
    }
  }
  
  
  return (
    
      <>
     
      <div className="section_padding">
        <div className="contact-info">
      <div className="contact-info-box ">
      {/* <img src="" /> */}
      <div className="contact-info-box-content">
      <h3>Phone</h3>
      <p>58458915521</p>
      </div>
      </div>
  
      <div className="contact-info-box ">
      {/* <img src=""/> */}
      <div className="contact-info-box-content">
      <h3>E-mail</h3>
      <p>office@artgallery .com</p>
      </div>
      </div>
  
      <div className="contact-info-box ">
      {/* <img src=""/> */}
      <div className="contact-info-box-content">
      <h3>Address</h3>
      <p>Shop 59, HUDA Market,Sector 22</p>
      </div>
      </div>
  
        </div>
  
       <form method="POST" id="contact-form">   
        <div className="contact-container-content ">
          <h2>Get In Touch</h2>
          
          <div className="contact-container-content-input">
            <input type="text" id="name" name="name" placeholder="your name" style={{fontWeight:"400",fontSize:"15px"}}  value={name} onChange={(e)=>setname(e.target.value)}
                   
                   required />
            <input  id="email" type="text" name="email"  placeholder="your email" style={{fontWeight:"400",fontSize:"15px"}}  value={email} onChange={(e)=>setemail(e.target.value)}
                   
                    required />
            <input  id="subject" type="text" name="subject"  placeholder="your subject" style={{fontWeight:"400",fontSize:"15px"}}  value={subject} onChange={(e)=>setsubject(e.target.value)}  
                   
                    required />
            <input type="number" id="phone" name="phone" placeholder="your phone number" style={{fontWeight:"400",fontSize:"15px"}} value={mobile} onChange={(e)=>setmobile(e.target.value)}
                
                    required />
          </div>
  
            <textarea rows="8" id="msg" cols="40" name="message"    required placeholder="enter text here" style={{fontWeight:"400",fontSize:"15px"}}  value={message} onChange={(e)=>setmessage(e.target.value)}/>  
          
          <button  onClick={contactsubmit} className="themeButton">Send Message</button>
          
          
        </div>
        </form> 
      
        
      </div>
      </>
    )
  
}

export default Contact