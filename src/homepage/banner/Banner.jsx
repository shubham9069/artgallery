import React,{useState} from 'react'
import banner_1 from '../asset/banner_1.png'
import banner_2 from '../asset/banner_2.png'
import Carousel from 'react-bootstrap/Carousel'
import './Banner.css'

var img=[banner_1,banner_2] 
const Banner = () => {
    const [crrItem, setCrrItem] = useState(0)

    
   
  return (
<>
<div className='container-fluid' style={{padding:0}}>
<Carousel variant="dark" prevIcon={""}  nextIcon={""} interval={2000} >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img[0]}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item className="text-banner">
        <img
          className="d-block w-100"
          src={img[1]}
          alt="Second slide"
        />
<div >
    <h1 style={{marginBottom:'2rem'}}>Abstract - GP0009-22</h1>
    <p style={{maxWidth:'600px',marginBottom:'2rem'}}>We could notice shapes, colours and brushtrokes that produce a visual experience 
when we gaze artwork, Bt more often that not there is more to see. Many abstract 
works  of art contain a deeper beneath the surface. Some abstract paintings are
made to convey a read more .</p>
    <div className='d-flex' style={{ gridGap:'20px'}}>
    <button className="white-btn-design" >Add To cart  </button>
    <button className="white-btn-design" >Wishlist Here </button>
    </div>
</div>

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner_1}
          alt="Third slide"
        />
        
       
      </Carousel.Item>
    </Carousel>

</div>



</>

  )
}

export default Banner