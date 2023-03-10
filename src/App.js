import react ,{useState,useEffect,Suspense,lazy} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CheckOut, } from './component/Exportfiles';
import { Footer, Navigationbar} from './homepage/Exportfile';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PresistLogin from './pages/PresistLogin'
import RequiredLogin from './pages/Requiredlogin'
import Protected from './pages/Protected'

import ScrollToTop from './component/ScrollToTop';

import Loader from './component/Loader';
const HomePage= lazy(() => import( './homepage/HomePage'));
const OrderTab= lazy(() => import( './pages/orders/OrderTab'));
const OrderDetails= lazy(() => import( './pages/orders/OrderDetails'));
const Contact= lazy(() => import( './pages/contactus/Contact'));
const AllProduct= lazy(() => import( './component/allproduct/AllProduct'));
const ProductDetails= lazy(() => import( './component/productDetails/ProductDetails'));
const Cart= lazy(() => import( './component/cart/Cart'));
const AllArtists= lazy(() => import( './component/artist/AllArtists'));
const ArtistDetails= lazy(() => import( './component/artist/ArtistDetails'));
const  Thanku= lazy(() => import( './component/thanku/Thanku'));
const  Help= lazy(() => import( './pages/help/Help'));
const  Forget= lazy(() => import( './pages/form/Forgot'));
const  Login= lazy(() => import( './pages/form/Login'));
const  Signup= lazy(() => import( './pages/form/Signup'));
const  Verify= lazy(() => import( './pages/form/Verify'));
const  AboutUs= lazy(() => import( './pages/aboutus/AboutUs'));
const Profile= lazy(() => import( './pages/profile/Profile'));




function App() {

  return (
    <>
      {/* <Navigationbar/> */}
     <ScrollToTop />
     <Suspense fallback={<Loader />}>
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
    <Route path="/allproduct/:catid" element={<><Navigationbar/><AllProduct /><Footer /></>} />
    <Route path="/AllArtist" element={<><Navigationbar/><AllArtists /><Footer /></>} />
    <Route path="/Artistdetails/:id" element={<><Navigationbar/><ArtistDetails /><Footer /></>} />
    <Route path="/ProductDetails/:id" element={<><Navigationbar/><ProductDetails /><Footer /></>} />
    <Route path="/help&support" element={<><Navigationbar/><Help /><Footer /></>} />
    <Route path="/aboutus" element={<><Navigationbar/><AboutUs/><Footer /></>} />
    <Route path="/contactus" element={<><Navigationbar/><Contact/><Footer /></>} />
    
    <Route path="/thanku" element={<><Navigationbar/><Thanku title="Congratulations" desc="Payment was successful and your order is confirmed Enjoy the excellent service and fast delivery." /><Footer /></>} />
    <Route path="/orderFailed" element={<><Navigationbar/><Thanku title="Order Unsuccesfull" desc="Call us Our Helpline number +917845126325 we will reach you soon" /><Footer /></>} />

    <Route element={<RequiredLogin />}>
    <Route path="/checkout" element={<><Navigationbar/><CheckOut/><Footer /></>} />
    <Route path="/cart" element={<><Navigationbar/><Cart /><Footer /></>} />
    
    <Route path="/profile" element={<><Navigationbar/><Profile/><Footer /></>} />
    <Route path="/orders" element={<><Navigationbar/><OrderTab/><Footer /></>} />
    <Route path="/OrderDetails/:id" element={<><Navigationbar/><OrderDetails/><Footer /></>} />
    
    </Route>
    </Route>
     </Routes>
    </Suspense>

     <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
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
