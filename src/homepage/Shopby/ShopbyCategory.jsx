import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider'
import {girl,shape,art,landscape,whitegirl,whitelandscape,whiteart,whitepotrait, whiteshape,} from '../asset/Export'
import './Shopby.css'


const ShopbyCategory = ({CatArr}) => {
  const {CategoryData} = useContext(AuthContext)
  const navigate = useNavigate()


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
        {/* <p className='span-underline' onClick={()=>navigate('/allproduct')}> View All </p> */}
        </div>
      

{/* --------------------box section ---------------- */}
      <div className="center-div shopby-container" >

{CategoryData?.map((element,index)=>{

  return <div onClick={()=>navigate('/allproduct/' + element?.id)} className="center-div shopby-box" id={"shopby-container"+(index+1)}  onMouseEnter={()=>hover(index+1,element?.icon_white)} onMouseLeave={()=>removehover(index+1,element?.icon)}>
    <img src={element?.icon}/>
    <p>{element?.name}</p>
    </div>
})}
    
    


         </div>
        </div>
    </>
  )
}

export default ShopbyCategory