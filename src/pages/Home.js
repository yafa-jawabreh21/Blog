import React, { useRef, useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import BlogCard from "../components/BlogCard";

const Home = () => {
  const { blogs } = useOutletContext();
  const searchInput = useRef("");
  const [data, setData] = useState(blogs || []);

  useEffect(() => {
    setData(blogs); // تحديث البيانات عند تغيّر المدونات
  }, [blogs]);

  const focusInput = () => {
    const query = searchInput.current.value.toLowerCase();
    const filtered = blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(query) ||
        blog.tags.toLowerCase().includes(query)
    );
    setData(filtered);
  };

  return (
    <div className="home">
      <h1>Discover Your Favorite Blogs</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search blog by title or tags..."
          ref={searchInput}
          onChange={focusInput}
          className="search"
        />
      </div>

      <div className="cards">
        <BlogCard blogs={data} />
      </div>
    </div>
  );
};

export default Home;
