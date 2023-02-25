import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './form.css'
import form from '../assest/Rectangle 4007.png'
import Toast from '../../Toast';
import axios from '../../axios';
import Loader from '../../component/Loader';

function Forgot() {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({});
    const [isLoading,setIsLoading] = useState(false);

    const [email, setemail] = useState()
    const forget = async(e)=>{
        e.preventDefault()
    
         if(!email  ) return Toast("please fill properly")
        
         try{
          setIsLoading(true)
          const response= await axios({
            method: "post",
           url:'/reset-password',
            data:{
              email
            },
            headers: {
              "Content-Type": "application/json",
              
            },
           })
           
           if(response.status===200){
            const data = response.data
           
            navigate('/Login')
           }
         }
         catch(err){
          const error = err.response.data
          Toast(error.message);
          
    
    
         }
         finally{
          setIsLoading(false)
         }
      }
    

    
    return (
        // <div className='container section'>
        <>
        {isLoading ?<Loader />:null}
        <div className='main-form'>
            <div className='row .main-form' style={{ alignItems: 'center',margin:0 }}>
                <div className='col-md-6' style={{ padding: 0 }}>
                    <img src={form} alt="focusImg"
                        style={{ objectFit: 'fill', width: '100%', height: '100%' }}></img>
                </div>
                <div className='col-md-6 form-rightW1000' style={{ padding: 0}}>
                    <form className=' inputForm'
                        onSubmit={forget}>
                      
                        <h3>Forgot your password</h3>
                        <span>Please enter the email address you’d like your password reset
                            information sent to</span>
                        <br></br>
                        <br></br>
                        <div className="labelAndInput">
                            <label>Enter email address </label>
                            <input type='email' placeholder="Enter email" value={email} onChange={e => setemail(e.target.value)}></input>
             
                        </div>

                        <button type='submit' className='themeButton' style={{ width: '100%', marginTop: 20 }}>Request reset link</button>
                        <br></br>
                        <p style={{ color: '#000', textAlign: 'center' }}><a href="#/login" className='link-a span-underline' >Back to login</a></p>

                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Forgot