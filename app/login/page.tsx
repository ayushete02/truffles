import React from 'react';
import Navbar from '../Navbar/pages';

const Login = () => {
  return (<>
 <Navbar/>
            <section className="bg-[#F4F4F4] ">
              <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                
                <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-lg xl:p-0">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
                    <div className='text-center mb-12'>

                    <h1 className="text-[28px] font-bold  text-[#202020] md:text-2xl ">
                      Log in to your account
                    </h1>
                    <span className='text-[16px] text-[#667085]'>Welcome back! Please enter your details.</span>
                    </div>
                    <form className="space-y-4 md:space-y-6" action="#">
                      <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#374151] ">Email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Enter your email" required />
                      </div>
                      <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#374151] ">Password</label>
                        <input type="password" name="password" id="password" placeholder="*********" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required />
                      </div>
                      
                      <button type="submit" className="w-full text-white bg-[#194BFB] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                      <p className="text-sm font-light text-gray-500 text-center">
                        Don&apos;t have an account yet? <a href="#" className="font-medium text-[#194BFB] hover:underline ">Sign up</a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </section>
            </>
      
          );
}

export default Login;
