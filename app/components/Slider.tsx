import React from 'react'
import help from '../components/Icons/help.svg'
import home from "../components/Icons/home-2.svg"
import setting from "../components/Icons/settings.svg"
import chart from '../components/Icons/Chart.svg'
import card from "../components/Icons/card.svg"
import Image from 'next/image'

const Slider = () => {
  return (<><input type="checkbox" id="menu-open" className="hidden" />
    <label htmlFor="menu-open" className="z-50 absolute right-2 top-2 shadow-lg rounded-full p-2 bg-gray-100 text-gray-600 md:hidden" data-dev-hint="floating action button">
      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </label>
   
    <aside id="sidebar" className="z-50 bg-white text-[#718096] md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto" data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation">
      <div className="z-50 flex flex-col space-y-6" data-dev-hint="optional div for having an extra footer navigation">

        <nav data-dev-hint="main navigation">
          <a href="#" className="flex items-center space-x-2 py-3  px-4 mx-4 rounded-xl my-2 transition duration-200 bg-[#E3E9FF] text-[#194BFB]">
            <Image src={home} alt='' />
            <span>Assets</span>
          </a>

          <a href="#" className="flex items-center space-x-2 py-3 px-4 mx-4 rounded-xl my-2 transition duration-200 hover:bg-[#E3E9FF] hover:text-[#194BFB]">
            <Image src={card} alt='' />
            <span>Swap</span>
          </a>

          <a href="#" className="flex items-center space-x-2 py-3 px-4 mx-4 rounded-xl my-2 transition duration-200 hover:bg-[#E3E9FF] hover:text-[#194BFB]">
            <Image src={chart} alt='' />
            <span>Send/Receive</span>
          </a>

          <a href="#" className="flex items-center space-x-2 py-3 px-4 mx-4 rounded-xl my-2 transition duration-200 hover:bg-[#E3E9FF] hover:text-[#194BFB]">
            <Image src={chart} alt='' />
            <span>Profile</span>
          </a>

        </nav>
      </div>
      <nav data-dev-hint="second-main-navigation or footer navigation">
        <a href="#" className="flex items-center space-x-2 py-3 px-4 mx-4 rounded-xl my-2 transition duration-200 hover:bg-[#E3E9FF] hover:text-[#194BFB]">
          <Image src={help} alt='' />
          <span>Get Help</span>
        </a>

        <a href="#" className="flex items-center space-x-2 py-3 px-4 mx-4 rounded-xl my-2 transition duration-200 hover:bg-[#E3E9FF] hover:text-[#194BFB]">
          <Image src={setting} alt='' />
          <span>Setting</span>
        </a>


      </nav>
    </aside>
    </>
    
  )
}

export default Slider;