import React from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';
import thumbnail1 from '../../assets/thumbnails/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnails/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnails/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnails/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnails/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnails/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnails/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnails/thumbnail8.png';

const Feed = () => {
  return (
    <div className='feed'>
      <Link to={`video/20/1231`} className='card'>
        <img src={thumbnail1} alt='thumbnail' />
        <h2>Do not lose hope, nor be sad.</h2>
        <h3>Quran 3:139</h3>
        <p>15k views &bull; 2 days ago </p>
      </Link>
      <div className='card'>
        <img src={thumbnail2} alt='thumbnail' />
        <h2>Do not lose hope, nor be sad.</h2>
        <h3>Quran 3:139</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>
      <div className='card'>
        <img src={thumbnail3} alt='thumbnail' />
        <h2>Do not lose hope, nor be sad.</h2>
        <h3>Quran 3:139</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>
      <div className='card'>
        <img src={thumbnail4} alt='thumbnail' />
        <h2>Do not lose hope, nor be sad.</h2>
        <h3>Quran 3:139</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>
      <div className='card'>
        <img src={thumbnail5} alt='thumbnail' />
        <h2>Do not lose hope, nor be sad.</h2>
        <h3>Quran 3:139</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>
      <div className='card'>
        <img src={thumbnail6} alt='thumbnail' />
        <h2>Do not lose hope, nor be sad.</h2>
        <h3>Quran 3:139</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>
      <div className='card'>
        <img src={thumbnail7} alt='thumbnail' />
        <h2>Do not lose hope, nor be sad.</h2>
        <h3>Quran 3:139</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>
      <div className='card'>
        <img src={thumbnail8} alt='thumbnail' />
        <h2>Do not lose hope, nor be sad.</h2>
        <h3>Quran 3:139</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>
      <div className='card'>
        <img src={thumbnail1} alt='thumbnail' />
        <h2>Do not lose hope, nor be sad.</h2>
        <h3>Quran 3:139</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>
      <div className='card'>
        <img src={thumbnail2} alt='thumbnail' />
        <h2>Do not lose hope, nor be sad.</h2>
        <h3>Quran 3:139</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>
      <div className='card'>
        <img src={thumbnail3} alt='thumbnail' />
        <h2>Do not lose hope, nor be sad.</h2>
        <h3>Quran 3:139</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>
      <div className='card'>
        <img src={thumbnail4} alt='thumbnail' />
        <h2>Do not lose hope, nor be sad.</h2>
        <h3>Quran 3:139</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>
      <div className='card'>
        <img src={thumbnail5} alt='thumbnail' />
        <h2>Do not lose hope, nor be sad.</h2>
        <h3>Quran 3:139</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>
      <div className='card'>
        <img src={thumbnail6} alt='thumbnail' />
        <h2>Do not lose hope, nor be sad.</h2>
        <h3>Quran 3:139</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>
      <div className='card'>
        <img src={thumbnail7} alt='thumbnail' />
        <h2>Do not lose hope, nor be sad.</h2>
        <h3>Quran 3:139</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>
      <div className='card'>
        <img src={thumbnail8} alt='thumbnail' />
        <h2>Do not lose hope, nor be sad.</h2>
        <h3>Quran 3:139</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>
    </div>
  );
};

export default Feed;
