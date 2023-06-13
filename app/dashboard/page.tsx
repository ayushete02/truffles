import React from 'react';
import HomeNavbar from '../components/Header/HomeNavbar_';
import AssetTable from '../components/AssetTable';
import Slider from '../components/Slider';

const Dashboard = () => {

  return (<div className='bg-gradient-to-b from-[#F6F7FB] to-[#E9EEFF]'>
    <HomeNavbar />
    <div className="relative min-h-[94vh] md:flex mt-[6vh]" data-dev-hint="container">
      <Slider />
      <AssetTable />
    </div>
  </div>
  );
}

export default Dashboard;
