import Header from "./Header";
import { BACKGROUND_IMG } from "../utils/constants";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";

const Login = () =>{
    const [isSignInForm, setIsSignInForm] = useState(true);

    const email = useRef(null);
    const password = useRef(null);
    const fullName = useRef(null);
    
    
    

    const [errorMessage, setErrorMessage] = useState(null);


    const handleButtonClick = () => {
        // Validate Form

        // console.log("Email: "+email?.current?.value);
        // console.log("Password: "+password?.current?.value);
        // console.log("Name: "+fullName?.current?.value);
        
          const message = checkValidData(
            fullName?.current?.value,
            email?.current?.value,
            password?.current?.value
          );
          console.log(message);
          setErrorMessage(message);
        
      };
      
 
    
    const handleFormClick = () =>{
        return  setIsSignInForm(!isSignInForm);
        
        
    }
    return <div className="">
        <Header/>
        <div className="absolute">
            <img src={BACKGROUND_IMG} alt="background"/>

        </div>
        <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black bg-opacity-75 my-36 
        mx-auto left-0 right-0 text-white rounded-lg">
            <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In" : "Sign Up" }</h1>
            {
                !isSignInForm && <input ref={fullName} type="text"
                 placeholder="Full Name" className="p-4 my-4  w-full rounded-lg bg-gray-700"/> 
                
            }
           
            <input ref={email} type="text" placeholder="Email or Phone Number"
             className="p-4 my-4  w-full rounded-lg bg-gray-700" />
            
            <input ref={password} type="password" 
                placeholder="Password" autoComplete="current password" className="p-4 my-4 mb-2
                 w-full rounded-lg bg-gray-700"/>
            
            <p className="font-bold text-lg text-red-500"> {errorMessage}</p>
            
            <button onClick={handleButtonClick} className="p-4 my-6  w-full
             bg-red-600 rounded-lg"> {isSignInForm? "Sign In" : "Sign Up"}</button>
            <p className="cursor-pointer" 
            onClick={handleFormClick}>{isSignInForm ? " New to Netflix? Sign up now" : "Already a member? Login now"}</p>
        </form>
    </div>
};

export default Login;