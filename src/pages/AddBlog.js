import React, { useState } from 'react'
import { insertBlog } from '../store/BlogSlice'
import { useNavigate, useOutletContext } from 'react-router-dom';
function AddBlog() {
  const { dispatch } = useOutletContext();
  const [data,setData] = useState({title:"" , content:"" , tags:""})
  const navigate = useNavigate();
  const addHandler = (e)=>{
    e.preventDefault()
   dispatch(insertBlog(data))
         .unwrap()
         .then(() => {
           alert('Blog Added successfully!');
           navigate('/'); // يمكنكِ تغييره لمسار صفحة الـ BlogList
         })
         .catch((err) => {
           alert('Error updating blog: ' + err);
         });
  }
  const inputHandler = (e)=>{
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }
  return (
    <div className='add-page'>
      <div className='title'>
        <h1>Create New Blog</h1>
      </div>
      <div className='add-blog'>
        <form onSubmit={addHandler}>
          <input type='text' placeholder='Blog Title' required name='title' value={data.title} onChange={inputHandler}></input>
          <input type='text' className='input-2' placeholder='Blog Content' value={data.content} name='content' required onChange={inputHandler}></input>
          <input type='text' placeholder='Tags (comma separated)' name='tags' value={data.tags} required onChange={inputHandler}></input>
          <button type='submit' className='button'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddBlog
