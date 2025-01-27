import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx'; 
import { createBrowserRouter, RouterProvider } from 'react-router'; 
import Signup from './Components/Auth/SignupPage/Signup.jsx';
import Signin from './Components/Auth/SigninPage/Signin.jsx';
import SecondHeader from './Components/Header/SecondHeader.jsx';
import { ErrorPage } from './Components/ErrorPage/ErrorPage.jsx';
import StaysPage from './Components/StaysPage/StaysPage.jsx';
import HeroSection from './Components/StaysPage/HomePage/HeroSection/HeroSection.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  
    children: [
{
  path:"/",
  element:<StaysPage/>,
  
},
{
  path:"/HeroSection",
  element:<HeroSection/>,
},




     
    ],


    
  },


  {
    path: "Signup",  
     element: <Signup />,
  },
  {
    path: "Signin",  
    element: <Signin />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
   </StrictMode>
);
