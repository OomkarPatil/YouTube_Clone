import { useState } from "react"
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import BottomNav from "./components/BottomNav";
import { Route, Routes } from "react-router-dom";
import Video from "./Pages/Video";
import Profile from "./Pages/Profile";
import UploadPage from "./Pages/UploadPage";
import Register from "./Pages/Register";

import Login from "./Pages/Login";


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
        <Route path="/user/:id" element={ <Profile sideNavBar={sideNavBar}/> }/>
        <Route path="/:id/upload" element={ <UploadPage/> }/>
        <Route path="/register" element={ <Register/> }/>
        <Route path="/login" element={ <Login/> }/>
      </Routes>
      <div className="md:hidden fixed bottom-0 left-0 w-full">
        <BottomNav />
      </div>
    </>
  )
}

export default App;
