
import HomePage from '../components/HomePage'
import SideBar from '../components/SideBar'


const Home = ({sideNavBar}) => {
  return (
      <div className="flex h-screen">
    {/* Sidebar for larger screens */}
    <aside className={`${sideNavBar ? 'w-[250px]' : 'w-20'} hidden md:block transition-width duration-300`}>
      <SideBar sideNavBar={sideNavBar} />
    </aside>

    {/* Main content area */}
    <main className="mt-[57px] p-0 flex-1 overflow-x-scroll scrollbar-thin scrollbar-thumb-[#4a4949] scrollbar-track-[#141414]  bg-[#141414] ">
      <HomePage sideNavBar={sideNavBar}/>
    </main>
   </div>
  )
}

export default Home;

