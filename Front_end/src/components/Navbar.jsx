import { IoMenu } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { LuBell } from "react-icons/lu";
import { useEffect, useState } from "react";
import { MdOutlineLogout } from "react-icons/md";
import { MdOutlineLogin } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';



const Navbar = ({setSideNavBarFunc, sideNavBar}) => {

    const[isLoggedIn, setIsLoggedIn] = useState("");
    const[image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
    const[popup, setPopup] = useState(false);
    const[profileName, setProfileName] = useState("Username");
    const[vid, setVid] = useState("");


    useEffect(() => {
        // Retrieve values from localStorage
        let profileImage = localStorage.getItem("userPrfPic");
        let profileName = localStorage.getItem("userName");
        let userId = localStorage.getItem("userId");
    
        // Update logged-in status
        setIsLoggedIn(userId !== null);
    
        // Update profile image and name if available
        if (profileImage) {
            setImage(profileImage);
        }
        if (profileName) {
            setProfileName(profileName);
        }
    }, []);
    

    const handelPopup = ()=>{
        setPopup(prev=>!prev);  
    };

    const navigate = useNavigate();

    const handelProfile = ()=>{
        let ID = localStorage.getItem("userId");
        navigate(`/user/${ID}`);
        setPopup(false);
    }

    const handelAuth= ()=>{
        navigate('/login');
        setPopup(false);
    }

    const handleSidebar =()=>{
        setSideNavBarFunc(!sideNavBar);
        console.log(setSideNavBarFunc);
    }

    const handleOut = ()=>{
        localStorage.clear();
        getLoggedout();

        setTimeout(()=>{
            navigate('/');
            window.location.reload();
        },1000);
    }
   
    const getLoggedout  = async()=>{
        axios.post("http://localhost:4000/auth/logOut",{},{withCredentials:true}).then((res)=>{
            console.log(res);
            toast.success(res.data.message);
        }).catch(err=>{
            console.log(err);
        })
    }



    const fetchVidById = async () => {
        await axios.get(`http://localhost:4000/media/vidbyid/${id}`)
        .then((res) => {     
            setVid(res.data.video);                   // res.data.video is an object containing the video details
                // setting the video link from the object
        }).catch(err => {
            console.log(err);
        })  
    }






  return (
    <div className="h-[57px] box-border py-[7px] px-[14px] flex justify-between items-center w-full top-0 fixed bg-[#141414] z-10">
        
        {/* left side of nav bar*/}
        <div className="gap-[10px] flex justify-center items-center w-fit ">
            <div className="w-10 h-10  sm:flex hidden cursor-pointer  justify-center items-center " onClick={handleSidebar}>
               <IoMenu className="text-white text-2xl" />
            </div>
            <Link to={'/'} className="flex justify-center items-center cursor-pointer font-oswald text-[20px] tracking-normal">
               <FaYoutube className="text-[#FF0000] text-[34px] " />
              <div className="text-xl tracking-normal text-white">
                 YouTube<sup className="text-sm font-thin ">IN</sup>
              </div>
            </Link>
        </div>

        {/* center pat of navbar */}
        <div className="md:flex hidden gap-3 w-1/2 ">
            <div className="flex  md:w-4/5 text-white">
                <input 
                   className="w-full h-10 rounded-tl-[20px] hidden md:block rounded-bl-[20px]  bg-[#121212] focus:outline-none pl-7 border-[1px] border-[#3a3939]" 
                   type="text" 
                   placeholder="Search"/>
                <div className=" cursor-pointer rounded-tr-[20px] rounded-br-[20px]  w-[70px] border-[1px] border-[#2a2a2a] bg-[#2a2a2a] flex justify-center items-center">
                    <CiSearch 
                     className="text-2xl"/>
                </div>
            </div>
            <div className="text-white md:flex hidden justify-center items-center bg-[#2a2a2a] rounded-full w-10 h-10 cursor-pointer hover:text-[#2a2a2a] hover:bg-white">
                <FaMicrophone />
            </div>
        </div>

        {/* rignt pat of navbar */}
        <div className="text-white flex justify-center gap-5 items-center relative">
            <Link to={"/23/upload"} className="flex justify-center items-center text-xl font-thin gap-1  bg-[#2a2a2a] py-1 px-3 rounded-full cursor-pointer hover:text-[#2a2a2a] hover:bg-white">
               <RiVideoAddLine className="text-2xl" />
            </Link>
            <div className="hover:bg-[#2a2a2a] hidden md:block p-2 rounded-full ">
            <LuBell className="text-2xl cursor-pointer "/>
            </div>
            
            <img 
               src={image} 
               alt="ProfilePic" 
               className="w-[30px] h-[30px] rounded-[50%] cursor-pointer mr-3"
               onClick={handelPopup}
            />
            


            { popup &&
                <div className="absolute p-1 top-2 -left-12 w-full z-20">
                    
                    <div className="bg-[#555555] px-2 py-4 rounded-xl gap-1" >
                     {isLoggedIn && <div className="flex justify-center items-center p-2 cursor-pointer rounded-xl  hover:bg-[#222121]">
                                <img 
                                    src={image} 
                                    alt="ProfilePic" 
                                    className="w-[30px] h-[30px] rounded-full cursor-pointer mr-2"
                                />
                                <div className="px-2 truncate ">{profileName}
                                    <div className="text-[#9796f2] cursor-pointer hover:underline truncate transition duration-200" onClick={handelProfile}>
                                        <small>ViewChannel</small>
                                    </div>
                                </div>
                        </div> }
                        
                     <div className="p-3 cursor-pointer rounded-2xl hover:bg-[#222121] flex justify-center items-center gap-4"> <MdOutlineSettings />settings</div>
                
                     {isLoggedIn && <div onClick={handleOut}
                       className="p-3 cursor-pointer rounded-2xl hover:bg-[#222121] flex justify-center items-center gap-4"> 
                        <MdOutlineLogout /> logout</div>}
                     {!isLoggedIn && <div  onClick={handelAuth}
                       className="p-3 cursor-pointer rounded-2xl hover:bg-[#222121] flex justify-center items-center gap-5">
                         <MdOutlineLogin />login</div>}
                    </div>
              </div>
            }
          <ToastContainer />
        </div>
       
    </div>
  );
}

export default Navbar;


