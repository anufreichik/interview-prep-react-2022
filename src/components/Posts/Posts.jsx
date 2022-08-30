import React from 'react';
import './posts.css'
const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <ul className='list-group-container'>
            {posts.map(post => (
                <li key={post.id} className='list-group-item'>
                    {post.id}- {post.title}
                </li>
            ))}
        </ul>
    );
};

export default Posts;
