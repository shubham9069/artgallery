
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CheckOut, AllProduct,ProductDetails, Cart, Thanku } from './component/Exportfiles';
import { Footer, Navigationbar} from './homepage/Exportfile';
import {Help,Forget, Login,Signup, Verify} from './pages/exportfiles'
import HomePage from './homepage/HomePage'
import { ToastContainer } from 'react-toastify';

function App() {

  
  return (
    <>
      {/* <Navigationbar/> */}
     
     <Routes>

    <Route path="/" element={<><Navigationbar/><HomePage /><Footer /></>} />
    <Route path="/allproduct" element={<><Navigationbar/><AllProduct /><Footer /></>} />
    <Route path="/ProductDetails" element={<><Navigationbar/><ProductDetails /><Footer /></>} />
    <Route path="/checkout" element={<><Navigationbar/><CheckOut/><Footer /></>} />
    <Route path="/cart" element={<><Navigationbar/><Cart /><Footer /></>} />
    <Route path="/thanku" element={<><Navigationbar/><Thanku /><Footer /></>} />
    <Route path="/help&support" element={<><Navigationbar/><Help /><Footer /></>} />
    <Route path="/Login" element={<Login />} />
    <Route path="/forgetpassword" element={<Forget />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/verifyotp" element={<Verify />} />
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
