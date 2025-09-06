import React from 'react';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/Sidebar/Sidebar';

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };
  return (
    <div className='app-layout'>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className='content-area'>
        <Sidebar isOpen={sidebarOpen} />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
