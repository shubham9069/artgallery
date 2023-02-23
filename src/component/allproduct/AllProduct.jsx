import React ,{useState,useEffect, useContext} from 'react'
import './Allproduct.css';
import {bottomRight} from '../../homepage/asset/Export'
import { Link,useNavigate } from 'react-router-dom';
import Toast from '../../Toast';
import axios from '../../axios';
import { AuthContext } from '../../AuthProvider';
import Categoryleft from './Categoryleft';

const AllProduct = () => {
  const navigate = useNavigate()
  const {All_Product_Page,Catagory,userToken,Cart,setCart} = useContext(AuthContext);
  const [SortArr,setSortArr]=useState(null)
  const [Toggle,setToggle]=useState(false)
  const [isLoading,setIsLoading]=useState(true)



  // =========sort by dropown=========
const sortby=(e)=>{
  // console.log(e.target.value);
  
  
  var data = [...All_Product_Page];

if(e.target.value=="name"){
 
  data?.sort((a,b)=>{ return a?.name< b?.name &&(1) })
  console.log(data )
  
}
if(e.target.value=="priceL_to_H"){
    
   data.sort((a,b)=>{ return a?.price-b?.price })
  
}
if(e.target.value=="priceH_to_L"){
    
   data.sort((a,b)=>{ return b?.price-a?.price })
  
}

setSortArr(data)
}
 



//  ----------------------------add to cart --------------------

const Add_to_cart= async(id) =>{
  if(!userToken) return navigate('/login')
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
  <div className="all-product section-padding">


  {/* ----------------top----------------- */}
    <div className="allproduct-top">
      
    <div id="filter-toggle" onClick={()=>{setToggle(!Toggle)}}>Filter by </div>
      <select onClick={sortby} >
      <option value="" selected >Recommended</option>
     
        <option value="name">A - z</option>
        <option value="priceL_to_H">price Low to High</option>
        <option value="priceH_to_L">price High To Low </option>
        
      
        
      </select>
    </div>
    
<div className=" d-flex" style={{gridGap:'10px'}}>
    {/* --------------left---------------- */}
    <div id="abovewidth_650"> <Categoryleft sort={SortArr} setSortArr={setSortArr} toggle={true}  /></div>

    <div id="belowwidth_650"><Categoryleft sort={SortArr} setSortArr={setSortArr} toggle={Toggle}/></div>
  
 

{/* ===================right================= */}
    <div className="allproduct-right">

    { 
    SortArr?.length ? SortArr?.map((element, index) =>{


return <div>
<Link to={'/ProductDetails/' + element.product_id} key={index} className="link-a"><img src={element?.images?.length ? element?.images[0] : null}></img> </Link>
<div className='between-div m-3'>
<p style={{fontWeight: '600',margin:0,}}>{element.name}</p>
<span style={{color:' #56BDBD'}}>RS {element?.price}</span>
</div>
<p className='product-box-desc' dangerouslySetInnerHTML={{__html: `${element?.description}`}}></p>
<div className='d-flex center-div' style={{ gridGap:'20px',marginBottom:'1rem'}}>

{Cart?.cart_items?.length && (Cart?.cart_items?.find((product) =>product?.item_id == element?.product_id)!=undefined) ? 
  <Link to="/cart" className="white-themeButton link-a"   >Already added  </Link>
  :
<button className="themeButton" onClick={()=>Add_to_cart(element?.product_id)} >Add To cart  </button>}


<button className="themeButton" >Buy Now </button>
</div>
</div>
    })
    : SortArr==null? All_Product_Page?.map((element, index) =>{


return <div>
<Link to={'/ProductDetails/' + element.product_id} key={index} className="link-a"><img src={element?.images?.length ? element?.images[0] : null}></img> </Link>
<div className='between-div m-3'>
<p style={{fontWeight: '600',margin:0,}}>{element.name}</p>
<span style={{color:' #56BDBD'}}>RS {element?.price}</span>
</div>
<p className='product-box-desc' dangerouslySetInnerHTML={{__html: `${element?.description}`}}></p>
<div className='d-flex center-div' style={{ gridGap:'20px',marginBottom:'1rem'}}>


{Cart?.cart_items?.length && (Cart?.cart_items?.find((product) => product?.item_id == element?.product_id)!=undefined) ? 
  <Link to="/cart" className="white-themeButton link-a"   >Already added  </Link>
:
<button className="themeButton" onClick={()=>Add_to_cart(element?.product_id)} >Add To cart  </button>}


<button className="themeButton" >Buy Now </button>
</div>
</div>

})
:"no product found "

    }

  </div>

  </div>
  </div>

    </>
  )
}

export default AllProduct