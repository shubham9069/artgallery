import React from 'react'
import Slider from "react-slick";
import './Slider.css'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const slickslider = ({ImgArr,type,title}) => {
  console.log(ImgArr.length)


  // secound crousel 
  var settings1= {
    className: 'slideShow',
    dots: true,

  slidesToShow: 4,
  slidesToScroll: 4,
  pauseOnHover: true,
  responsive: [
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
      breakpoint: 1050,
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
        slidesToShow: 1.5,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

// third crousel 
var settings2= {
  className: 'slideShow thirdslide ',
  dots: true,

slidesToShow: 3.5,
slidesToScroll: 1,
pauseOnHover: true,
responsive: [
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
      initialSlide: 2
    }
  },

  {
    breakpoint: 750,
    settings: {
      slidesToShow: 1.5,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
}


// first crousel 
  var settings =  {
    dots: true,
    arrows:true,
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
   
      return (
        <>
        
          <div className={type==1?'section-slider section-padding' :"section-slider"}>
          <div className={type==1?" d-flex justify-content-between ":"text d-flex justify-content-between "} style={type==1?{marginBottom:"1.5rem"}:null}>
        <h2 className="section-heading"> <span className="section-heading"style={{color:"#56BDBD"}}>{title[0]}</span> {title[1]}</h2>
        <p className='span-underline'  > View All </p>
        </div>
        {type==1?<Slider {...settings1}>
     
         {ImgArr?.map((element)=>{
          
           return <div className='d-flex center-div slider-container' Style={'flex-direction:column'} >
           <img src={element} alt="img1" Style={" max-width:300px"} ></img>
           {/* <div className=' potrait-hover-details '>

           <div className="item1"><h3>Abstract - GP0009-22</h3></div>
  <div className="item2"><i className="bi bi-heart"></i></div>
  <div className="item3">Lorem ipsum dolor sit amet consectetur. Consectetur magnis porttitor rhoncus at in. A nec volutpat nulla magna morbi. Non id lectus amet cursus ac velit. Nulla .</div>  
  <div className="item4">
    <p>Sixe: 30X30</p>
    <p>Mediam: Oil On Canvas</p>
    <p>Code: GP0009-22</p>
  </div>
  <div className="item5"><button className="white-btn-design">Add To Cart</button></div>
            
           </div> */}
          </div>
         })} 
         
          
        </Slider>
        :
        type==2?<Slider {...settings2}>
     
     {ImgArr?.map((element)=>{
      
       return  <div className='d-flex center-div' Style={"height:370px !important;max-width:350px;  margin: 0 auto; "}>
       <img src={element} alt="img1" Style={"width: 100%;height:100%; max-width:350px"}></img>
      </div>
     })} 
     
      
    </Slider>
    :

        <Slider {...settings}>
     
         {ImgArr?.map((element)=>{
          
           return  <div className='d-flex center-div' >
           <img src={element} alt="img1" Style={" max-width:300px"} ></img>
          </div>
         })} 
         
          
        </Slider>
        }
      </div>
        </>
      )
}

export default slickslider