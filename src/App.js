import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import { useSelector ,useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBlogs } from "./store/BlogSlice";
function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getBlogs())
  },[dispatch])

  const {blogs} = useSelector((state)=> state.blog)
  console.log(blogs)
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <Outlet context={{dispatch , blogs}}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
