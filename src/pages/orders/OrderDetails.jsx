import React from 'react'
import { useState,useMemo } from 'react'
import { useContext ,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider'
import axios from '../../axios'
import Loader from '../../component/Loader'
import Toast from '../../Toast'
import Form from 'react-bootstrap/Form';
import { getContrastRatio } from '@mui/material'
import { height, width } from '@mui/system'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const OrderDetails = () => {
const {userToken} =useContext(AuthContext)
const [isLoading,setIsLoading] = useState(true);
const [orderDetails,setOrderDetails] = useState({})
const {id} = useParams();

const [rating,setRating] = useState("")
const [review_desc , setReview_Desc] = useState("")
const [review_product_id,setReview_Product_Id] = useState()
const [reviewModal,setReviewModal] = useState(false)



const payment_type =
{
    "order Failed_0": "images/cancelled.png",
    "order pending_3": "images/ordered.png",
    "order success_2": "images/delivered.png",
    
    
}
     
    const get_orderDetails= async(e)=>{
        
      
        try{
         setIsLoading(true)
         const response= await axios({
           method: "get",
          url:`/get-order-detail?id=${id}`,
           
           headers: {
             Authorization:`Bearer ${userToken}`,
             "Content-Type": "application/json",
             
           },
          })
          
          if(response.status===200){
           const data = response.data
           setOrderDetails(data?.order)
           
        
          
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

   get_orderDetails();
},[])

const Add_review  = async()=>{
    

    if(!rating) return Toast("choose min 1 star ")
     try{
      setIsLoading(true)
      const response= await axios({
        method: "post",
       url:'/add-review',
        data:{
          rating,product_id:review_product_id?.product_id,review:review_desc
        },
        headers: {
          Authorization:`Bearer ${userToken}`,
          "Content-Type": "application/json",
          
        }
       })
       
       if(response.status===200){
        const data = response.data;
        setReviewModal(false)
        get_orderDetails();
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
const Updatereview  = async(review_id)=>{
    

    if(!rating) return Toast("choose min 1 star ")
     try{
      setIsLoading(true)
      const response= await axios({
        method: "post",
       url:'/update-review',
        data:{
          rating,review:review_desc,review_id
        },
        headers: {
          Authorization:`Bearer ${userToken}`,
          "Content-Type": "application/json",
          
        }
       })
       
       if(response.status===200){
        const data = response.data;
        setReviewModal(false)
        get_orderDetails();
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
  
  const update_review =useMemo(() =>{
    if( review_product_id?.reviews.length){

setRating( review_product_id?.reviews[0]?.rating)
setReview_Desc( review_product_id?.reviews[0]?.review)

    }
    else{
        setRating("")
setReview_Desc( "")
    }
   
 
      

  }, [review_product_id]);
  

  return (
    <>
    {isLoading && <Loader />}
    <div className="section-padding mx-auto" style={{maxWidth: '2000px', }}>
        <h5 style={{marginBottom:20}}>OrderDetails</h5>

        <div className="between-div" style={{background: '#EEEEEE', padding:'1rem'}}>
            <p style={{marginBottom:0}}>ORDER ID: {orderDetails?.order_id}</p>
            <span onClick={()=>navigator.clipboard.writeText(orderDetails?.order_id)} style={{cursor:"pointer"}}>Copy</span>
        </div>
        <div  style={{
                        boxShadow: "0px 3px 12px rgba(0, 0, 0, 0.15)",
                        borderRadius: 8,
                        marginBottom: 15,
                        padding: 10,
                    }}>

                   <div style={{ display: 'flex', }}>
                            <img src={orderDetails?.status==0 ?payment_type["order Failed_0"]:orderDetails?.status==2 ?payment_type["order success_2"]:payment_type["order pending_3"]} style={{ marginRight: 10, width: 33, height: 33, objectFit: 'contain' }} />
                            <div>
                                <span style={{ color: '#000', fontWeight: 500 }}>Order stage</span>
                                <br></br>
                                <span style={{ fontSize: 12 }}>{orderDetails?.order_date}</span>
                            </div>
      
                        </div>
                        <hr class="dropdown-divider" style={{ margin: "10px 0px 20px 0px", backgroundColor: "#aaa" }}></hr>



                        <div className='rowAlign between-div' style={{ padding: '0px 10px', marginBottom: 5 }}>
                            <span style={{ color: '#000' }}>Product item</span>
                            <span style={{ color: '#B8B7B7' }}>{orderDetails?.products?.length}</span>
                        </div>
                        <div className='rowAlign between-div' style={{ padding: '0px 10px', marginBottom: 5 }}>
                            <span style={{ color: '#000' }}>Payment status</span>
                            {orderDetails?.payment_status==1 ?<span style={{ color: 'green'  }}>Payment Success</span>:<span style={{ color: 'red'  }}>Payment pending</span>}
                        </div>
                        <div className='rowAlign between-div' style={{ padding: '0px 10px', marginBottom: 5 }}>
                            <span style={{ color: '#000' }}> Amount</span>
                            <span style={{ color: '#B8B7B7' }}>₹{orderDetails?.amount}</span>
                        </div>
                        <div className='rowAlign between-div' style={{ padding: '0px 10px', marginBottom: 5 }}>
                            <span style={{ color: '#000' }}>Paid Amount</span>
                            <span style={{ color: '#B8B7B7' }}>₹{orderDetails?.amount}</span>
                        </div>
                        <hr class="dropdown-divider" style={{ margin: "20px 0px 5px 0px", backgroundColor: "#aaa" }}></hr>

                        {/* <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center',gridGap:20 }}>
                            <div href="#/cart" className="themeButton" style={{
                                width: 150, height: 40
                            }} onClick={() => { }}>Track</div>

                            <Link to={'/OrderDetails/'+element?.id}
                               className="secondaryBtn" style={{
                                    width: 150, height: 40
                                }}>Details</Link>
                        </div> */}
                    </div>
{orderDetails?.products?.map((element, i) =>{


return   <div className='row ' style={{ border: '1px solid #C7C5C5', padding: '20px 0px 20px 0 ',borderRadius:'10px',margin:"1rem 0",  }}>
            <div className='col-md-3'>

                <img src={element?.images?.length  && (element?.images[0])} alt="product" style={{ width: '100%', height: 200, objectFit: 'contain', borderRadius: 8 }}></img>


            </div>
            <div className='col-md-9' style={{ marginTop: 15, position: 'relative' }}>
            <div className='darkLink altDarkLink' style={{
                    position: 'absolute', right: 10, top: -20, cursor: 'pointer'
                }}
                onClick={()=>{setReview_Product_Id(element);setReviewModal(true)}}
                 
                >{element?.reviews?.length ? "Edit review ": "Add review "}</div>
                <h6 style={{ marginBottom: 0 }}></h6>
             
                <div style={{ marginTop: 0 }}>
                 
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <h6 style={{  color: '#000',fontSize:'21px',fontWeight:600,lineHeight:"36px" }}>{element?.name}</h6>
                    </div>
                    
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <span style={{color: '#000',fontSize:'14px',fontWeight:600,lineHeight: '30px'}}>Medium - <span style={{fontSize:"13px",color: '#1D1D1D',fontWeight:400 }}>{element?.medium}</span></span>
                    </div>
                
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <span style={{ fontSize:'14px',fontWeight:600, color: '#000',lineHeight: '30px' }}>Style - <span style={{fontSize:"13px",color: '#1D1D1D',fontWeight:400 }}>{element?.style}</span></span>
                    </div>
                
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <span style={{ fontSize:'14px',fontWeight:600, color: '#000',lineHeight: '30px' }}>Orientation - <span style={{fontSize:"13px",color: '#1D1D1D',fontWeight:400 }}>{element?.orientation==1?"Landscape":"portrait"}</span></span>
                    </div>
                
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <span style={{ fontSize:'14px',fontWeight:600, color: '#000',lineHeight: '30px' }}>Quantity - <span style={{fontSize:"13px",color: '#1D1D1D',fontWeight:400 }}>{element?.qty}</span></span>
                    </div>
                
                </div>
                <br></br>
                <div className='row'>

            

              
           
                <div className='col-md-2 d-flex align-items-center ' style={{margin:'0 0 0 auto'}}>
                        <div style={{fontSize: 16,fontWeight:600,color:"#56BDBD"}}>₹{element?.price}<span style={{ textDecoration: 'line-through', fontSize: 12}}> ₹30000 </span></div>
                       
                    </div>


                </div>

              
                

               

               
            </div>
           {/* <div className='d-flex align-items-center px-3' style={{paddingTop:'20px' ,borderTop: '1px solid #C7C5C5',marginTop:'2rem'}}>
            <p style={{margin:0}}>Expected ship Date 14 June ,2022</p>
           </div> */}
        </div>

})}


    </div>
    <Modal show={reviewModal} onHide={()=>setReviewModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{orderDetails?.order_id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Please Give Us a Feedback
        <div className="section-padding d-flex align-items-center" style={{gridGap:20}}>

        <img src={review_product_id?.images?.length  && (review_product_id?.images[0])} alt
        style={{height: '50px', width: '70px',}}
        ></img>
        <p  style={{fontWeight: 600,margin:0}}>{review_product_id?.name} <br/><span  style={{fontSize: 10}}>{review_product_id?.product_id}</span></p>
        <p style={{fontWeight: 600,margin:0}} >₹{review_product_id?.price}</p>

        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="d-flex" style={{gridGap:7}}>{
            [...Array(5)]?.map((element,index)=>{
                let giving_star = index+1
                {/* <i className={giving_star>rating? "bi bi-star px-1": "bi bi-star-fill px-1"} onClick={()=>setRating(giving_star)}></i> */}
                return <div 
                style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', 
                background:giving_star>rating?'#D9D1D1':"#fed001",
                height:30,
                width:30
                
                }}
                onClick={()=>setRating(giving_star)}>

                </div>
            })
        }</Form.Label>
        <Form.Control as="textarea" rows={5} value={review_desc} onChange={(e)=>setReview_Desc(e.target.value)} />
      </Form.Group>
        </Modal.Body>
        <Modal.Footer>

        { review_product_id?.reviews?.length  ? 
        <button onClick={()=>Updatereview( review_product_id?.reviews[0]?.id.toString())} className="themeButton mt-5 mx-auto" >Update Review</button>
        :  <button onClick={Add_review} className="themeButton mt-5 mx-auto" >Add Review</button>
        }
        </Modal.Footer>
      </Modal>
    </>
    
  )
    }

export default OrderDetails