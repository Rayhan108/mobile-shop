
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";


// eslint-disable-next-line react/prop-types
const PrivetRoute = ({children}) => {
    const {loader,user} =useAuth()
    const location = useLocation();
   
 if(loader){
            return <div className="flex md:mt-64 items-center justify-center ">
            <div className="radial-progress animate-spin" style={{"--value":70}}>70%</div>
          </div>
        }
        
          if (user) {
            return children;
          }else{
            Swal.fire({
                title: 'error!',
                text: 'You have to log in first to go this page',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
          }
    
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
   
};

export default PrivetRoute;