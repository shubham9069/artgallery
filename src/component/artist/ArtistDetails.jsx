import React,{useEffect,useState,useContext,useRef} from 'react'
import '../productDetails/ProductDetails.css'

import { Link,useNavigate,useParams } from 'react-router-dom';
import Toast from '../../Toast'
import axios from '../../axios';
import { AuthContext } from '../../AuthProvider';
import Loader from '../Loader';

const ProductDetails = () => {
  const navigate = useNavigate()
  const readmore = useRef(null);
  const {userToken,All_Product_Page,Cart,setCart} = useContext(AuthContext)
  const [isLoading,setIsLoading] = useState(true);
  const {id} = useParams()
  const [productDetails, setProductDetails] = useState([]);
  
  


  const readMore=(e)=>{
    var span = document.getElementById("showdesc")
console.log(readmore)
    if(readmore.current.style['overflow']=="hidden"){
      readmore.current.style['overflow'] = "visible"
      readmore.current.style['height'] = "fit-content"
      span.innerText="Show Less"
      
    }   
    else{
      readmore.current.style['overflow'] = "hidden"
      readmore.current.style['height'] = "130px"
      span.innerText="Show More"
    } 
  }




  const get_details = async (url,type) => {
    
    try {
      const response = await axios({
        method: "get",
        url: url,
      });

      if (response.status === 200) {
        const data = response?.data;
        if(type=="product"){
          setProductDetails(data?.artist)
          console.log(data?.product)
        }
       

        //   Toast(data.message,response.status)
      }
    } catch (err) {
      const error = err?.response?.data;
      Toast(error?.message);
    }
    finally{
      setIsLoading(false);
    }
  };


  useEffect(()=>{
    get_details(`/get_artist?artist_id=${id}`,'product')
    
  },[id])
  
  const Add_to_cart= async(id) =>{

    if(!userToken) return navigate('/Login')
    const Form = new FormData()
    Form.append("product_id",id)
    Form.append("qty",1)
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
    <>
    {isLoading &&(<Loader />)}
  <div className="product-details section-padding">

<div className="product-details-left ">
  <img src={productDetails?.image}></img>
</div>

<div className="product-details-right ">
  <h2>{productDetails?.name}</h2>
  {/* <h3> Rs {productDetails?.price}</h3> */}
  {/* <p>{productDetails?.short_description}</p> */}
  {/* <div>
    <p>size : {productDetails?.size}</p>
    <p>Mediam: {productDetails?.medium}</p>
    <p>Code  : {productDetails?.product_id}</p>
    <p>Orientation : {productDetails?.orientation==1?"Landscape":"Portrait"}</p>
    <p>frame: {productDetails?.style}</p>
  </div> */}
   <p id="description-text" style={{}} ref={readmore} dangerouslySetInnerHTML={{__html: `${productDetails?.description}`}}/>
   {/* <span onClick={readMore} id="showdesc" style={{color:'#56BDBD',cursor:'pointer' }}>Show More </span>  */}

</div>
  </div>


  <div className="section-padding" Style={'padding-top:1rem !important; max-width: 1800px, margin:0 auto' }>
<p style={{ fontSize:'1.7rem', fontWeight:600}}>ALSO LIKE <span style={{color:'#56BDBD',fontWeight:600}}>ALSO LIKE</span> </p>
  <div className="allproduct-right">
  {All_Product_Page?.slice(0,6)?.map((element, index) =>{


return <div>
<Link to={'/productDetails/' + element.product_id} key={index} className="link-a"><img src={element?.images?.length ? element?.images[0] : null}></img> </Link>
<div className='between-div m-3'>
<p style={{fontWeight: '600',margin:0,}}>{element.name}</p>
<span style={{color:' #56BDBD'}}>RS {element?.price}</span>
</div>
<p className='product-box-desc' dangerouslySetInnerHTML={{__html: `${element?.description}`}}></p>
<div className='d-flex between-div' style={{ gridGap:'20px',marginBottom:'1rem',padding:'0 1rem'}}>


{Cart?.cart_items?.length && (Cart?.cart_items?.find((product) => product?.item_id == element?.product_id)!=undefined) ? 
  <>
  {/* <Link to="/cart" className="white-themeButton link-a"   >Already added  </Link> */}
  <i class="bi bi-cart-fill" onClick={() =>navigate('/cart')} style={{color:'#56BDBD'}}></i>
  </>
:
<button className="themeButton" onClick={()=>Add_to_cart(element?.product_id)} >Add To cart  </button>}


<button className="white-themeButton" >Buy Now </button>
</div>
</div>

})}
</div>
</div>




    </>
  )
}

export default ProductDetails