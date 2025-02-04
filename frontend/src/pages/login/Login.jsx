// aimport React from "react";

import { Link } from "react-router-dom";
import useLogin from "../../Hooks/useLogin";
import { useState } from 'react';


function Login() {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const {loading,login}=useLogin();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    await login(username,password);
  }
  return (
    <div className="flex flex-col items-center justify-center  min-w-96 mx-auto  ">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> LumoChat</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              className="w-full input input-bordered h-10 "
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text  text-white">
                {" "}
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
               value={password}
               onChange={(e)=>setPassword(e.target.value)}
              className="w-full input input-bordered h-10 "
            />
          </div>
          <Link
            to ="/signup"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white"
          >
            Don't have an acount?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2 glass  btn-info  " disabled={loading}> 
            {loading?<span className="loading  loading-spinner"></span>:"Login"}
            
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

//starter code for this file

// <div className="flex flex-col items-center justify-center  min-w-96 mx-auto  ">
// <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//   <h1 className="text-3xl font-semibold text-center text-gray-300">
//     Login
//     <span className="text-blue-500"> LumoChat</span>
//   </h1>
//   <form>
//     <div>
//       <label className="label p-2">
//         <span className="text-base label-text text-white">Username</span>
//       </label>
//       <input
//         type="text"
//         placeholder="Enter username"
//         className="w-full input input-bordered h-10 "
//       />
//     </div>
//     <div>
//       <label className="label">
//         <span className="text-base label-text  text-white">
//           {" "}
//           Password
//         </span>
//       </label>
//       <input
//         type="password"
//         placeholder="Enter password"
//         className="w-full input input-bordered h-10 "
//       />
//     </div>
//     <a
//       href="#"
//       className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white"
//     >
//       Don't have an acount?
//     </a>
//     <div>
//       <button className="btn btn-block btn-sm mt-2 glass  btn-info ">
//         Login
//       </button>
//     </div>
//   </form>
// </div>
// </div>
