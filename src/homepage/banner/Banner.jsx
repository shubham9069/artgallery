import React,{useState,useContext,useEffect} from 'react'
import banner_2 from '../asset/banner_2.png'
import Carousel from 'react-bootstrap/Carousel'
import './Banner.css'
import { AuthContext } from '../../AuthProvider'
import { useNavigate } from 'react-router-dom'
import { Toast } from 'bootstrap'
import axios from '../../axios'


const Banner = () => {
  const navigate = useNavigate();
  const {homepage,setHomepage} = useContext(AuthContext)
  const {Banner} = homepage
  const [isLoading,setIsLoading] =useState(false)
    const [crrItem, setCrrItem] = useState(0)

   

    const get_all= async(url,type) =>{

      try{
        setIsLoading(true)
        const response= await axios({
          method: "get",
         url:url,
         })
         
         if(response.status===200){
          const data = response.data;
          
            setHomepage((p)=>({...p,["Banner"]:data?.banners}))
           
  
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
       !Banner.length? get_all('/get_all_banners','banner'):setIsLoading(false)
        
       
      },[])
   
  return (
<>
<div className='container-fluid' style={{padding:0}}>
<Carousel variant="dark" prevIcon={""}  nextIcon={""} interval={2000} >
    {Banner.length?
      <Carousel.Item className="text-banner" onClick={()=>navigate('/ProductDetails/' + Banner[0]?.product_id)}>
        <img
        
          className="d-block w-100"
          src={ Banner[0]?.image || banner_2}
          alt="Second slide"
          style={{maxWidth:'3000px',maxHeight:'90vh',objectFit: 'cover'}}
        />
<div >
    <h2 style={{}}>{Banner[0]?.title} </h2>
    <p style={{}}>{Banner[0].description}</p>
    <div className='d-flex' style={{ gridGap:'20px'}}>
    <button className="white-btn-design" onClick ={()=>navigate('/ProductDetails/' + Banner[0].product_id)}>Buy Now </button>
    {/* <button className="white-btn-design" >Wishlist Here </button> */}
    </div>
</div>

       
      </Carousel.Item>
      :null
    }
      
      {Banner.slice(1 , Banner.length)?.map((element)=>{
         return <Carousel.Item>
        <img
        onClick={()=>navigate('/ProductDetails/' + element?.product_id)}
          className="d-block w-100"
          
          src={element?.image}
          alt="Third slide"
          style={{maxWidth:'3000px',maxHeight:'90vh',objectFit: 'cover'}}
        />
        
       
      </Carousel.Item>
      })}
      
    </Carousel>

</div>



</>

  )
}

export default Banner