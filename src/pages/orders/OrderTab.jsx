import React from 'react'
import { Link } from 'react-router-dom'

const OrderTab = () => {

    
    const payment_type =
    {
        "Payment Failed": "images/cancelled.png",
        "Payment Processing": "images/ordered.png",
        "Payment Success": "images/delivered.png"
    }
  return (
    <>

            <div className='container section-padding' style={{ display: 'flex', flexDirection: 'column' }}>

              
                <h5 style={{ marginBottom: 20 }}>All Orders</h5>
                
                    <div  style={{
                        boxShadow: "0px 3px 12px rgba(0, 0, 0, 0.15)",
                        borderRadius: 8,
                        marginBottom: 15,
                        padding: 10,
                    }}>
                        <div style={{ display: 'flex', }}>
                            <img src={payment_type["Payment Success"]} style={{ marginRight: 10, width: 33, height: 33, objectFit: 'contain' }} />
                            <div>
                                <span style={{ color: '#000', fontWeight: 500 }}>IN-51-63E496C588D7F</span>
                                <br></br>
                                <span style={{ fontSize: 12 }}>09 Feb 2023 12:16 PM</span>
                            </div>
                            <p style={{    margin: '0 10px 0 auto'}}><i class="bi bi-bag-x-fill" style={{}}></i></p>
                        </div>
                        <hr class="dropdown-divider" style={{ margin: "10px 0px 20px 0px", backgroundColor: "#aaa" }}></hr>



                        <div className='rowAlign between-div' style={{ padding: '0px 10px', marginBottom: 5 }}>
                            <span style={{ color: '#000' }}>Product name </span>
                            <span style={{ color: '#B8B7B7' }}>Abstract G-75412</span>
                        </div>
                        <div className='rowAlign between-div' style={{ padding: '0px 10px', marginBottom: 5 }}>
                            <span style={{ color: '#000' }}>Payment status</span>
                            <span style={{ color: 'green'  }}>Payment Success</span>
                        </div>
                        <div className='rowAlign between-div' style={{ padding: '0px 10px', marginBottom: 5 }}>
                            <span style={{ color: '#000' }}>Item Amount</span>
                            <span style={{ color: '#B8B7B7' }}>₹7500</span>
                        </div>
                        <div className='rowAlign between-div' style={{ padding: '0px 10px', marginBottom: 5 }}>
                            <span style={{ color: '#000' }}>Paid Amount</span>
                            <span style={{ color: '#B8B7B7' }}>₹452178</span>
                        </div>
                        <hr class="dropdown-divider" style={{ margin: "20px 0px 5px 0px", backgroundColor: "#aaa" }}></hr>

                        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', }}>
                            <div href="#/cart" className="themeButton" style={{
                                marginTop: 10, marginRight: 10, width: 150, height: 40
                            }} onClick={() => { }}>Track</div>

                            <Link to='/OrderDetails'
                               className="secondaryBtn" style={{
                                    marginTop: 10, marginLeft: 10, width: 150, height: 40
                                }}>Details</Link>
                        </div>
                    </div>
               

            </div>










    </>
  )
}

export default OrderTab