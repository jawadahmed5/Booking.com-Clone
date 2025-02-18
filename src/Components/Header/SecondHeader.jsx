import React from 'react';
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import AttractionsOutlinedIcon from '@mui/icons-material/AttractionsOutlined';
import LocalTaxiOutlinedIcon from '@mui/icons-material/LocalTaxiOutlined';
import { Box,  } from '@mui/material';
import { Link } from 'react-router';

const SecondHeader = () => {
  return (
    <>
      {/* ye navbar hai large scren py jab web open hogi */}
      <nav className="navbar navbar-expand-lg text-white bg-primary d-none d-lg-block d-md-block d-sm-block pb-5">


        <div className="container">
          <ul className="nav mb-2 mb-lg-0 d-flex">








            <Link to="/">

              <li className="nav-item  ">
                <div style={{ cursor: "pointer" }} className="hoverItems nav-link active   py-0 px-3 pb-1 text-white border border-1 border-white  rounded-5">
                  <KingBedOutlinedIcon />
                  <a style={{ fontSize: "12px" }} className='text-white fw-medium text-center ps-1 text-center  text-decoration-none  ' href="#" >
                    Stays
                  </a>
                </div>
              </li>
            </Link>





            <Link to="/">

              <li className="nav-item  ">
                <div style={{ cursor: "pointer" }} className="hoverItems nav-link active ms-2  py-0 px-3 pb-1 text-white border border-1 border-white  rounded-5">
                  <AirplaneTicketOutlinedIcon />
                  <a style={{ fontSize: "12px" }} className='text-white fw-medium text-center ps-1 text-center  text-decoration-none  ' href="#" >
                    Flights
                  </a>
                </div>

              </li>
            </Link>


            <Link to="/car-rentals">

              <li className="nav-item  ">
                <div style={{ cursor: "pointer" }} className="hoverItems nav-link active ms-2  py-0 px-3 pb-1 text-white border border-1 border-white  rounded-5">
                  <DirectionsCarFilledOutlinedIcon />
                  <a style={{ fontSize: "12px" }} className='text-white fw-medium text-center ps-1 text-center  text-decoration-none  ' href="#" >
                    Car rentels
                  </a>
                </div>

              </li>
            </Link>


            <Link to="/">
              <li className="nav-item  ">
                <div style={{ cursor: "pointer" }} className="hoverItems nav-link active ms-2  py-0 px-3 pb-1 text-white border border-1 border-white  rounded-5">
                  <AttractionsOutlinedIcon />
                  <a style={{ fontSize: "12px" }} className='text-white fw-medium text-center ps-1 text-center  text-decoration-none  ' href="#" >
                    Attractions
                  </a>
                </div>

              </li>
            </Link>


            <Link to="/">

              <li className="nav-item  ">
                <div className="hoverItems nav-link active ms-2  py-0 px-3 pb-1 text-white border border-1 border-white  rounded-5">
                  <LocalTaxiOutlinedIcon />
                  <a style={{ fontSize: "12px" }} className='text-white fw-medium text-center ps-1 text-center  text-decoration-none  ' href="#" >
                    Airport taxis
                  </a>
                </div>

              </li>
            </Link>



          </ul>
        </div>
      </nav>

      {/* jab smal screen py web opn hogi tu slider cariusla me porducts shiw hongy */}



      <Box
        sx={{
          display: { xs: 'flex', sm: 'none', md: "none", lg: "none" },
          gap: 2,
          padding: "10px",
          paddingBottom: "15px",
          paddingTop: "15px",
          alignItems: "center",
          overflowX: 'auto',
          width: '100%',
          backgroundColor: "#0D6EFD",
          scrollSnapType: 'x mandatory',
          '& > *': {
            scrollSnapAlign: 'center',
            display: 'flex',
            marginRight: 1,
          },
          '::-webkit-scrollbar': { display: 'none' },
        }}
      >
        <div className="nav-link active   px-3 text-white border border-1 border-white  rounded-5">
          <KingBedOutlinedIcon />
          <a style={{ fontSize: "14px" }} className='text-white fw-medium text-center ps-1 text-center  text-decoration-none  ' href="#" >
            Stays
          </a>
        </div>

        <div className="nav-link active   px-3 text-white border border-1 border-white  rounded-5">
          <AirplaneTicketOutlinedIcon />
          <a style={{ fontSize: "14px" }} className='text-white fw-medium text-center ps-1 text-center  text-decoration-none  ' href="#" >
            Flights
          </a>
        </div>


        <div className="nav-link active   px-3 text-white border border-1 border-white  rounded-5">
          <DirectionsCarFilledOutlinedIcon />
          <a style={{ fontSize: "14px" }} className='text-white fw-medium ms-1 text-center text-center  text-decoration-none  '
            href="#" >Cars</a>
        </div>


        <div className="nav-link active   px-3 text-white border border-1 border-white  rounded-5">
          <AttractionsOutlinedIcon />
          <a style={{ fontSize: "14px" }} className='text-white fw-medium text-center ps-1 text-center  text-decoration-none  ' href="#" >
            Attractions
          </a>
        </div>


        <div className="nav-link active   px-3 text-white border border-1 border-white  rounded-5">
          <LocalTaxiOutlinedIcon />
          <a style={{ fontSize: "14px" }} className='text-white fw-medium text-center ps-1 text-center  text-decoration-none d-flex  ' href="#" >
            Taxis
          </a>
        </div>


      </Box>
    </>
  );
};

export default SecondHeader;
