import React from 'react'


const OrderDetails = () => {
  return (
    <div className="section-padding">
        <h5 style={{marginBottom:20}}>OrderDetails</h5>

        <div className="between-div" style={{background: '#EEEEEE', padding:'1rem'}}>
            <p style={{marginBottom:0}}>ORDER ID: 121232456785</p>
            <span>Copy</span>
        </div>

        <div className='row ' style={{ border: '1px solid #C7C5C5', padding: '20px 0px 20px 0 ',borderRadius:'10px',margin:"1rem 0",  }}>
            <div className='col-md-3'>

                <img src="/" alt="product" style={{ width: '100%', height: 200, objectFit: 'contain', borderRadius: 8 }}></img>


            </div>
            <div className='col-md-9' style={{ marginTop: 15, position: 'relative' }}>
               
                <h6 style={{ marginBottom: 0 }}></h6>
             
                <div style={{ marginTop: 0 }}>
                 
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <h6 style={{  color: '#000',fontSize:'24px',fontWeight:600,lineHeight:"36px" }}>shubham</h6>
                    </div>
                    
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <span style={{color: '#000',fontSize:'16px',fontWeight:600,lineHeight: '30px'}}>Medium - <span style={{fontSize:"13px",color: '#1D1D1D' }}>1</span></span>
                    </div>
                
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <span style={{ fontSize:'16px',fontWeight:600, color: '#000',lineHeight: '30px' }}>Style - <span style={{fontSize:"13px",color: '#1D1D1D' }}>nim</span></span>
                    </div>
                
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <span style={{ fontSize:'16px',fontWeight:600, color: '#000',lineHeight: '30px' }}>Orientation - <span style={{fontSize:"13px",color: '#1D1D1D' }}>horizontal</span></span>
                    </div>
                
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <span style={{ fontSize:'16px',fontWeight:600, color: '#000',lineHeight: '30px' }}>Quantity - <span style={{fontSize:"13px",color: '#1D1D1D' }}>1</span></span>
                    </div>
                
                </div>
                <br></br>
                <div className='row'>

            

              
           
                <div className='col-md-2 d-flex align-items-center ' style={{margin:'0 0 0 auto'}}>
                        <div style={{fontSize: 16,fontWeight:600}}>₹25000<span style={{ textDecoration: 'line-through', fontSize: 12}}> ₹30000 </span></div>
                       
                    </div>


                </div>

              
                

               

               
            </div>
           <div className='d-flex align-items-center px-3' style={{paddingTop:'20px' ,borderTop: '1px solid #C7C5C5',marginTop:'2rem'}}>
            <p style={{margin:0}}>Expected ship Date 14 June ,2022</p>
           </div>
        </div>

        <div style={{margin:"2rem 0 "}}>
            
            <div></div>
            <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{minHeight: 150}}></textarea>
  <label for="floatingTextarea" style={{color: 'rgb(158, 150, 150)'}}>Review</label>
</div>
        </div>
    </div>
  )
}

export default OrderDetails