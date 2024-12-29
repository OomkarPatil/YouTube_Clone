import { SlHome } from "react-icons/sl";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { LiaThumbsUp } from "react-icons/lia";
import { MdOutlineContentCut } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { BsFire } from "react-icons/bs";
import { IoIosMusicalNotes } from "react-icons/io";
import { SiYoutubegaming } from "react-icons/si";
import { GoTrophy } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const SideBar = ({sideNavBar}) => {
  return (
    <>{sideNavBar?
        <div className="flex flex-col flex-[0.16 1] box-border h-[93vh] overflow-hidden hover:overflow-y-scroll fixed top-[55px] left-0 p-[14px] text-white bg-[#141414] w-[250px] transition-width duration-300 scrollbar-thin scrollbar-thumb-[#535151]  scrollbar-track-[#141414] ">
           
           {/* home*/}
           <div className="flex flex-col border-b-[1px] gap-[2px]  border-[#353535] pb-[10px]">
                 <Link to={'/'}>
                 <div className="flex gap-5  items-center py-2 px-4 rounded-md hover:bg-[#2e2d2d] cursor-pointer">
                     <SlHome className="text-lg"/>
                     <div className="font-semibold text-sm">Home</div>
                 </div>
                 </Link>
                 <div className="flex gap-5  items-center py-2 px-4 rounded-md hover:bg-[#2e2d2d] cursor-pointer">
                 <SiYoutubeshorts className="text-lg" /> 
                 <div className="font-semibold text-sm">Shorts</div>
                 </div>
                 <div className="flex gap-5  items-center py-2 px-4 rounded-md hover:bg-[#2e2d2d] cursor-pointer">
                    <MdOutlineSubscriptions className="text-lg"/>
                    <div className="font-semibold text-sm">Subscriptions</div>
                 </div>
           </div>
           {/* you */}
           <div className=" flex flex-col border-b-[1px] gap-[2px] border-[#353535] py-[10px] " >
                 <div className="flex gap-5  items-center py-2 px-4 rounded-md hover:bg-[#2e2d2d] cursor-pointer">
                    <div className="font-semibold text-lg">You</div>
                    <IoIosArrowForward className="text-lg" />
                 </div>
                 <div className="flex gap-5  items-center py-2 px-4 rounded-md hover:bg-[#2e2d2d] cursor-pointer">
                    <FaHistory className="text-lg"/>
                    <div className="font-semibold text-sm">History</div>
                 </div>
                 <div className="flex gap-5  items-center py-2 px-4 rounded-md hover:bg-[#2e2d2d] cursor-pointer">
                    <MdOutlinePlaylistPlay className="text-lg"/>
                    <div className="font-semibold text-sm">PlayList</div>
                 </div>
                 <div className="flex gap-5  items-center py-2 px-4 rounded-md hover:bg-[#2e2d2d] cursor-pointer">
                    <GoVideo className="text-lg" />
                    <div className="font-semibold text-sm">your Videos</div>
                 </div>
                 <div className="flex gap-5  items-center py-2 px-4 rounded-md hover:bg-[#2e2d2d] cursor-pointer">
                    <MdOutlineWatchLater className="text-lg"/>
                    <div className="font-semibold text-sm">Watch Later</div>
                 </div>
                 <div className="flex gap-5  items-center py-2 px-4 rounded-md hover:bg-[#2e2d2d] cursor-pointer">
                    <LiaThumbsUp className="text-lg"/>
                    <div className="font-semibold text-sm">Liked Videos</div>
                 </div>
                 <div className="flex gap-5  items-center py-2 px-4 rounded-md hover:bg-[#2e2d2d] cursor-pointer">
                    <MdOutlineContentCut className="text-lg"/>
                    <div className="font-semibold text-sm">Your clips</div>
                 </div>
           </div>
           {/* subscription */}
           <div className=" flex flex-col border-b-[1px] gap-[2px] border-[#353535] py-[10px]">
                 <div className="flex gap-5  items-center py-2 px-4 rounded-md hover:bg-[#2e2d2d] cursor-pointer">
                    <div className="font-semibold ">Subscriptions</div>
                 </div>
                 <div className="flex gap-5  items-center py-2 px-4 rounded-md hover:bg-[#2e2d2d] cursor-pointer">
                    <img 
                       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSukKOw98IMqlKcsSOUKqrAVncj0o2u3oVBXQ&s" 
                       alt=""
                       className="w-6 h-6 rounded-full" 
                    />
                    <div>Internshala</div>
                 </div>
                 <div className="flex gap-5  items-center py-2 px-4 rounded-md hover:bg-[#2e2d2d] cursor-pointer">
                    <img 
                       src="https://yt3.googleusercontent.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s900-c-k-c0x00ffffff-no-rj" 
                       alt=""
                       className="w-6 h-6 rounded-full" 
                    />
                    <div className="truncate">Sheryians Coding School</div>
                 </div>
                 <div className="flex gap-5  items-center py-2 px-4 rounded-md hover:bg-[#2e2d2d] cursor-pointer">
                    <img 
                       src="https://yt3.googleusercontent.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s900-c-k-c0x00ffffff-no-rj" 
                       alt=""
                       className="w-6 h-6 rounded-full" 
                    />
                    <div className="truncate">JavaScript Mastery</div>
                 </div>
                 <div className="flex gap-5  items-center py-2 px-4 rounded-md hover:bg-[#2e2d2d] cursor-pointer">
                    <FaListUl className="text-lg"/>
                    <div className="font-semibold text-sm">All Subscriptions</div>
                 </div>
                 <div className="flex gap-5  items-center py-2 px-4 rounded-md hover:bg-[#2e2d2d] cursor-pointer">
                    <IoIosArrowDown className="text-lg"/>
                    <div className="font-semibold text-sm">Show More</div>
                 </div>
           </div>
              
              {/* Elpxlore  */}
           <div className=" flex flex-col border-b-[1px] gap-[2px] border-[#353535] py-[10px]">
              <div className="flex gap-5  items-center py-2 px-4 rounded-md hover:bg-[#2e2d2d] cursor-pointer">
                    <div className="font-semibold ">Explore</div>
                 </div>
                 <div className="flex gap-5  items-center py-2 px-4 rounded-md hover:bg-[#2e2d2d] cursor-pointer">
                    <BsFire className="text-lg"/>
                    <div className="font-semibold text-sm">Trending</div>
                 </div>
                 <div className="flex gap-5  items-center py-2 px-4 rounded-md hover:bg-[#2e2d2d] cursor-pointer">
                    <IoIosMusicalNotes className="text-lg"/>
                    <div className="font-semibold text-sm">Music</div>
                 </div>
                 <div className="flex gap-5  items-center py-2 px-4 rounded-md hover:bg-[#2e2d2d] cursor-pointer">
                    <SiYoutubegaming className="text-lg"/>
                    <div className="font-semibold text-sm">Gaming</div>
                 </div>
                 <div className="flex gap-5  items-center py-2 px-4 rounded-md hover:bg-[#2e2d2d] cursor-pointer">
                    <GoTrophy className="text-lg"/>
                    <div className="font-semibold text-sm">Sports</div>
                 </div>
           </div>
     
              {/* Options */}
           <div className=" flex flex-col border-b-[1px] gap-[2px] border-[#353535] py-[10px]">
                 <div className="flex gap-5  items-center py-2 px-4 rounded-md hover:bg-[#2e2d2d] cursor-pointer">
                    <div className="font-semibold ">Settings</div>
                 </div>
                 <div className="flex gap-5  items-center py-2 px-4 rounded-md hover:bg-[#2e2d2d] cursor-pointer">
                    <div className="font-semibold ">Help</div>
                 </div>
                 
           </div>
        </div>
        :<div className="flex flex-col box-border h-[93vh]  fixed top-[55px] left-0 p-[14px] text-white bg-[#141414] w-[80px] transition-width duration-300" >
           <div className="flex flex-col  gap-6  ">
                 <div className="py-2 px-4 rounded-md hover:bg-[#2e2d2d] cursor-pointer">
                 <SlHome className="text-lg"/>
                 </div>
                 <div className="py-2 px-4 rounded-md hover:bg-[#2e2d2d] cursor-pointer">
                 <SiYoutubeshorts className="text-lg" /> 
                 </div>
                 <div className="py-2 px-4 rounded-md hover:bg-[#2e2d2d] cursor-pointer">
                    <MdOutlineSubscriptions className="text-lg"/>
                 </div>
                 <div className="py-2 px-4 rounded-md hover:bg-[#2e2d2d] cursor-pointer">
                    <CgProfile className="text-lg"/>
                 </div>
              </div>
           </div>  
           }
      </>
  )
}
export default SideBar