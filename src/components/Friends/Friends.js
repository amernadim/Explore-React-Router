import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';
import './Friends.css';

const Friends = () => {
  const friends = useLoaderData();
  return (
    <div>
      <h3>I have so many Friends {friends.length}</h3>
     <div className=''>
     {
        friends.map(friend => <Friend
        key={friend.id}
        friend={friend}
        ></Friend>)
      }
     </div>
    </div>
  );
};

export default Friends;