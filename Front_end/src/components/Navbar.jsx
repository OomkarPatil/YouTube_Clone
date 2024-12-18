import { IoMenu } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { LuBell } from "react-icons/lu";
import { useState } from "react";
import { MdOutlineLogout } from "react-icons/md";
import { MdOutlineLogin } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";


const Navbar = () => {

    const [userProfile, setUserProfile] = useState("https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg");
    const [popup, setPopup] = useState(false);
    const handelPopup = ()=>{
        setPopup(prev=>!prev);  
    };


  return (
    <div className="h-[57px] box-border py-[7px] px-[14px] flex justify-between items-center w-full top-0 fixed bg-[#141414] z-10">
        
        {/* left side of nav bar*/}
        <div className="gap-[10px] flex justify-center items-center w-fit">
            <div className="w-10 h-10 flex cursor-pointer justify-center items-center">
               <IoMenu className="text-white text-2xl"/>
            </div>
            <div className="flex justify-center items-center cursor-pointer font-oswald text-[20px] tracking-normal">
               <FaYoutube className="text-[#FF0000] text-[34px]" />
              <div className="text-xl tracking-normal text-white">
                 YouTube<sup className="text-sm font-thin ">IN</sup>
              </div>
            </div>
        </div>

        {/* center pat of navbar */}
        <div className="flex gap-3 w-1/2 ">
            <div className="flex w-4/5 text-white">
                <input 
                   className="w-full h-10 rounded-tl-[20px] rounded-bl-[20px] bg-[#121212] focus:outline-none pl-7 border-[1px] border-[#3a3939]" 
                   type="text" 
                   placeholder="Search"/>
                <div className="cursor-pointer rounded-tr-[20px] rounded-br-[20px] w-[70px] border-[1px] border-[#2a2a2a] bg-[#2a2a2a] flex justify-center items-center">
                    <CiSearch 
                     className="text-2xl"/>
                </div>
            </div>
            <div className="text-white flex justify-center items-center bg-[#2a2a2a] rounded-full w-10 h-10 cursor-pointer hover:text-[#2a2a2a] hover:bg-white">
                <FaMicrophone />
            </div>
        </div>

        {/* rignt pat of navbar */}
        <div className="text-white flex justify-center gap-5 items-center relative">
            <div className="flex justify-center items-center text-xl font-thin gap-1  bg-[#2a2a2a] py-1 px-3 rounded-full cursor-pointer hover:text-[#2a2a2a] hover:bg-white">
               <RiVideoAddLine className="text-2xl" />
            </div>
            <div className="hover:bg-[#2a2a2a] p-2 rounded-full ">
            <LuBell className="text-2xl cursor-pointer "/>
            </div>
            
            <img 
               src={userProfile} 
               alt="ProfilePic" 
               className="w-[30px]  rounded-[50%] cursor-pointer mr-3"
               onClick={handelPopup}
            />
            


            { popup &&
                <div className="absolute p-1 top-2 -left-12 w-full z-20">
                    <div className="bg-[#555555] px-2 py-4 rounded-xl gap-1" >
                    <div className="flex justify-center items-center p-3 cursor-pointer rounded-xl hover:bg-[#222121]" >
                            <img 
                                src={userProfile} 
                                alt="ProfilePic" 
                                className="w-[30px] rounded-[50%] cursor-pointer mr-2"
                            />
                            <div className="px-2">
                                Username
                                <div className="text-blue-500 cursor-pointer hover:underline  transition duration-200">
                                    <small>Viewchannel</small>
                                </div>
                            </div>
                    </div>
                    <div className="p-3 cursor-pointer rounded-2xl hover:bg-[#222121] flex justify-center items-center gap-4"> <MdOutlineSettings />settings</div>
                    <div className="p-3 cursor-pointer rounded-2xl hover:bg-[#222121] flex justify-center items-center gap-4"> <MdOutlineLogout /> logout</div>
                    <div className="p-3 cursor-pointer rounded-2xl hover:bg-[#222121] flex justify-center items-center gap-5">
                    <MdOutlineLogin />login</div>
                  </div>
              </div>
            }

        </div>

    </div>
  );
}

export default Navbar;


