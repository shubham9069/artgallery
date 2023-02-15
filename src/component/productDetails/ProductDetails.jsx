import React from 'react'
import './ProductDetails.css'
import Productimg from '../assest/Rectangle 3980.png'
import {bottomRight} from '../../homepage/asset/Export'
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  var size2 = ['abstract','animal',"architecture","bar counter themen "," birds", "loins","elephant","hduwhdwuhduwhduw"];
  return (
    <>
  <div className="product-details section-padding">

<div className="product-details-left ">
  <img src={Productimg}></img>
</div>

<div className="product-details-right ">
  <h2>Abstract - GP0009-22</h2>
  <h3> Rs 79999</h3>
  <p>Lorem ipsum dolor sit amet consectetur. Consectetur magnis porttitor rhoncus at in. A nec volutpat nulla magna morbi. Non id lectus amet cursus ac velit. Nulla .</p>
  <div>
    <p>size : 12x12</p>
    <p>Mediam: oil on canvas</p>
    <p>Code  : G-754001</p>
    <p>Orientation : Rectangle</p>
    <p>frame: without frame</p>
  </div>
  <p>We could notice shapes, colours and brushtrokes that produce a visual experience 
when we gaze artwork, Bt more often that not there is more to see. Many abstract 
works  of art contain a deeper beneath the surface. Some abstract paintings are
made to convey a <span style={{color:'#56BDBD'}}>read more .</span></p>
<Link to='/checkout' className="product-btn link-a" >Buy now</Link>
</div>
  </div>


<div className="section-padding" Style={'padding-top:1rem !important; max-width: 1800px, margin:0 auto' }>
<p style={{ fontSize:'1.7rem', fontWeight:600}}>ALSO LIKE <span style={{color:'#56BDBD',fontWeight:600}}>ALSO LIKE</span> </p>
  <div className="allproduct-right">

{size2.map((element, index) =>{

  return <div>
<Link to='/productDetails' className="link-a"><img src={bottomRight}></img> </Link>
<div className='between-div m-3'>
<p style={{fontWeight: '600',margin:0}}>{element}</p>
<span style={{color:' #56BDBD'}}>RS 7,899</span>
</div>
<p className='product-box-desc'>However Emmet completions will not show up for the case you showed: the string "lorem5". The reason is that emmet sees the closing " immediately after the abbreviation so it decides not to return any completions. Instead, you have to use the Emmet: Expand Abbreviation command (which is bound to tab by default) to force emmet to expand lorem5:
</p>
<div className='d-flex center-div' style={{ gridGap:'20px',marginBottom:'1rem'}}>
<button className="themeButton" >Add To cart  </button>
<button className="themeButton" >Buy Now </button>
</div>
</div>
})}

</div>
</div>



    </>
  )
}

export default ProductDetails