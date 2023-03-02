import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import './form.css'
import form from '../assest/Rectangle 4007.png'
import validator from 'validator';
import Toast from '../../Toast'
import axios from '../../axios'
import Loader from '../../component/Loader';
import { StrictMode } from 'react';



function Signup() {
    let navigate = useNavigate()
    const [selected, setSelected] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    const [users, setUsers] = useState({
        name: "",
        email: "",
        mobile: "",
        password: ""

    });
    const {name,email,mobile,password} = users
    
  const onchange=(e)=>{
    
    const name = e.target.name;              
   const value = e.target.value;
 

    setUsers({...users,[name]:value})
  }

  const signup = async(e)=>{

    e.preventDefault()
  
     if(!name || !email || !mobile  || !password) return Toast("please fill properly")
     if( !validator.isEmail(email)) return Toast("email is not valid")
     if( !/^[0]?[789]\d{9}$/.test(mobile)) return Toast("mobile no  is not valid")
     if( !validator.isStrongPassword(password)) return Toast("password is not strong")
    //  if( password !== confirmpassword ) return Toast("password and confirm is not match")
     if( selected===false) return Toast("plz read terms & condition ")

     try{
      setIsLoading(true)
      const response= await axios({
        method: "post",
       url:'/signup',
        data:{
          name,email,password,mobile
        },
        headers: {
          "Content-Type": "application/json",
          
        },
       })
       
       if(response.status===200){
        const data = response.data
        Toast(data.message,response.status)
        navigate('/verifyotp',{state:{email}})
       }
     }
     catch(err){
      const error = err.response.data
      Toast(error.message)

     }
     finally{
      setIsLoading(false)
     }
  }

    
    return(
        <>
             {isLoading ?<Loader />:null}
        
        
        <div className='main-form'>
            
            <div className='row  form-width1000' style={{ alignItems: 'center',margin:0 }}>
                <div className='col-md-6' style={{ padding: 0 }}>
                    <img src={form} alt="focusImg"
                        style={{ objectFit: 'fill', width: '100%', height: '100%'}}></img>
                </div>
                <div className='col-md-6 form-rightW1000' style={{ padding: 0}}>
                    <form className=' inputForm' onSubmit={signup} 
                        style={{}}>
                     
                        <h3>Welcome to Art Gallery</h3>
                        <span style={{fontWeight:600,color:'#757373b0'}}>Create your account</span>
                        <br></br>
                        <br></br>
                        <div className="labelAndInput">
                            <label> Name </label>
                            <input type='name' placeholder="Enter name" name="name" value={name} onChange={e => onchange(e)}></input>
                            
                        </div>
                        <div className="labelAndInput">
                            <label> Email </label>
                            <input type='email' placeholder="Enter email" name="email" value={email} onChange={e => onchange(e)}></input>
                          
                        </div>
                        <div className="labelAndInput">
                            <label> Mobile </label>
                            <input type='Number' placeholder="Enter mobile" name="mobile" value={mobile} onChange={e => onchange(e)}></input>
                           
                        </div>
                        <div className="labelAndInput">
                            <label> Password </label>
                            <input type='password' placeholder="Password" name="password" value={password} onChange={e => onchange(e)}></input>
                          
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', margin: '15px 0px 0px 20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1.5px solid #aaa', height: 20, width: 20, borderRadius: 3, marginRight: 10, cursor: 'pointer' }}
                                onClick={() => setSelected(!selected)}>
                                {selected ?
                                    <i class="bi bi-check-lg" style={{ color: '#56BDBD' }}></i>
                                    : null}
                            </div>
                            <p style={{ color: '#000', textAlign: 'center', margin: 0,fontWeight:600 }}>I agree to the <a href="#" className='link-a' style={{fontWeight:600,color:'#56BDBD'}}>Terms & Conditions</a></p>
                        </div>
                        <button type='submit' className='themeButton' style={{ width: '100%', marginTop: 20 }}>Sign up</button>
                        <br></br>
                        <p style={{ color: '#000', textAlign: 'center',fontWeight:500,letterSpacing: '-0.017em'  }}>Are you already a member ? <a href="#/login" className='link-a' style={{color: '#56BDBD'}}>Log in</a></p>

                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Signup