import React from 'react'
import thanku from '../assest/thanku.png'
import './thanku.css'
import { Link } from 'react-router-dom'

function Thanku({title,desc}) {
    return (
        <>
         
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12' style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <a href='#/'><img src={thanku} alt="404" style={{ maxHeight: 450, maxWidth: 500 }}></img></a>
                        <br></br>
                        <h4>{title}</h4>
                        <span>{desc}</span>
                        <br></br>

                        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center',justifyContent:'center',gridGap:10 }}>
                            <Link to='/orders' className="themeButton" style={{
                                width: 200,
                            }}>Track your order</Link>
                            <a href="#/" className="secondaryBtn" style={{
                                width: 200,
                            }}>Go to home</a>
                        </div>
                        {/* <button className='themeButton' style={{ width: '100%', marginTop: 20 }}>Go back home</button> */}
                    </div>
                </div>
            </div>

           
        </>
    )
}

export default Thanku