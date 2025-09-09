import React from 'react';
import './PlayVideo.css';
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';
import { useOutletContext } from 'react-router-dom';

const PlayVideo = () => {
  const { sidebarOpen } = useOutletContext();
  return (
    <div className={`play-video ${sidebarOpen ? '' : 'large-play-video'}`}>
      <video src={video1} controls autoPlay></video>
      <h3>Don not lose hope, nor be sad.</h3>
      <div className='play-video-info'>
        <p>15237 Views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={like} alt='Likes' /> 125
          </span>
          <span>
            <img src={dislike} alt='Dislikes' /> 2
          </span>
          <span>
            <img src={share} alt='Share' /> Share
          </span>
          <span>
            <img src={save} alt='Save' /> Save
          </span>
        </div>
      </div>
      <hr />
      <div className='publisher'>
        <img src={jack} alt='Publisher avatar' />
        <div>
          <p>Quranic Quotes</p>
          <span>10M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className='video-description'>
        <p>Verse 139 from Surah Ali Imran</p>
        <p>
          In other words, the object was to impress upon Muslims that they
          should not waste their time and energy by feeling sorry for whatever
          mistakes they have made in the past. Instead, they should devote to
          ways and means which make things right for them in the future.
        </p>
        <hr />
        <h4>130 Comments</h4>
        <div className='comment'>
          <img src={user_profile} alt='user profile pic' />
          <div>
            <h3>
              Ahmad Alex <span>1 day ago</span>
            </h3>
            <p>
              The events of the Battle of Uhud, from the beginning to the end,
              are a testimony to all these considerations.
            </p>
            <div className='comment-action'>
              <img src={like} alt='Likes' />
              <span>21</span>
              <img src={dislike} alt='Dislikes' />
            </div>
          </div>
        </div>
        <div className='comment'>
          <img src={user_profile} alt='user profile pic' />
          <div>
            <h3>
              Ahmad Alex <span>1 day ago</span>
            </h3>
            <p>
              The events of the Battle of Uhud, from the beginning to the end,
              are a testimony to all these considerations.
            </p>
            <div className='comment-action'>
              <img src={like} alt='Likes' />
              <span>21</span>
              <img src={dislike} alt='Dislikes' />
            </div>
          </div>
        </div>
        <div className='comment'>
          <img src={user_profile} alt='user profile pic' />
          <div>
            <h3>
              Ahmad Alex <span>1 day ago</span>
            </h3>
            <p>
              The events of the Battle of Uhud, from the beginning to the end,
              are a testimony to all these considerations.
            </p>
            <div className='comment-action'>
              <img src={like} alt='Likes' />
              <span>21</span>
              <img src={dislike} alt='Dislikes' />
            </div>
          </div>
        </div>
        <div className='comment'>
          <img src={user_profile} alt='user profile pic' />
          <div>
            <h3>
              Ahmad Alex <span>1 day ago</span>
            </h3>
            <p>
              The events of the Battle of Uhud, from the beginning to the end,
              are a testimony to all these considerations.
            </p>
            <div className='comment-action'>
              <img src={like} alt='Likes' />
              <span>21</span>
              <img src={dislike} alt='Dislikes' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
