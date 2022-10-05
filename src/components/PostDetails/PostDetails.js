import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
  const post = useLoaderData();
  const {id,title,body,userId} = post;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/friend/${userId}`)
  }
  return (
    <div>
      <h3>Details About Post : {id}</h3>
      <h3>Title : {title}</h3>
      <p>{body}</p>
      <button onClick={handleNavigate}>Get The Author</button>
    </div>
  );
};

export default PostDetails;