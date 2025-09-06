import React from 'react';
import './Sidebar.css';
import home from '../../assets/home.png';
import game_icon from '../../assets/game_icon.png';
import automobiles from '../../assets/automobiles.png';
import sports from '../../assets/sports.png';
import entertainment from '../../assets/entertainment.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
import jack from '../../assets/jack.png';
import simon from '../../assets/simon.png';
import tom from '../../assets/tom.png';
import megan from '../../assets/megan.png';
import cameron from '../../assets/cameron.png';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? '' : 'collapsed-sidebar'}`}>
      <div className='shortcut-links'>
        <div className='side-link'>
          <img src={home} alt='' />
          {isOpen && <p>Home</p>}
        </div>
        <div className='side-link'>
          <img src={game_icon} alt='' />
          {isOpen && <p>Gaming</p>}
        </div>
        <div className='side-link'>
          <img src={automobiles} alt='' />
          {isOpen && <p>Automobiles</p>}
        </div>
        <div className='side-link'>
          <img src={sports} alt='' />
          {isOpen && <p>Sports</p>}
        </div>
        <div className='side-link'>
          <img src={entertainment} alt='' />
          {isOpen && <p>Entertainment</p>}
        </div>
        <div className='side-link'>
          <img src={tech} alt='' />
          {isOpen && <p>Technology</p>}
        </div>
        <div className='side-link'>
          <img src={music} alt='' />
          {isOpen && <p>Music</p>}
        </div>
        <div className='side-link'>
          <img src={blogs} alt='' />
          {isOpen && <p>Blogs</p>}
        </div>
        <div className='side-link'>
          <img src={news} alt='' />
          {isOpen && <p>News</p>}
        </div>
        <hr />
      </div>
      <div className='subscribed-list'>
        {isOpen && <h3>Subscribed</h3>}
        <div className='side-link'>
          <img src={jack} alt='jack' />
          {isOpen && <p>Owen Jones</p>}
        </div>
        <div className='side-link'>
          <img src={simon} alt='simon' />
          {isOpen && <p>Merriam Music</p>}
        </div>
        <div className='side-link'>
          <img src={tom} alt='tom' />
          {isOpen && <p>Gamers Nexus</p>}
        </div>
        <div className='side-link'>
          <img src={megan} alt='megan' />
          {isOpen && <p>Hardware Unboxed</p>}
        </div>
        <div className='side-link'>
          <img src={cameron} alt='cameron' />
          {isOpen && <p>Traversy Media</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
