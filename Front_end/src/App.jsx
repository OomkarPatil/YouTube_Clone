import { useState } from "react"
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"


function App() {
  const [sideNavBar, setSideNavBar] = useState(true);
  
  const setSideNavBarFunc = (value)=>{
    setSideNavBar(value)
  };
 
  return (
    <>
      <Navbar setSideNavBarFunc={setSideNavBarFunc} sideNavBar={sideNavBar}/>
      <Home sideNavBar={sideNavBar}/>
    </>
  )
}

export default App
