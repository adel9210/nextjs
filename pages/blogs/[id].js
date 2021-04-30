import React from 'react'
import BlogItem from '../../components/BlogItem'

const Blog = ({ blog }) => {
    return (
        <div>
            <BlogItem blog={blog} />
        </div>
    )
}

export default Blog;

export const getStaticPaths = async ()=>{
   
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const blogs = await res.json();
    const paths = blogs.map(blog => ({ params: { id: blog.id.toString() }}))

    return {
       paths, fallback: false
    }
}


// This also gets called at build time
export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const blog = await res.json()

    return { props: { blog } }
  }