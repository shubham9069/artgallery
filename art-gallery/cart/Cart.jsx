import React from 'react'
import cart from '../asset/cart.png'
import cart2 from '../asset/cart2.png'
import './cart.css'
const Cart = () => {
  return (
  <>
    
                {/* <div className='container section'>
                    <div className='row'>
                        <div className='col-md-12 columnAlign alignCenter'>
                            <a href='#/'><img src="images/Empty-cart.png" alt="empty" style={{ maxWidth: '80%', objectFit: 'contain' }}></img></a>
                            <br></br>
                        </div>
                    </div>
                </div> */}
                

           

                    <div className='container section' style={{}}>

                      

                      

                        <h5 style={{ marginBottom: 20 }}>Shopping Cart</h5>
                   
                            <div >
                                <div className='row' style={{ border: '1px solid #C7C5C5', padding: '20px 0px', }}>
                                    <div className='col-md-3'>

                                        <img src={cart} alt="product" style={{ width: '100%', height: 200, objectFit: 'contain', borderRadius: 8 }}></img>


                                    </div>
                                    <div className='col-md-9' style={{ marginTop: 15, position: 'relative' }}>
                                        <div className='darkLink altDarkLink' style={{
                                            position: 'absolute', right: 10, top: -20
                                        }}
                                         
                                        >X</div>
                                        <h6 style={{ marginBottom: 0 }}></h6>
                                     
                                        <div style={{ marginTop: 0 }}>
                                         
                                        </div>
                                        <div className='row'>
                                            <div className='col-sm-4'>
                                                <h6 style={{  color: '#000' }}>Abstract Painting</h6>
                                            </div>
                                            
                                        </div>
                                        <div className='row'>
                                            <div className='col-sm-4'>
                                                <span style={{ fontSize: 15, color: '#000' }}>Medium-<span style={{fontSize:"13px",color: '#1D1D1D' }}>Oil On Canvas</span></span>
                                            </div>
                                        
                                        </div>
                                        <div className='row'>
                                            <div className='col-sm-4'>
                                                <span style={{ fontSize: 15, color: '#000' }}>Style-<span style={{fontSize:"13px",color: '#1D1D1D' }}>Abstract</span></span>
                                            </div>
                                        
                                        </div>
                                        <div className='row'>
                                            <div className='col-sm-4'>
                                                <span style={{ fontSize: 15, color: '#000' }}>Orientation-<span style={{fontSize:"13px",color: '#1D1D1D' }}>Horizontal</span></span>
                                            </div>
                                        
                                        </div>
                                        <br></br>
                                        <div className='row'>

                                        
                                            <div className='col-md-2 filterForm'>
                                            <select>
                       
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
                        </select>
                                            </div>


                                            <div className='col-md-3 filterForm'>
                                        <select style={{width:"110px"}}>
                   
          <option>08"X10" </option>
          <option>08"X10"</option>
          <option>08"X10"</option>
          <option>08"X10"</option>
          <option>08"X10"</option>
          <option>08"X10"</option>
                    </select>
                                        </div>
                                      
                                   
                                        <div className='col-md-2 columnAlign alignEnd justifyCenter'>
                                                <div style={{float:"right"}}>₹ 20000 <span style={{ textDecoration: 'line-through', fontSize: 12 }}> ₹30000 </span></div>
                                               
                                            </div>
         
                   
                                        </div>

                                      
                                        

                                       

                                       
                                    </div>
                                </div>

                                <div className='row' style={{ border: '1px solid #C7C5C5', borderTop: 'none', padding: '20px 0px', marginBottom: 20 }}>
                                    <div className='col-md-6'>
                             <h6>Expected Ship Date 14 June ,2022</h6>
                                    </div>
                                  
                                </div>

                            </div>
                        

                        <br></br>

                       
                    </div>





                    <div className='section' style={{ backgroundColor: 'rgba(86, 189, 189, 0.07)', padding: "30px 0px" }}>
                        <div className='container columnAlign'>
                            <span style={{ color: '#000', fontWeight: 500, fontSize: 20 }}>Price Details ( items )</span>
                        
                                <div className='row justify-content-between' >
                                    <div className='col-md-6'>
                                        <span></span>
                                    </div>
                                    <div className='col-md-6' style={{ display: 'flex', justifyContent: 'flex-end', }}>
                                        <span >₹ x </span>
                                    </div>
                                </div>
                          
                            <div className='row justify-content-between' style={{ marginTop: 10 }}>
                                <div className='col-md-6'>
                                    <span>Total MRP</span>
                                </div>
                                <div className='col-md-6' style={{ display: 'flex', justifyContent: 'flex-end', }}>
                                    <span>₹</span>
                                </div>
                                <div className='col-md-6'>
                                    <span>Discount on MRP</span>
                                </div>
                                <div className='col-md-6' style={{ display: 'flex', justifyContent: 'flex-end', }}>
                                    <span style={{ color: '#34A853' }}>₹0</span>
                                </div>
                              

                                <div className='col-md-6'>
                                    <span>Insurance</span>
                                </div>
                                <div className='col-md-6' style={{ display: 'flex', justifyContent: 'flex-end', }}>
                                    <span style={{}}>₹0</span>
                                </div>

                               
                                        <div className='col-ms-12'>
                                        <hr style={{ margin: "10px 0 15px 0", width:"100%",backgroundColor: "#aaa" }}></hr>
                                        </div>

                                <div className='col-md-6'>
                               
                                    <span style={{ color: '#000', fontWeight: 500, }}>Bill Total</span>
                                </div>
                                <div className='col-md-6' style={{ display: 'flex', justifyContent: 'flex-end', }}>
                                    <span style={{ color: '#000', fontWeight: 500, }}>₹</span>
                                </div>
                            </div>

                            <br></br>
<div className='row'>
                            <div className='col-md-12 d-flex processedbtn'   replace="" 
                            // state={{
                            //     item_id: 0,
                            //     total: total
                            // }}
                            >Proceed to checkout</div>
                            </div>
                        </div>
                    </div>
  </>
  )
}

export default Cart