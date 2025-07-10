import { Navigate } from "react-router-dom"
import { useCookies } from 'react-cookie';

const Privateroutes=({children})=> {
    const [cookies ] = useCookies(['verificationToken']);
    const isAuth=(cookies.verificationToken) 
    
    if(!isAuth){
        return  <Navigate to="/singin"/>
    }
    return  children

}

export default Privateroutes