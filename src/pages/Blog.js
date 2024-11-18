import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Blog = () => {
  const posts = [
    { id: 1, title: "React Basics" },
    { id: 2, title: "React Router Explained" },
    { id: 3, title: "Advanced React Patterns" },
  ];

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {/* Relative path to post details */}
            <Link to={`${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      {/* When you define nested routes, the <Outlet /> component determines where the child components 
      should be rendered in the parent component's layout. 
      Without <Outlet />, child routes wouldn't have a designated place to render. */}
      <Outlet /> {/* Placeholder for nested PostDetails route */}
    </div>
  );
};

export default Blog;
