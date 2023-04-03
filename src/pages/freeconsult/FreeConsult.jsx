import React,{useState} from 'react'
import { Form } from 'react-bootstrap'
import axios from '../../axios'
import Toast from '../../Toast'
import './freeconsult.css'
import validator from 'validator'


const FreeConsult = () => {
  const [isLoading,setIsLoading] = useState(false)
  const [contact,setContact] = useState({
    name:"",
    mobile:"",
    email:"",
    message:""
})
const handleChange = (e) => {

  setContact({...contact,[e.target.name]:e.target.value})
}
const Contact_form = async(e)=>{
  const {name, mobile, email, subject, message} = contact
  e.preventDefault()

   if( !email || !message || !mobile ) return Toast("please fill properly")
   if( !validator.isEmail(email)) return Toast("email is not valid")
   if( !validator.isMobilePhone(mobile)) return Toast("mobile is not valid")
 

   try{
    setIsLoading(true)
    const response= await axios({
      method: "post",
     url:'/contact',
      data:{
        name,mobile,email,subject:"for Consultaion ",message
      },

     })
     
     if(response.status===200){
      const data = response.data;
     
      Toast(data.message,response.status)
      
     }
   }
   catch(err){
    const error = err.response.data
    Toast(error.message)

   }
   finally{
    setIsLoading(false)
   }
}


    var arr =[
        {
            images:'images/images1.jpg',
            h1:"Art Consultancy",
            h6:"Managing Director",
            p:[
                'Choosing the right art pieces for your space can be a real challenge. At GRANDIOSE we provide you with our professional art experts. They can advise and source artwork to add hard-to-find, valuable, exciting pieces to an art collection. To make your home truly beautiful and thought-through.',
                'Our Art Consultant will be happy to help and discuss the area of your home/office that needs artwork to make it more appealing to customers, visitors, or family. Our Consultant uses their knowledge of art and design to select pieces that will create the overall mood you desire to achieve. We will install the artwork or places artistic sculptures in such a way that they will become practical, organic additions to your space.',
                'Our art consultant works in corporate environments, marketing companies, and real estate. Focusing on areas where the business meets specialized needs. We also work very closely with the architects and interior designers to make their projects successful with delightful services.'
            ]
        },
        {
            images:'images/images2.jpg',
            h1:"Art Curation",
            h6:"Business Development Manager",
            p:[
               'In a museum, gallery, or similar arts setting, curating is the act of selecting, organizing, and presenting objects for display.',
               'A curator is a specialist responsible for curating and consists of work from an institution’s permanent collection, though it is common for loaned artworks to be curated for special exhibitions.',
               'Why curate a collection? the primary goal of a curator is to “interpret the collection in order to inform, educate, and inspire the public.” This objective is in line with the role of the museum—to house, preserve, and display objects of cultural, artistic, historical, or scientific significance. This makes curating intrinsic to the institution itself',
               'At Grandiose, our art curators are specialized in curating the best works from the artists based on the trends and themes relevant to the current times to create an opportunity for the artists to generate revenue for their creativity and hard work. We also, work closely with Interior designers to understand their themes and concept to suggest the best art for the completion of their projects.',

            ]
        },
        {
            images:'images/images3.jpg',
            h1:"Art Installation",
            h6:"Production - Manager",
            p:[
                'We strive to make your experience of owning artwork you love as comfortable as possible. Our professional delivery and installation team delivers the artworks you desire with utmost care and install them according to the aesthetics of your home or office interiors.'
            ]
        },

    ]
  return (
    <>

<div className="about-us-top" style={{background:`url(images/free-consult-banner.jpg)`}}>
        <h1>Free Consulting</h1>
      </div>
      {
        arr?.map((element,index)=>{
            
            return <div className="free-consulting-conatiner container " style={index%2!=0 ? {flexDirection:'row-reverse'}:{flexDirection:'row'}}>
      <div style={{display: 'flex', alignItems:'center',justifyContent: 'center'}}>
        <img src={element?.images} id="free-consulting-img" />
        </div>
        <div className='content-freeconsult'>
            <h2 >{element?.h1}</h2>
            {/* <h6>{element?.h6}</h6> */}
            {element.p?.map((p_content)=>{

                return <p>{p_content}</p>
            })}
            

        </div>
      </div>
        })
      }

      <div className="free-consulting-conatiner container " style={{flexDirection:'row-reverse'}}>
      <div style={{display: 'flex', alignItems:'center',justifyContent:'center'}}>
        <img src='images/topimage.jpg' id="free-consulting-img" />
        </div>
        <div className='content-freeconsult'>
        <h2 >PARTNER WITH US</h2>
            <h6>Partner with us to become a valued member of our talented community of artists and art experts.</h6>
            <Form className='free-consult-form'>
            <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" name='name' onChange={handleChange} />
      </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="number" placeholder="Phone" name='mobile' onChange={handleChange}/>
      </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" name='email' onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={6} name="message" onChange={handleChange}  />
      </Form.Group>
      <button className='themeButton mx-auto' onClick={Contact_form}> submit</button>
            </Form>
        </div>
      </div>
     








    </>
  )
}

export default FreeConsult