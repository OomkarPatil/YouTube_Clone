import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="flex flex-col bg-black text-white items-center justify-center h-screen">
    <img src="https://res.cloudinary.com/dzbnjm4eg/image/upload/v1735474810/b48lycsvxykd7gscnrlg.jpg" />
    <p className="text-lg">The page you’re looking for doesn’t exist.</p>
    <Link to={'/'} className='bg-[#141414] rounded-xl m-3 px-3 py-2 cursor-pointer hover:bg-[#242323]'>
        Back to Home
    </Link>
  </div>
  )
}

export default ErrorPage