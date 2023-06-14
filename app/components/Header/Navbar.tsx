import Image from 'next/image'
import React from 'react'
import logo from '../../../public/Logo.svg'
import Link from 'next/link'
import router from 'next/router'

const Navbar = () => {
    return (
        <nav className="bg-white  fixed w-full z-20 top-0 left-0 border-b border-gray-200 ">
            <div className="md:mx-10 flex flex-wrap items-center justify-between p-4">
                <Link href="/login" className="flex items-center">
                    <Image src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
                </Link>
                <div className="flex ">
                    <Link href={"/login"} className=" text-black  focus:outline-none focus:ring-blue-300 font-medium text-sm px-6 py-2 text-left mr-3 md:mr-0">Login</Link>
                    <Link href={"/signup"} className="text-white bg-[#194BFB] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">Sign Up</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
