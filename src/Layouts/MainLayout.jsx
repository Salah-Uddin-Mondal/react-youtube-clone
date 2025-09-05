import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/Sidebar/Sidebar';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
    </>
  );
};

export default MainLayout;
