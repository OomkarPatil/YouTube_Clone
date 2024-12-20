import { useState } from "react"
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import BottomNav from "./components/BottomNav";
import { Route, Routes } from "react-router-dom";
import Video from "./Pages/Video";


function App() {
  const [sideNavBar, setSideNavBar] = useState(true);
  
  const setSideNavBarFunc = (value)=>{
    setSideNavBar(value)
  };
 
  return (
    <>
     <Navbar setSideNavBarFunc={setSideNavBarFunc} sideNavBar={sideNavBar}/>
      <Routes>
        <Route path="/" element={ <Home sideNavBar={sideNavBar}/>}/>
        <Route path="/watch/:id" element={ <Video/> }/>
      </Routes>
      <div className="md:hidden fixed bottom-0 left-0 w-full">
        <BottomNav />
      </div>
    </>
  )
}

export default App
