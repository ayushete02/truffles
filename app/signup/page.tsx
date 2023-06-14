"use client";
import React from 'react';
import Navbar from '../components/Header/Navbar';
import Link from 'next/link';
import { useState } from 'react';

const Signup = () => {

    const [formData, setFormData] = useState({
        "email": "",
        "password": "",
        "name": "",
        "country": "",
        "company": "",
        "phone": 12345678
      });
    
      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        // console.log(JSON.stringify(formData));
      };
    
      const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        // remove
        // Router.replace('/login');
        event.preventDefault();
    
        try {
          const response = await fetch('https://truffles-assignment-backend-production.up.railway.app/api/v1/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
          console.log(JSON.stringify({"email":"qwe@erfg","password":"jkl","name":"dcv","country":"","company":"sdfv","phone":12345678}))
          const data = await response.json();
    
          console.log('Response:', data);
          if (response.ok) {
            alert('Success: ' + data.msg);
            window.location.href ="/login";
          } else {
            alert('Error: ' + data.msg);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

    return (<div className='bg-[#F4F4F4]'>
        <Navbar />
        <section className="">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">

                <div className="w-full bg-white rounded-lg md:my-[200px] sm:max-w-lg xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
                        <div className='text-center mb-12'>

                            <h1 className="text-[28px] font-bold  text-[#202020] md:text-2xl ">
                                Sign Up
                            </h1>
                            <span className='text-[16px] text-[#667085]'>Create an account to get started</span>
                        </div>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#374151] ">Email</label>
                                <input type="email" onChange={handleInputChange} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Enter your email" required />
                            </div>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-[#374151] ">Name</label>
                                <input type="text" onChange={handleInputChange} name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Enter your name" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#374151] ">Password</label>
                                <input type="password" onChange={handleInputChange} name="password" id="password" placeholder="*********" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required />
                            </div>
                            <div>
                                <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 ">Country of Residence</label>
                                <select id="country" name='country'  onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>France</option>
                                    <option>Germany</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="company" className="block mb-2 text-sm font-medium text-[#374151] ">Company Name</label>
                                <input type="Company Name" onChange={handleInputChange} name="company" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="United States" required />
                            </div>
                            <div>
                                <label htmlFor="phone"  className="block mb-2 text-sm font-medium text-[#374151] ">Mobile Number</label>
                                <div className='flex'>
                                    <select id="dropdown-button" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 ">US 
                                        <option>US</option>
                                        <option>UK</option>
                                        <option>FR</option>
                                        <option>GR</option>
                                    </select>

                                    <div className="relative w-full">
                                        <input type="number" id="phone" name='phone' onChange={handleInputChange}  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="+1 (555) 987-6543" required />

                                    </div>
                                </div>
                            </div>
            
                            <button type="submit" className="w-full text-white bg-[#194BFB] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create Account</button>
                            <p className="text-sm font-light text-gray-500 text-center">
                                
                                By signing up, you agree to our Terms of use & privacy policy <br />
                                Already have an account <Link href="/login" className="font-medium text-[#194BFB] hover:underline ">Sign in</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>

    );
}

export default Signup;
