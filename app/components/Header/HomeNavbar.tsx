"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../../public/Logo.svg'
import wallet from '../Icons/Vector.svg'
import Link from 'next/link';
declare var window: any

const HomeNavbar = () => {
    const [address, setaddress] = useState('');
    const [bol_address, setBol_address] = useState(false);

    async function ConnectWallet() {
        // Check if MetaMask is installed
        if (typeof window.ethereum !== 'undefined') {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setaddress(accounts[0]);
            console.log('Connected account address:', address);
            setBol_address(true);
        } else {
            console.error('MetaMask is not installed');
        }
    }

    return (
        <nav className="bg-white  fixed w-full z-50 top-0 left-0 border-b border-gray-200 ">
            <div className=" flex flex-wrap items-center justify-between p-4">
              
                <Link href="/login" className="flex items-center">
                    <Image src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
                </Link> 
                <div className="flex md:order-2">
                    {bol_address == true  ? (<button type="button" className="flex text-white bg-[#194BFB] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0" >
                        {address.slice(0, 6) + '...' + address.slice(address.length - 4, address.length)
                        } </button>) : (<button type="button" className="flex text-white bg-[#194BFB] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0" onClick={ConnectWallet}>
                            <Image src={wallet} className='mr-2' alt='' /> Connect Wallet
                        </button>)
                    }
                </div>

            </div>
        </nav>
    )
}

export default HomeNavbar
