import { HiOutlineDotsVertical } from "react-icons/hi";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const HomePage = ({ sideNavBar }) => {
  // Array for filter section
  const Filter = ["All","Trending","Music","UI/Ux","Gaming","Skills","Manga","Cars", "Trading","Stocks","News","Education","Coding"];

  const [videos, setVideos] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("All"); //-------------------------------- State for the selected filter

  useEffect(() => {
    axios
      .get("http://localhost:4000/media/allVid")
      .then((res) => {
        setVideos(res.data.videos);                 // --------------------------------res.data.videos is an array of objects
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  //-------------------------------- Filtered videos based on the selected filter
  const filteredVideos =
    selectedFilter === "All"
      ? videos
      : videos.filter((video) => video.videoTyp === selectedFilter);

  return (
    <div className="flex md:flex-col  ov flex-1">
      {/* Filter section */}
      <div className="flex fixed z-[1] w-[100%] box-border gap-[2px] px-2 py-1 flex-shrink-0 h-fit overflow-x-scroll scrollbar-none bg-[#141414]">
        {Filter.map((item, index) => (
          <div
            key={index}
            className={`flex-shrink-0 justify-center items-center cursor-pointer h-fit px-3 py-1 m-2 bg-[#333333] hover:bg-[#4a4949] text-white rounded-md ${
              selectedFilter === item ? "bg-[#686363]" : ""
            }`}
            onClick={() => setSelectedFilter(item)} // Update selected filter on click
          >
            {item}
          </div>
        ))}
      </div>

      {/* Video Section */}
      {sideNavBar ? (
        <div className="grid h-[100vh] box-border gap-6  lg:grid-cols-[395px_395px_395px] sm:grid-cols-[395px] pt-[90px] px-4 pb-[20px] bg-[#141414] ">
          {filteredVideos.map((video, index) => (
            <Link
              to={`/watch/${video._id}`}
              className="flex text-white box-border flex-col h-80"
              key={index}
            >


              {/* --------------------------------Video Box-------------------------------- */}

              <div className="w-full relative box-border cursor-pointer h-[228px] ">
                <img
                  src={video.thumbnail}
                  alt="thumbnail"
                  className="w-full h-full rounded-xl"
                />
                <div className="absolute bottom-2 right-2 w-auto py-[2px] text-xs px-[4px] bg-[#00000078] rounded-md">
                  00:00
                </div>
              </div>



              {/*-------------------------------- Text Section-------------------------------- */}

              <div className="pb-3 pt-1 flex relative">
                <div className="w-[50px] h-[50px] flex items-center justify-center">
                  <img
                    src={video?.user?.profilePic}
                    alt="profile pic"
                    className="rounded-full w-full h-full cursor-pointer "
                  />
                </div>
                <div className="flex flex-col p-1 pb-3 font-bold box-border w-full ">
                  <div>{video.title}</div>
                  <div className="text-sm font-semibold pt-1 text-[#bfbcbc]">
                    <div>
                      <div className="flex gap-3">
                      <div className="cursor-pointer hover:text-[#e3e0e0] transition duration-200">
                        {video?.user?.channelName}
                      </div>
                      <div className="cursor-pointer text-[#6c6868] hover:text-[#e3e0e0] transition duration-200">
                      #{video.videoTyp}
                      </div>
                      </div>
                    </div>
                    <span>{video.like} Likes</span>
                    <span> • {video.createdAt.slice(0,10)}</span>
                  </div>
                </div>



                {/* --------------------------------More Options --------------------------------*/}

                <div className="pt-2 cursor-pointer ">
                  <HiOutlineDotsVertical />
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="grid h-[100vh] box-border gap-[30px] lg:grid-cols-[326px_326px_326px_326px] sm:grid-cols-[395px] pt-[90px] px-4 pb-[20px] bg-[#141414]">
          {filteredVideos.map((video, index) => (
            <Link
              to={`/watch/${video._id}`}
              className="flex text-white box-border flex-col h-80"
              key={index}
            >
              {/* Video Box */}
              <div className="w-full relative box-border cursor-pointer h-[195px] ">
                <img
                  src={video.thumbnail}
                  alt="thumbnail"
                  className="w-full h-full rounded-xl"
                />
                <div className="absolute bottom-2 right-2 w-auto py-[2px] text-xs px-[4px] bg-[#00000078] rounded-md">
                  00:00
                </div>
              </div>

              {/* Text Section */}
              <div className="pb-3 pt-1 flex relative">
                <div className="w-[50px] h-[50px] flex items-center justify-center">
                  <img
                    src={video?.user?.profilePic}
                    alt="profile pic"
                    className="rounded-full w-[80%] cursor-pointer "
                  />
                </div>
                <div className="flex flex-col p-1 pb-3 font-bold box-border w-full ">
                  <div>{video.title}</div>
                  <div className="text-sm font-semibold pt-1 text-[#bfbcbc]">
                    <div className="cursor-pointer hover:text-[#e3e0e0] transition duration-200">
                      {video?.user?.channelName}
                    </div>
                    <span>{video.like} Likes</span>
                    <span> • {video.createdAt}</span>
                  </div>
                </div>

                {/* More Options */}
                <div className="pt-2 cursor-pointer ">
                  <HiOutlineDotsVertical />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
