import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const handleToggle = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div>
      <form className="absolute w-3/12 bg-black opacity-85 my-36 mx-auto right-0 left-0 p-10 text-white">
        <h1 className="font-bold text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn&&<input
          type="text"
          placeholder="Full Name"
          className="p-3 my-4 w-full bg-gray-700 rounded-md"
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-4 w-full bg-gray-700 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full bg-gray-700 rounded-md"
        />
        <button type="submit" className="p-3 my-4 bg-red-700 w-full rounded-md">
          Sign In
        </button>
        <p className="py-4 cursor-pointer" onClick={handleToggle}>
          {isSignIn
            ? "New To Netflix? Signup now."
            : "Already registered. Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
