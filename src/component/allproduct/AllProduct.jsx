import React from 'react'
import './Allproduct.css';
import {bottomRight} from '../../homepage/asset/Export'
import { Link } from 'react-router-dom';

const AllProduct = () => {
  var medium1=["Horizontal",'Rectangle','Vertical'];
  var size1 = ['12x1','12x12','12x12','12x12','12x12','12x12','12x12','12x12','12x12','12x12','12x12','12x12']
  var size2 = ['abstract','animal',"architecture","bar counter themen "," birds", "loins","elephant","hduwhdwuhduwhduw"];

  return (
    <>
  <div className="all-product section-padding">


  {/* ----------------top----------------- */}
    <div className="allproduct-top">
      <select  >
        <option value="" >Recommended</option>
        <option value="" >Recommended</option>
        <option value="" >Recommended</option>
        <option value="" >Recommended</option>
        <option value="" >Recommended</option>
      </select>
    </div>
    
<div className=" d-flex" style={{gridGap:'30px'}}>
    {/* --------------left---------------- */}
    <div className="allproduct-left">

    <div style={{borderBottom: '1px solid #D9D9D9', padding : '1rem 0'}}>
      <p >medium</p>
      <div className="custom-control custom-checkbox product-filter-input"  >
  <input type="checkbox" className="custom-control-input" id="customCheck1"/>
  <label className="custom-control-label px-3" for="customCheck1">Check </label>
</div>

    </div>

    <div style={{borderBottom: '1px solid #D9D9D9' , padding : '1rem 0'}}>
      <p >medium</p>
      {medium1.map((element, index) =>{


        return <div className="custom-control custom-checkbox product-filter-input" >
  <input type="checkbox" className="custom-control-input" id="customCheck1"/>
  <label className="custom-control-label px-3" for="customCheck1">{element+" "+index}</label>
</div>
      })}
      
    </div>

    <div style={{borderBottom: '1px solid #D9D9D9', padding: '1rem 0'}}>
      <p >Size</p>
      {size1.map((element, index) =>{


return <div className="custom-control custom-checkbox product-filter-input" >
<input type="checkbox" className="custom-control-input" id="customCheck1"/>
<label className="custom-control-label px-3" for="customCheck1">{element+" "+index}</label>
</div>
})}
    </div>

    <div style={{borderBottom: '1px solid #D9D9D9', padding: '1rem 0'}}>
      <p >Size</p>
      {size2.map((element, index) =>{


return <div className="custom-control custom-checkbox product-filter-input" >
<input type="checkbox" className="custom-control-input" id="customCheck1"/>
<label className="custom-control-label px-3" for="customCheck1">{element+" "+index}</label>
</div>
})}

    </div>
</div>

{/* ===================right================= */}
    <div className="allproduct-right">

    {size2.map((element, index) =>{

      return <div>
  <Link to='/productDetails' className="link-a"><img src={bottomRight}></img> </Link>
  <div className='between-div m-3'>
  <p style={{fontWeight: '600',margin:0,}}>{element}</p>
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
  </div>

    </>
  )
}

export default AllProduct