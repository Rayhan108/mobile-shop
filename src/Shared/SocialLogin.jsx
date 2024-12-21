import { FaGoogle } from "react-icons/fa";

import { GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import useAuth from "../hooks/useAuth";

const SocialLogin = () => {
  const {googleSignIn,loader,setLoader}=useAuth();
  const provider = new GoogleAuthProvider();
  const location =useLocation()
const navigate = useNavigate()
const from = location.state?.from?.pathname || "/";
  // login with google
const handleGoogleLogin = () => {


  googleSignIn(provider)
    // eslint-disable-next-line no-unused-vars
    .then((result) => {
    //   console.log(result);
      navigate(from)
      setLoader(false)
     toast.success('Login Successfull')
    })
    .catch((error) => {
      setLoader(false)
      toast.error(error.message);
    });
};
  return (
    <div className="text-center">
      <div className="divider"></div>
      <button   onClick={handleGoogleLogin} className="btn btn-outline btn-info">

        <FaGoogle></FaGoogle>
        {
              loader?<ImSpinner9  className='m-auto animate-spin' size={24}></ImSpinner9>
              :
              ' Sign Up With Google'
            }
        
       
      </button>
    </div>
  );
};

export default SocialLogin;
