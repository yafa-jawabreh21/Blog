import { NavLink, useOutletContext, useParams } from "react-router-dom";
import { deleteBlog } from "../store/BlogSlice";
const Blog = () => {
  const { id } = useParams();
  const { dispatch, blogs } = useOutletContext();
 const filteration = (id) => {
  const filterdata = blogs.filter((el) => el.id === id);
  return filterdata;
};
const blogdata = filteration(id)
  return (
    <>
      {blogdata? blogdata.map((el,indx)=>(
        <div style={{"paddingTop":"3%"}} key={indx}>
        <div className="Blog-Info">
        <h1>{el.title}</h1>
        <p>Posted on: {el.timestamp}</p>
        <div className='card-tags'>
          {el.tags && el.tags.split(',').map((tag, indx) => (
                <div className='tag' key={indx}>#{tag.trim()}</div>
            ))}
            </div>
        <hr/>
        <p className="para">{el.content}</p>
        <hr/>
        <div className="BlogButtons">
          <NavLink className="btn1" to={`/EditBlog/${id}`}>Edit Blog</NavLink>
          <NavLink className="btn2" onClick={() => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      dispatch(deleteBlog(el.id));
    }
  }}>Delete Blog</NavLink>
        </div>
      </div>
      </div>
      )):"There is no Blog"}
    </>
  )
}
export default Blog