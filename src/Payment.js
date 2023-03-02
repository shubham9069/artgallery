import React from 'react'
import { useContext } from 'react'

import { AuthContext } from './AuthProvider'
import axios from './axios'
import Toast from './Toast'
import {useNavigate} from 'react-router-dom'



const Payment = () => {
    const {userToken,userData,setCart} = useContext(AuthContext)
    const navigate = useNavigate()
    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement('script')
            script.src = src
            script.onload = () => {
                resolve(true)
            }
            script.onerror = () => {
                resolve(false)
                //     window.alert('You are offline, failed to load the resources.')
            }
            document.body.appendChild(script)
        })
    }
    
    
     const payWithRazorpay = async ( order) => {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
        if (!res) {
            alert('You are offline, failed to load the resources.')
            return
        }
    
        var options = {
            description: 'Order fees',
            // image: 'https://i.imgur.com/3g7nmJC.png',
            image:'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_test_7JFMstTaZGMnre', // Your api key
            amount: order?.amount* 100,//amount in paise
            name: 'art gallery ',
            prefill: {
                email: userData?.email,
                contact: userData?.mobile,
                name: userData?.name
            },
            theme: { color: '#56BDBD' },
            handler: (response) => {
                // alert(response.razorpay_payment_id)
                 Toast("payment successful",200)
                 update_order(order?.id,response.razorpay_payment_id,1)
            }
        }
    
        const paymentObject = new window.Razorpay(options)
        paymentObject.on('payment.failed', (response) => {
            update_order(order?.id,response.error.metadata.payment_id,2)
            // Toast(response.error.description)
            // alert(response.error.code);
            // alert(response.error.description);
            // alert(response.error.source);
            // alert(response.error.step);
            // alert(response.error.reason);
            // alert(response.error.metadata.order_id);
            // alert(response.error.metadata.payment_id);
        })
        paymentObject.open()
    }
    
     const update_order = async(id,payment_id,payment_status) => {

      console.log(id)
         try{
         
          const response= await axios({
            method: "post",
           url:'/update-order',
            data:{id,payment_id,payment_status
            },
            headers: {
              Authorization:`Bearer ${userToken}`,
              "Content-Type": "application/json",
              
            },
           })
           
           if(response.status===200){
            const data = response.data
            navigate('/thanku')
            Toast(data.message,response.status)
           
           }
         }
         catch(err){
          const error = err?.response?.data
          Toast(error.message);
          
      
      
         }
         
      }
    
    
  return payWithRazorpay
    
  
}

export default Payment