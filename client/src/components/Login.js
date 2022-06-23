import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUp from "./SignUp";


function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
   
    <div>
         <h1>Breeze Records</h1>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          
          <h1 className="signIn">
            Don't have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </h1>
        </>
      ) : (
        <>
          <SignUp onLogin={onLogin} />
          
          <p>
            Already have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </div>
  );
   
     
}

export default Login;


