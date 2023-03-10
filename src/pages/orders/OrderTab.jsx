
import React, { useState,useEffect,useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider'
import axios from '../../axios'
import Loader from '../../component/Loader'
import Toast from '../../Toast'
import OrderDetails from './OrderDetails'


const OrderTab = () => {
    const {userToken}=useContext(AuthContext)
    const [isLoading,setIsLoading]=useState(true)
    const [AllOrder,setAllOrder] = useState([])

    
    const payment_type =
    {
        "order Failed_0": "images/cancelled.png",
        "order pending_3": "images/ordered.png",
        "order success_2": "images/delivered.png",
        
        
    }


    
    const get_order= async(e)=>{
        
      
        try{
         setIsLoading(true)
         const response= await axios({
           method: "get",
          url:`/get-orders`,
           
           headers: {
             Authorization:`Bearer ${userToken}`,
             "Content-Type": "application/json",
             
           },
          })
          
          if(response.status===200){
           const data = response.data
           setAllOrder(data?.orders.reverse())
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

   get_order();
},[])


const cancel_order= async(id)=>{
        
      
    try{
     setIsLoading(true)
     const response= await axios({
       method: "get",
      url:`/cancel-order?id=${id}`,
       
       headers: {
         Authorization:`Bearer ${userToken}`,
         "Content-Type": "application/json",
         
       },
      })
      
      if(response.status===200){
       const data = response.data;
       get_order();
    //    setAllOrder(data?.orders)
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
    <>
{isLoading &&(<Loader />)}
{!AllOrder?.length ? 
    <div className='container section' style={{ display: 'flex', flexDirection: 'column',alignItems:'center',justifyContent:'center',gridGap:'30px' }}>
    <img src="/images/orderEmpty.png" alt="no-item" style={{ maxHeight: 250, maxWidth: 200,width:'80%',textAlign:'center' }}></img>
    <h6 style={{fontSize: '22px',color:'#56BDBD'}}> Empty</h6>
    <p style={{color: '#C4C4C4', fontSize:'18px'}}> Look like you haven’t made 
your choice yet..</p>
</div>
 :

            <div className='container section-padding' style={{ display: 'flex', flexDirection: 'column' }}>

              
                <h5 style={{ marginBottom: 20 }}>All Orders</h5>
                {AllOrder?.map((element)=>{

                return   <div  style={{
                        boxShadow: "0px 3px 12px rgba(0, 0, 0, 0.15)",
                        borderRadius: 8,
                        marginBottom: 15,
                        padding: 10,
                    }}>

                   <div style={{ display: 'flex', }}>
                            <img src={element?.status==0 ?payment_type["order Failed_0"]:element?.status==2 ?payment_type["order success_2"]:payment_type["order pending_3"]} style={{ marginRight: 10, width: 33, height: 33, objectFit: 'contain' }} />
                            <div>
                                <span style={{ color: '#000', fontWeight: 500 }}>{element?.order_id}</span>
                                <br></br>
                                <span style={{ fontSize: 12 }}>{element?.order_date}</span>
                            </div>
                            <p style={{margin: '0 10px 0 auto'}} onClick={()=>cancel_order(element?.id)}><i class="bi bi-bag-x-fill" style={{}}></i></p>
                        </div>
                        <hr class="dropdown-divider" style={{ margin: "10px 0px 20px 0px", backgroundColor: "#aaa" }}></hr>



                        <div className='rowAlign between-div' style={{ padding: '0px 10px', marginBottom: 5 }}>
                            <span style={{ color: '#000' }}>Product item</span>
                            <span style={{ color: '#B8B7B7' }}>{element?.products?.length}</span>
                        </div>
                        <div className='rowAlign between-div' style={{ padding: '0px 10px', marginBottom: 5 }}>
                            <span style={{ color: '#000' }}>Payment status</span>
                            {element?.payment_status==1 ?<span style={{ color: 'green'  }}>Payment Success</span>:<span style={{ color: 'red'  }}>Payment pending</span>}
                        </div>
                        <div className='rowAlign between-div' style={{ padding: '0px 10px', marginBottom: 5 }}>
                            <span style={{ color: '#000' }}> Amount</span>
                            <span style={{ color: '#B8B7B7' }}>₹{element?.amount}</span>
                        </div>
                        <div className='rowAlign between-div' style={{ padding: '0px 10px', marginBottom: 5 }}>
                            <span style={{ color: '#000' }}>Paid Amount</span>
                            <span style={{ color: '#B8B7B7' }}>₹{element?.amount}</span>
                        </div>
                        <hr class="dropdown-divider" style={{ margin: "20px 0px 5px 0px", backgroundColor: "#aaa" }}></hr>

                        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center',gridGap:20 }}>
                            <div href="#/cart" className="themeButton" style={{
                                width: 150, height: 40
                            }} onClick={() => { }}>Track</div>

                            <Link to={'/OrderDetails/'+element?.id}
                               className="secondaryBtn" style={{
                                    width: 150, height: 40
                                }}>Details</Link>
                        </div>
                    </div>

                })}

                  
               

            </div>








}

    </>
  )
}

export default OrderTab