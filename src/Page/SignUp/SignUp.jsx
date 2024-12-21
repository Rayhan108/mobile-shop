import { Link, useLocation, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from 'react-hot-toast'
import useAuth from "../../hooks/useAuth";

import { ImSpinner9 } from "react-icons/im";
import SocialLogin from "../../Shared/SocialLogin";
const SignUp = () => {
  const {createUser,loader,setLoader}=useAuth()
    const [confirmPassword, setConfirmPassword] = useState('');
    
const [confirmPasswordError, setConfirmPasswordError] = useState('');
const location =useLocation()
const navigate = useNavigate()
const from = location.state?.from?.pathname || "/";
const handleConfirmPasswordChange = (e) => {

    // console.log(e.target.value);
    setConfirmPassword(e.target.value);
    setConfirmPasswordError('');
  };
    const {
        register,
        handleSubmit, reset,
      formState: { errors },
      } = useForm();
      const onSubmit = data => {
          // console.log(data)
        if (data.password !== confirmPassword) {
            setConfirmPasswordError("Passwords don't match");
            return;
          }else{
            toast.success('Password Matched')
          }
          // create new user
          createUser(data.email,data.password)
          // eslint-disable-next-line no-unused-vars
          .then(result=>{
            // const loggedUser=result.user;
            // console.log(loggedUser);
  
            navigate(from, { replace: true })
            reset()
            setLoader(false)
          toast.success('Registration Success')
          
          
        })
        .catch(error=>{
          setLoader(false)
            toast.error(error.message)
        
          })
    
    };
  return (
    <div className="flex pt-[150px] items-center justify-center min-h-screen bg-gray-100 ">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name <span className="text-warning">*</span>
            </label>
            <input
              type="text"
              {...register("name",{required:true})}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
             {errors.name && (
                  <span className="text-red-600">name is required</span>
                )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Photo URL
            </label>
            <input
              type="url"
              {...register("photoURL")}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email <span className="text-warning">*</span>
            </label>
            <input
              type="email"
              {...register("email",{required:true})}
           
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password <span className="text-warning">*</span>
            </label>

            <input
              name="password"
             
              type="password"
              {...register("password", {
                required: true,
                maxLength: 20,
                minLength: 8,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
                {errors.password && (
                  <span className="text-red-600">This field is required</span>
                )}
                {errors.password?.type === "pattern" && (
                  <p role="alert">
                    password must have one uppercase,one lowercase,one number
                    and one special charecter
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p role="alert">Password must be 6 charecter</p>
                )}
          </div>
          <div className="mb-6">
            <label
             
              className="block text-gray-700 text-sm font-bold mb-2"
            >
             Confirm Password <span className="text-warning">*</span>
            </label>

            <input
              name="password"
            
              type="password"
              {...register("confirmPassword", {
                required: true,
              })}
              value={confirmPassword}
    onChange={handleConfirmPasswordChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
                {/* {errors.password && (
                  <span className="text-red-600">This field is required</span>
                )} */}
                    {confirmPasswordError && (
              <span className="text-red-600">{confirmPasswordError}</span>
            )}
              
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600  "
          >
           {
              loader?<ImSpinner9  className='m-auto animate-spin' size={24}></ImSpinner9>
              :
              'SignUp'
            }
          </button>
          <p className="mt-5 text-center">
            Already Have an Account?{" "}
            <Link to="/login">
              <span className="text-amber-700"> Login</span>
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
