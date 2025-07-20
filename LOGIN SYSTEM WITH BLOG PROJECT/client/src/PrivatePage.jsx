import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router';


const PrivatePage=({children})=>{
     
const [cookies]=useCookies(["token"])

const token=cookies.token;

if(!token){
    return <Navigate to="/sign-in" replace={true} />
}

return children 



}

export default PrivatePage