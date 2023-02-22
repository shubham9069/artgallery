import react ,{useState,useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CheckOut, AllProduct,ProductDetails, Cart, Thanku } from './component/Exportfiles';
import { Footer, Navigationbar} from './homepage/Exportfile';
import {Help,Forget, Login,Signup, Verify, Profile} from './pages/exportfiles'
import HomePage from './homepage/HomePage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PresistLogin from './pages/PresistLogin'
import RequiredLogin from './pages/Requiredlogin'
import Protected from './pages/Protected'
import OrderTab from './pages/orders/OrderTab';
import ScrollToTop from './component/ScrollToTop';
import OrderDetails from './pages/orders/OrderDetails';

function App() {

  return (
    <>
      {/* <Navigationbar/> */}
     <ScrollToTop />
     <Routes>

     <Route element={<Protected/>} >
     <Route path="/Login" element={<Login />} />
    <Route path="/forgetpassword" element={<Forget />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/verifyotp" element={<Verify />} />
    </Route>

    
    <Route element={<PresistLogin />} >

    <Route path="/" element={<><Navigationbar/><HomePage /><Footer /></>} />
    <Route path="/allproduct" element={<><Navigationbar/><AllProduct /><Footer /></>} />
    <Route path="/ProductDetails/:id" element={<><Navigationbar/><ProductDetails /><Footer /></>} />
    <Route path="/help&support" element={<><Navigationbar/><Help /><Footer /></>} />

    <Route element={<RequiredLogin />}>
    <Route path="/checkout" element={<><Navigationbar/><CheckOut/><Footer /></>} />
    <Route path="/cart" element={<><Navigationbar/><Cart /><Footer /></>} />
    <Route path="/thanku" element={<><Navigationbar/><Thanku /><Footer /></>} />
    <Route path="/profile" element={<><Navigationbar/><Profile/><Footer /></>} />
    <Route path="/orders" element={<><Navigationbar/><OrderTab/><Footer /></>} />
    <Route path="/OrderDetails" element={<><Navigationbar/><OrderDetails/><Footer /></>} />
    
    </Route>
    </Route>
     </Routes>

     <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
      {/* <Footer /> */}
    </>
  );
}

export default App;
