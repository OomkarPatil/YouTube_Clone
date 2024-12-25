
import {Link} from 'react-router-dom'
import { FaYoutube } from "react-icons/fa6";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import InteractiveHoverButton from '@/components/ui/interactive-hover-button';
import { useEffect, useState } from 'react';
import axios from 'axios';


const UploadPage = () => {
    
    const [inputField, setInputField] = useState({"title":"", "description":"", "category":"", "thumbnail":"", "video":""});

    const [profileImage, setProfileImage] = useState("");
    const [profileName, setProfileName] = useState("");

    // for progress bar
    const [imageUploadProgress, setImageUploadProgress] = useState(0);
     const [videoUploadProgress, setVideoUploadProgress] = useState(0);


    useEffect(() => {
        // Retrieve the image URL from localStorage
        const savedImage = localStorage.getItem("profileImage");
        const savedName = localStorage.getItem("profileName");
      
        if (savedName) setProfileName(savedName);
      if (savedImage) setProfileImage(savedImage);
    }, []);

    const handleChange = (event,name) => {
        setInputField({
             ...inputField,[name]:event.target.value    
        });
    }

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
            let Val = type === "image" ? "thumbnail" : "video";
            setInputField({
                ...inputField,[Val]:url    
            });

        } catch (err) {
            console.error(err);
        }
        
    }

    console.log(inputField);

  return (
    <div className="flex flex-col items-center lg:flex-row mt-[57px] overflow-auto bg-[#141414]">
      <div className="w-full bg-[#141414] flex items-center flex-col   text-white">
        <div className="flex flex-col justify-center items-center text-center text-lg lg:text-4xl font-oswald font-bold">
          <FaYoutube size={75} className="text-[#FF0000]" /> Upload Video
        </div>

        {/* Inputs */}
        <div className="flex items-center flex-col justify-center w-full mt-8">
          <div className="flex flex-col w-[90%] lg:w-[50%] mx-auto">
            <label className="text-sm lg:text-base mb-2">Title</label>
            <input 
              onChange={(e) => { handleChange(e, "title") }}
              value={inputField.title}
              type="text"
              placeholder="eg : jhon doe"
              className="w-full h-[45px] px-3 py-0 text-white box-border bg-[#222222] border-none mb-7 rounded-md"
            />
          </div>

          <div className="flex flex-col w-[90%] lg:w-[50%] mx-auto">
            <label className="text-sm lg:text-base mb-2">Description</label>
            <textarea 
              onChange={(e) => { handleChange(e, "description") }}
              value={inputField.description}
              placeholder="eg : A passionate developer creating dynamic and responsive web applications."
              className="w-full h-[45px] px-3 py-0 text-white box-border bg-[#222222] border-none mb-7 rounded-md"
            />
          </div>

          <div className="flex flex-col w-[90%] lg:w-[50%] mx-auto">
            <label className="text-sm lg:text-base mb-2">Category</label>
            <input 
              onChange={(e) => { handleChange(e, "category") }}
              value={inputField.category}
              type="text"
              placeholder="eg : Educational"
              className="w-full h-[45px] px-3 py-0 text-white box-border bg-[#222222] border-none mb-7 rounded-md"
            />
          </div>

          <div className="flex flex-col w-[90%] lg:w-[50%]  lg:flex-row gap-4 lg:gap2 items-center justify-center px-3">
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
              <Input type="file" accept="video/mp4, video/webm, video/*" onChange={(e) => upLoad(e, "video")} />
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
          <div className="p-10 lg:p-10">
            <InteractiveHoverButton />
          </div>
        </div>
      </div>
    </div>

  );
}

export default UploadPage;