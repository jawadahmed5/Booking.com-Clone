import React from 'react';
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import AttractionsOutlinedIcon from '@mui/icons-material/AttractionsOutlined';
import LocalTaxiOutlinedIcon from '@mui/icons-material/LocalTaxiOutlined';
import { Box } from '@mui/material';
import { Link } from 'react-router';

const SecondHeader = () => {
  return (
    <>
      {/* Navbar for Large Screens */}
      <nav className="navbar navbar-expand-lg text-white bg-primary d-none d-lg-block d-md-block d-sm-block pb-5">
        
        
        <div className="container">
          <ul className="nav mb-2 mb-lg-0 d-flex">
            <li className="nav-item  ">
            <div style={{cursor:"pointer"}} className="nav-link active   py-0 px-3 pb-1 text-white border border-1 border-white  rounded-5">
        <KingBedOutlinedIcon />
        <Link to={} style={{fontSize:"12px"}} className='text-white fw-medium text-center ps-1 text-center  text-decoration-none  ' href="#" >
           Stays
           </Link>
        </div>
</li>


        
            <li className="nav-item  ">
            <div style={{cursor:"pointer"}} className="nav-link active ms-2  py-0 px-3 pb-1 text-white border border-1 border-white  rounded-5">
            <AirplaneTicketOutlinedIcon />
        <a style={{fontSize:"12px"}} className='text-white fw-medium text-center ps-1 text-center  text-decoration-none  ' href="#" >
           Flights
        </a>
        </div>

            </li>
         
            <li className="nav-item  ">
            <div style={{cursor:"pointer"}} className="nav-link active ms-2  py-0 px-3 pb-1 text-white border border-1 border-white  rounded-5">
            <DirectionsCarFilledOutlinedIcon /> 
        <a style={{fontSize:"12px"}} className='text-white fw-medium text-center ps-1 text-center  text-decoration-none  ' href="#" >
        Car rentels
        </a>
        </div>

            </li>

            <li className="nav-item  ">
            <div style={{cursor:"pointer"}} className="nav-link active ms-2  py-0 px-3 pb-1 text-white border border-1 border-white  rounded-5">
            <AttractionsOutlinedIcon /> 
        <a style={{fontSize:"12px"}} className='text-white fw-medium text-center ps-1 text-center  text-decoration-none  ' href="#" >
        Attractions
        </a>
        </div>

            </li>


            <li className="nav-item  ">
            <div className="nav-link active ms-2  py-0 px-3 pb-1 text-white border border-1 border-white  rounded-5">
            <LocalTaxiOutlinedIcon /> 
        <a style={{fontSize:"12px"}} className='text-white fw-medium text-center ps-1 text-center  text-decoration-none  ' href="#" >
        Airport taxis
        </a>
        </div>

            </li>

            
            
           
          </ul>
        </div>
      </nav>

      {/* Carousel for Small Screens (Horizontal Scrolling) */}



     
      <Box
        sx={{
          display: { xs: 'flex', sm: 'none', md:"none",lg:"none" }, // Show carousel only on small screens
          gap: 2,
          padding:"10px",
          paddingBottom:"15px",
          paddingTop:"15px",
       alignItems:"center",
          overflowX: 'auto', // Enables horizontal scrolling
          width: '100%',
          backgroundColor:"#0D6EFD",
          scrollSnapType: 'x mandatory',
          '& > *': {
            scrollSnapAlign: 'center',
            display: 'flex', // Ensure items are in line for horizontal scrolling
            marginRight: 1, // Spacing between items
          },
          '::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar
        }}
      >
        <div className="nav-link active   px-3 text-white border border-1 border-white  rounded-5">
        <KingBedOutlinedIcon />
        <a style={{fontSize:"14px"}} className='text-white fw-medium text-center ps-1 text-center  text-decoration-none  ' href="#" >
           Stays
        </a>
        </div>

        <div className="nav-link active   px-3 text-white border border-1 border-white  rounded-5">
        <AirplaneTicketOutlinedIcon />
        <a style={{fontSize:"14px"}} className='text-white fw-medium text-center ps-1 text-center  text-decoration-none  ' href="#" >
           Flights
        </a>
        </div>


        <div className="nav-link active   px-3 text-white border border-1 border-white  rounded-5">
        <DirectionsCarFilledOutlinedIcon />
        <a style={{fontSize:"14px"}} className='text-white fw-medium ms-1 text-center text-center  text-decoration-none  '
         href="#" >Cars</a>
        </div>


        <div className="nav-link active   px-3 text-white border border-1 border-white  rounded-5">
        <AttractionsOutlinedIcon />
        <a style={{fontSize:"14px"}} className='text-white fw-medium text-center ps-1 text-center  text-decoration-none  ' href="#" >
           Attractions
        </a>
        </div>


        <div className="nav-link active   px-3 text-white border border-1 border-white  rounded-5">
        <LocalTaxiOutlinedIcon />
        <a style={{fontSize:"14px"}} className='text-white fw-medium text-center ps-1 text-center  text-decoration-none d-flex  ' href="#" >
           Taxis
        </a>
        </div>

        {/* <a href="#" className="nav-link active pb-1 pt-0 px-3 text-white border border-1 border-white rounded-5 ms-1 nav-link">
          <AirplaneTicketOutlinedIcon /> Flight
        </a>
        <a href="#" className="nav-link active pb-1 pt-0 px-3 text-white border border-1 border-white rounded-5 ms-1 nav-link">
          <DirectionsCarFilledOutlinedIcon /> Cars
        </a>
        <a href="#" className="nav-link active pb-1 pt-0 px-3 text-white border border-1 border-white rounded-5 ms-1 nav-link">
          <AttractionsOutlinedIcon /> Attractions
        </a>
        <li className="nav-item">
              <a className="nav-link active pb-1 pt-0 px-3 text-white border border-1 border-white rounded-5 ms-1" href="#">
                <LocalTaxiOutlinedIcon /> Airport Taxi's
              </a>
            </li> */}
       
      </Box>
    </>
  );
};

export default SecondHeader;
