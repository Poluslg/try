import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Components/Home';
import Login from './Components/Login';
import About from './Components/About';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Dashboard from './Components/Dashboard';
import Contact from './Components/Contact';
import Newac from './Components/Newac';
import Policy from './Components/Policy';
import Forgotpassword from './Components/Forgotpassword';
import Errorpage from './Components/Errorpage';
import Profilesetting from './Components/Profilesetting';
import Loginprofile from './Components/Loginprofile';
import Createplaylist from './Components/Createplaylist';
import Yourlibrary from './Components/Yourlibrary';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "*",
    element: <Errorpage/>,
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/dashboard",
    element:<Dashboard/>
  },
  {
    path:"/policy",
    element:<Policy/>
  },
  {
    path:"/newac",
    element:<Newac/>
  },
  {
    path:'/forgotpassword',
    element:<Forgotpassword/>
  },
  {
    path:'/profilesetting',
    element:<Profilesetting/>
  },
  {
    path:'/loginprofile',
    element:<Loginprofile/>
  },
  {
    path:'/createplaylist',
    element:<Createplaylist/>
  },
  {
    path:'/yourlibrary',
    element:<Yourlibrary/>
  },


  
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

