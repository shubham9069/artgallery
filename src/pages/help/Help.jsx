import React,{useState} from 'react'
import './help.css'
import help from '../assest/help.png'

const Help = () => {
   
  return (
    <>
    <div className="section-padding">
<div className="container center-div flex-column ">
<h3>Help & Support</h3>

<img src={help} style={{maxWidth:'350px'}}></img>

</div>
<div className="section-padding center-div flex-column" style={{ maxWidth:'1500px',gridGap:'40px' ,margin:'0 auto'}}>
            <div className="help" >
               <div>
                <p > Call us<br/><span style={{fontWeight: 400,color: '#807A7A'}}>+31 9868999004</span> </p>

{/* ===================svg================                 */}

<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="16.5" cy="16.5" r="16.5" fill="#DBF7F7"/>
<g clip-path="url(#clip0_112_2397)">
<path d="M11.995 11.5833C12.05 12.3992 12.1875 13.1967 12.4075 13.9575L11.3075 15.0575C10.9317 13.9575 10.6933 12.7933 10.6108 11.5833H11.995ZM21.0333 22.6017C21.8125 22.8217 22.61 22.9592 23.4167 23.0142V24.38C22.2067 24.2975 21.0425 24.0592 19.9333 23.6925L21.0333 22.6017ZM12.875 9.75H9.66667C9.1625 9.75 8.75 10.1625 8.75 10.6667C8.75 19.2742 15.7258 26.25 24.3333 26.25C24.8375 26.25 25.25 25.8375 25.25 25.3333V22.1342C25.25 21.63 24.8375 21.2175 24.3333 21.2175C23.1967 21.2175 22.0875 21.0342 21.0608 20.695C20.9692 20.6583 20.8683 20.6492 20.7767 20.6492C20.5383 20.6492 20.3092 20.7408 20.1258 20.915L18.1092 22.9317C15.515 21.6025 13.3883 19.485 12.0683 16.8908L14.085 14.8742C14.3417 14.6175 14.415 14.26 14.3142 13.9392C13.975 12.9125 13.7917 11.8125 13.7917 10.6667C13.7917 10.1625 13.3792 9.75 12.875 9.75Z" fill="#FF4D4D"/>
</g>
<defs>
<clipPath id="clip0_112_2397">
<rect width="22" height="22" fill="white" transform="translate(6 7)"/>
</clipPath>
</defs>
</svg>

{/* ===============end ================ */}

                </div>
               </div>

            <div className="help" >
               <div>
                <p > Mail Us<br/><span style={{fontWeight: 400,color: '#807A7A'}}>Support@artgallery.com</span> </p>

{/* ===================svg================                 */}


<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="16.5" cy="16.5" r="16.5" fill="#EFF6FF"/>
<g clip-path="url(#clip0_112_2407)">
<path d="M27 11C27 9.9 26.1 9 25 9H9C7.9 9 7 9.9 7 11V23C7 24.1 7.9 25 9 25H25C26.1 25 27 24.1 27 23V11ZM25 11L17 16L9 11H25ZM25 23H9V13L17 18L25 13V23Z" fill="#74B2FB"/>
</g>
<defs>
<clipPath id="clip0_112_2407">
<rect width="24" height="24" fill="white" transform="translate(5 5)"/>
</clipPath>
</defs>
</svg>


{/* ===============end ================ */}

                </div>
               </div>

            <div className="help" >
               <div>
                <p > Live Chat<br/><span style={{fontWeight: 400,color: '#807A7A'}}>Start live chat with us</span> </p>

{/* ===================svg================                 */}


<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="16.5" cy="16.5" r="16.5" fill="#C7FFE9"/>
<g clip-path="url(#clip0_112_2418)">
<path d="M19 10V17H9.17L8.58 17.59L8 18.17V10H19ZM20 8H7C6.45 8 6 8.45 6 9V23L10 19H20C20.55 19 21 18.55 21 18V9C21 8.45 20.55 8 20 8ZM25 12H23V21H10V23C10 23.55 10.45 24 11 24H22L26 28V13C26 12.45 25.55 12 25 12Z" fill="#6EE4B5"/>
</g>
<defs>
<clipPath id="clip0_112_2418">
<rect width="24" height="24" fill="white" transform="translate(4 6)"/>
</clipPath>
</defs>
</svg>


{/* ===============end ================ */}

                </div>
               </div>
</div>
</div>
    </>
  )
}

export default Help