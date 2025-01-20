import React from 'react'
import hero from '../Assets/bg-home.svg'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center bg-blue-300 h-screen'>
      <div className="font-semibold font-sans text-4xl text-center">
        Welcome to Conference management System</div>
      <Link to='/login' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-lg px-5 py-2.5 me-2 mb-2 mt-5">Login</Link>
      </div>
    </div>
  )
}

export default Home