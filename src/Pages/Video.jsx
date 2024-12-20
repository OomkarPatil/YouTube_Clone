import React from 'react'
import { BiDislike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useState } from 'react';
import { CiBookmark } from "react-icons/ci";
import { CiFlag1 } from "react-icons/ci";

const Video = () => {

    const [moreOption, setMoreOption] = useState(false);
    const handelMore = ()=>{
        setMoreOption(prev=>!prev);
    }

    const Filter = ["All","Treanding","Music",,];

  return (
    <div className='mt-[57px] bg-[#141414] last: flex px-11 py-5 gap-[25px] justify-center'>

        {/* //videosection */}
        <div className='w-full  max-w-[4xl] h-auto flex flex-col'>
            {/* video */}
            <div className='w-full '>
                <video
                   className=' h-auto rounded-xl w-full shadow-md' 
                   controls 
                   autoPlay >
                    <source src={'/assets(images for texting)/Demo_video.mp4'} type='video/mp4' />
                    <source src={'/assets(images for texting)/Demo_video.mp4'} type='video/webm' />
                    ur Browsr doesnot support the video tag
                </video>
            </div>

            {/* detail */}
            <div className=''>
                <div className='flex  text-white font-youtube font-bold text-xl pt-3 pb-1 pl-2 flex-col'>
                    {"Marvel Rivals | Cinematic Trailer | No One Rivals Doom"}
                </div>

                <div className='flex justify-between px-2'>

                    {/* text section */}
                    <div className='flex gap-4'>

                        {/* profile img section */}
                        <div className='w-9 mt-1 h-9 '>
                            <img 
                                src="/assets(images for texting)/profile pic.jpeg" 
                                alt="profile pic" 
                                className="rounded-full cursor-pointer w-full h-full "
                            />
                        </div>
                        
                        {/* channel name and more info */}                
                        <div className="text-sm font-semibold  text-[#bfbcbc]">
                                <div className="cursor-pointer hover:text-[#e3e0e0] transition duration-200">channel name</div>
                                <span>1.1m Subscriber</span>
                        </div>

                        {/* subscribe button */}
                        <div className='bg-white rounded-full cursor-pointer hover:bg-[#e3e0e0] font-semibold flex justify-center items-center mt-1 px-5'>
                            Subscribe
                        </div>
                    </div>

                    {/* actions */}
                    <div className='flex justify-center items-center gap-3 '>                   
                        <div className='flex justify-center items-center p-[10px] font-medium rounded-full px-5 hover:bg-[#424141] text-white  bg-[#2a2a2a]'>
                            <div className='flex gap-2 p-0' >                   
                                <BiLike className='cursor-pointer hover:text-[#858181] ' size={23}/> <div className=' border-r-[1px] pr-3'>{200}</div> 
                                <BiDislike className='cursor-pointer hover:text-[#858181]'  size={23}/>
                            </div>
                        </div>
                        <div className=' flex justify-center items-center p-[10px] gap-2 cursor-pointer hover:bg-[#424141] rounded-full text-white bg-[#2a2a2a]'>
                            <RiShareForwardLine size={23}/> Share
                        </div>
                        <div className='p-[10px] hover:bg-[#424141] cursor-pointer relative rounded-full text-white bg-[#2a2a2a]'>
                            <HiOutlineDotsVertical size={23} onClick={handelMore} />
                        </div>
                        { moreOption  &&
                                        <div className="absolute top-[590px] right-[415px] bg-[#2a2a2a] text-white font-normal w-fit z-20 rounded-xl">
                                            <div className="px-3 py-1 cursor-pointer mt-3 hover:bg-[#424141] rounded-t  flex justify-center items-center gap-4"> <CiBookmark />Save</div>
                                            <div className="px-3 py-1 cursor-pointer mb-3 hover:bg-[#424141] rounded-b flex justify-center items-center gap-4"> <CiFlag1 />Report</div>
                                        </div>
                                    }
                    </div>
                    
                </div>
            </div>
        </div>

        {/* suggestion section */}
        
        <div className=' text-white w-full max-w-[400px] py-[10px]  flex flex-col '>

         <div className="flex w-[100%] box-border gap-3 py-3 flex-shrink-0 h-fit overflow-x-scroll scrollbar-none bg-[#141414]">

           {/* Conditionally rendering the filters */}
           {Filter.map((item, index) => (
             <div
               key={index}
               className="flex-shrink-0 justify-center items-center cursor-pointer h-fit px-3 py-1 bg-[#333333] hover:bg-[#4a4949] text-white rounded-md"
             >
               {item}
             </div>
           ))}
         </div>
            <div className='flex px-0 justify-center bt-[1px] border-[#2a2a2a] gap-1'>
                <img 
                    src="/assets(images for texting)/shorts.jpg" 
                    alt="shorts" 
                    className='w-[130px] rounded-lg'
                />
                <img 
                    src="/assets(images for texting)/shorts.jpg" 
                    alt="shorts" 
                    className='w-[130px] rounded-lg'
                />
                <img 
                    src="/assets(images for texting)/shorts.jpg" 
                    alt="shorts" 
                    className='w-[130px] rounded-lg'
                />
            </div>
            <div>

            </div>
            
        </div>
    </div>
  )
}

export default Video