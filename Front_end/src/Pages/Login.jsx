"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useState } from "react";
import { FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom";


const Login = () => {

  const [loginData,setLoginData] = useState({ "email":"", "password": "" });
  const navigate = useNavigate();
  const handleOnChng = (event,name) => {
    setLoginData({...loginData,[name]:event.target.value});
  }

  const hndlLogIn = async()=>[
    axios.post("http://localhost:4000/auth/signIn",loginData,{ withCredentials: true }).then((res=>{
      console.log(res);
      localStorage.setItem("token",res.data.token);
      localStorage.setItem("userId",res.data.user._id);
      localStorage.setItem("userPrfPic",res.data.user.profilePic);
      localStorage.setItem("userName",res.data.user.userName);
      toast.success(res.data.message);   
      navigate('/'); 
      setTimeout(()=>{
        window.location.reload();
    },250);
    })).catch(err =>{
      toast.error("Invalid credentials");
    })
  ]

  return (
    <div className='w-full h-screen bg-[#141414] flex justify-center items-center'>
      <div className='py-3 px-4 rounded-lg bg-[#313030] flex flex-col  gap-y-4 items-center justify-center' >
        
        {/* //Headder */}

         <div className='flex flex-col w-full gap-y-2 items-center justify-center'>
              <div className='flex gap-x-2 items-center justify-center'>
                  <FaYoutube className="text-[#FF0000] text-[34px] " />
                  <h1 className='text-3xl font-oswald text-white font-semibold'>Login</h1>
              </div>
              <p className='text-muted-foreground text-white text-sm'>Login your account</p>
            </div>

          <div className="flex items-center flex-col gap-3 justify-center w-full">
              <div className="flex flex-col w-[300px] mx-auto">
                <label className="text-sm lg:text-base text-white mb-1">Email</label>
                  <Input 
                      type="email" 
                      placeholder=" Jhonedoe@gmail.com "
                      value={loginData.email}
                      onChange={(e) => handleOnChng(e,"email")}
                  />
              </div>
              <div className="flex flex-col w-[300px] mx-auto">
                <label className="text-sm lg:text-base text-white mb-1">Password</label>
                  <Input 
                      type="password" 
                      placeholder="* * * * * *"
                      value={loginData.password}
                      onChange={(e) => handleOnChng(e,"password")}
                  />
              </div>           
          </div>

          <Button onClick={hndlLogIn} className="w-full my-4 bg-[#FF0000]">Submit</Button>
            <Button variant="link" className="font-normal text-white w-full" size="sm" asChild>
              <Link to='/register'>
                don't have an account? register here.
              </Link>
            </Button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
