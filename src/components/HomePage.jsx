import { HiOutlineDotsVertical } from "react-icons/hi";


const HomePage = ({sideNavBar}) => {

  // array for filter section 
  const Filter = ["All","Treanding","Music","UI/Ux","Live","Skills","Manga","Cars","Trading","Stocks","News","Education","Coding",];

  return (
    <div className="flex flex-col overflow-x-hidden  flex-1">
        <div className="flex fixed z-[1] w-[100%] box-border gap-[2px] px-2 py-1 flex-shrink-0 h-fit overflow-x-scroll scrollbar-none bg-[#141414]">

          {/* Conditionally rendering the filters */}
          {Filter.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 justify-center items-center cursor-pointer h-fit px-3 py-1 m-2 bg-[#333333] hover:bg-[#4a4949] text-white rounded-md"
            >
              {item}
            </div>
          ))}
        </div>


       {sideNavBar ? 
          <div className="grid box-border gap-6 lg:grid-cols-[395px_395px_395px] sm:grid-cols-[395px] pt-[90px] px-4 pb-[20px]  bg-[#141414]">
          <div className="flex text-white box-border flex-col h-80 ">

              {/* video box */}
            <div className="w-full relative box-border cursor-pointer h-[228px] ">
              <img 
                 src="/assets(images for texting)/hq720.jpg" 
                 alt="thumbnail" 
                 className="w-full h-full rounded-xl"
              />
              <div className="absolute bottom-2 right-2 w-auto py-[2px] text-xs px-[4px] bg-[#00000078] rounded-md">
                00:00
              </div>
            </div>

            {/* text */}
            <div className="pb-3 pt-1 flex relative">
              <div className="w-[50px] h-[50px] flex items-center justify-center">
                  <img 
                    src="/assets(images for texting)/profile pic.jpeg" 
                    alt="profile pic" 
                    className="rounded-full w-[80%] cursor-pointer "
                  />
              </div>
              <div className="flex flex-col p-1 pb-3 font-bold box-border w-full ">
                <div>Title title</div>
                <div className="text-sm font-semibold pt-1 text-[#bfbcbc]">
                  <div className="cursor-pointer hover:text-[#e3e0e0] transition duration-200">channel name</div>
                  <span>1.1m Views</span>
                  <span>  • 6 days ago</span>
                </div>
              </div>

               {/* more logo button */}
              <div className="pt-2 cursor-pointer ">
              <HiOutlineDotsVertical />
              </div>
            </div>

          </div>

          <div className="flex text-white box-border flex-col h-80 ">

              {/* video box */}
            <div className="w-full relative box-border cursor-pointer h-[228px] ">
              <img 
                 src="/assets(images for texting)/hq720 (3).jpg" 
                 alt="thumbnail" 
                 className="w-full h-full rounded-xl"
              />
              <div className="absolute bottom-2 right-2 w-auto py-[2px] text-xs px-[4px] bg-[#00000078] rounded-md">
                00:00
              </div>
            </div>

            {/* text */}
            <div className=" pb-3 pt-1 flex relative">
              <div className="w-[50px] h-[50px] flex items-center justify-center">
                  <img 
                    src="/assets(images for texting)/profile pic.jpeg" 
                    alt="profile pic" 
                    className="rounded-full w-[80%] cursor-pointer "
                  />
              </div>
              <div className="flex flex-col p-1 font-bold box-border w-full ">
                <div>Title <br/> title</div>
                <div className="text-sm font-semibold pt-1 text-[#bfbcbc]">
                  <div className="cursor-pointer hover:text-[#e3e0e0] transition duration-200">channel name</div>
                  <span>1.1m Views</span>
                  <span>  • 6 days ago</span>
                </div>
              </div>

               {/* more logo button */}
              <div className="pt-2 cursor-pointer ">
              <HiOutlineDotsVertical />
              </div>

              
            </div>

          </div>

          <div className="flex text-white box-border flex-col h-80 ">

              {/* video box */}
            <div className="w-full relative box-border cursor-pointer h-[228px] ">
              <img 
                 src="/assets(images for texting)/hq720 (2).jpg" 
                 alt="thumbnail" 
                 className="w-full h-full rounded-xl"
              />
              <div className="absolute bottom-2 right-2 w-auto py-[2px] text-xs px-[4px] bg-[#00000078] rounded-md">
                00:00
              </div>
            </div>

            {/* text */}
            <div className=" pb-3 pt-1 flex relative">
              <div className="w-[50px] h-[50px] flex items-center justify-center">
                  <img 
                    src="/assets(images for texting)/profile pic.jpeg" 
                    alt="profile pic" 
                    className="rounded-full w-[80%] cursor-pointer "
                  />
              </div>
              <div className="flex flex-col p-1 font-bold box-border w-full ">
                <div>Title <br/> title</div>
                <div className="text-sm font-semibold pt-1 text-[#bfbcbc]">
                  <div className="cursor-pointer hover:text-[#e3e0e0] transition duration-200">channel name</div>
                  <span>1.1m Views</span>
                  <span>  • 6 days ago</span>
                </div>
              </div>

               {/* more logo button */}
              <div className="pt-2 cursor-pointer ">
              <HiOutlineDotsVertical />
              </div>

              
            </div>

          </div>

          <div className="flex text-white box-border flex-col h-80 ">

              {/* video box */}
            <div className="w-full relative box-border cursor-pointer h-[228px] ">
              <img 
                 src="/assets(images for texting)/hq720 (1).jpg" 
                 alt="thumbnail" 
                 className="w-full h-full rounded-xl"
              />
              <div className="absolute bottom-2 right-2 w-auto py-[2px] text-xs px-[4px] bg-[#00000078] rounded-md">
                00:00
              </div>
            </div>

            {/* text */}
            <div className=" pb-3 pt-1 flex relative">
              <div className="w-[50px] h-[50px] flex items-center justify-center">
                  <img 
                    src="/assets(images for texting)/profile pic.jpeg" 
                    alt="profile pic" 
                    className="rounded-full w-[80%] cursor-pointer "
                  />
              </div>
              <div className="flex flex-col p-1 font-bold box-border w-full ">
                <div>Title <br/> title</div>
                <div className="text-sm font-semibold pt-1 text-[#bfbcbc]">
                  <div className="cursor-pointer hover:text-[#e3e0e0] transition duration-200">channel name</div>
                  <span>1.1m Views</span>
                  <span>  • 6 days ago</span>
                </div>
              </div>

               {/* more logo button */}
              <div className="pt-2 cursor-pointer ">
              <HiOutlineDotsVertical />
              </div>

              
            </div>

          </div>

          <div className="flex text-white box-border flex-col h-80 ">

              {/* video box */}
            <div className="w-full relative box-border cursor-pointer h-[228px] ">
              <img 
                 src="/assets(images for texting)/hq720.jpg" 
                 alt="thumbnail" 
                 className="w-full h-full rounded-xl"
              />
              <div className="absolute bottom-2 right-2 w-auto py-[2px] text-xs px-[4px] bg-[#00000078] rounded-md">
                00:00
              </div>
            </div>

            {/* text */}
            <div className=" pb-3 pt-1 flex relative">
              <div className="w-[50px] h-[50px] flex items-center justify-center">
                  <img 
                    src="/assets(images for texting)/profile pic.jpeg" 
                    alt="profile pic" 
                    className="rounded-full w-[80%] cursor-pointer "
                  />
              </div>
              <div className="flex flex-col p-1 font-bold box-border w-full ">
                <div>Title <br/> title</div>
                <div className="text-sm font-semibold pt-1 text-[#bfbcbc]">
                  <div className="cursor-pointer hover:text-[#e3e0e0] transition duration-200">channel name</div>
                  <span>1.1m Views</span>
                  <span>  • 6 days ago</span>
                </div>
              </div>

               {/* more logo button */}
              <div className="pt-2 cursor-pointer ">
              <HiOutlineDotsVertical />
              </div>

              
            </div>

          </div>
        </div>
        :
        <div className="grid box-border gap-[30px] lg:grid-cols-[326px_326px_326px_326px] sm:grid-cols-[395px]  pt-[90px] px-4 pb-[20px]  bg-[#141414]">
        <div className="flex text-white box-border flex-col h-80 ">

            {/* video box */}
          <div className="w-full relative box-border cursor-pointer h-[195px] ">
            <img 
               src="/assets(images for texting)/hq720.jpg" 
               alt="thumbnail" 
               className="w-full h-full rounded-xl"
            />
            <div className="absolute bottom-2 right-2 w-auto py-[2px] text-xs px-[4px] bg-[#00000078] rounded-md">
              00:00
            </div>
          </div>

          {/* text */}
          <div className="pb-3 pt-1 flex relative">
            <div className="w-[50px] h-[50px] flex items-center justify-center">
                <img 
                  src="/assets(images for texting)/profile pic.jpeg" 
                  alt="profile pic" 
                  className="rounded-full w-[80%] cursor-pointer "
                />
            </div>
            <div className="flex flex-col p-1 pb-3 font-bold box-border w-full ">
              <div>Title title</div>
              <div className="text-sm font-semibold pt-1 text-[#bfbcbc]">
                <div className="cursor-pointer hover:text-[#e3e0e0] transition duration-200">channel name</div>
                <span>1.1m Views</span>
                <span>  • 6 days ago</span>
              </div>
            </div>

             {/* more logo button */}
            <div className="pt-2 cursor-pointer ">
            <HiOutlineDotsVertical />
            </div>
          </div>

        </div>

        <div className="flex text-white box-border flex-col h-80 ">

            {/* video box */}
          <div className="w-full relative box-border cursor-pointer h-[195px] ">
            <img 
               src="/assets(images for texting)/hq720 (3).jpg" 
               alt="thumbnail" 
               className="w-full h-full rounded-xl"
            />
            <div className="absolute bottom-2 right-2 w-auto py-[2px] text-xs px-[4px] bg-[#00000078] rounded-md">
              00:00
            </div>
          </div>

          {/* text */}
          <div className=" pb-3 pt-1 flex relative">
            <div className="w-[50px] h-[50px] flex items-center justify-center">
                <img 
                  src="/assets(images for texting)/profile pic.jpeg" 
                  alt="profile pic" 
                  className="rounded-full w-[80%] cursor-pointer "
                />
            </div>
            <div className="flex flex-col p-1 font-bold box-border w-full ">
              <div>Title <br/> title</div>
              <div className="text-sm font-semibold pt-1 text-[#bfbcbc]">
                <div className="cursor-pointer hover:text-[#e3e0e0] transition duration-200">channel name</div>
                <span>1.1m Views</span>
                <span>  • 6 days ago</span>
              </div>
            </div>

             {/* more logo button */}
            <div className="pt-2 cursor-pointer ">
            <HiOutlineDotsVertical />
            </div>

            
          </div>

        </div>

        <div className="flex text-white box-border flex-col h-80 ">

            {/* video box */}
          <div className="w-full relative box-border cursor-pointer h-[195px] ">
            <img 
               src="/assets(images for texting)/hq720 (2).jpg" 
               alt="thumbnail" 
               className="w-full h-full rounded-xl"
            />
            <div className="absolute bottom-2 right-2 w-auto py-[2px] text-xs px-[4px] bg-[#00000078] rounded-md">
              00:00
            </div>
          </div>

          {/* text */}
          <div className=" pb-3 pt-1 flex relative">
            <div className="w-[50px] h-[50px] flex items-center justify-center">
                <img 
                  src="/assets(images for texting)/profile pic.jpeg" 
                  alt="profile pic" 
                  className="rounded-full w-[80%] cursor-pointer "
                />
            </div>
            <div className="flex flex-col p-1 font-bold box-border w-full ">
              <div>Title <br/> title</div>
              <div className="text-sm font-semibold pt-1 text-[#bfbcbc]">
                <div className="cursor-pointer hover:text-[#e3e0e0] transition duration-200">channel name</div>
                <span>1.1m Views</span>
                <span>  • 6 days ago</span>
              </div>
            </div>

             {/* more logo button */}
            <div className="pt-2 cursor-pointer ">
            <HiOutlineDotsVertical />
            </div>

            
          </div>

        </div>

        <div className="flex text-white box-border flex-col h-80 ">

            {/* video box */}
          <div className="w-full relative box-border cursor-pointer h-[195px] ">
            <img 
               src="/assets(images for texting)/hq720 (1).jpg" 
               alt="thumbnail" 
               className="w-full h-full rounded-xl"
            />
            <div className="absolute bottom-2 right-2 w-auto py-[2px] text-xs px-[4px] bg-[#00000078] rounded-md">
              00:00
            </div>
          </div>

          {/* text */}
          <div className=" pb-3 pt-1 flex relative">
            <div className="w-[50px] h-[50px] flex items-center justify-center">
                <img 
                  src="/assets(images for texting)/profile pic.jpeg" 
                  alt="profile pic" 
                  className="rounded-full w-[80%] cursor-pointer "
                />
            </div>
            <div className="flex flex-col p-1 font-bold box-border w-full ">
              <div>Title <br/> title</div>
              <div className="text-sm font-semibold pt-1 text-[#bfbcbc]">
                <div className="cursor-pointer hover:text-[#e3e0e0] transition duration-200">channel name</div>
                <span>1.1m Views</span>
                <span>  • 6 days ago</span>
              </div>
            </div>

             {/* more logo button */}
            <div className="pt-2 cursor-pointer ">
            <HiOutlineDotsVertical />
            </div>

            
          </div>

        </div>

        <div className="flex text-white box-border flex-col h-80 ">

            {/* video box */}
          <div className="w-full relative box-border cursor-pointer h-[195px] ">
            <img 
               src="/assets(images for texting)/hq720.jpg" 
               alt="thumbnail" 
               className="w-full h-full rounded-xl"
            />
            <div className="absolute bottom-2 right-2 w-auto py-[2px] text-xs px-[4px] bg-[#00000078] rounded-md">
              00:00
            </div>
          </div>

          {/* text */}
          <div className=" pb-3 pt-1 flex relative">
            <div className="w-[50px] h-[50px] flex items-center justify-center">
                <img 
                  src="/assets(images for texting)/profile pic.jpeg" 
                  alt="profile pic" 
                  className="rounded-full w-[80%] cursor-pointer "
                />
            </div>
            <div className="flex flex-col p-1 font-bold box-border w-full ">
              <div>Title <br/> title</div>
              <div className="text-sm font-semibold pt-1 text-[#bfbcbc]">
                <div className="cursor-pointer hover:text-[#e3e0e0] transition duration-200">channel name</div>
                <span>1.1m Views</span>
                <span>  • 6 days ago</span>
              </div>
            </div>

             {/* more logo button */}
            <div className="pt-2 cursor-pointer ">
            <HiOutlineDotsVertical />
            </div>

            
          </div>

        </div>
      </div>}


    </div>
  )
}

export default HomePage;