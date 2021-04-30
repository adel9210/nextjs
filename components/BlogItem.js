import React from 'react'
import Link from 'next/link'
import blogStyle from '../styles/Blog.module.css';


const BlogItem = ({blog}) => {
    return (
        <div className={blogStyle.blog}>
           <Link href={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
           </Link> 
            <p>{blog.body}</p>
        </div>
    )
}

export default BlogItem
