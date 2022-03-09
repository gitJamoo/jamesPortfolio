import TopNavigation from '../TopNavigation';
import { BsPlusCircleFill } from 'react-icons/bs';
// import { useState } from 'react';

const ContentContainer = () => {
  return (
    <div className='content-container'>
      <TopNavigation />
      <div className='content-list'>
        <James
          name='James'
          timestamp='one week ago'
          text={"Hi! Im James Smith, currently a Developer located in Tigard, Oregon."}
          image={"https://i.imgur.com/6Dys0j3.jpeg"}
        />
        <James name='James' timestamp='one week ago' text={`You can learn more about me by expanding the channel bar.`}           image={"https://i.imgur.com/6Dys0j3.jpeg"}
/>
        <Post name='Jill' timestamp='5 days ago' text={`Lorem.`} />
        <Post
          name='Ellie'
          timestamp='4 days ago'
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. `}
        />
        <Post
          name='Chris'
          timestamp='4 days ago'
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.
          
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.`}
        />
        <Post
          name='Claire'
          timestamp='2 days ago'
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. `}
        />
        <Post
          name='Albert'
          timestamp='22 hours ago'
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. ☺️ `}
        />
        <James
          name='James'
          timestamp='3 hours ago'
          text={`For now, read these reviews about me.`}
          image={"https://i.imgur.com/6Dys0j3.jpeg"}
        />
        <HogRider
          name='Hog Rider from SuperCell'
          timestamp='Just now'
          text={`HOG RIDAAAAAAAAAAAA`}
        />
        <Tigard
          name='Tigard High School'
          timestamp='Just now'
          text={`ya he complteted 4 years`}
        />
      </div>
      <BottomBar />
    </div>
  );
};

const BottomBar = () => (
  <div className='bottom-bar'>
    <PlusIcon />
    <input type='text' placeholder='Enter message...' className='bottom-bar-input' />
  </div>
);

const Post = ({ name, timestamp, text }) => {

  const seed = Math.round(Math.random() * 100);

  return (
    <div className={'post'}>
      <div className='avatar-wrapper'>
        <img src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`} alt='' className='avatar' />
      </div>

      <div className='post-content'>
        <p className='post-owner'>
          {name}
          <small className='timestamp'>{timestamp}</small>
        </p>
        <p className='post-text'>{text}</p>
      </div>
    </div>
  );
};

const James = ({ name, timestamp, text, image}) => {
  
  return (
    <div className={'post'}>
      <div className='avatar-wrapper'>
        <img src={image} alt='' className='avatar' />
      </div>

      <div className='post-content'>
        <p className='post-owner'>
          {name}
          <small className='timestamp'>{timestamp}</small>
        </p>
        <p className='post-text'>{text}</p>
      </div>
    </div>
  );
};

const HogRider = ({ name, timestamp, text }) => {
  
  return (
    <div className={'post'}>
      <div className='avatar-wrapper'>
        <img src={`data:image/jpeg;base64,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`} alt='' className='avatar' />
      </div>

      <div className='post-content'>
        <p className='post-owner'>
          {name}
          <small className='timestamp'>{timestamp}</small>
        </p>
        <p className='post-text'>{text}</p>
      </div>
    </div>
  );
};

const Tigard = ({ name, timestamp, text }) => {
  
  return (
    <div className={'post'}>
      <div className='avatar-wrapper'>
        <img src={`https://thspublications.com/wp-content/uploads/2018/11/Power-T.jpeg`} alt='' className='avatar' />
      </div>

      <div className='post-content'>
        <p className='post-owner'>
          {name}
          <small className='timestamp'>{timestamp}</small>
        </p>
        <p className='post-text'>{text}</p>
      </div>
    </div>
  );
};

const PlusIcon = () => (
  <BsPlusCircleFill
    size='22'
    className='text-green-500 dark:shadow-lg mx-2 dark:text-primary'
  />
);

export default ContentContainer;
