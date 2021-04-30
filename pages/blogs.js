import React from 'react'
import BlogList from '../components/BlogList'

const blogs = ({ blogs }) => {
    
    return (
        <div>
            <BlogList blogs={blogs} />
            
        </div>
    )
}

export default blogs;

export const getStaticProps = async (context) => {
    console.log(context)
    debugger
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const blogs = await res.json();

    return {
        props: {
            blogs
        }
    }
}
