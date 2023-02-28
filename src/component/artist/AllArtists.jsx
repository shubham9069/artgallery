import React ,{useState,useEffect, useContext} from 'react'
import '../allproduct/Allproduct.css';

import { Link,useNavigate, useParams } from 'react-router-dom';

import { AuthContext } from '../../AuthProvider';

import Loader from '../Loader';

const AllProduct = () => {
  const navigate = useNavigate()
  const {All_Product_Page,Catagory,userToken,Cart,setCart} = useContext(AuthContext);
  const [isLoading,setIsLoading]=useState(false)

   

  return (
    <>
    {isLoading &&(<Loader />)}
  <div className="all-product section-padding">


  {/* ----------------top----------------- */}
   
    
<div className=" d-flex" style={{gridGap:'10px'}}>
    {/* --------------left---------------- */}

  
 

{/* ===================right================= */}
    <div className="allproduct-right">

    { 
      Catagory?.artists?.map((element, index) =>{


return <div>
<Link to={'/Artistdetails/' + element?.id} key={index} className="link-a"><img src={ element?.image}></img> </Link>
<div className='between-div m-3'>
<p style={{fontWeight: '600',margin:0,}}>{element.name}</p>

</div>
<p className='product-box-desc' dangerouslySetInnerHTML={{__html: `${element?.description}`}}></p>

</div>
    })
  

    }

  </div>

  </div>
  </div>

    </>
  )
}

export default AllProduct