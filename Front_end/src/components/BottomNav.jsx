
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate} from "react-router-dom";
import { SlHome } from "react-icons/sl";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";

const BottomNav = () => {
      const[isLoggedIn, setIsLoggedIn] = useState("");
      const[image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
      const navigate = useNavigate();
 
       useEffect(() => {
          // Retrieve values from localStorage
          let profileImage = localStorage.getItem("userPrfPic");
          let userId = localStorage.getItem("userId");
         
          // Update logged-in status
          setIsLoggedIn(userId !== null);
      
          // Update profile image and name if available
          if (profileImage) {
              setImage(profileImage);
          }
          
      }, []);



    const handelProfile = ()=>{
        let ID = localStorage.getItem("userId")
        navigate(`/user/${ID}`);
    } 

  
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#141414] text-white border-t shadow-lg">
      <div className="flex justify-between items-center px-3 py-3">
        {/* Home Icon */}
        <Link  to={'/'} className="p-2 rounded-full hover:bg-[#383838]">
          <SlHome size={26} /> 
        </Link>

        {/* Search Icon */}
        <div className="p-2 rounded-full hover:bg-[#383838]">
          <SiYoutubeshorts size={26} />
         
        </div>

        {/* Play Icon */}
        <div className="p-2 rounded-full bg-[#383838] hover:bg-white hover:text-[#383838]">
           <CiSearch  size={26} />
          
        </div>

        {/* Notifications Icon */}
        <div className="p-2 rounded-full hover:bg-[#383838]">
          <MdOutlineSubscriptions size={26} />
          
        </div>

        {/* Profile Icon */}
        <div className="rounded-full hover:bg-[#383838] w-[30px]" onClick={handelProfile}>
          <img src={image} alt="png" className="rounded-full  w-full" />
        
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
