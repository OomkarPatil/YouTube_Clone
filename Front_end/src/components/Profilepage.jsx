import React, { useEffect, useState } from 'react'
import { MdOutlineVerified } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Link,  useParams } from "react-router-dom";
import axios from 'axios';

import InteractiveHoverButton from './ui/interactive-hover-button';



const Profilepage = () => {

  const[prfData, setPrfData] = useState([]);
  const[usr, setUsr] = useState(null);  
  const {id} = useParams(); 


  const fetchdata = async () => {
    axios.get(`http://localhost:4000/media/${id}/channel`).then((res) => {
      setPrfData(res.data.video);
      setUsr(res.data.video?.[0]?.user);
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
     fetchdata();
  },[id])

  if (!usr) {
    return <Link to={'/register'} className='bg-[#141414] text-white h-screen flex justify-center flex-col gap-3 items-center' >Add Video to see here 
              <InteractiveHoverButton />
          </Link> // Add a loading state if needed
  }

  return (
    <div className='bg-[#141414] flex box-border h-screen flex-col text-white'>

            {/*--------------------------------top section-------------------------------- */}
          <div className='flex lg:flex-col flex-1 lg:mx-[80px] mx-[30px] md:mx[20px]'>
            {/* --------------------------------banner --------------------------------*/}
            <div className='w-full h-[170px]'>
              <img  
                src={usr.profilePic} 
                alt=""
                className="lg:w-full w-[200px] h-full rounded-3xl object-cover"
              />
            </div>
            {/* --------------------------------about section-------------------------------- */}
            <div className='flex gap-3 my-4 py-1 '>
              {/* logo */}
              <div className="w-[200px] h-[200px]" >
                  <img 
                    src= {usr.profilePic}
                    alt="logo" 
                    className="w-full h-full rounded-full"
                  />                                     
              </div>

              {/*-------------------------------- detail section --------------------------------*/}
              <div className='flex flex-col justify-between'>            
                  <div className='font-black flex items-center gap-3 font-youtube text-4xl'>
                  {usr.channelName}<MdOutlineVerified size={23} />
                  </div>
                  <div className='text-[#a29e9e]'>
                    <span className='text-white'>@{usr.channelName}official</span>  
                    <span>&nbsp;1.34k&nbsp;subscribers&nbsp;</span>
                    <span>•&nbsp;{prfData.length}&nbsp;videso</span>
                    <div>detail section welcome to the channel</div>
                  </div>
                  <div className='bg-white py-1 px-4 hover:bg-[#c0bdbd] cursor-pointer font-medium rounded-full w-fit text-black flex justify-center items-center'>
                    Subscribe
                  </div>
 
              </div>
            </div>
          </div>

          {/*-------------------------------- video section-------------------------------- */}
          <div className=' lg:mx-[80px] mx-[30px] h-screen'>
            <div className=' text-base font-medium py-[9px] border-b-[1px] border-[#535151] text-white mb-3'>
              <span className='hover:border-b-[3px] py-2 mx-2 cursor-pointer' >Home</span>
              <span className='hover:border-b-[3px] py-2 mx-2 cursor-pointer' >Videos</span>
              <span className='hover:border-b-[3px] py-2 mx-2 cursor-pointer' >Live</span>
            </div>

            {/*-------------------------------- video block-------------------------------- */}

            <div className='mt-4 text-xl font-semibold '>For you</div>
            <div className=' flex gap-4 lg:grid-cols-[395px_395px_395px_395px] sm:grid-cols-[395px] justify-between flex-wrap mt-3'>

              {/*-------------------------------- video block-------------------------------- */}
                {prfData.map((VID,key) => (
                      <Link to={`/watch/${VID._id}`} className='truncate text-ellipsis w-60 cursor-pointer' key={key}>
                          {/* --------------------------------thumbnail-------------------------------- */}
                          <div className='w-60 h-36 rounded-xl'>
                            <img 
                                src={VID.thumbnail}
                                className='md:w-full w h-full rounded-md' 
                            />
                          </div>
                          {/* --------------------------------detail-------------------------------- */}
                          <div className='font-medium truncate text-ellipsis mt-1'>
                            <div className='flex items-center justify-between'>
                              <div className='truncate text-ellipsis'>
                                {VID.title} 
                              </div>
                                <HiOutlineDotsVertical className='hover:bg-[#555555] rounded-full' />                      
                            </div>

                            <div className='text-xs mt-1  text-[#726e6e]'>
                              <span className='hover:text-[#b1abab]'>{VID.like}</span>
                              <span className='hover:text-[#b1abab]'>&nbsp;| {VID.createdAt.slice(0,10)}</span>
                            </div>
                          </div>
                    </Link>
                ))}
            </div>
          </div>
      </div>

  )
}

export default Profilepage