
import { BiDislike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useState } from 'react';
import { CiBookmark } from "react-icons/ci";
import { CiFlag1 } from "react-icons/ci";
import { SiYoutubeshorts } from "react-icons/si";

const Video = () => {

    const[message, setMessage] = useState("");

    const [moreOption, setMoreOption] = useState(false);
    const handelMore = ()=>{
        setMoreOption(prev=>!prev);
    }

    const Filter = ["All","Treanding","Music",];

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
                    <source src={'/assets(images for texting)/Demo_video (2).mp4'} type='video/mp4' />
                    <source src={'/assets(images for texting)/Demo_video (2).mp4'} type='video/webm' />
                    ur Browsr doesnot support the video tag
                </video>
            </div>

            {/* detail */}
            <div >
                <div className='flex  text-white font-youtube font-bold text-xl pt-3 pb-1 pl-2 flex-col'>
                    {"Marvel Rivals | Cinematic Trailer | No One Rivals Doom"}
                </div>

                <div className='flex justify-between px-2'>

                    {/* text section */}
                    <div className='flex gap-4'>

                        {/* profile img section */}
                        <div className='w-9 mt-1 h-9 '>
                            <img 
                                src="/assets(images for texting)/profile pic (1).jpeg" 
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

            {/* {more option} */}
            <div className='flex flex-col bg-[#2a2a2a] mt-4 rounded-xl p-2'>
                <div className='text-sm font-semibold pt-1  text-white'>
                        <span>3.3 Views</span>
                        <span> 3 months ago</span>
                        <span className='text-[#bfbcbc]'> #video #youtube #trending</span>
                    </div>
                <div className='mt-1 text-white font-bold'>Title</div>    
            </div>



            {/* comment section */}
            {/* coment title */}
            <div className='my-6'>
                <div className='font-bold text-white text-xl'>
                    32 Comments
                </div>
            </div>

            {/* commenting  */}

            <div className=' flex gap-2 h-fit text-white mb-5 py-2 px-1 w-full'>
                <img 
                    src="/assets(images for texting)/profile pic.jpeg" 
                    alt="profile pic" 
                    className="rounded-full cursor-pointer w-9 h-9 "
                 />
                 <input 
                   className=" h-10 truncate w-full rounded-[20px] bg-transparent border-none px-3 " 
                   type="text" 
                   placeholder="Add a comment"
                   value={message}
                   onChange={(e) => setMessage(e.target.value)}
                />
                <div className='flex gap-2 items-center justify-center'>
                    <div className='flex px-3 py-2 cursor-pointer hover:bg-[#2a2a2a] rounded-full border-[1px] border-[#2a2a2a] justify-center items-center font-medium'>
                        Cancel
                    </div>
                    <div className='bg-white py-2 cursor-pointer flex px-3 text-[#2a2a2a] font-medium hover:text-white hover:bg-[#2a2a2a] rounded-full justify-center items-center '>
                        Comment
                    </div>
                    <HiOutlineDotsVertical size={23} className='cursor-pointer' />
                </div>
                

            </div>

            {/* othes comments */}
            <div className=' flex gap-2 h-fit mt-2 text-white py-2 px-1 w-full'>
                <img 
                    src="/assets(images for texting)/profile pic.jpeg" 
                    alt="profile pic" 
                    className="rounded-full cursor-pointer w-9 h-9 "
                 />
                 <div className='mx-4 w-[90%] '>
                    <div className='flex gap-2'>
                        <span className='font-bold text-sm'>@profilename </span>
                        <span className='text-[#545353] font-bold text-sm'>3 months ago</span>
                    </div>
                    <div className='font-medium'>
                        very good game
                    </div>
                 </div>
                <div className='flex items-center  justify-center'>
                    <HiOutlineDotsVertical size={23} className='cursor-pointer' />
                </div>
                

            </div>
            <div className=' flex gap-2 h-fit mt-2 text-white py-2 px-1 w-full'>
                <img 
                    src="/assets(images for texting)/profile pic.jpeg" 
                    alt="profile pic" 
                    className="rounded-full cursor-pointer w-9 h-9 "
                 />
                 <div className='mx-4 w-[90%] '>
                    <div className='flex gap-2'>
                        <span className='font-bold text-sm'>@profilename </span>
                        <span className='text-[#545353] font-bold text-sm'>3 months ago</span>
                    </div>
                    <div className='font-medium'>
                        very good game
                    </div>
                 </div>
                <div className='flex items-center  justify-center'>
                    <HiOutlineDotsVertical size={23} className='cursor-pointer' />
                </div>
                

            </div>


        </div>

        

        {/* suggestion section */}       
        <div className=' text-white w-full max-w-[400px] py-[10px]  flex flex-col '>
          
          {/* filters */}
         <div className="flex w-[100%] box-border gap-3  flex-shrink-0 h-fit overflow-x-scroll scrollbar-none bg-[#141414]">

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
          
          {/* shorts div */}
         <div className='border-b-[0.25px] py-8 border-[#4a4949] '>
            {/* title */}
            <div className='flex items-center gap-2 '>
                <SiYoutubeshorts size={24} className='text-[#FF0000]'/>
                <span className='text-xl font-bold'>Shorts</span>
            </div>  

            {/* short video div*/}
            <div className='flex justify-center mt-8 gap-1'>

                {/* video card */}
                <div className='flex flex-col  cursor-pointer w-[130px]'>
                    <img 
                        src="/assets(images for texting)/shorts (1).jpg" 
                        alt="shorts" 
                        className='rounded-lg w-inherit'
                    />
                    <div className='mt-2 pl-1 w-full'>
                        <div className='flex justify-between font-medium'>
                            <div className='text-base w-[92px] h-10 leading-tight overflow-hidden text-ellipsis line-clamp-2'>
                                dthis is the video 
                            </div>
                            <HiOutlineDotsVertical size={23} className='hover:bg-[#696666] rounded-full p-[2px] '/>
                        </div>
                        <div className='text-[#696666] mt-2 text-sm font-bold'>
                            6.3M Views
                        </div>
                    </div>
                </div>
                <div className='flex flex-col cursor-pointer w-[130px]'>
                    <img 
                        src="/assets(images for texting)/shorts 3 (1).jpg" 
                        alt="shorts" 
                        className='rounded-lg'
                    />
                    <div className='mt-2 pl-1 w-full'>
                        <div className='flex justify-between font-medium'>
                            <div className='text-base leading-tight w-[92px] h-10 overflow-hidden text-ellipsis line-clamp-2'>
                                dthis is a
                            </div>
                            <HiOutlineDotsVertical size={23} className='hover:bg-[#696666] rounded-full p-[2px] ' />
                        </div>
                        <div className='text-[#696666] mt-2 text-sm font-bold'>
                            6.3M Views
                        </div>
                    </div>
                </div>
                <div className='flex flex-col cursor-pointer w-[130px]'>
                    <img 
                        src="/assets(images for texting)/shorts 5 (1).jpg" 
                        alt="shorts" 
                        className='rounded-lg'
                    />
                    <div className='mt-2 pl-1 w-full'>
                        <div className='flex justify-between font-medium'>
                            <div className='text-base leading-tight w-[92px] h-10 overflow-hidden text-ellipsis line-clamp-2'>
                                dthis is the video title if it is too big
                            </div>
                            <HiOutlineDotsVertical size={23} className='hover:bg-[#696666] rounded-full p-[2px] ' />
                        </div>
                        <div className='text-[#696666] mt-2 text-sm font-bold'>
                            6.3M Views
                        </div>
                    </div>
                </div>
                    
            </div>
          </div>


          {/* suggestion videos  */}
          {/* video card */}
            <div className='flex gap-[10px] mt-3 cursor-pointer'>
                {/* thumbnail */}
                <div className='w-[168px] h-[94px]'>
                    <img 
                        src="/assets(images for texting)/hq720 (1) (1).jpg" 
                        alt="thumbnail" 
                        className="w-inherit h-full relative rounded-md"
                    />
                    <div className=" absolute right-[290px] bottom-[125px] py-[2px] text-xs px-[4px] bg-[#00000078] rounded-md">
                        00:00
                    </div>
                </div>
                {/* description */}
                <div className='flex flex-col gap-1 leading-tight overflow-hidden text-ellipsis line-clamp-2'>
                    {/* title */}
                    <div className='font-semibold' >
                        Latest technoloy of comming year
                    </div>
                    <div className='text-sm leading-tight text-[#7c7878] font-medium hover:text-[#949191]'>
                        <div>channel name</div>
                        <div>2.2M views | 3 Days ago</div>
                    </div>
                </div>

            </div>

            <div className='flex gap-[10px] mt-3 cursor-pointer'>
                {/* thumbnail */}
                <div className='w-[168px] h-[94px]'>
                    <img 
                        src="/assets(images for texting)/hq720 (2) (1).jpg" 
                        alt="thumbnail" 
                        className="w-inherit h-full rounded-xl"
                    />
                </div>
                {/* description */}
                <div className='flex flex-col gap-1 leading-tight overflow-hidden text-ellipsis line-clamp-2'>
                    {/* title */}
                    <div className='font-semibold' >
                        Latest technoloy of comming year
                    </div>
                    <div className='text-sm leading-tight text-[#7c7878] font-medium hover:text-[#949191]'>
                        <div>channel name</div>
                        <div>2.2M views | 3 Days ago</div>
                    </div>
                </div>

            </div>

            <div className='flex gap-[10px] mt-3 cursor-pointer'>
                {/* thumbnail */}
                <div className='w-[168px] h-[94px]'>
                    <img 
                        src="/assets(images for texting)/hq720 (3) (1).jpg" 
                        alt="thumbnail" 
                        className="w-inherit h-full rounded-xl"
                    />
                </div>
                {/* description */}
                <div className='flex flex-col gap-1 leading-tight overflow-hidden text-ellipsis line-clamp-2'>
                    {/* title */}
                    <div className='font-semibold' >
                        Latest technoloy of comming year
                    </div>
                    <div className='text-sm leading-tight text-[#7c7878] font-medium hover:text-[#949191]'>
                        <div>channel name</div>
                        <div>2.2M views | 3 Days ago</div>
                    </div>
                </div>

            </div>

            <div className='flex gap-[10px] mt-3 cursor-pointer'>
                {/* thumbnail */}
                <div className='w-[168px] h-[94px]'>
                    <img 
                        src="/assets(images for texting)/hq720 (5).jpg" 
                        alt="thumbnail" 
                        className="w-inherit h-full rounded-xl"
                    />
                </div>
                {/* description */}
                <div className='flex flex-col gap-1 leading-tight overflow-hidden text-ellipsis line-clamp-2'>
                    {/* title */}
                    <div className='font-semibold' >
                        Latest technoloy of comming year
                    </div>
                    <div className='text-sm leading-tight text-[#7c7878] font-medium hover:text-[#949191]'>
                        <div>channel name</div>
                        <div>2.2M views | 3 Days ago</div>
                    </div>
                </div>

            </div>

            <div className='flex gap-[10px] mt-3 cursor-pointer'>
                {/* thumbnail */}
                <div className='w-[168px] h-[94px]'>
                    <img 
                        src="/assets(images for texting)/hq720 (1) (1).jpg" 
                        alt="thumbnail" 
                        className="w-inherit h-full rounded-xl"
                    />
                </div>
                {/* description */}
                <div className='flex flex-col gap-1 leading-tight overflow-hidden text-ellipsis line-clamp-2'>
                    {/* title */}
                    <div className='font-semibold' >
                        Latest technoloy of comming year
                    </div>
                    <div className='text-sm leading-tight text-[#7c7878] font-medium hover:text-[#949191]'>
                        <div>channel name</div>
                        <div>2.2M views | 3 Days ago</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Video