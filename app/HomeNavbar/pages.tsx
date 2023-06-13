"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../public/Logo.svg'
import wallet from '../components/Icons/Vector.svg'
import { ethers } from 'ethers';
import Link from 'next/link';
declare var window: any

const HomeNavbar = () => {
    const [address, setaddress] = useState('');

    async function ConnectWallet() {
        // Check if MetaMask is installed
        if (typeof window.ethereum !== 'undefined') {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setaddress(accounts[0]);
            console.log('Connected account address:', address);
        } else {
            console.error('MetaMask is not installed');
        }
    }

    return (
        <nav className="bg-white  fixed w-full z-50 top-0 left-0 border-b border-gray-200 ">
            <div className="mx-10 flex flex-wrap items-center justify-between p-4">
                <Link href="/login" className="flex items-center">
                    <Image src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
                </Link>
                <div className="flex md:order-2">
                    {address == '' ? (<button type="button" className="flex text-white bg-[#194BFB] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0" >
                        {address} </button>) : (<button type="button" className="flex text-white bg-[#194BFB] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0" onClick={ConnectWallet}>
                            <Image src={wallet} className='mr-2' alt='' /> Connect Wallet
                        </button>)
                    }
                </div>

            </div>
        </nav>
    )
}

export default HomeNavbar
