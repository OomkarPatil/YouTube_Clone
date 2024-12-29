
import { BiDislike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useEffect, useState } from 'react';
import { CiBookmark } from "react-icons/ci";
import { CiFlag1 } from "react-icons/ci";
import { SiYoutubeshorts } from "react-icons/si";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";


const Video = () => {

    const[message, setMessage] = useState("");
    const[profilePic, setProfilePic] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
  
    const[vid, setVid] = useState("");
    const[VidUrl, setVidUrl] = useState("");
    
    const[suggVideos, setSuggVideos] = useState([]);
    
    const { id } = useParams();                      // getting the id of the video from the url
    const [comment, setComment] = useState([]);                        // state to store the comments
    

    useEffect(()=>{
        const img = localStorage.getItem("userPrfPic");
        setProfilePic(img);
    },)


  

    useEffect(() => {                                  // fetching the videos from the database for the suggestion section
        axios
          .get("http://localhost:4000/media/allVid")
          .then((res) => {
            setSuggVideos(res.data.videos);  // res.data.videos is an array of objects
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);




    const fetchVidById = async () => {
        await axios.get(`http://localhost:4000/media/vidbyid/${id}`)
        .then((res) => {     
            setVid(res.data.video);                   // res.data.video is an object containing the video details
            setVidUrl(res.data?.video?.videoLnk);              // setting the video link from the object
        }).catch(err => {
            console.log(err);
        })  
    }

    const GetCmnt = async () => {
        await axios.get(`http://localhost:4000/cmtApi/comment/${id}`)
        .then((res) => {
            setComment(res.data.comments);            // res.data.comments is an array of objects in which each object contains the comment
        }).catch(err => {
            console.log(err);
    })}

    useEffect(() => {
        fetchVidById();
        GetCmnt();   
    },[])
   
    const handleCmnt = async()=>{
        const BDY = {
            "message":message,
            "video":id
        }
        await axios.post("http://localhost:4000/cmtApi/comment",BDY,{ withCredentials:true }).then((res)=>{

            const NEWCmnt = res.data.comment;
            setComment([NEWCmnt,...comment]);
            setTimeout(()=>{
                window.location.reload();
                setMessage("");
            },10);
        }).catch(err=>{
            toast.error("User must be loggedIn first to Comment, Please logIn First.");
            setMessage("");
        })
    }




    const [editCommentId, setEditCommentId] = useState(null); // To track the comment being edited
const [editMessage, setEditMessage] = useState(""); // To track the updated message for the comment

// Function to enable editing mode
const enableEditComment = (commentId, currentMessage) => {
    handeledit();
    setEditCommentId(commentId);
    setEditMessage(currentMessage);
};

// Function to save the edited comment
const saveEditComment = async (commentId) => {
    const updatedComment = {
        message: editMessage,
    };

    try {
        await axios.put(`http://localhost:4000/cmtApi/comment/${commentId}`, updatedComment, {
            withCredentials: true,
        });
        // Update the local state with the new comment
        const updatedComments = comment.map((cmt) =>
            cmt._id === commentId ? { ...cmt, message: editMessage } : cmt
        );
        setComment(updatedComments);
        // Exit edit mode
        setEditCommentId(null);
        setEditMessage("");
    } catch (err) {
        console.error(err);
        toast.error("Failed to update comment.");
    }
};

// Function to cancel editing
const cancelEditComment = () => {
    setEditCommentId(null);
    setEditMessage("");
};












    
    const [moreOption, setMoreOption] = useState(false);
    const handelMore = ()=>{
        setMoreOption(prev=>!prev);
    }
    const [editOption, setEditOption] = useState(false);
    const handeledit = ()=>{
        setEditOption(prev=>!prev);
    }

    const changeVidUrl =()=>{
        setVidUrl(suggVideos);
    }

    const Filter = ["All","Treanding","Music",];

  return (
    <div className='mt-[57px] bg-[#141414] lg:flex-row flex-col flex md:px-11 px-4 py-5 gap-[25px] justify-center'>
        {/*-------------------------------- //videosection-------------------------------- */}
        <div className='w-full lg:text-sm max-w-[4xl] h-auto flex flex-col'>

            {/* --------------------------------video --------------------------------*/}
            <div className='w-full  '>
                {vid && <video
                   className=' h-auto rounded-xl w-full shadow-md' 
                   controls 
                   autoPlay >
                    <source src={VidUrl} type='video/mp4' />
                    <source src={VidUrl} type='video/webm' />
                    ur Browsr doesnot support the video tag
                </video>}
            </div>

            {/* --------------------------------detail-------------------------------- */}
            <div >
                <div className='flex  text-white font-youtube font-bold text-xl pt-3 pb-1 pl-2 flex-col'>
                    {vid.title}
                </div>

                <div className='flex justify-between px-2'>

                    {/* --------------------------------text section-------------------------------- */}
                    <div className='flex gap-4'>

                        {/*-------------------------------- profile img section --------------------------------*/}
                        <Link to={`/user/${vid?.user?._id}`} className='w-9 mt-1 h-9 '>
                            <img 
                                src={vid?.user?.profilePic} 
                                alt="profile pic" 
                                className="rounded-full cursor-pointer w-full h-full "
                            />
                        </Link>
                        
                        {/* --------------------------------channel name and more info-------------------------------- */}   
                        <div className="text-sm font-semibold  text-[#bfbcbc]">
                                <div className="cursor-pointer hover:text-[#e3e0e0] transition duration-200">{vid.user?.channelName}</div>
                                <span>{vid.user?.createdAt.slice(0,10)}</span>
                        </div>

                        {/* --------------------------------subscribe button --------------------------------*/}
                        <div className='bg-white rounded-full cursor-pointer hover:bg-[#e3e0e0] font-semibold flex justify-center items-center mt-1 px-5'>
                            Sucscribe
                        </div>
                    </div>

                    {/*-------------------------------- actions-------------------------------- */}
                    <div className='flex justify-center items-center gap-3 '>                   
                        <div className='md:flex hidden  justify-center items-center p-[10px] font-medium rounded-full px-5 hover:bg-[#424141] text-white  bg-[#2a2a2a]'>
                            <div className='flex gap-2 p-0' >                   
                                <BiLike className='cursor-pointer hover:text-[#858181] ' size={23}/> <div className=' border-r-[1px] pr-3'>1202</div> 
                                <BiDislike className='cursor-pointer hover:text-[#858181]'  size={23}/>
                            </div>
                        </div>
                        <div className='md:flex hidden  justify-center items-center p-[10px] gap-2 cursor-pointer hover:bg-[#424141] rounded-full text-white bg-[#2a2a2a]'>
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
                        <span> {vid.user?.createdAt.slice(0,10)}</span>
                        <span className='text-[#bfbcbc]'> #video #youtube #trending</span>
                    </div>
                <div className='mt-1 text-white font-bold'>{vid.user?.channelName}</div>    
            </div>



            {/* comment section */}
            {/* coment title */}
            <div className='my-6'>
                <div className='font-bold border-b-[0.25px] py-5 border-[#4a4949] text-white text-xl'>
                    {comment.length} Comments
                </div>
            </div>

            {/* commenting  */}

            <div className=' flex gap-2 h-fit text-white mb-5 py-2 px-1 w-full'>
                <img 
                    src={profilePic} 
                    alt="profile pic" 
                    className="rounded-full cursor-pointer w-9 h-9 "
                 />
                 <input 
                   className=" h-10 truncate w-full rounded-[20px] bg-transparent border-none px-3 " 
                   type="text" 
                   placeholder="Add a comment"
                   value={message}
                   onChange={(e) => {setMessage(e.target.value)}}
                />
                <div className='flex gap-2 items-center justify-center'>
                    <div className='flex px-3 py-2 cursor-pointer hover:bg-[#2a2a2a] rounded-full border-[1px] border-[#2a2a2a] justify-center items-center font-medium'>
                        Cancel
                    </div>
                    <div onClick={handleCmnt} className='bg-white py-2 cursor-pointer flex px-3 text-[#2a2a2a] font-medium hover:text-white hover:bg-[#2a2a2a] rounded-full justify-center items-center '>
                        Comment
                    </div>
                    <HiOutlineDotsVertical size={23} className='cursor-pointer' />
                </div>
                

            </div>

            {/* othes comments */}
            
            {comment.map((cmt, index) => {
                    return(
                        <div className=' flex  gap-2 h-fit mt-2 text-white py-2 px-1 w-full ' key={index}>
                            <div className=' flex gap-2 h-fit mt-2 text-white py-2 px-1 w-full ' >
                                <img 
                                    src={cmt.user.profilePic} 
                                    alt="profile pic" 
                                    className="rounded-full cursor-pointer self-center w-9 h-9 "
                                />
                                <div className='mx-4 flex flex-col justify-center items-start'>
                                    <div className='flex gap-2'>
                                        <span className='font-bold text-sm'>@ {cmt.user.userName}</span>
                                        <span className='text-[#545353] font-bold text-sm'>{cmt.createdAt.slice(0,10)}</span>
                                    </div>
                                    <div className='font-medium mt-1'>
                                        {cmt.message}
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className='flex items-center  justify-center'>
                              <HiOutlineDotsVertical size={23} className='cursor-pointer' onClick={handeledit}/>
                                
                                {editCommentId === cmt._id ? (
                                        <div className="flex items-center gap-2 mt-1">
                                            <input
                                                type="text"
                                                className="bg-transparent  border-b-[1px] border-[#2d2c2c]  px-2 py-1 text-white"
                                                value={editMessage}
                                                onChange={(e) => setEditMessage(e.target.value)}
                                            />
                                            <button
                                                onClick={() => saveEditComment(cmt._id)}
                                                className="bg-white px-3 font-medium py-2 text-[#2a2a2a] rounded-full"
                                            >
                                                Save
                                            </button>
                                            <button
                                                onClick={cancelEditComment}
                                                className="hover:bg-[#2a2a2a] px-3 py-2 rounded-full text-white"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                        </>
                                    )}
                                { editOption      &&
                                        <div className="absolute top-[980px] right-[450px] bg-[#2a2a2a] text-white font-normal w-fit z-20 rounded-xl">
                                            <div 
                                                onClick={() => enableEditComment(cmt._id, cmt.message)}
                                                className="px-3 py-1 cursor-pointer my-2 hover:bg-[#424141] rounded-t flex justify-center items-center gap-4"> 
                                                <CiBookmark />edit
                                            </div>
                                        </div>
                                    }
                            </div>
                        </div>
                    );
                })
            }
            <ToastContainer/>
        </div>

        

        {/*-------------------------------- suggestion section --------------------------------*/}       
        <div className=' text-white w-full md:max-w-[400px]  py-[10px]  flex flex-col '>
          
           {/*-------------------------------- filters-------------------------------- */}
         <div className="flex w-[100%] box-border gap-3 flex-shrink-0 h-fit scrollbar-none bg-[#141414]">

           {/*-------------------------------- Conditionally rendering the filters-------------------------------- */}
           {Filter.map((item, index) => (
             <div
               key={index}
               className="flex-shrink-0 justify-center items-center cursor-pointer h-fit px-3 py-1 bg-[#333333] hover:bg-[#4a4949] text-white rounded-md"
             >
               {item}
             </div>
           ))}
         </div>
          
          {/* --------------------------------shorts div-------------------------------- */}
          <div className='border-b-[0.25px] py-8 border-[#4a4949] '>
            {/* title */}
            <div className='flex items-center gap-2 '>
                <SiYoutubeshorts size={24} className='text-[#FF0000]'/>
                <span className='text-xl font-bold'>Shorts</span>
            </div>  

            {/* --------------------------------short video div --------------------------------*/}
            <div className='flex justify-center mt-8 gap-1'>
                <div className='flex flex-col  cursor-pointer w-[130px]'>
                            <img 
                                src="https://res.cloudinary.com/dzbnjm4eg/image/upload/v1735202055/caiih5gvcaroiqfllp1v.avif"                              
                                alt="shorts" 
                                className='rounded-lg w-inherit'
                            />
                            <div className='mt-2 pl-1 w-full'>
                                <div className='flex justify-between font-medium'>
                                    <div className='text-base w-[92px] h-10 leading-tight overflow-hidden text-ellipsis line-clamp-2'>
                                        marvel rival game play
                                    </div>
                                    <HiOutlineDotsVertical size={23} className='hover:bg-[#696666] rounded-full p-[2px] '/>
                                </div>
                                <div className='text-[#696666] mt-2 text-sm font-bold'>
                                    6.3M Views
                                </div>
                            </div>
                </div> 
                <div className='flex flex-col  cursor-pointer w-[130px]'>
                            <img 
                                src="https://res.cloudinary.com/dzbnjm4eg/image/upload/v1735202055/qhiwzsomr9bv7psdoisv.avif"                              
                                alt="shorts" 
                                className='rounded-lg w-inherit'
                            />
                            <div className='mt-2 pl-1 w-full'>
                                <div className='flex justify-between font-medium'>
                                    <div className='text-base w-[92px] h-10 leading-tight overflow-hidden text-ellipsis line-clamp-2'>
                                        most Op Moon-Knight player
                                    </div>
                                    <HiOutlineDotsVertical size={23} className='hover:bg-[#696666] rounded-full p-[2px] '/>
                                </div>
                                <div className='text-[#696666] mt-2 text-sm font-bold'>
                                    1M Views
                                </div>
                            </div>
                </div> 
                <div className='flex flex-col  cursor-pointer w-[130px]'>
                            <img 
                                src="https://res.cloudinary.com/dzbnjm4eg/image/upload/v1735202055/awjoiock4hcqcfuvxodk.avif"                              
                                alt="shorts" 
                                className='rounded-lg w-inherit'
                            />
                            <div className='mt-2 pl-1 w-full'>
                                <div className='flex justify-between font-medium'>
                                    <div className='text-base w-[92px] h-10 leading-tight overflow-hidden text-ellipsis line-clamp-2'>
                                        Top 5 free skins 
                                    </div>
                                    <HiOutlineDotsVertical size={23} className='hover:bg-[#696666] rounded-full p-[2px] '/>
                                </div>
                                <div className='text-[#696666] mt-2 text-sm font-bold'>
                                    2.3M Views
                                </div>
                            </div>
                </div>   
              
            </div>
          </div>


          {/* --------------------------------suggestion videos--------------------------------  */}
          {/*-------------------------------- video card --------------------------------*/}
            {suggVideos.map((video, index) => (
             <div className='flex gap-[10px] mt-3 '  key={index}>
                {/* thumbnail */}
                <div className='w-[168px] h-[94px]' >
                    <img 
                        src={video.thumbnail} 
                        alt="thumbnail" 
                        className="w-inherit h-full cursor-pointer rounded-xl"
                        onClick={changeVidUrl}
                    />
                </div>
                {/*-------------------------------- description --------------------------------*/}
                <div className='flex flex-col gap-1 leading-tight  text-ellipsis line-clamp-2'>
                    {/* --------------------------------title-------------------------------- */}
                    <div className='font-semibold' >
                    {video.title}
                    </div>
                    <div className='text-sm leading-tight text-[#7c7878] font-medium hover:text-[#949191]'>
                        <div>{video?.user?.channelName}</div>
                        <div>2.2M views | {video.createdAt.slice(0,10)}</div>
                    </div>
                </div>

            </div>
            ))}
           
        </div>
        
    </div>
  )
}

export default Video