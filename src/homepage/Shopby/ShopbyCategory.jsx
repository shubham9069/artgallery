import React from 'react'
import {girl,shape,art,landscape,whitegirl,whitelandscape,whiteart,whitepotrait, whiteshape,} from '../asset/Export'
import './Shopby.css'


const ShopbyCategory = () => {


  var hover =(i,img)=>{
   
    
    var div = document.getElementById("shopby-container"+i)
      
    div.style.background ='#56BDBD'
    div.childNodes[0].setAttribute("src",img)
  div.childNodes[1].style.color="white"

  }
  var removehover =(i,img)=>{
    
    var div = document.getElementById("shopby-container"+i)
      
    div.style.background ='white';
    div.childNodes[0].setAttribute("src",img)
    div.childNodes[1].style.color="black"

  }
  return (
    <>
        <div className='section-padding' style={{background: '#F7F7F7'}}>
        
          <div className=" d-flex justify-content-between " style={{marginBottom:"2rem"}} >
        <h2 className="section-heading"> <span className="section-heading" style={{color:"#56BDBD"}}>Shop</span> By Category</h2>
        <p className='span-underline' > View All </p>
        </div>
      

{/* --------------------box section ---------------- */}
      <div className="center-div shopby-container" >

    <div className="center-div shopby-box" id="shopby-container1" onMouseEnter={()=>hover(1,whitegirl)} onMouseLeave={()=>removehover(1,girl)}>
    <img src={girl}/>
    <p>Portrait</p>
    </div>
    
    <div  className="center-div shopby-box" id="shopby-container2" onMouseOver={()=>hover(2,whitelandscape)} onMouseLeave={()=>removehover(2,landscape)} >
    <img src={landscape}/>
    <p>Landscape</p>
    </div>

    <div  className="center-div shopby-box" id="shopby-container3" onMouseOver={()=>hover(3,whiteart)} onMouseLeave={()=>removehover(3,art)}>
    <img src={art}/>
    <p>Art</p>
    </div>

    <div  className="center-div shopby-box" id="shopby-container4" onMouseOver={()=>hover(4,whiteshape)} onMouseLeave={()=>removehover(4,shape)} >
    <img src={shape}/>
    <p>Shape</p>
    </div>


         </div>
        </div>
    </>
  )
}

export default ShopbyCategory