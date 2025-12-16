import React from 'react'
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <div className='nav-container'>
    <nav>
        <div className="Logo">
            <h3>BlogApp</h3>
        </div>
        <div className="pages">
            <ul>
            <li>
                <NavLink  to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="AddBlog" >Add Blog</NavLink>
            </li>
        </ul>
        </div>
    </nav>
    </div>
  )
}

export default Navbar;
