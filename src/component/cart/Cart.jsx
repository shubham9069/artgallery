import React,{useState,useEffect,useContext} from 'react'
import './Cart.css'
import { bottomRight } from '../../homepage/asset/Export'
import cart_empty from '../assest/cart_empty.png'
import Modal from 'react-bootstrap/Modal';
import { AuthContext } from '../../AuthProvider';
import axios from '../../axios';
import Toast from '../../Toast';
import Addresstab from '../../pages/profile/Addresstab';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader';
import  Payment from '../../Payment'

const Cart = () => {
    const payWithRazorpay = Payment()
    const navigate = useNavigate()
    const {userToken,Cart,setCart,userData} = useContext(AuthContext)
    const [show, setShow] = useState(false);
    const [showAddress, setShowAddress] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const [coupon ,setCoupon] = useState([]);
    const [couponFilter ,setCouponFilter] = useState("");
    const [AddressId ,setAddressId] = useState("");
    const [couponprice ,setCouponPrice] = useState("");

    const [searchCoupon,setSearchCoupon] = useState("")
    // var cartitem =['item-1','item-2']

    const coupen =(e,coupenData)=>{

        if(e.target.checked){
            Toast("Applied successfully",200)
            setCouponPrice(coupenData)
            setShow(false)
        }
        else{
            setCouponPrice("")
        }

    } 
  
  

    const coupenSearch =(e)=>{
        
        var arr =coupon?.filter((element)=>{
          
          
            return element?.coupon_code == searchCoupon
           
        })
        
        if(arr.length){
          Toast("Applied successfully",200)
          setCouponPrice(...arr)
            setCouponFilter(arr)
        }
        else{
          Toast("Invalid Coupon ")
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
              setCoupon(data?.coupons?.reverse())
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

const Add_to_cart= async(id,qty,type) =>{
    const Form = new FormData()
    Form.append("product_id",id)
    Form.append("qty",qty)
    try{
      setIsLoading(true)
      const response= await axios({
        method: "post",
       url:`/add-to-cart`,
       data:Form,
       headers:{
        Authorization:`Bearer ${userToken}`,
        "Content-Type": "multipart/form-data",
        
       }
       })
       
       if(response.status===200){
        const data = response.data;
        setCart(data)
        // Toast(data.message,response.status)
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
    

    const place_order = async(e)=>{
        e.preventDefault()
      
        if(!AddressId) return Toast("plz choose address first ")  
         try{
          setIsLoading(true)
          const response= await axios({
            method: "post",
           url:'/create-order',
            data:{
             address_id:AddressId,coupon_id:couponprice?.id
            },
            headers: {
              Authorization:`Bearer ${userToken}`,
              "Content-Type": "application/json",
              
            },
           })
           
           if(response.status===200){
            const data = response.data
            setCart([])
            payWithRazorpay(data?.order)
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
    <img src={cart_empty} alt="no-item" style={{ maxHeight: 450, maxWidth: 350,width:'80%',textAlign:'center' }}></img>
    <h6 style={{fontSize: '22px',color:'#56BDBD'}}> Your Cart Is Empty</h6>
    <p style={{color: '#C4C4C4', fontSize:'18px'}}> Look like you haven’t made 
your choice yet..</p>
</div>
    :
   <>
   {isLoading && (<Loader />)}
   <div className='container ' style={{margin: '2rem auto',}}>

                      

                      

<h4 style={{ marginBottom: "2rem", fontWeight: "600" }}>Shopping Cart</h4>

    <div >
    {Cart?.cart_items?.map((element, index) =>{
        return <div key={index+1} className='row' style={{ border: '1px solid #C7C5C5', padding: '20px 0px 20px 0 ',borderRadius:'10px',marginBottom:'1rem' }}>
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
                        <h6 style={{  color: '#000',fontSize:'21px',fontWeight:600,lineHeight:"36px" }}> {element?.product?.name}</h6>
                    </div>
                    
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <span style={{color: '#000',fontSize:'14px',fontWeight:400,lineHeight: '30px'}}>Medium - <span style={{fontSize:"13px",color: '#1D1D1D' }}>{element?.product?.medium}</span></span>
                    </div>
                
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <span style={{ fontSize:'14px',fontWeight:400, color: '#000',lineHeight: '30px' }}>Style - <span style={{fontSize:"13px",color: '#1D1D1D' }}>{element?.product?.style}</span></span>
                    </div>
                
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <span style={{ fontSize:'14px',fontWeight:400, color: '#000',lineHeight: '30px' }}>Orientation - <span style={{fontSize:"13px",color: '#1D1D1D' }}>{element?.product?.orientation==1?"Landscape":"portrait"}</span></span>
                    </div>
                
                </div>
                {/* <div className='row'>
                    <div className='col-sm-4'>
                        <span style={{ fontSize:'16px',fontWeight:600, color: '#000',lineHeight: '30px' }}>Quantity - <span style={{fontSize:"13px",color: '#1D1D1D' }}>{element?.qty}</span></span>
                    </div>
                
                </div> */}
                <br></br>
                <div className='row'>

                
                    <div className='col-md-2 filterForm' style={{border: '1.5px solid #56BDBD'}}>
                    <div  onClick={()=>Add_to_cart(element?.item_id,-1)}>
                    <i class="bi bi-dash-lg"></i>
                    </div>
                    
                    {element?.qty}
                    <div style={{display: 'flex',justifyContent: 'flex-end'}} onClick={()=>Add_to_cart(element?.item_id,1)}>
                    <i class="bi bi-plus-lg" ></i>
                    </div>
                    
                    {/* <select onChange={(e)=>{Add_to_cart(element?.item_id,e.target.value)}}>

<option seclected hidden>choose</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
</select> */}
                    </div>

{/* 
                    <div className='col-md-3 filterForm'>
                <select style={{width:"110px"}}>

<option>08"X10" </option>
<option>08"X10"</option>
<option>08"X10"</option>
<option>08"X10"</option>
<option>08"X10"</option>
<option>08"X10"</option>
</select>
                </div> */}
              
           
                <div className='col-md-2 d-flex align-items-center ' style={{margin:'0 0 0 auto'}}>
                        <div style={{fontSize: 16,fontWeight:600,color:"#56BDBD"}}>₹{element?.product?.price}<span style={{ textDecoration: 'line-through', fontSize: 12}}> ₹30000 </span></div>
                       
                    </div>


                </div>

              
                

               

               
            </div>
           {/* <div className='d-flex align-items-center px-3' style={{paddingTop:'20px' ,borderTop: '1px solid #C7C5C5',marginTop:'2rem'}}>
            <p style={{margin:0}}>Expected ship Date 14 June ,2022</p>
           </div> */}
        </div>

       
    })}
        

    </div>


<br></br>


</div>

<div className='voucher container my-3'>
<div className='between-div'>
    <p style={{margin:0,fontWeight:600,}}>Apply voucher</p>
    <button type='button' className='white-btn-design' Style={'padding:0.5rem 4rem !important'} onClick={()=>setShow(true)}>Check</button>
    </div>
   {couponprice && (<p style={{color:'green'}}>Coupon Applied <br/>{couponprice?.coupon_code } </p>)} 
</div>

<div className='voucher container my-3 '>
<div className='between-div'>
    <p style={{margin:0,fontWeight:600,}}>Shipment Address</p>
    <button type='button' className='white-btn-design' Style={'padding:0.5rem 4rem !important'} onClick={()=>{setShowAddress(true)}}>{AddressId ? "selected":"choose"}</button>
    </div>
   {AddressId && (<p style={{color:'green'}}>Address is selected </p>)} 
</div>


<div className='section section-marginY section-padding' style={{ backgroundColor: 'rgba(86, 189, 189, 0.07)' }}>
<div className='container columnAlign'>
    <span style={{ color: '#000', fontWeight: 500, fontSize: 18 }}>Price Details ( items )</span>

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
            <span style={{ fontSize:14}}>Total MRP</span>
        </div>
        <div className='col-md-6 my-2' style={{ display: 'flex', justifyContent: 'flex-end', }}>
            <span >₹{Cart?.total}</span>
        </div>
        <div className='col-md-6 my-2'>
            <span style={{ fontSize:14}}>Discount on MRP</span>
        </div>
        <div className='col-md-6 my-2' style={{ display: 'flex', justifyContent: 'flex-end', }}>
            <span style={{ color: '#34A853' }}>₹{couponprice ? couponprice?.type==1 || couponprice?.type==3? (couponprice?.discount) : couponprice?.type==2 || couponprice?.type==4 ? (Cart?.total*(couponprice?.discount)/100) :0:0}</span>
        </div>
      

        <div className='col-md-6 my-2'>
            <span style={{ fontSize:14}}>Insurance</span>
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
    <div className='col-md-12 d-flex themeButton'   replace="" onClick={place_order}
    // state={{
    //     item_id: 0,
    //     total: total
    // }}
    >Proceed to checkout</div>
    </div>
</div>
</div>

{/* --------------------coupon ----------------------- */}
<Modal show={show} onHide={()=>{setCouponFilter("");setShow(false)}}>
      <Modal.Header closeButton>
       
      </Modal.Header>
      <Modal.Body className='center-div flex-column'>
      <h4>Apply Voucher / Offers</h4>
      <div className="voucher-input d-flex" style={{margin: '2rem 0'}}>
      <input type="text" style={{padding: '1rem'}} value={searchCoupon} onChange={(e)=>setSearchCoupon(e.target.value)} onKeyPress={(e)=>e.key==="Enter" &&(coupenSearch())} />
      <button onClick={coupenSearch} >Apply</button>
      </div>
      <div className="coupon">
      <h6>OR</h6>
      <p style={{textAlign: 'center', marginBottom:'1.5rem'}}> Select Coupan from below</p>

      <div className='d-flex flex-column' style={{gridGap:'20px'}}>
      {(couponFilter || coupon )?.map((element,index)=>{


  return   <div key={index+1} className="custom-control custom-checkbox d-flex align-items-center"  >
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


{/* ================Address=========== */}
<Modal show={showAddress} onHide={()=>{setShowAddress(false)}}>
        <Modal.Header closeButton>
         
        </Modal.Header>
        <Modal.Body className='center-div flex-column'>
        <h4>Choose address</h4>
        <Addresstab type={"cart"} setAddressId={setAddressId} addressId={AddressId} />
        </Modal.Body>
      
      </Modal>





   </>
  )
}

export default Cart