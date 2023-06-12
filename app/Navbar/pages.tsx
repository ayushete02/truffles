import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-white  fixed w-full z-20 top-0 left-0 border-b border-gray-200 ">
            <div className="mx-10 flex flex-wrap items-center justify-between p-4">
                <a href="https://flowbite.com/" className="flex items-center">
                    <img src="./logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                </a>
                <div className="flex md:order-2">
                    <a type="button" className=" text-black cursor-pointer  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center mr-3 md:mr-0">Login</a>
                    <button type="button" className="text-white bg-[#194BFB] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">Sign Up</button>

                </div>

            </div>
        </nav>
    )
}

export default Navbar
