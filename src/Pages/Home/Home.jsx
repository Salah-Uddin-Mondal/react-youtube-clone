import React from 'react';
import './Home.css';
import Feed from '../../Components/Feed/Feed';
import { useOutletContext } from 'react-router-dom';

const Home = () => {
  const { sidebarOpen } = useOutletContext();
  return (
    <div className={`container ${sidebarOpen ? '' : 'large-container'}`}>
      <Feed />
    </div>
  );
};

export default Home;
