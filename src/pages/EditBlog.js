import React, { useState, useEffect } from 'react';
import { useOutletContext, useParams, useNavigate } from 'react-router-dom';
import { updateBlog } from '../store/BlogSlice';

function EditBlog() {
  const { id } = useParams();
  const { blogs, dispatch } = useOutletContext();
  const navigate = useNavigate();

  const blogdata = blogs.find((el) => el.id === id);
  const [editData, setEditData] = useState(blogdata || { title: '', content: '', tags: '' });

  useEffect(() => {
    if (blogdata) setEditData(blogdata);
  }, [blogdata]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const EditHandler = (e) => {
    e.preventDefault();
    dispatch(updateBlog(editData))
      .unwrap()
      .then(() => {
        alert('Blog updated successfully!');
        navigate('/'); // يمكنكِ تغييره لمسار صفحة الـ BlogList
      })
      .catch((err) => {
        alert('Error updating blog: ' + err);
      });
  };

  return (
    <div className="add-page">
      <div className="title">
        <h1>Edit Blog</h1>
      </div>

      {blogdata ? (
        <div className="add-blog">
          <form onSubmit={EditHandler}>
            <input
              type="text"
              name="title"
              placeholder="Blog Title"
              required
              value={editData.title}
              onChange={handleChange}
            />
            <textarea
              className="input-2"
              name="content"
              placeholder="Blog Content"
              value={editData.content}
              onChange={handleChange}
              required
            ></textarea>
            <input
              type="text"
              name="tags"
              placeholder="Tags (comma separated)"
              value={editData.tags}
              onChange={handleChange}
              required
            />
            <button type="submit" className="button">Update</button>
          </form>
        </div>
      ) : (
        <p>There is no blog</p>
      )}
    </div>
  );
}

export default EditBlog;
