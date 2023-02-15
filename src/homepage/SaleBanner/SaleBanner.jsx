import React from 'react'
import './SaleBanner.css'
import { bottomLeft,bottomRight } from '../asset/Export'

const SaleBanner = () => {
  return (
    <>
          

<div className="d-flex section-padding salebanner center-div" >
<div className='salebanner-left center-div' >
<img src={bottomRight}   />
<div >
    <p>70% OFF</p>
    <h1>SALE</h1>
    <h3>SPECIAL OFFER</h3>
    <div className='center-div' style={{ gridGap:'20px'}}>
    <button className="white-btn-design" >Add To cart  </button>
    <button className="white-btn-design" >Wishlist Here </button>
    </div>
</div>
</div>

<div className='salebanner-right'>
<img src={bottomLeft} />
</div>
</div>
    </>
  )
}

export default SaleBanner