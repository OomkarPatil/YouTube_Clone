import { useState, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";

const Home = lazy(() => import("./Pages/Home"));
const Video = lazy(() => import("./Pages/Video"));
const Profile = lazy(() => import("./Pages/Profile"));
const Upload = lazy(() => import("./Pages/Upload"));
const Register = lazy(() => import("./Pages/Register"));
const Login = lazy(() => import("./Pages/Login"));
const ErrorPage = lazy(() => import("./Pages/ErrorPage"));

function App() {
  const [sideNavBar, setSideNavBar] = useState(true);

  const setSideNavBarFunc = (value) => {
    setSideNavBar(value);
  };

  return (
    <>
      <Navbar setSideNavBarFunc={setSideNavBarFunc} sideNavBar={sideNavBar} />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home sideNavBar={sideNavBar} />} />
          <Route path="/watch/:id" element={<Video />} />
          <Route path="/user/:id" element={<Profile sideNavBar={sideNavBar} />} />
          <Route path="/:id/upload" element={<Upload />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
      <div className="md:hidden fixed bottom-0 left-0 w-full">
        <BottomNav />
      </div>
    </>
  );
}

export default App;
