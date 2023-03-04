import React from 'react'
import { useState } from 'react'
import { useContext ,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider'
import axios from '../../axios'
import Loader from '../../component/Loader'
import Toast from '../../Toast'


const OrderDetails = () => {
const {userToken} =useContext(AuthContext)
const [isLoading,setIsLoading] = useState(true);
const [orderDetails,setOrderDetails] = useState({})
const {id} = useParams()


     
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
        //    Toast(data.message,response.status)
          
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
  return (
    <>
    {isLoading && <Loader />}
    <div className="section-padding">
        <h5 style={{marginBottom:20}}>OrderDetails</h5>

        <div className="between-div" style={{background: '#EEEEEE', padding:'1rem'}}>
            <p style={{marginBottom:0}}>ORDER ID: {orderDetails?.order_id}</p>
            <span>Copy</span>
        </div>
{orderDetails?.products?.map((element, i) =>{


return   <div className='row ' style={{ border: '1px solid #C7C5C5', padding: '20px 0px 20px 0 ',borderRadius:'10px',margin:"1rem 0",  }}>
            <div className='col-md-3'>

                <img src={element?.images?.length  && (element?.images[0])} alt="product" style={{ width: '100%', height: 200, objectFit: 'contain', borderRadius: 8 }}></img>


            </div>
            <div className='col-md-9' style={{ marginTop: 15, position: 'relative' }}>
               
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
                        <span style={{color: '#000',fontSize:'14px',fontWeight:400,lineHeight: '30px'}}>Medium - <span style={{fontSize:"13px",color: '#1D1D1D' }}>{element?.medium}</span></span>
                    </div>
                
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <span style={{ fontSize:'14px',fontWeight:400, color: '#000',lineHeight: '30px' }}>Style - <span style={{fontSize:"13px",color: '#1D1D1D' }}>{element?.style}</span></span>
                    </div>
                
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <span style={{ fontSize:'14px',fontWeight:400, color: '#000',lineHeight: '30px' }}>Orientation - <span style={{fontSize:"13px",color: '#1D1D1D' }}>{element?.orientation==1?"Landscape":"portrait"}</span></span>
                    </div>
                
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <span style={{ fontSize:'14px',fontWeight:400, color: '#000',lineHeight: '30px' }}>Quantity - <span style={{fontSize:"13px",color: '#1D1D1D' }}>{element?.qty}</span></span>
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



  <div className='row'>
<h5>Add Review</h5>
  <div className=" col-md-8 form-outline mx-auto">
  <textarea className="form-control" id="textAreaExample3" rows="2"></textarea>
  <button type="button" className="btn btn-white mt-5 mx-auto" style={{backgroundColor:"rgb(86, 189, 189)"}}>Add Review</button>
</div>
        
        </div>


      
{/* 
        <div style={{margin:"2rem 0 "}}>
            
            <div></div>
            <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{minHeight: 150}}></textarea>
  <label for="floatingTextarea" style={{color: 'rgb(158, 150, 150)'}}>Review</label>
</div>
        </div> */}
    </div>
    </>
  )
}

export default OrderDetails