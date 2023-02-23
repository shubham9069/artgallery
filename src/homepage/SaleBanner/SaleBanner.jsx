import React from 'react'
import './SaleBanner.css'
import { bottomLeft,bottomRight } from '../asset/Export'
import { useContext,useEffect } from 'react'
import { AuthContext } from '../../AuthProvider'
import axios from '../../axios'
import Toast from '../../Toast'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const SaleBanner = () => {
  const {homepage,setHomepage} = useContext(AuthContext)
  const {offer} = homepage
const [isLoading,setIsLoading] = useState(true)
const navigate = useNavigate()



  const get_all= async(url,type) =>{

    try{
      setIsLoading(true)
      const response= await axios({
        method: "get",
       url:url,
       })
       
       if(response.status===200){
        const data = response.data;

          setHomepage((p)=>({...p,["offer"]:data?.offers}))
         

        }
        
      //   Toast(data.message,response.status)
       
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
     !offer?.length? get_all('/get_all_offers'):setIsLoading(false)
      
     
    },[])
  return (
    <>
         

<div className="d-flex section-padding salebanner center-div" >
{offer?.map((element) =>{

  return <div className='salebanner-right' onClick={()=>navigate("/ProductDetails/" + element?.product_id)}>
<img src={element?.banner} />
</div> 
})}

{/* <div className='salebanner-left center-div' >
<img src={offer?.length ? offer?.banner[0]}   />
<div >
    <p>70% OFF</p>
    <h1>SALE</h1>
    <h3>SPECIAL OFFER</h3>
    <div className='center-div' style={{ gridGap:'20px'}}>
    <button className="white-btn-design" >Add To Cart  </button>
    <button className="white-btn-design" >Wishlist Here </button>
    </div>
</div>
</div>

<div className='salebanner-right'>
<img src={bottomLeft} />
</div> */}
</div>
    </>
  )
}

export default SaleBanner