import React, { useEffect, useState } from 'react'
import { MdOutlineVerified } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Link } from "react-router-dom";


const Profilepage = () => {
      const [profileImage, setProfileImage] = useState("");
      const [profileName, setProfileName] = useState("");

      useEffect(() => {
              // Retrieve the image URL from localStorage
              const savedImage = localStorage.getItem("profileImage");
              const savedName = localStorage.getItem("profileName");
            
              if (savedName) setProfileName(savedName);
            if (savedImage) setProfileImage(savedImage);
          }, []);
      
          


  return (
    <div className='bg-[#141414] flex box-border w-full flex-col text-white'>

            {/* top section */}
          <div className='flex flex-col overflow-hidden flex-1 mx-[80px] md:mx[20px]'>
            {/* banner */}
            <div className='w-full h-[170px]'>
              <img  
                src="https://cdn.openart.ai/stable_diffusion/f091d5bb336c9a075163596fdf84db314f400340_2000x2000.webp" 
                alt=""
                className="w-full h-full rounded-3xl object-cover"
              />
            </div>
            {/* about section */}
            <div className='flex gap-3 my-4 py-1 '>
              {/* logo */}
              <div className="w-[13%]" >
                  <img 
                    src={profileImage} 
                    alt="logo" 
                    className="w-full h-full rounded-full"
                  />                                     
              </div>

              {/* detail section */}
              <div className='flex flex-col justify-between'>            
                  <div className='font-black flex items-center gap-3 font-youtube text-4xl'>
                    {profileName ? profileName : "Username"}<MdOutlineVerified size={23} />
                  </div>
                  <div className='text-[#a29e9e]'>
                    <span className='text-white'>@{profileName ? profileName : "Username"}official</span>  
                    <span>&nbsp;1.34k&nbsp;subscribers&nbsp;</span>
                    <span> {830}&nbsp;videso</span>
                    <div>detail section welcome to the channel</div>
                  </div>
                  <div className='bg-white py-1 px-4 hover:bg-[#c0bdbd] cursor-pointer font-medium rounded-full w-fit text-black flex justify-center items-center'>
                    Subscribe
                  </div>
 
              </div>
            </div>
          </div>

          {/* video section */}
          <div className=' mx-[80px] h-screen'>
            <div className=' text-base font-medium py-[9px] border-b-[1px] border-[#535151] text-white mb-3'>
              <span className='hover:border-b-[3px] py-2 mx-2 cursor-pointer' >Home</span>
              <span className='hover:border-b-[3px] py-2 mx-2 cursor-pointer' >Videos</span>
              <span className='hover:border-b-[3px] py-2 mx-2 cursor-pointer' >Live</span>
            </div>

            {/* video block */}

            <div className='mt-4 text-xl font-semibold '>For you</div>
            <div className='flex gap-4 justify-between flex-wrap mt-3'>

              {/* video block */}
                <Link to={'/watch/1'} className='cursor-pointer'>
                  {/* thumbnail */}
                  <div className='w-60 h-36 rounded-xl'>
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpOVMAba8-c-j08DmzvDwRBxPNS6H_suNouA&s"
                        className='w-full h-full rounded-md' 
                    />
                  </div>
                  {/* detail */}
                  <div className='font-medium mt-1'>
                    <div className='flex items-center justify-between'>
                      <div className='truncate text-ellipsis'>
                        Title of the video comes here
                      </div>
                        <HiOutlineDotsVertical className='hover:bg-[#555555] rounded-full' />                      
                    </div>

                    <div className='text-xs mt-1  text-[#726e6e]'>
                      <span className='hover:text-[#b1abab]'>223k Views</span>
                      <span className='hover:text-[#b1abab]'>&nbsp;| 3 months ago</span>
                    </div>
                  </div>
                </Link>

                <Link to={'/watch/1'} className='w-60 h-36 cursor-pointer'>
                  {/* thumbnail */}
                  <div className='w-full h-full rounded-xl'>
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpOVMAba8-c-j08DmzvDwRBxPNS6H_suNouA&s"
                        className='w-full h-full rounded-md' 
                    />
                  </div>
                  {/* detail */}
                  <div className='font-medium mt-1'>
                    <div className='flex items-center justify-between'>
                      <div className='truncate text-ellipsis'>
                        Title of the video comes here
                      </div>
                        <HiOutlineDotsVertical className='hover:bg-[#555555] rounded-full' />                      
                    </div>

                    <div className='text-xs mt-1  text-[#726e6e]'>
                      <span className='hover:text-[#b1abab]'>223k Views</span>
                      <span className='hover:text-[#b1abab]'>&nbsp;| 3 months ago</span>
                    </div>
                  </div>
                </Link>

                <Link to={'/watch/1'} className='w-60 h-36 cursor-pointer'>
                  {/* thumbnail */}
                  <div className='w-full h-full rounded-xl'>
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpOVMAba8-c-j08DmzvDwRBxPNS6H_suNouA&s"
                        className='w-full h-full rounded-md' 
                    />
                  </div>
                  {/* detail */}
                  <div className='font-medium mt-1'>
                    <div className='flex items-center justify-between'>
                      <div className='truncate text-ellipsis'>
                        Title of the video comes here
                      </div>
                        <HiOutlineDotsVertical className='hover:bg-[#555555] rounded-full' />                      
                    </div>

                    <div className='text-xs mt-1  text-[#726e6e]'>
                      <span className='hover:text-[#b1abab]'>223k Views</span>
                      <span className='hover:text-[#b1abab]'>&nbsp;| 3 months ago</span>
                    </div>
                  </div>
                </Link>

                <Link to={'/watch/1'} className='w-60 h-36 cursor-pointer'>
                  {/* thumbnail */}
                  <div className='w-full h-full rounded-xl'>
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpOVMAba8-c-j08DmzvDwRBxPNS6H_suNouA&s"
                        className='w-full h-full rounded-md' 
                    />
                  </div>
                  {/* detail */}
                  <div className='font-medium mt-1'>
                    <div className='flex items-center justify-between'>
                      <div className='truncate text-ellipsis'>
                        Title of the video comes here
                      </div>
                        <HiOutlineDotsVertical className='hover:bg-[#555555] rounded-full' />                      
                    </div>

                    <div className='text-xs mt-1  text-[#726e6e]'>
                      <span className='hover:text-[#b1abab]'>223k Views</span>
                      <span className='hover:text-[#b1abab]'>&nbsp;| 3 months ago</span>
                    </div>
                  </div>
                </Link>
                
                <Link to={'/watch/1'} className='w-60 h-36 cursor-pointer'>
                  {/* thumbnail */}
                  <div className='w-full h-full rounded-xl'>
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpOVMAba8-c-j08DmzvDwRBxPNS6H_suNouA&s"
                        className='w-full h-full rounded-md' 
                    />
                  </div>
                  {/* detail */}
                  <div className='font-medium mt-1'>
                    <div className='flex items-center justify-between'>
                      <div className='truncate text-ellipsis'>
                        Title of the video comes here
                      </div>
                        <HiOutlineDotsVertical className='hover:bg-[#555555] rounded-full' />                      
                    </div>

                    <div className='text-xs mt-1  text-[#726e6e]'>
                      <span className='hover:text-[#b1abab]'>223k Views</span>
                      <span className='hover:text-[#b1abab]'>&nbsp;| 3 months ago</span>
                    </div>
                  </div>
                </Link>



            </div>
          </div>
      </div>

  )
}

export default Profilepage