import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './form.css'
import form from '../assest/Rectangle 4007.png'

function Forgot() {

    const [errors, setErrors] = useState({});

    const [users, setUsers] = useState({
        username: "",
        password: ""

    });
    
    return (
        // <div className='container section'>
        <div className='main-form'>
            <div className='row .main-form' style={{ alignItems: 'center',margin:0 }}>
                <div className='col-md-6' style={{ padding: 0 }}>
                    <img src={form} alt="focusImg"
                        style={{ objectFit: 'fill', width: '100%', height: '100%' }}></img>
                </div>
                <div className='col-md-6 form-rightW1000' style={{ padding: 0}}>
                    <form className=' inputForm'
                        style={{}}>
                      
                        <h3>Forgot your password</h3>
                        <span>Please enter the email address you’d like your password reset
                            information sent to</span>
                        <br></br>
                        <br></br>
                        <div className="labelAndInput">
                            <label>Enter email address </label>
                            <input type='email' placeholder="Enter email" name="username" value={users.username} onChange={e => onchange(e)}></input>
             
                        </div>

                        <button type='submit' className='themeButton' style={{ width: '100%', marginTop: 20 }}>Request reset link</button>
                        <br></br>
                        <p style={{ color: '#000', textAlign: 'center' }}><a href="#/login" className='link-a span-underline' >Back to login</a></p>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Forgot