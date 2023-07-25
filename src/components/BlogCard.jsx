import React from 'react'

const BlogCard = () => {
  return (
    <div className="blog">
        <img className='img-reponsive' src="./images/blog-1.jpg" alt="" />
        <div className='p-3'>
            <p className='blog-date'>25 July 2023</p>
             <h6 >A beautiful Sunday Morning</h6>
             <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Mollitia magni veniam aspernatur quas omnis ex, pariatur, 
                laborum rerum ab</p>
            <button className='button'>Read More &raquo; </button>
        </div>
    </div>
  )
}

export default BlogCard