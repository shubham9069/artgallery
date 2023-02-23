import {createContext,useEffect,useState} from "react";
import axios from "./axios";
import Toast from "./Toast";


export const AuthContext = createContext({})

const AuthProvider = ({children}) => {
    const [userToken, setUserToken] = useState("")
    const [userData, setUserData] = useState("")
    const [All_Product_Page,setAll_Product_Page ] = useState([]);
    const [Catagory,setCatagory ] = useState({mediums:[],styles:[],sizes:[]});
    const [homepage,setHomepage] = useState({
      Banner:[],
      offer:[],
      Recommended:[]
    })
    const [Cart,setCart] = useState([])
    const [CategoryData ,setCategoryData] = useState()
  
    const [isLoading,setIsLoading]=useState(true)

    
  //   const initialFetch = {
  //     loading: false,
  //     success: false,
  //     error: false,
  //     response: false
  // // }
  // const fetchReducer = (state, action) => {
  //     switch (action.type) {
  //         case 'setLoading': return { ...state, loading: action.value }
  //         case 'setSuccess': return { ...state, success: action.value }
  //         case 'setError': return { ...state, error: action.value }
  //         case 'setResponse': return { ...state, response: action.value }
  //         case 'reset': return initialFetch
  //         default: return state
  //     }
  // }

  const get_all= async(url,type) =>{

    try{
      setIsLoading(true)
      const response= await axios({
        method: "get",
       url:url,
       })
       
       if(response.status===200){
        const data = response.data;

        switch(type){
          case 'product': 
          setAll_Product_Page(data.products);
          setCatagory((p)=>({...p,["mediums"]:data.mediums}));
          setCatagory((p)=>({...p,["styles"]:data.styles}));
          setCatagory((p)=>({...p,["sizes"]:data.sizes}));

          return;
          case 'category':
            setCategoryData(data?.categories)
          return ;
        }
        
      //   Toast(data.message,response.status)
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
      console.log("huehhhrkfhfhrfhrfhjrfrhfjfhfrhjfrhjkf")
      get_all('/get_all_products','product')
    
      get_all('/get_all_categories','category')
    },[])







  return (
    <>
  <AuthContext.Provider value={{userToken,setUserToken,userData,setUserData,setAll_Product_Page,All_Product_Page,Catagory,Cart,setCart,CategoryData,homepage,setHomepage}}>
        {children}
        </AuthContext.Provider>

    </>
  )
}

export default AuthProvider