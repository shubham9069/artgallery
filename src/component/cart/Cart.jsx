import React,{useState} from 'react'
import './Cart.css'
import { bottomRight } from '../../homepage/asset/Export'
import cart_empty from '../assest/cart_empty.png'
import Modal from 'react-bootstrap/Modal';

const Cart = () => {
    const [show, setShow] = useState(false);

    var cartitem =['item-1','item-2']

  return (
    !cartitem.length?
    <div className='container section' style={{ display: 'flex', flexDirection: 'column',alignItems:'center',justifyContent:'center',gridGap:'30px' }}>
    <a href='#/'><img src={cart_empty} alt="no-item" style={{ maxHeight: 450, maxWidth: 350 }}></img></a>
    <h6 style={{fontSize: '28px',color:'#56BDBD'}}> Your Cart Is Empty</h6>
    <p style={{color: '#C4C4C4', fontSize:'24px'}}> Look like you haven’t made 
your choice yet..</p>
</div>
    :
   <>
   
   <div className='container ' style={{margin: '4rem auto',}}>

                      

                      

<h2 style={{ marginBottom: "2rem", fontWeight: "600" }}>Shopping Cart</h2>

    <div >
    {cartitem?.map((element, index) =>{
        return <div className='row' style={{ border: '1px solid #C7C5C5', padding: '20px 0px 20px 0 ',borderRadius:'10px',marginBottom:'1rem' }}>
            <div className='col-md-3'>

                <img src={bottomRight} alt="product" style={{ width: '100%', height: 200, objectFit: 'contain', borderRadius: 8 }}></img>


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
                        <h6 style={{  color: '#000',fontSize:'24px',fontWeight:600,lineHeight:"36px" }}>Abstract {element}</h6>
                    </div>
                    
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <span style={{color: '#000',fontSize:'16px',fontWeight:600,lineHeight: '30px'}}>Medium - <span style={{fontSize:"13px",color: '#1D1D1D' }}>Oil On Canvas</span></span>
                    </div>
                
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <span style={{ fontSize:'16px',fontWeight:600, color: '#000',lineHeight: '30px' }}>Style - <span style={{fontSize:"13px",color: '#1D1D1D' }}>Abstract</span></span>
                    </div>
                
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <span style={{ fontSize:'16px',fontWeight:600, color: '#000',lineHeight: '30px' }}>Orientation - <span style={{fontSize:"13px",color: '#1D1D1D' }}>Horizontal</span></span>
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
              
           
                <div className='col-md-2 d-flex align-items-center ' style={{margin:'0 0 0 auto'}}>
                        <div style={{fontSize: 16,fontWeight:600}}>₹ 20000 <span style={{ textDecoration: 'line-through', fontSize: 12}}> ₹30000 </span></div>
                       
                    </div>


                </div>

              
                

               

               
            </div>
           <div className='d-flex align-items-center px-3' style={{paddingTop:'20px' ,borderTop: '1px solid #C7C5C5',marginTop:'2rem'}}>
            <p style={{margin:0}}>Expected ship Date 14 June ,2022</p>
           </div>
        </div>

       
    })}
        

    </div>


<br></br>


</div>

<div className='between-div voucher container '>
    <p style={{margin:0,fontWeight:600,}}>Apply voucher</p>
    <button type='button' className='white-btn-design' Style={'padding:0.5rem 4rem !important'} onClick={()=>setShow(true)}>Check</button>
</div>




<div className='section section-marginY section-padding' style={{ backgroundColor: 'rgba(86, 189, 189, 0.07)' }}>
<div className='container columnAlign'>
    <span style={{ color: '#000', fontWeight: 500, fontSize: 20 }}>Price Details ( items )</span>

        {/* <div className='row justify-content-between' >
            <div className='col-md-6 my-3'>
                <span></span>
            </div>
            <div className='col-md-6 my-3' style={{ display: 'flex', justifyContent: 'flex-end', }}>
                <span >₹ x </span>
            </div>
        </div> */}
  
    <div className='row justify-content-between' style={{ marginTop: 10 }}>
        <div className='col-md-6 my-2'>
            <span>Total MRP</span>
        </div>
        <div className='col-md-6 my-2' style={{ display: 'flex', justifyContent: 'flex-end', }}>
            <span>₹</span>
        </div>
        <div className='col-md-6 my-2'>
            <span>Discount on MRP</span>
        </div>
        <div className='col-md-6 my-2' style={{ display: 'flex', justifyContent: 'flex-end', }}>
            <span style={{ color: '#34A853' }}>₹0</span>
        </div>
      

        <div className='col-md-6 my-2'>
            <span>Insurance</span>
        </div>
        <div className='col-md-6 my-2' style={{ display: 'flex', justifyContent: 'flex-end', }}>
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
    <div className='col-md-12 d-flex themeButton'   replace="" 
    // state={{
    //     item_id: 0,
    //     total: total
    // }}
    >Proceed to checkout</div>
    </div>
</div>
</div>


<Modal show={show} onHide={()=>setShow(false)}>
        <Modal.Header closeButton>
         
        </Modal.Header>
        <Modal.Body className='center-div flex-column'>
        <h3>Apply Voucher / Offers</h3>
        <div className="voucher-input" style={{margin: '2rem 0'}}>
        <input type="text"  />
        <button >Apply</button>
        </div>
        <div className="coupon">
        <h6>OR</h6>
        <p style={{textAlign: 'center', marginBottom:'1.5rem'}}> Select Coupan from below</p>



        <div>
        <div className="custom-control custom-checkbox d-flex align-items-center"  >
  <input type="checkbox" className="custom-control-input" id="customCheck1"/>
  <label className="custom-control-label px-3 coupan-lable" for="customCheck1">
    <p >Monsoon</p>
    <pdesc style={{fontSize:'12px', fontWeight:600}}>Save<span style={{color: '#56BDBD'}}> 15%  off on Product price </span></pdesc>
  </label>
</div>
<p style={{fontSize:'12px',margin: '0.5rem 3rem'}}>save upto a 15% off </p>
        </div>
        </div>



        </Modal.Body>
      
      </Modal>






   </>
  )
}

export default Cart