import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import App from './App.jsx';
import Signin from './Components/Auth/SigninPage/Signin.jsx';
import SecondHeader from './Components/Header/SecondHeader.jsx';
import { ErrorPage } from './Components/ErrorPage/ErrorPage.jsx';
import StaysPage from './Components/StaysPage/StaysPage.jsx';
import HeroSection from './Components/StaysPage/HomePage/HeroSection/HeroSection.jsx';
import Register from './Components/Auth/RegisterPage/Register.jsx';
import CarRentals from './Components/CarRentalsPage/CarRentals.jsx';
import HotelsDetailPage from './Components/HotelsDetailPage/HotelsDetailPage.jsx';
import Availability from './Components/AvailabilityPage/Availability.jsx';
// import NavbarSkeleton from './Components/Header/HeaderSkeleton.jsx';
// import SecondHeaderSkeleton from './Components/Header/SecondHeaderSkeleton.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, 
    children: [
      { path: "/", element: <StaysPage /> },
      { path: "/hero-section", element: <HeroSection /> }, 
      { path: "/car-rentals", element: <CarRentals /> },
      { path: "/hotels-detail", element: <HotelsDetailPage /> },
      { path: "/availability/:id", element: <Availability /> },
      
    ],
  },
  // {path: "/headerskeleton", element: <NavbarSkeleton />},
  // {path:"/SecondHeaderSkeleton", element:<SecondHeaderSkeleton/>},
  { path: "/register", element: <Register /> },
  { path: "/signin", element: <Signin /> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
