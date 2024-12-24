
import { CgProfile } from "react-icons/cg";
import { CiCirclePlus, CiSearch } from "react-icons/ci";
import { SlHome } from "react-icons/sl";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#141414] text-white border-t shadow-lg">
      <div className="flex justify-between items-center px-3 py-3">
        {/* Home Icon */}
        <div className="p-2 rounded-full hover:bg-[#383838]">
          <SlHome size={26} /> 
        </div>

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
        <div className="p-2 rounded-full hover:bg-[#383838]">
          <CgProfile size={26} />
        
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
