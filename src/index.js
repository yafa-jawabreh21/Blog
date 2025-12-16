import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Blog from "./pages/Blog"
import EditBlog from './pages/EditBlog';
import AddBlog from "./pages/AddBlog";
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>404 - Page not found</div>,
    children: [
      { index: true, element: <Home /> },
      { path: 'blog/:id', element: <Blog /> },
      { path: 'EditBlog/:id', element: <EditBlog /> },
      { path: 'AddBlog', element: <AddBlog /> },
    ],
  },
]);

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

reportWebVitals();
