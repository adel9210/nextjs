import React from 'react'
import BlogItem from './BlogItem'
import blogStyle from '../styles/Blog.module.css';

const BlogList = ({ blogs }) => {
    return (
        <div className={blogStyle.container}>
            <h1>Hello From Blog List</h1>
            {blogs.map(item => <BlogItem blog={item} />)}
        </div>
    )
}

export default BlogList;
