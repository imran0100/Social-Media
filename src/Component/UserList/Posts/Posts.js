// Posts.js

import React from 'react';
import './Posts.css';

const postsData = [
  {
    id: 1,
    title: 'Post 1',
    content: 'This is the content of Post 1. Lorem ipsum dolor sit amet.',
    author: 'John Doe',
    date: '2024-01-10',
  },
  {
    id: 2,
    title: 'Post 2',
    content: 'This is the content of Post 2. Consectetur adipiscing elit.',
    author: 'Jane Doe',
    date: '2024-01-11',
  },
  {
    id: 3,
    title: 'Post 3',
    content: 'This is the content of Post 3. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Alice Smith',
    date: '2024-01-12',
  },
  {
    id: 4,
    title: 'Post 4',
    content: 'This is the content of Post 4. Ut enim ad minim veniam.',
    author: 'Bob Johnson',
    date: '2024-01-13',
  },
  {
    id: 5,
    title: 'Post 5',
    content: 'This is the content of Post 5. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    author: 'Eva Williams',
    date: '2024-01-14',
  },
];

const Posts = () => {
  return (
    <div className="posts-container">
    
      <div className="posts-list">
        {postsData.map(post => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div className="post-details">
              <p>
                <strong>Author:</strong> {post.author}
              </p>
              <p>
                <strong>Date:</strong> {post.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
