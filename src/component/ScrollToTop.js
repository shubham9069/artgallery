import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    



    const { pathname } = useLocation();
console.log(useLocation())
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    
  return null
    
  
}

export default ScrollToTop