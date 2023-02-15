import React from 'react'
import thanku from '../assest/thanku.png'
import './thanku.css'

function Thanku() {
    return (
        <>
         
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12' style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <a href='#/'><img src={thanku} alt="404" style={{ maxHeight: 450, maxWidth: 500 }}></img></a>
                        <br></br>
                        <h4>Congratulations</h4>
                        <span>Payment was successful and your order is confirmed Enjoy the excellent service and fast delivery.</span>
                        <br></br>

                        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', }}>
                            <a href="#/cart" className="themeButton" style={{
                                marginTop: 10, marginRight: 10, width: 200,
                            }}>Track your order</a>
                            <a href="#/" className="secondaryBtn" style={{
                                marginTop: 10, marginLeft: 10, width: 200,
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