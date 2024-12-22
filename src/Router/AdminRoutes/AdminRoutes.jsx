
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


import toast from 'react-hot-toast'
import useAdmin from "../../hooks/useAdmin";
import Loading from "../../Component/Loading/Loading";

// eslint-disable-next-line react/prop-types
const AdminRoutes = ({children}) => {
    const {user,loading}=useAuth();
    const [isAdmin,isLoading]=useAdmin()
  
if(loading || isLoading){
<Loading/>
}
    if(user && isAdmin){
       return children;
       
    }else{
        toast.error("You Are Not Admin")
    }
    return <>
    
    <Navigate to="/"></Navigate>
    
    </>
};

export default AdminRoutes;