import React, { useState, useEffect, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import './form.css'
import form from '../assest/Rectangle 4007.png'

function Verify() {

    let navigate = useNavigate()
    const [errors] = useState()

    const [users, setUsers] = useState({
        otp1: "",
        otp2: "",
        otp3: "",
        otp4: "",
    });
    ;


    const { otp1, otp2, otp3, otp4 } = users;
    const onchange = e => {
        // setErrorMsg('')
        setUsers(users => ({ ...users, [e.target.name]: e.target.value }));
    }

    function focusInput(e){
      


        var element = document.getElementsByClassName('form-control')
        // console.log(element)
        
  
        // keycode 8 for backspace 
        if(e.keyCode == 8 && e.target.value.length ==0 &&  e.target.previousElementSibling !==null){
        e.target.previousElementSibling.focus()
       
  
        }if( e.target.value.length >=e.target.maxLength && e.target.nextElementSibling !==null){
          e.target.nextElementSibling.focus()
        }
        
  
      }

    return (
        // <div className='container section'>
        <div className=''>
            
            <div className='row' style={{ alignItems: 'center',margin:0 }}>
                <div className='col-md-6' style={{ padding: 0 }}>
                    <img src={form} alt="focusImg"
                        style={{ objectFit: 'fill', width: '100%', height: '100%'}}></img>
                </div>
                <div className='col-md-6' style={{ padding: 40 }}>
                    <form className='otpform' 
                        style={{}}>
                        
                        {/* <ErrorContainer /> */}
                        <h3>Enter verification code</h3>
                        <span style={{fontWeight:600,color:'#757373b0'}}>We  have just sent a verification code to </span>
                        <br></br>
                        <br></br>
                        <div className="labelAndInput">
                            <label>Enter verification code </label>
                            <div className='otpWrapper'>
                                <input  className="otpInput" type='text' placeholder="1" name="otp1"
                                    value={otp1} maxLength={1}
                                    // style={{ borderColor: errors.otp1 ? 'red' : '#C4C4C4' }}
                                    onChange={(e) => {
                                        setUsers({ ...users, otp1: e.target.value })
                                    }}
                                    onKeyUp={e => focusInput(e)}
                                    tabIndex={1}
                                    autoComplete="off"
                                >
                                </input>
                                <input  className="otpInput" type='text' placeholder="2" name="otp2"
                                    value={otp2} maxLength={1}
                                    // style={{ borderColor: errors.otp2 ? 'red' : '#C4C4C4' }}
                                    onChange={(e) => {
                                        setUsers({ ...users, otp2: e.target.value })
                                        // e.target.value ? ref3.current.focus() : ref1.current.focus()
                                    }}
                                    onKeyUp={e => focusInput(e)}
                                    tabIndex={2}
                                    autoComplete="off">
                                </input>
                                <input  className="otpInput" type='text' placeholder="3" name="otp3"
                                    value={otp3} maxLength={1}
                                    // style={{ borderColor: errors.otp3 ? 'red' : '#C4C4C4' }}
                                    onChange={(e) => {
                                        setUsers({ ...users, otp3: e.target.value })
                                        // e.target.value ? ref4.current.focus() : ref2.current.focus()
                                    }}
                                    onKeyUp={e => focusInput(e)}
                                    tabIndex={3}
                                    autoComplete="off">
                                </input><input  className="otpInput" type='text' placeholder="4" name="otp4"
                                    value={otp4} maxLength={1}
                                    // style={{ borderColor: errors.otp4 ? 'red' : '#C4C4C4' }}
                                    onChange={(e) => {
                                        setUsers({ ...users, otp4: e.target.value })
                                    }}
                                    onKeyUp={e => focusInput(e)}
                                    tabIndex={4}
                                    autoComplete="off">
                                </input>
                            </div>
                            {/* <small id="emailHelp" style={{ color: 'red', marginTop: -10 }}>{errors.otp1 && (<p style={{ color: 'red' }}>{errors.username}</p>)}</small> */}
                        </div>
                        <br></br>
                        <p><a  className='link-a' style={{fontWeight:500,color:'#757373b0'}}>Resend OTP</a></p>
                        <p style={{ color: '#000',fontWeight:500 }}>Log In using <a href="#/login" className='link-a' style={{color:'#56BDBD'}}>Password</a></p>
                        <p style={{ color: '#000',fontWeight:500  }}>Having trouble in logging in? <a href="#" className='link-a'  style={{color:'#56BDBD'}}>Get Help</a></p>
                        <br></br>

                        <button type='submit' className='themeButton' style={{ width: '100%', marginTop: 20 }}>Verify</button>
                        <br></br>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Verify