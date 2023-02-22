import React,{useState,useEffect,useContext} from 'react'
import './Cart.css'
import { bottomRight } from '../../homepage/asset/Export'
import cart_empty from '../assest/cart_empty.png'
import Modal from 'react-bootstrap/Modal';
import { AuthContext } from '../../AuthProvider';
import axios from '../../axios';
import Toast from '../../Toast';

const Cart = () => {
    const {userToken,Cart,setCart} = useContext(AuthContext)
    const [show, setShow] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const [coupon ,setCoupon] = useState([]);
    const [couponFilter ,setCouponFilter] = useState("");
    const [couponprice ,setCouponPrice] = useState("");


    // var cartitem =['item-1','item-2']

    const coupen =(e,coupenData)=>{

        if(e.target.checked){
            setCouponPrice(coupenData)
        }
        else{
            setCouponPrice("")
        }

    } 
    const debounce = (func, delay) => {
        let timer
        return (...args) => {
            clearTimeout(timer)
            timer = setTimeout(() => {
                func(...args)  // func.apply(null,args)     
            }, delay)
        }
    }

    const search = debounce((value) => coupenSearch(value), 500)

    const coupenSearch =(e)=>{
        
        if(e.target.value==""){
            return setCouponFilter("")
        }

        let value = e.target.value.toLowerCase();
        
        var arr =coupon?.filter((element)=>{
            
            let coupon_name = element?.coupon_code.toLowerCase()
            
            return coupon_name.includes(value)
           
        })
        
        if(arr.length){
            setCouponFilter(arr)
        }
        else{
            setCouponFilter("")
        }
        
    }

    const get_all= async(url,type) =>{

        try{
          setIsLoading(true)
          const response= await axios({
            method: "get",
           url:url,
           headers:{
            Authorization:`Bearer ${userToken}`
           }
           })
           
           if(response.status===200){
            const data = response.data;
    
            switch(type){
              case 'coupon': 
              setCoupon(data?.coupons)
              break;
              
            }
          //   Toast(data.message,response.status)
           }
         }
         catch(err){
          const error = err.response.data
          Toast(error.message);
          
    
    
         }
         finally{
          setIsLoading(false)
         }
        }

       
        useEffect(()=>{
          
          get_all('/get-coupons','coupon')
          
        },[])

      
        const remove_cart= async(product_id) =>{

            try{
              setIsLoading(true)
              const response= await axios({
                method: "post",
               url:'/remove-cart',
               data:{product_id},
               headers:{
                Authorization:`Bearer ${userToken}`
               }
               })
               
               if(response.status===200){
                const data = response.data;
                setCart(data)
               Toast(data.message,response.status)
               }
             }
             catch(err){
              const error = err.response.data
              Toast(error.message);
              
        
        
             }
             finally{
              setIsLoading(false)
             }
            }
     
            
     //  ----------------------------add to cart --------------------

const Add_to_cart= async(id,qty) =>{
    const Form = new FormData()
    Form.append("product_id",id)
    Form.append("qty",qty)
    try{
      setIsLoading(true)
      const response= await axios({
        method: "post",
       url:'/add-to-cart',
       data:Form,
       headers:{
        Authorization:`Bearer ${userToken}`,
        "Content-Type": "multipart/form-data",
        
       }
       })
       
       if(response.status===200){
        const data = response.data;
        setCart(data)
        Toast(data.message,response.status)
       }
     }
     catch(err){
      const error = err.response.data
      Toast(error.message);
      
  
  
     }
     finally{
      setIsLoading(false)
     }
    }          
    
  return (
    !Cart?.cart_items?.length?
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
    {Cart?.cart_items?.map((element, index) =>{
        return <div className='row' style={{ border: '1px solid #C7C5C5', padding: '20px 0px 20px 0 ',borderRadius:'10px',marginBottom:'1rem' }}>
            <div className='col-md-3'>

                <img src={element?.product?.images} alt="product" style={{ width: '100%', height: 200, objectFit: 'contain', borderRadius: 8 }}></img>


            </div>
            <div className='col-md-9' style={{ marginTop: 15, position: 'relative' }}>
                <div className='darkLink altDarkLink' style={{
                    position: 'absolute', right: 10, top: -20, cursor: 'pointer'
                }}
                onClick={()=>remove_cart(element?.item_id)}
                 
                >X</div>
                <h6 style={{ marginBottom: 0 }}></h6>
             
                <div style={{ marginTop: 0 }}>
                 
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <h6 style={{  color: '#000',fontSize:'24px',fontWeight:600,lineHeight:"36px" }}> {element?.product?.name}</h6>
                    </div>
                    
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <span style={{color: '#000',fontSize:'16px',fontWeight:600,lineHeight: '30px'}}>Medium - <span style={{fontSize:"13px",color: '#1D1D1D' }}>{element?.product?.medium}</span></span>
                    </div>
                
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <span style={{ fontSize:'16px',fontWeight:600, color: '#000',lineHeight: '30px' }}>Style - <span style={{fontSize:"13px",color: '#1D1D1D' }}>{element?.product?.style}</span></span>
                    </div>
                
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <span style={{ fontSize:'16px',fontWeight:600, color: '#000',lineHeight: '30px' }}>Orientation - <span style={{fontSize:"13px",color: '#1D1D1D' }}>{element?.product?.orientation}</span></span>
                    </div>
                
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <span style={{ fontSize:'16px',fontWeight:600, color: '#000',lineHeight: '30px' }}>Quantity - <span style={{fontSize:"13px",color: '#1D1D1D' }}>{element?.qty}</span></span>
                    </div>
                
                </div>
                <br></br>
                <div className='row'>

                
                    <div className='col-md-2 filterForm'>
                    <select onChange={(e)=>{Add_to_cart(element?.item_id,e.target.value)}}>

<option seclected hidden>choose</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
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
                        <div style={{fontSize: 16,fontWeight:600}}>₹{element?.product?.price}<span style={{ textDecoration: 'line-through', fontSize: 12}}> ₹30000 </span></div>
                       
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
            <span>₹{Cart?.total}</span>
        </div>
        <div className='col-md-6 my-2'>
            <span>Discount on MRP</span>
        </div>
        <div className='col-md-6 my-2' style={{ display: 'flex', justifyContent: 'flex-end', }}>
            <span style={{ color: '#34A853' }}>₹{couponprice ? couponprice?.type==1 || couponprice?.type==3? (couponprice?.discount) : couponprice?.type==2 || couponprice?.type==4 ? (Cart?.total*(couponprice?.discount)/100) :0:0}</span>
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
            <span style={{ color: '#000', fontWeight: 500, }}>₹ {couponprice ? couponprice?.type==1 || couponprice?.type==3? (Cart?.total-couponprice?.discount) : couponprice?.type==2 || couponprice?.type==4 ? (Cart?.total-((Cart?.total*couponprice?.discount)/100)) :Cart?.total:Cart?.total}</span>
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


<Modal show={show} onHide={()=>{setCouponFilter("");setShow(false)}}>
        <Modal.Header closeButton>
         
        </Modal.Header>
        <Modal.Body className='center-div flex-column'>
        <h3>Apply Voucher / Offers</h3>
        <div className="voucher-input" style={{margin: '2rem 0'}}>
        <input type="text" style={{padding: '1rem'}} onChange={search} />
        <button >Apply</button>
        </div>
        <div className="coupon">
        <h6>OR</h6>
        <p style={{textAlign: 'center', marginBottom:'1.5rem'}}> Select Coupan from below</p>

        <div className='d-flex flex-column' style={{gridGap:'20px'}}>
        {(couponFilter || coupon )?.map((element)=>{


    return   <div className="custom-control custom-checkbox d-flex align-items-center"  >
  <input type="checkbox" className="custom-control-input" id="customCheck1" value={element} checked={couponprice? element?.coupon_code==couponprice?.coupon_code: false} onClick={(e)=>coupen(e,element)} />
  <label className="custom-control-label px-3 coupan-lable" for="customCheck1">
    <p >{element?.coupon_code}</p>
    <pdesc style={{fontSize:'12px', fontWeight:600}}>Save <span style={{color: '#56BDBD'}}>{element?.type==1 && (element?.discount)+" Rs" || element?.type==2 && (element?.discount)+" %" || element?.type==3 && "UPTO "+(element?.discount)+" Rs" || element?.type==1 && "UPTO "+(element?.discount)+" %"  } off on Product price </span></pdesc>
  </label>
</div>
{/* <p style={{fontSize:'12px',margin: '0.5rem 3rem'}}>save upto a 15% off </p> */}
        
                })}
      
        </div>
        </div>



        </Modal.Body>
      
      </Modal>






   </>
  )
}

export default Cart