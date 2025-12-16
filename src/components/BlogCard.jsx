import React from 'react'
import { NavLink } from 'react-router-dom'
function BlogCard({blogs}) {
  console.log(blogs)
  return (
    <>
      {blogs? blogs.map((el)=>{
        return <div className='card' key={el.id}>
          <div className='card-title'>
            <h1>{el.title}</h1>
          </div>
          <div className='card-description'>
            <p>{el.content}</p>
          </div>
          <div className='card-tags'>
          {el.tags && el.tags.split(',').map((tag, indx) => (
                <div className='tag' key={indx}>#{tag.trim()}</div>
            ))}
            </div>

          <hr/>
          <div className='card-button'>
            <NavLink to={`/blog/${el.id}`}>Read More</NavLink>
          </div>
        </div>
      }) : ""}
    </>
  )
}

export default BlogCard
