import {Link} from 'react-router-dom'
import { FaYoutube } from "react-icons/fa6";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import InteractiveHoverButton from '@/components/ui/interactive-hover-button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const UploadPage = () => {
    
    const [inputField, setInputField] = useState({ "title":"", "description":"", "videoLnk":"", "thumbnail":"", "videoTyp":"", });

    //----------------------------------------- for progress bar
    const [imageUploadProgress, setImageUploadProgress] = useState(0);
     const [videoUploadProgress, setVideoUploadProgress] = useState(0);


    const handleChange = (event,name) => {
        setInputField({
             ...inputField,[name]:event.target.value    
        });   
    }

    const navigate = useNavigate();

    const upLoad = async (e,type) => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'Youtube-Clone');
        try {
            // cloudName="dzbnjm4eg";
            const res = await axios.post(`https://api.cloudinary.com/v1_1/dzbnjm4eg/${type}/upload`, data, {
                onUploadProgress: progressEvent => {
                    const progress = Math.round(
                        (progressEvent.loaded/ progressEvent.total ) * 100
                    );
                    if (type === "image") {
                        setImageUploadProgress(progress);
                      } else if (type === "video") {
                        setVideoUploadProgress(progress);
                      }
                }
            },);
            const url = res.data.url;
            let Val = type === "image" ? "thumbnail" : "videoLnk";
            setInputField({
                ...inputField,[Val]:url    
            });
          } catch (err) {
            console.error(err);
          }
    }

    useEffect(() => {
      let isloggedin = localStorage.getItem("userId");
      if(isloggedin === null){
        navigate('/login');
      }
    }, []);


    const handleSubmit = async()=>{
      await axios.post("http://localhost:4000/media/video",inputField,{ withCredentials: true }).then((res)=>{

        navigate('/');
        setTimeout(()=>{
          window.location.reload();
      },100);
      }).catch(err=>{
        console.log(err);
      });
    }





  return (
    <div className="flex justify-center items-center h-full w-full mt-14 lg:mb-14 py-28 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 bg-[#141414]"
>
      <div className=" bg-[#313030] flex items-center flex-col py-3 px-7 rounded-xl  text-white">
        <div className="flex justify-center items-center border-b-[1px] border-[#201f1f] text-center text-lg lg:text-4xl font-oswald font-bold">
          <FaYoutube size={75} className="text-[#FF0000]" /> Upload Video
        </div>

                                {/* --------------------------------Inputs-------------------------------- */}
                                
        <div className="flex items-center  flex-col justify-center w-full">
          <div className="flex flex-col w-full mx-auto">
              <label className="text-sm lg:text-base mb-1">Title</label>
              <input 
                onChange={(e) => { handleChange(e, "title") }}
                value={inputField.title}
                type="text"
                placeholder="eg : jhon doe"
                className="w-full h-[40px] px-3 text-white box-border bg-[#222222] border-none mb-4 rounded-md"
              />
          </div>

          <div className="flex flex-col w-full mx-auto">
                <label className="text-sm lg:text-base mb-1">Description</label>
                <textarea 
                  onChange={(e) => { handleChange(e, "description") }}
                  value={inputField.description}
                  placeholder="eg : A passionate developer creating dynamic and responsive web applications."
                  className="w-full min-h-[100px] px-3 py-2 text-white box-border bg-[#222222] border-none mb-4 rounded-md"
                />
          </div>          

          <div className="flex flex-col  w-full mx-auto">
            <label className="text-sm lg:text-base mb-1">Category</label>
            <input 
              onChange={(e) => { handleChange(e, "videoTyp") }}
              value={inputField.videoTyp}
              type="text"
              placeholder="eg : Educational"
              className="w-full h-[40px] px-3 py-0 text-white box-border bg-[#222222] border-none mb-4 rounded-md"
            />
          </div>
        </div>

          <div className="flex items-center  flex-col justify-center border-white border-[1px] rounded-md w-full">
            <div className=' text-base font-medium py-[9px] border-b-[1px] border-[#535151] text-white mb-3'>
              <span 
                 className="cursor-pointer py-2 mx-2 border-b-2"  >
                  Upload Video</span>
            </div>

                  <div className="flex flex-col md:w-[50%] w-full  lg:flex-col gap-4 lg:gap2 items-center justify-center px-3">
                    <div  className='flex flex-col  w-full  lg:flex-row gap-4 lg:gap2 items-center justify-center px-3'>
                    <div className="w-full lg:w-1/2 lg:flex-col flex-row">
                      <Label>Thumbnail</Label>
                      <Input type="file" accept="image/*" onChange={(e) => upLoad(e, "image")} />
                      {imageUploadProgress > 0 && (
                        <div className="relative w-full h-2 bg-gray-700 rounded-md mt-2">
                          <div
                            className="absolute top-0 left-0 h-2 bg-green-500 rounded-md"
                            style={{ width: `${imageUploadProgress}%` }}
                          ></div>
                        </div>
                      )}
                    </div>
                    <div className="w-full lg:w-1/2">
                      <Label>Video</Label>
                      <Input type="file"  accept="video/mp4, video/webm, video/*" onChange={(e) => upLoad(e, "video")} />
                      {videoUploadProgress > 0 && (
                        <div className="relative w-full h-2 bg-gray-700 rounded-md mt-2">
                          <div
                            className="absolute top-0 left-0 h-2 bg-blue-500 rounded-md"
                            style={{ width: `${videoUploadProgress}%` }}
                          ></div>
                        </div>
                      )}
                    </div>
                    </div>
                    <div className='my-7 ' >
                     <InteractiveHoverButton  onClick={handleSubmit}  />
                     </div>
                  </div>
                  
              
              
        </div>
      </div>
    </div>
  );

}

export default UploadPage;