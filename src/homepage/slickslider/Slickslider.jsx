import React from 'react'
import Slider from "react-slick";
import './Slider.css'
import { Link, useNavigate,useLocation } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { arrows } from 'react-slick-carousel/lib/default-props';
import { Button } from 'react-bootstrap';
import { useContext,useState } from 'react';
import { AuthContext } from '../../AuthProvider';
import axios from '../../axios';
import Toast from '../../Toast';




const Slickslider = ({ImgArr,type,title}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const {userToken,setCart} = useContext(AuthContext)
  const [isLoading,setIsLoading] = useState(false)
  // console.log(ImgArr)


  // secound crousel 
  var settings1= {
    className: 'slideShow',
    dots: true,
    draggable: true,
    // nextArrow:<h1>jfbrfrfhfhhf</h1>,
   
    arrows: true,
  slidesToShow: 6,
  slidesToScroll: 4,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 5.5,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true

      }
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows:false
        
      }
    }
  ]
}

// third crousel 
var settings2= {
  className: 'slideShow thirdslide ',
  dots: true,
  
    arrows: true,
  draggable: true,
slidesToShow: 4.5,
slidesToScroll: 1,
pauseOnHover: true,
responsive: [
  {
    breakpoint: 1900,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 1610,
    settings: {
      slidesToShow: 3.5,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 1350,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2.25,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 2,
      infinite: true,
        dots: true
    }
  },

  {
    breakpoint: 750,
    settings: {
      slidesToShow: 1.5,
      slidesToScroll: 1,
      infinite: true,
        dots: true,
        arrows:false
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
        dots: true
    }
  }
]
}


// first crousel 
  var settings =  {
    // dots: true,
    // arrows:true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    pauseOnHover: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow:2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.75,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.25,
          slidesToScroll: 1
        }
      }
    ]
  };

  const Add_to_cart= async(id) =>{

    if(!userToken) return navigate('/Login',{state:{from :location} })
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

    const HandlePropagationError=(e,product_id)=>{
      e.stopPropagation();
      Add_to_cart(product_id)
      
    }
   
      return (
        <>
        <h2 className="section-heading" > <span className="section-heading"style={{color:"#009ba1"}}>{title[0]}</span> {title[1]}</h2>
          <div className={type==1?'section-slider ' :"section-slider"}>
          <div className={type==1?" d-flex justify-content-between ":"text d-flex justify-content-between "} style={type==1?{marginBottom:"1.5rem"}:null}>
        
        <p className='span-underline' onClick={()=>navigate('/allproduct')}  > View All </p>
        </div>

        {type==1 && (<Slider {...settings1}>
     
         {ImgArr?.map((element,index)=>{
          
           return <div  key={index} className='d-flex center-div slider-container' Style={'flex-direction:column;height:270px !important;  margin: 0 auto; cursor:pointer'} >
           <img id="sliderimg" src={element?.images?.length &&(element?.images[0])} loading="lazy" decoding="async" alt="img1" Style={" max-width:250px;max-height:250px;width: 100%;height:100%; object-fit:fill; "} onClick={()=>navigate('/ProductDetails/' + element.product_id)}></img>
          <div onClick={()=>navigate('/ProductDetails/' + element.product_id)} className="sliderBG" >
            <div className="center-div">
              <h4>{element.name}</h4>
              <p style={{margin:'0 auto'}}>{element.short_description}</p>
              <button className="white-themeButton" onClick={()=>navigate('/ProductDetails/' + element.product_id)} style={{color:'#009ba1',margin:'0  auto'}}>View </button>
            </div>
          </div>
          </div>
          
         })} 
         
          
        </Slider>)}
        
        {type==2 && (<Slider {...settings2}>
     
     {ImgArr?.map((element,index)=>{
      
       return <div  key={index} className='d-flex center-div ' id="slider2" Style={"height:370px !important;max-width:350px;  margin: 0 auto; cursor:pointer"}>
       <img src={element?.images?.length &&(element?.images[0])} loading="lazy" decoding="async"  alt="img1" Style={"width: 100%;height:100%; max-width:350px;object-fit:fill; "} ></img>
       <div onClick={()=>navigate('/ProductDetails/' + element.product_id)} className="sliderbg2" >
        <div className="">
        <h4 style={{fontSize:'18px',fontWeight:400}}>{element.name}</h4>
              <p style={{maxHeight:'50px',overflow:'hidden'}}>{element.short_description}</p>
              <p>size : {element?.size_name}</p>
              <p>medium : {element?.medium_name}</p>
              <p>code : {element?.product_id}</p>
              <div className='d-flex ' style={{flexWrap:'wrap',gridGap:'10px'}}>
                <button className="white-themeButton" onClick={(e)=>HandlePropagationError(e,element?.product_id)} style={{fontSize:'10px'}}>Add To Cart</button>
                <button className="white-themeButton" onClick={()=>navigate('/ProductDetails/' + element.product_id)} style={{fontSize:'10px'}}>View</button>
              </div>

        </div>
       </div>
      </div>
      
     })} 
     
      
    </Slider>)
        }
    

    {/* {type==    <Slider {...settings}>
     
         {ImgArr?.map((element,index)=>{
          
           return   <div   key={index} className='d-flex center-div' Style={'height:250px !important;cursor:pointer  '} >
           <img src={element?.images?.length &&(element?.images[0])}  alt="img1" Style={'max-width:300px;width: 70%;height:80%; object-fit:fill;    border-radius: 10px'} onClick={()=>navigate('/ProductDetails/' + element.product_id)}></img>
          </div>
          
         })} 
         
          
        </Slider>
        } */}
        

        {type=='artist' && (<Slider {...settings1}>
     
     {ImgArr?.map((element,index)=>{
      
       return <div  key={index} className='d-flex center-div slider-container' Style={'flex-direction:column;height:270px !important;  margin: 0 auto; cursor:pointer'} >
       <img src={element?.images} alt="img1" decoding="async" loading="lazy" Style={" max-width:250px;max-height:250px;width: 100%;height:100%; object-fit:fill; "} onClick={()=>navigate('/Artistdetails/' + element?.id)} ></img>
      {/* <div className="sliderBG" >
        <div className="center-div" >
          <h4>{element?.name}</h4>
          <p style={{margin:'0 auto',height:'80px' ,overflow: 'hidden',}}>{element?.description}</p>
          <button className="white-themeButton" onClick={()=>navigate('/ProductDetails/' + element.product_id)} style={{color:'#56BDBD',margin:'0  auto'}}>View </button>
        </div>
      </div> */}

        <div className="sliderBG3" >
        <div className="justify-content-center align-items-center" >
          <h4>{element?.name}</h4>
          
         
        </div>
      </div>
      </div>
      
     })} 
     
      
    </Slider>)}
      </div>
        </>
      )
}

export default Slickslider