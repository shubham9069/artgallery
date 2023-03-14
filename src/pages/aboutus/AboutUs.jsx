import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from '../../axios'
import Toast from '../../Toast'
import Loader from '../../component/Loader'


import './Aboutus.css'

const AboutUs = ({title,url}) => {
  const [data,setdata] = useState("");
  const [isLoading,setIsLoading] = useState(true);


  const about= async(e)=>{
        
      
    try{
     setIsLoading(true)
     const response= await axios({
       method: "get",
      url:url,
       
       headers: {
         
         "Content-Type": "application/json",
         
       },
      })
      
      if(response.status===200){
       const data = response.data
       setdata(data?.about)
       
    
      
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

useEffect(()=>{

  about();
},[url])
  return (
    <>
     {isLoading && <Loader />}
        <top>
      <div className="about-us-top" style={{background:`url(${data?.banner})`}}>
        <h1>{data?.name}</h1>
      </div>

      <div className="about-us-bottom">
        <div className="about-us-bottom-container">
        <p  dangerouslySetInnerHTML={{__html: `${data?.content}`}}></p>
          <div className="">
            <Link to='/contactus' className="link-a themeButton ">contact us</Link>
          </div>
        </div>
      </div>
    </top>

    {/* <botton>
      <div className="bottom">
        <h1>our people</h1>
        <div className="people">
          <div className="bottom-img">
            <img src="https://lh3.googleusercontent.com/a/AEdFTp4Ezy9n4VXYYnDFgE9K39qc487BAq-qSuLdhjHhjQ=s432-p-rw-no" />
            <h3>Shubham kaushik </h3>
            <p>front-end design and devlopment </p>
          </div>

          <div className="bottom-img">
            <img src="https://lh3.googleusercontent.com/a/AEdFTp4Ezy9n4VXYYnDFgE9K39qc487BAq-qSuLdhjHhjQ=s432-p-rw-no" />
            <h3>shubham kaushik </h3>
            <p>back-end development</p>
          </div>

          <div className="bottom-img">
            <img src="https://lh3.googleusercontent.com/a/AEdFTp4Ezy9n4VXYYnDFgE9K39qc487BAq-qSuLdhjHhjQ=s432-p-rw-no" />
            <h3> shubham kaushik </h3>
            <p>R&D by my self</p>
          </div>
        </div>
      </div>
    </botton> */}

    </>
  )
}

export default AboutUs