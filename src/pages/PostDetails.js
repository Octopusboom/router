import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PostDetails = () => {
  const { postId } = useParams(); // Get the dynamic postId from the URL
  const navigate = useNavigate();

  return (
    <div>
      <h2>Post Details</h2>
      <p>Currently viewing post with ID: {postId}</p>
      {/* Relative navigation back to blog */}
      {/* "../" instructs React Router to navigate one level up in the route hierarchy, relative to the current route */}
      <button onClick={() => navigate("../")}>Back to Blog</button>
    </div>
  );
};

export default PostDetails;
