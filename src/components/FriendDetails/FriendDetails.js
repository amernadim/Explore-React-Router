import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
  const friend = useLoaderData();
  // console.log(friend);
  return (
    <div>
      <h1>Details About : {friend.name}</h1>
      <p>Phone : {friend.phone}</p>
      <h2>Everythins You Need to Know about this person</h2>
    </div>
  );
};

export default FriendDetails;