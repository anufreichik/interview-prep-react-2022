import React from 'react';
import Posts from "./Posts";
import Pagination from '../Utils/Pagination'
import {useEffect, useState} from "react";
import axios from "axios";
import './blogposts.css'

const BlogPosts = () => {
    const [currentPage, setCurrentPage]=useState(1);
    const [posts,setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const POSTS_PER_PAGE=10;

    const handlePageChange = (ind)=>{
        setCurrentPage(ind+1);
    }

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data);
            setLoading(false);
        };

        fetchPosts();
    }, []);

    // Get current posts
    const indexOfLastPost = currentPage * POSTS_PER_PAGE;
    const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const size =Math.ceil(posts.length / POSTS_PER_PAGE);

    return (
        <div className='blog-posts-container'>
            <Posts posts={currentPosts}/>
            <Pagination size={size} onChange={handlePageChange}/>
        </div>
    );
};

export default BlogPosts;
