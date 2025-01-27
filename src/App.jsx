import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  return (
    <div>
      <Header />  {/* Header ko App mein add kiya */}
      <Outlet />  {/* Content render hoga yahan */}
      <Footer />  {/* Footer ko App mein add kiya */}
    </div>
  );
};

export default App;
