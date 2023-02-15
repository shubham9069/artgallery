import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import './form.css'
import form from '../assest/Rectangle 4007.png'



function Signup() {

    let navigate = useNavigate()
 

    const [selected, setSelected] = useState(true)

    const [users, setUsers] = useState({
        username: "",
        email: "",
        mobile: "",
        password: ""

    });
    const {username,email,mobile,password} = users
    return(
        // <div className='container section'>
        <div className=''>
            
            <div className='row' style={{ alignItems: 'center',margin:0 }}>
                <div className='col-md-6' style={{ padding: 0 }}>
                    <img src={form} alt="focusImg"
                        style={{ objectFit: 'fill', width: '100%', height: '100%'}}></img>
                </div>
                <div className='col-md-6' style={{ padding: 0}}>
                    <form className=' inputForm' 
                        style={{}}>
                     
                        <h3>Welcome to Art Gallery</h3>
                        <span style={{fontWeight:600,color:'#757373b0'}}>Create your account</span>
                        <br></br>
                        <br></br>
                        <div className="labelAndInput">
                            <label> Name </label>
                            <input type='name' placeholder="Enter name" name="username" value={username} onChange={e => onchange(e)}></input>
                            
                        </div>
                        <div className="labelAndInput">
                            <label> Email </label>
                            <input type='email' placeholder="Enter email" name="email" value={email} onChange={e => onchange(e)}></input>
                          
                        </div>
                        <div className="labelAndInput">
                            <label> Mobile </label>
                            <input type='mobile' placeholder="Enter mobile" name="mobile" value={mobile} onChange={e => onchange(e)}></input>
                           
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
    )
}

export default Signup