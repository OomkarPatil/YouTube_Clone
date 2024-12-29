import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import axios from 'axios';
import React from 'react'
import { useState } from "react";
import { FaYoutube } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const [profilePic, setProfilePic] = useState("https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg")
  const [signUpData,setSignUpData] = useState({ "channelName":"", "userName":"", "email":"", "password":"", "profilePic":profilePic });
  const navigate = useNavigate();
  const handleOnChng = (event,name) => {
    setSignUpData({
      ...signUpData,[name]:event.target.value
    });
  }

  const [uploadProgress, setUploadProgress] = useState(0);


  const UploadImg = async(e)=>{
    const files = e.target.files;
    const data = new FormData();
    data.append('file',files[0]);
    data.append('upload_preset', 'Youtube-Clone');
    try{
      // cloudname=dzbnjm4eg
      const res =await axios.post("https://api.cloudinary.com/v1_1/dzbnjm4eg/image/upload", data,
        { onUploadProgress: (progressEvent) => {
          const percentage = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentage);},
        }
      );
      const ImgURL = res.data.url;
      setProfilePic(ImgURL);
      setSignUpData({
        ...signUpData,"profilePic":ImgURL
      });
      setUploadProgress(0); // Reset progress after upload is complete
    }catch(err){
      console.log(err);
      setUploadProgress(0); // Reset progress on error
    }
  }



  const hndlSignUp = async()=>{
    axios.post('http://localhost:4000/auth/signUp', signUpData).then((res)=>{
      toast.success(res.data.message);
      navigate('/login');
    }).catch(err=>{
      console.log(err);
      toast.error(err);
    })
  }


  return (
    <div className='w-full h-screen bg-[#141414] flex justify-center items-center'>
      <div className='py-3 px-4 rounded-lg bg-[#313030] flex flex-col  gap-y-4 items-center justify-center' >
        
        {/* //Headder */}

         <div className='flex flex-col w-full gap-y-2 items-center justify-center'>
              <div className='flex gap-x-2 items-center justify-center'>
                  <FaYoutube className="text-[#FF0000] text-[34px] " />
                  <h1 className='text-3xl font-oswald text-white font-semibold'>Register</h1>
              </div>
              <p className='text-muted-foreground text-white text-sm'>register your account</p>
            </div>

          <div className="flex items-center flex-col gap-3 justify-center w-full">

             <div className='flex gap-3 items-center justify-center w-full'>
              <div className="flex flex-col w-full mx-auto">
                <label className="text-sm lg:text-base text-white mb-1">Channelname</label>
                    <Input 
                        type="text" 
                        placeholder=" Jhone arts "
                        value={signUpData.channelName}
                        onChange={(e) => handleOnChng(e,"channelName")}
                    />
                </div>
                <div className="flex flex-col w-full mx-auto">
                <label className="text-sm lg:text-base text-white mb-1">UserName</label>
                    <Input 
                      type="text" 
                      placeholder=" Jhone Doe"
                      value={signUpData.userName}
                      onChange={(e) => handleOnChng(e,"userName")}
                    />
                </div>
             </div>
              <div className="flex flex-col w-full mx-auto">
              <label className="text-sm lg:text-base text-white mb-1">Email</label>
              <Input 
                   type="email" 
                   placeholder=" Jhonedoe@gmail.com "
                   value={signUpData.email}
                   onChange={(e) => handleOnChng(e,"email")}
              />
              </div>
              <div className="flex flex-col w-full mx-auto">
              <label className="text-sm lg:text-base text-white mb-1">Password</label>
              <Input 
                  type="password" 
                  placeholder="* * * * * *"
                  value={signUpData.password}
                  onChange={(e) => handleOnChng(e,"password")}
              />
              </div>
            
          </div>
          <div className='flex justify-center items-center gap-7'>
              <div className='flex flex-col justify-center items-center w-[60%]'>
              <input 
                   onChange={(e)=>UploadImg(e)}
                   type="file"
                   className="w-full h-9 rounded-md border my-2 text-[#828080] border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-white placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer disabled:opacity-50 md:text-sm"
             />
             <div className='w-full'>
                {uploadProgress > 0 && (
                  <div className="w-full bg-gray-300 rounded-md overflow-hidden">
                    <div className="bg-[#FF0000] h-2 transition-all" style={{ width: `${uploadProgress}%` }}></div>
                  </div>
                )}
                {uploadProgress > 0 && (
                  <p className="text-white text-sm text-center mt-1">
                    Uploading: {uploadProgress}%
                  </p>
                )}
             </div>
              </div>
              <img 
                   src={profilePic} 
                   alt="Profile_pic" 
                   className='rounded-full h-[100px] w-[100px]'
              />
          </div>
          <Button type="submit" onClick={hndlSignUp}  className="w-full bg-[#FF0000]">Submit</Button>
          <Button variant="link" className="font-normal text-white w-full" size="sm" asChild>
            <Link to='/login'>
               Already have an account? Login here.
            </Link>
          </Button>
      
      </div>
      <ToastContainer />
    </div>
  )
}

export default Register