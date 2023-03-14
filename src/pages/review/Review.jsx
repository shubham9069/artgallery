import React from 'react'
import './review.css'



const Review = ({reviewArr}) => {

    
const getstar =(rating) => {
    var total = 5
    var star =[]
    for(var i=0; i<rating;i++){
        star.push(<div 
            style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', 
            background:"#fed001",
            height:20,
            width:20
            
            }}>

            </div>)
    }
    for(var i=0; i<total-rating;i++){
        star.push(<div 
            style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', 
            background:'#D9D1D1',
            height:20,
            width:20
            
            }}>

            </div>)
    }
    return star
}
  return (
    <>
    <div className="section-padding">
    <h3> Review </h3>
    <div className="d-flex" style={{gridGap:20}}>
    {reviewArr?.map((element, index) =>{
    return <div className="testimonial-container h-100">
                       <div className="row" Style="height:80%;">
                          
                           <div className="col-6" Style="margin-top:auto;">
                               <div className="d-flex" Style="justify-content:flex-start; ">
                           {getstar(Number(element?.rating))}
                               </div>
                               
                           </div>
                           <div className="col-12">
                               <p align="justify" className="py-3 our-customer-right-text">{element?.review}</p>
                           </div>
                       </div>
                       
                       <div className="d-flex" Style="flex-direction:column; justify-content:flex-end; height:20%;">
                           <b className="pt-5" Style={'font-weight: 800;font-size: 14.4354px;line-height: 15px; margin-bottom:0.5rem'}>{element?.customer_name}</b>
                           {/* <span Style="font-weight: 400;font-size: 10px;line-height: 10px;">{element?.designation}</span> */}
                       </div>
                   </div>
    })}
    </div>
    </div>
    </>
  )
}

export default Review