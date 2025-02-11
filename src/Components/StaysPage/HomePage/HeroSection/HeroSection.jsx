import { Autocomplete, Box, Card, Checkbox, Container, FormControlLabel, List, ListItem, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Person2Icon from '@mui/icons-material/Person2';
// import * as React from 'react';
import { useLocalStorageState } from '@toolpad/core/useLocalStorageState';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AspectRatio, CheckBox } from '@mui/icons-material';
import Dubai from "../../../../assets/images/Dubai.jpg"
import Skardu from "../../../../assets/images/Skardu.gif"
import Tokyo from "../../../../assets/images/Tokyo.jpg"
import adventure from "../../../../assets/images/photography.jpeg"
import trendingDubai from "/src/assets/images/trendingDubai.png"
import trendingAbuDhabi from "/src/assets/images/trendingAbuDhabi.png"
import trendingSharjah from "/src/assets/images/trendingSharjah.png"
import trendingIstanbol from "/src/assets/images/trendingIstangbol.png"
import trendingParis from "/src/assets/images/trendingParis.png"
import TurkeyOne from "../../../../assets/images/istangbul.jpg"
import TurkeyTwo from "../../../../assets/images/istangbol-city-two.jpg"
import TurkeyThree from "../../../../assets/images/istangbol-city-three.jpg"
import TurkeyFour from "../../../../assets/images/istangbol-city-four.jpg"
import TurkeyFive from "../../../../assets/images/istangbol-city-five.jpg"
import TurkeySix from "../../../../assets/images/istangbol-city-six.jpg"
import TurkeySeven from "../../../../assets/images/istangbol-city-seven.jpg"
import TurkeyEight from "../../../../assets/images/istangbol-city-eight.jpg"
import TurkeyNine from "../../../../assets/images/istangbol-city-ten.jpg"
import TurkeyTen from "../../../../assets/images/istangbol-city-nine.jpg"
import Deal1 from "../../../../assets/images/Deal-5.jpg"
import Deal2 from "../../../../assets/images/Deal-6.jpg"
import Deal3 from "../../../../assets/images/Deal-7.jpg"
import Deal4 from "../../../../assets/images/Deal-8.jpg"
import Deal5 from "../../../../assets/images/Deal-9.jpg"
import Deal7 from "../../../../assets/images/Deal-11.jpg"
import Deal8 from "../../../../assets/images/Deal-12.jpg"
import Deal9 from "../../../../assets/images/Deal-13.jpg"
import Deal10 from "../../../../assets/images/Deal-1.jpg"
import Deal11 from "../../../../assets/images/Deal-2.jpg"
import Deal12 from "../../../../assets/images/Deal-3.jpg"
import Deal13 from "../../../../assets/images/Deal-4.jpg"
import Destination1 from "../../../../assets/images/nexttrip-1st.png"
import Destination2 from "../../../../assets/images/nexttrip-1.webp"
import Destination3 from "../../../../assets/images/nexttrip-2.webp"
import Destination4 from "../../../../assets/images/nexttrip-3.webp"
import Destination5 from "../../../../assets/images/nexttrip-4.webp"
import Genius from "../../../../assets/images/Genius.png"
import HalfCircle from "../../../../assets/images/half circle.png"
import chair from "../../../../assets/images/chair.png"
import { Link } from 'react-router';
// import React, { useState, useEffect } from "react";
import { Modal } from "@mui/material";



const HeroSection = () => {
  const [city, setCity] = useState("");
  const [showCitySuggestions, setShowCitySuggestions] = useState(false);
  const [dateRange, setDateRange] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [guestInfo, setGuestInfo] = useState("2 adults - 0 children - 1 room");
  const [showGuestModal, setShowGuestModal] = useState(false);

  const DAYJS_CODEC = {
    parse: (dateString) => dayjs(dateString),
    stringify: (date) => date.toISOString(),
  };

  const [value, setValue] = useLocalStorageState('custom-value', null, {
    codec: DAYJS_CODEC,
  });


  const cities = [
    { name: "Istanbul", properties: "4256 properties", img: TurkeyOne },
    { name: "Cappadocia", properties: "685 properties", img: TurkeyTwo },
    { name: "Antalya", properties: "604 properties", img: TurkeyThree },
    { name: "Göreme", properties: "206 properties", img: TurkeyFour },
    { name: "Ankara", properties: "296 properties", img: TurkeyFive },
    { name: "Bodrum", properties: "544 properties", img: TurkeySix },
    { name: "İzmir", properties: "272 properties", img: TurkeySeven },
    { name: "Trabzon", properties: "835 properties", img: TurkeyEight },
    { name: "Bursa", properties: "252 properties", img: TurkeyNine },
    { name: "Alanya", properties: "953 properties", img: TurkeyTen }
  ];

  const hotels = [
    {
      image: Deal1,
      buttonText: "GENIUS",
      name: "Magnova Studios",
      location: "Istanbul, Turkey",
      rating: 8.9,
      reviews: "Excellent · 756 reviews",
      deal: "Early 2025 Deal",
      nights: 2,
      originalPrice: 124538,
      discountedPrice: 53552,
    },
    {
      image: Deal2,
      buttonText: "GENIUS",
      name: "GOODWOOD SUITES HOMES VACATION",
      location: "Dubai, United Arab Emirates",
      rating: 9.1,
      reviews: "Wonderful · 192 reviews",
      deal: "Early 2025 Deal",
      nights: 2,
      originalPrice: 197973,
      discountedPrice: 126109,
    },
    {
      image: Deal3,
      buttonText: "GENIUS",
      name: "Nawazi Towers Hotel",
      location: "Mecca, Saudi Arabia",
      rating: 8.4,
      reviews: "Very Good · 2,558 reviews",
      nights: 2,
      originalPrice: 60013,
      discountedPrice: 39008,
    },
    {
      image: Deal4,
      buttonText: "GENIUS",
      name: "Hotel Erguvan - Special Category",
      location: "Istanbul, Turkey",
      rating: 8.6,
      reviews: "Excellent · 344 reviews",
      nights: 2,
      originalPrice: 35808,
      discountedPrice: 27214,
    },
    {
      image: Deal5,
      buttonText: "GENIUS",
      name: "Riviera Hotel",
      location: "Dubai, United Arab Emirates",
      rating: 8.5,
      reviews: "Very Good · 1,396 reviews",
      deal: "Early 2025 Deal",
      nights: 2,
      originalPrice: 75852,
      discountedPrice: 59164,
    },
    {
      image: Deal7,
      buttonText: "GENIUS",
      name: "فندق بياك أوتيل الروضة",
      location: "Mecca, Saudi Arabia",
      rating: 8.3,
      reviews: "Very Good · 2,918 reviews",
      nights: 2,
      originalPrice: 16192,
      discountedPrice: 13763,
    },
    {
      image: Deal8,
      buttonText: "GENIUS",
      name: "Dosso Dossi Hotels & SPA Golden Horn",
      location: "Istanbul, Turkey",
      rating: 8.7,
      reviews: "Excellent · 3,410 reviews",
      deal: "Limited-time Deal",
      nights: 2,
      originalPrice: 58067,
      discountedPrice: 30774,
    },
    {
      image: Deal9,
      buttonText: "GENIUS",
      name: "City Seasons Towers Hotel Bur Dubai",
      location: "Dubai, United Arab Emirates",
      rating: 7.9,
      reviews: "Good · 6,509 reviews",
      deal: "Early 2025 Deal",
      nights: 2,
      originalPrice: 55842,
      discountedPrice: 41882,
    },
    {
      image: Deal10,
      buttonText: "GENIUS",
      name: "Diouf Al Maqam Hotel 4",
      location: "Mecca, Saudi Arabia",
      rating: 8.2,
      reviews: "Very Good · 1,424 reviews",
      nights: 2,
      originalPrice: 34504,
      discountedPrice: 13802,
    },
    {
      image: Deal11,
      buttonText: "GENIUS",
      name: "Misa Hotel",
      location: "Istanbul, Turkey",
      rating: 8.3,
      reviews: "Very Good · 858 reviews",
      deal: "Limited-time Deal",
      nights: 2,
      originalPrice: 66811,
      discountedPrice: 24720,
    },
    {
      image: Deal12,
      buttonText: "GENIUS",
      name: "Holiday Inn Express Dubai Airport, an IHG Hotel",
      location: "Dubai, United Arab Emirates",
      rating: 8.2,
      reviews: "Very Good · 21,872 reviews",
      deal: "Early 2025 Deal",
      nights: 2,
      originalPrice: 66598,
      discountedPrice: 49948,
    },
    {
      image: Deal13,
      buttonText: "GENIUS",
      name: "فندق ضيوف المقام 3 للغرف والشقق المفروشة توصيل مجاني للحرم",
      location: "Mecca, Saudi Arabia",
      rating: 8.3,
      reviews: "Very Good · 2,466 reviews",
      nights: 2,
      originalPrice: 34504,
      discountedPrice: 13802,
    },
  ];



  const destinations = [
    {
      image: Destination1,
    },
    {
      image: Destination2,
      title: "The 6 best Orlando hotels for families",
      subtitle: "Discover the best Orlando hotels for families for your vacation.",
    },
    {
      image: Destination3,
      title: "5 best ski towns around the world",
      subtitle: "Discover a winter wonderland in these charming ski destinations",
    },
    {
      image: Destination4,
      title: "5 vacation homes for a Thanksgiving getaway",
      subtitle: "Enjoy Thanksgiving dinner at these vacation homes.",
    },
    {
      image: Destination5,
      title: "6 incredible Bangkok rooftop bars",
      subtitle: "Amazing city views, cocktails, and world-class cuisine.",
    },
  ];


  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => setOpen(false);


  return <>

    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 380,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 3,
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Typography className='fw-bold ' variant="h6" >
          Welcome to <span className=' text-primary'>Booking.com!</span>
        </Typography>
        <Box>
          <img className='w-25' src={Genius} alt="" />
        </Box>
        <Typography className='fw-bold' variant="h6" sx={{ mt: 1, mb: 2 }}>
          All your trip details in one place
          <br />
          <Typography className='fw-bold' variant="body2" sx={{ mt: 1, mb: 2 }}>
            To book faster and manage your <br /> trip with ease
          </Typography>
        </Typography>

        <Button onClick={close} variant="contained" color="primary" fullWidth sx={{ mb: 1 }}>
         Let's go 
        </Button>

      </Box>
    </Modal>




    <Box className="bg-primary pb-5 ">
      <Box className="container pb-4">
        <Box>
          <Typography className='fs-1 fw-bold text-white '>Find your next stay
          </Typography>
          <Typography variant='body1' className="text-white fs-5">

            Search deals on hotels, homes, and much more...
          </Typography>
        </Box>
      </Box>
    </Box>


    <Box className="container">
      <Box
        className="row"
        style={{ gap: "" }}
      >
        <Box className="translate-middle-y bg-white d-flex align-items-center position-relative border border-4 rounded-1 border-warning col-lg-3 col-md-6 col-sm-12">
          <KingBedOutlinedIcon />
          <input width={100}

            type="text"
            placeholder="Dubai"
            className="form-control  border-0 p-1"
            style={{ width: "100%", outline: "none", boxShadow: "none" }}
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onFocus={() => setShowCitySuggestions(true)}
            onBlur={() => setTimeout(() => setShowCitySuggestions(false), 200)}
          />
          {showCitySuggestions && (
            <Box className="position-absolute bg-white border rounded" style={{ top: "100%", left: 0, width: "100%", zIndex: 10 }}>
              <Box className="p-2">Dubai</Box>
              <Box className="p-2">London</Box>
              <Box className="p-2">New York</Box>
            </Box>
          )}
        </Box>

        <Box className="translate-middle-y bg-white d-flex align-items-center border border-4 rounded-1 border-warning col-lg-4 col-md-6 col-sm-12 d-none d-lg-block d-md-block">

          <LocalizationProvider variant="small" dateAdapter={AdapterDayjs}>
            <Stack sx={{ width: "100%", }} direction="row" spacing={2}>
              <DatePicker
                className=''
                sx={{ width: "100%", "& fieldset": { border: "none" } }}
                value={value}
                onChange={(newValue) => setValue(newValue)}
              />
            </Stack>
          </LocalizationProvider>
        </Box>

        <Box className="translate-middle-y bg-white d-flex align-items-center position-relative border border-4 rounded-1 border-warning col-lg-4 col-md-6 col-sm-12">
          <Person2Icon />
          <input
            type="text"
            placeholder="2 adults - 0 children - 1 room"
            className="form-control border-0"
            style={{ width: "100%", outline: "none", boxShadow: "none" }}
            value={guestInfo}
            onFocus={() => setShowGuestModal(true)}
            onBlur={() => setTimeout(() => setShowGuestModal(false), 200)}
          />
          {showGuestModal && (
            <Box className="position-absolute bg-white border rounded p-3" style={{ top: "100%", left: 0, width: "300px", zIndex: 10 }}>
              <Box className="d-flex justify-content-between align-items-center mb-2">
                <span>Adults</span>
                <input type="number" className="form-control w-25" defaultValue={2} />
              </Box>
              <Box className="d-flex justify-content-between align-items-center mb-2">
                <span>Children</span>
                <input type="number" className="form-control w-25" defaultValue={0} />
              </Box>
              <Box className="d-flex justify-content-between align-items-center">
                <span>Rooms</span>
                <input type="number" className="form-control w-25" defaultValue={1} />
              </Box>
            </Box>
          )}
        </Box>

        <button className="btn btn-primary translate-middle-y text-center fw-bold border border-4 rounded-1 border-warning col-lg-1 col-md-12 -col-sm-12">Search</button>
      </Box>
    </Box>


    <Box className="container d-none d-lg-flex fs-6 fw-0">
      {/* <Checkbox label="hello" defaultChecked /> */}

      <FormControlLabel control={<Checkbox />} label="I'm looking for an entire home or apartment" />
    </Box>
    <Box className="container mt-4">

      <Typography className='fw-bold fs-5' >
        Your recent searches

      </Typography>

      <Box className="container">
        <Box className="row">
          <Box className=' col-lg-4 col-md-6 col-sm-12 col-xs-12 pt-4'>

            <Link className='text-decoration-none' to="hotels-detail">
              <Card className="d-flex  w-100  p-3 ">


                <img img-fluid style={{ width: "60px" }} className='img-fluid rounded-2' src={Dubai} />
                <Box className="d-flex flex-column justify-content-center ms-2" >
                  <Typography className='fs-6 fw-bold' >Dubai</Typography>
                  <Typography >
                    Jan 31-Feb 1, 2 people
                  </Typography>
                </Box>
              </Card>
            </Link>


          </Box>
          <Box className='col-lg-4 col-md-6 col-sm-12 col-xs-12 pt-4'>
            <Link className='text-decoration-none' to="hotels-detail">

              <Card className="d-flex w-100 p-3">


                <img className='  rounded-2' src={Skardu} />
                <Box className="d-flex flex-column justify-content-center ms-2" >
                  <Typography className='fs-6 fw-bold' >Skardu</Typography>
                  <Typography >
                    Jan 31-Feb 1, 2 people
                  </Typography>
                </Box>
              </Card>
            </Link>
          </Box>
          <Box className='col-lg-4 col-md-6 col-sm-12 col-xs-1 pt-4'>
            <Link className='text-decoration-none' to="hotels-detail">

              <Card className="d-flex  w-100 p-3">


                <img className='  rounded-2' src={Tokyo} />
                <Box className="d-flex flex-column justify-content-center ms-2 " >
                  <Typography className='fs-6 fw-bold' >Tokyo</Typography>
                  <Typography className='' >
                    Jan 31-Feb 1, 2 people
                  </Typography>
                </Box>
              </Card>
            </Link>
          </Box>
        </Box>
      </Box>


    </Box>





    <Box className='container mt-5'>
      <Typography className='fs-4 fw-bold '>
        Offers

      </Typography>
      <Typography className='fs-6' >
        Promotions, deals, and special offers for you

        <Box className="container mt-3 border border-1 rounded-3">
          <Box className='row' >

            <Card className='col-lg-12 col-md-12 col-sm-12  '>
              <Box className='d-flex justify-content-between p-3 '>


                <Box>
                  <Typography className='fs-5 fw-bold'>
                    Save on stays worldwide
                  </Typography>
                  <Typography className='fs-7 fw-light'>
                    Escape with Early 2025 Deals

                  </Typography>
                  <Button style={{ fontSize: "10px" }} className='fw-bold mt-3' size='small'

                    variant='contained'>Save 15% or more</Button>



                </Box>

                <Box className='text-center d-flex flex-column justify-content-center'><img width={100} src={adventure} alt="" /></Box>

              </Box>




            </Card>

          </Box>
        </Box>

      </Typography>


    </Box>




    <Box className='container d-none d-lg-block d-md-block mt-5'>
      <Typography className='fw-bold ms-3 fs-4'
      >Trending destinations
      </Typography>


      <Box className=" "
      >
        <Box className="row " >
          <Box style={{ width: "575px" }} className='  col-lg-6 col-md-6  '>
            <img className='img-fluid rounded-3' src={trendingDubai} alt="" />
          </Box>
          <Box style={{ width: "565px" }} className='  col-lg-6 col-md-6'>
            <img className='img-fluid  rounded-3' src={trendingAbuDhabi} alt="" />

          </Box>
        </Box>

        <Box className='row mt-2'>
          <Box style={{ width: "377px" }} className='col-lg-4 col-md-4 ms-1' >
            <img className='img-fluid  rounded-3' src={trendingSharjah} alt="" />

          </Box>

          <Box style={{ width: "377px" }} className='col-lg-4 col-md-4' >
            <img className='img-fluid  rounded-3' src={trendingIstanbol} alt="" />

          </Box>

          <Box style={{ width: "377px" }} className='col-lg-4 col-md-4 ' >
            <img className='img-fluid  rounded-3' src={trendingParis} alt="" />

          </Box>

        </Box>


      </Box>
    </Box>

    <Box className='container' >
      <Typography className='fs-5 fw-bold mt-4'>
        Explore Turkey
      </Typography>

      <Box
        sx={{

          display: "flex",
          gap: 2,
          padding: '0px',
          paddingBottom: '15px',
          paddingTop: '10px',
          alignItems: 'center',
          overflowX: 'auto',
          width: '100%',
          scrollSnapType: 'x mandatory',
          '& > *': {
            scrollSnapAlign: 'center',


          },
          '::-webkit-scrollbar': { display: 'none' },
        }}


      >
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            flexWrap: 'nowrap',
            overflowX: 'auto',
            width: '100%',

            '::-webkit-scrollbar': { display: 'none' },

          }}

        >
          {cities.slice(0, 10).map((city) => (
            <Link className='text-decoration-none' to="hotels-detail">

              <Box
                style={{
                  border: '1px solid #ddd',
                  padding: 0,
                  margin: 0,
                  borderRadius: 8,
                  textAlign: 'center',
                  flex: '0 0 auto',
                  border: "none"
                }}

                key={city.name}
              >

                <img
                  src={city.img}
                  alt={city.img}
                  style={{ width: '100%', maxWidth: 165, minWidth: 165, borderRadius: 8 }}
                />


                <Box>

                  <Typography className='fs-6 fw-bold text-start mt-1 text-black' >{city.name}</Typography>
                  <Typography className='text-start text-secondary' style={{ fontSize: "12px" }}>{city.properties}</Typography>
                </Box>

              </Box>
            </Link>


          ))}
        </Box>
      </Box>
    </Box>



    <Box className="container">
      <Typography className="fs-5 fw-bold mt-4">Deals for the weekend</Typography>


      <Box
        sx={{
          display: "flex",
          gap: 2,
          paddingTop: "10px",
          paddingBottom: "15px",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          "& > *": {
            scrollSnapAlign: "center",
          },
          "::-webkit-scrollbar": { display: "none" },
        }}
      >
        {hotels.map((hotel, index) => (

          <Link className='text-decoration-none text-black' to="hotels-detail">
            <Box

              className=' rounded-2'
              key={index}
              sx={{
                // border: "1px solid #ddd",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                borderRadius: 2,
                flex: "0 0 auto",
                minWidth: "220px",
                minHeight: "310px",

              }}
            >
              <Box
                component="img"
                src={hotel.image}
                alt={hotel.name}
                sx={{
                  width: "100%",
                  height: "155px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />

              <Button
                className='text-start mt-1 ms-1 text-white'
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "#0071c2",
                  fontSize: "8px",
                }}
              >
                {hotel.buttonText}
              </Button>

              <Box className='mt-1 text-start ms-1'>
                <Typography

                  style={{ fontSize: "13px" }} className="fw-bolder"
                >
                  {hotel.name}
                </Typography>
                <Typography style={{ fontSize: "10px" }} className="fw-lighter" color="textSecondary">
                  {hotel.location}
                </Typography>

                <Typography className='d-flex'>


                  <Typography width={20} className='bg-primary text-white px-1 pt-1 fw-bold rounded-top rounded-end text-center' style={{ fontSize: "10px" }} variant="body2">
                    {hotel.rating}
                  </Typography>
                  <Typography style={{ fontSize: "10px" }} className="fw-lighter ms-2 d-flex justify-content-center align-items-center">{hotel.reviews}</Typography>

                </Typography>

              </Box>

              <Box className='mt-1 text-start ms-1'>
                {hotel.deal && (
                  <Typography
                    style={{ fontSize: "9px" }}
                    className='bg-success text-white p-1 rounded-1 fw-light'
                    variant="caption"
                    color="success.main"
                    fontWeight="bold"
                  >
                    {hotel.deal}
                  </Typography>
                )}


              </Box>
              <Box className='d-flex justify-content-end  ' >

                <Typography
                  style={{ fontSize: "9px" }}

                >
                  {hotel.nights} nights for{" "}
                  <del
                    style={{ fontSize: "12px" }}

                    className='text-danger '>Rs. {hotel.originalPrice.toLocaleString()}</del>
                </Typography>

                <Typography

                  style={{ fontSize: "12px" }}
                  className='fw-bold text-dark ms-2 align-bottom align-text-bottom     ' color="primary">
                  PKR {hotel.discountedPrice.toLocaleString()}
                </Typography>
              </Box>

            </Box>

          </Link>

        ))}
      </Box>
    </Box>


    <Box className="container">
      <Typography className="fs-5 fw-bold mt-4">
        Get inspiration for your next trip
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          padding: "0px",
          paddingBottom: "15px",
          paddingTop: "10px",
          alignItems: "center",
          overflowX: "auto",
          width: "100%",
          scrollSnapType: "x mandatory",
          "& > *": {
            scrollSnapAlign: "center",
          },
          "::-webkit-scrollbar": { display: "none" },
        }}
      >
        <Link className='text-decoration-none text-black' to="hotels-detail">
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "nowrap",
              overflowX: "auto",
              width: "100%",
              "::-webkit-scrollbar": { display: "none" },
            }}
          >

            {destinations.map((destination, index) => (

              <Box
                key={index}
                className={`col-lg-${index === 0 ? "6" : "3"} col-md-${index === 0 ? "6" : "3"} col-${index === 0 ? "12" : "8"}`} // Large screen pe first item 6 col, baqi 3 col, small screen pe full width
                sx={{
                  padding: 0,
                  margin: 0,
                  borderRadius: 8,
                  textAlign: "center",
                  flex: "0 0 auto",
                  border: "none",
                }}
              >
                <img
                  className="img-fluid  w-100"
                  src={destination.image}
                  alt={destination.title}
                  style={{
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <Box>
                  <Typography
                    className="fs-6 fw-bold text-start mt-2"
                    style={{ fontSize: "14px" }}
                  >
                    {destination.title}
                  </Typography>
                  <Typography
                    className="text-start"
                    style={{ fontSize: "12px", color: "#555" }}
                  >
                    {destination.subtitle}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Link>

      </Box>
    </Box>


    <Box className='container mt-3'>
      <Typography className='fs-4 fw-bold '>
        Travel more, spend less

      </Typography>
      {/* <Box className="container mt-3 border border-1 rounded-3">
        <Box className='row' >

          <Card className='col-lg-12 col-md-12 col-sm-12  '>
            <Box className='d-flex justify-content-between  pt-2 pb-1 '>


              <Box>
                <Typography className='fs-6 fw-bold'>
                  Sign in, save money

                </Typography>
                <Typography fontSize={12} className=' fw-light'>
                  Save 10% or more at participating properties – just look for the blue Genius label


                </Typography>
                <Box className='mt-2'>

                  <button style={{ fontSize: "12px" }} class="btn bg-primary py-1 px-2  text-white rounded-1 outline-primary me-2 fw-medium " >Sign in</button>
                  <button style={{ fontSize: "12px" }} class="btn bg-white py-1 px-2  text-primary rounded-1 outline-primary  fw-medium" >Register</button>



                </Box>


              </Box>

              <Box className='text-center d-flex flex-column justify-content-center'><img width={75} src={Genius} alt="" /></Box>

            </Box>




          </Card>

        </Box>
      </Box> */}

    </Box>


    <Link className='text-decoration-none' to="hotels-detail">

      <Card className='mt-5 container'>

        <Box className='container'>
          <Box className='row'>

            <Box className='col-lg-1 col-md-1 col-sm-12 mt-5 d-flex  align-items-center text-start'>
              <Box className=''><img width={50} src={HalfCircle} alt="" /></Box>

            </Box>


            <Box className='col-lg-6 col-md-8 col-sm-12 text-center '>

              <Box style={{ paddingBottom: "80px", paddingTop: "80px" }} className='text-center  bg-primary rounded-start-pill rounded-end-pill  '>
                <Typography className='fs-4 fw-bolder me-4 text-white mb-2'>Find
                  apartments
                  <br />
                  for your next trip

                </Typography>

                <Box><Button className='bg-white text-primary fw-bold  px-5'>Discover homes</Button></Box>

              </Box>
            </Box>

            <Box className='col-lg-4 col-md-4 col-sm-12 img-fluid d-flex  align-items-center text-center '>
              <img style={{ width: "100%" }} src={chair} alt="" />
            </Box>

          </Box>


        </Box>

      </Card>
    </Link>



    <Box className='container mt-5'>
      <Typography className='fw-bold fs-4'>
        Popular with travelers from Pakistan
      </Typography>
      <Box>
        <Box
          sx={{
            display: "flex ",
            gap: 2,
            padding: "10px",
            paddingBottom: "15px",
            paddingTop: "15px",
            alignItems: "center",
            overflowX: 'auto',
            width: '100%',
            // backgroundColor:"#0D6EFD",
            scrollSnapType: 'x mandatory',
            '& > *': {
              scrollSnapAlign: 'center',
              display: 'flex',
              marginRight: 1,
            },
            '::-webkit-scrollbar': { display: 'none' },
          }}
        >
          <div className="  px-4 py-2 text-primary border border-1 border-primary  rounded-5">
            <a style={{ fontSize: "14px" }} className='text-primary fw-medium text-center ps-1 text-center  text-decoration-none  ' href="#" >
              <span className='d-none d-lg-block d-md-block'>Domestic cities </span>
              <span className=' d-lg-none d-md-none d-sm-block'>Domestic </span>

            </a>
          </div>

          <div className="nav-link active px-4 py-2 text-primary border border-1 border-primary  rounded-5">
            <a style={{ fontSize: "14px" }} className='text-primary fw-medium text-center ps-1 text-center  text-decoration-none  ' href="#" >

              <span className='d-none d-lg-block d-md-block'>International cities </span>
              <span className=' d-lg-none d-md-none d-sm-block'>International </span>
            </a>
          </div>


          <div className="nav-link active px-4 py-2 text-primary border border-1 border-primary  rounded-5">
            <a style={{ fontSize: "14px" }} className='text-primary fw-medium ms-1 text-center text-center  text-decoration-none  '
              href="#" >Regions</a>
          </div>


          <div className="nav-link active px-4 py-2 text-primary border border-1 border-primary  rounded-5">
            <a style={{ fontSize: "14px" }} className='text-primary fw-medium text-center ps-1 text-center  text-decoration-none  ' href="#" >
              Countries
            </a>
          </div>


          <div className="nav-link active px-4 py-2 text-primary border border-1 border-primary  rounded-5">
            <a style={{ fontSize: "14px" }} className='text-primary fw-medium text-center ps-1 text-center  text-decoration-none d-flex  ' href="#" >                                                                                          Places                                                      </a>
          </div>



        </Box>



        <Box sx={{

          // display: "flex",
          gap: 2,
          padding: '0px',
          paddingBottom: '15px',
          paddingTop: '10px',
          alignItems: 'center',
          overflowX: 'auto',
          width: '100%',
          scrollSnapType: 'x mandatory',
          '& > *': {


          },
          '::-webkit-scrollbar': { display: 'none' },
        }} className='container'>


          <Box sx={{
            // display: 'flex',
            gap: 1,
            flexWrap: 'nowrap',
            overflowX: 'auto',
            width: '100%',

            '::-webkit-scrollbar': { display: 'none' },

          }} className='row'>

            <List className=' col-lg-3 col-md-4 col-6 ms-3 '>
              <Link className='text-decoration-none text-black' to="hotels-detail"><ListItem className=''>Islamabad Hotels</ListItem></Link>
              <Link className='text-decoration-none text-black' to="hotels-detail"><ListItem className=''>Rawalpindi Hotels</ListItem></Link>
              <Link className='text-decoration-none text-black' to="hotels-detail"><ListItem className=''>Peshawar Hotels</ListItem></Link>
              <Link className='text-decoration-none text-black' to="hotels-detail"><ListItem className=''>Hyderabad Hotels</ListItem></Link>
              <Link className='text-decoration-none text-black' to="hotels-detail"><ListItem className=''>Bahria Town Hotels</ListItem></Link>
            </List>
            <List className=' col-lg-3 col-md-4 col-6 '>
              <Link className='text-decoration-none text-black' to="hotels-detail"><ListItem className=''>Lahore Hotels</ListItem></Link>
              <Link className='text-decoration-none text-black' to="hotels-detail"><ListItem className=''>MListtan Hotels</ListItem></Link>
              <Link className='text-decoration-none text-black' to="hotels-detail"><ListItem className=''>skardu Hotels</ListItem></Link>
              <Link className='text-decoration-none text-black' to="hotels-detail"><ListItem className=''>Hunza Valley Hotels</ListItem></Link>
              <Link className='text-decoration-none text-black' to="hotels-detail"><ListItem className=''>Ayubia Town Hotels</ListItem></Link>
            </List>
            <List className=' col-lg-3 col-md-4 col-6 '>
              <Link className='text-decoration-none text-black' to="hotels-detail"><ListItem className=''>Karachi Hotels</ListItem></Link>
              <Link className='text-decoration-none text-black' to="hotels-detail"><ListItem className=''>Faisalabd Hotels</ListItem></Link>
              <Link className='text-decoration-none text-black' to="hotels-detail"><ListItem className=''>Gujranwala Hotels</ListItem></Link>
              <Link className='text-decoration-none text-black' to="hotels-detail"><ListItem className=''>Malam Jabba Hotels</ListItem></Link>
              <Link className='text-decoration-none text-black' to="hotels-detail"><ListItem className=''>Sialkot Hotels</ListItem></Link>
            </List>
            <List className=' col-lg-3 col-md-4 col-6 '>
              <Link className='text-decoration-none text-black' to="hotels-detail"><ListItem className=''>Murree Hotels</ListItem></Link>
              <Link className='text-decoration-none text-black' to="hotels-detail"><ListItem className=''>Kalam Hotels</ListItem></Link>
              <Link className='text-decoration-none text-black' to="hotels-detail"><ListItem className=''>Swat Hotels</ListItem></Link>
              <Link className='text-decoration-none text-black' to="hotels-detail"><ListItem className=''>Muzaffarabad Hotels</ListItem></Link>
              <Link className='text-decoration-none text-black' to="hotels-detail"><ListItem className=''>Bahawalpur Hotels</ListItem></Link>
            </List>
            <List className=' col-lg-3 col-md-4 col-6 '>
              <Link className='text-decoration-none text-black' to="hotels-detail"><ListItem className=''>Nathia GaListItem Hotels</ListItem></Link>
              <Link className='text-decoration-none text-black' to="hotels-detail"><ListItem className=''>Naran Hotels</ListItem></Link>
              <Link className='text-decoration-none text-black' to="hotels-detail"><ListItem className=''>Abbottabad Hotels</ListItem></Link>
              <Link className='text-decoration-none text-black' to="hotels-detail"><ListItem className=''>Bhurban Hotels</ListItem></Link>
              <Link className='text-decoration-none text-black' to="hotels-detail"><ListItem className=''>Mingora Hotels</ListItem></Link>
            </List>
            <List className=" col-lg-3 col-md-4 col-6 ">
              <ListItem className="">Kāgān Hotels</ListItem>
              <ListItem className="">Shogran Hotels</ListItem>
              <ListItem className="">Bālākot Hotels</ListItem>
              <ListItem className="">Mānsehra Hotels</ListItem>
              <ListItem className="">Jhelum Hotels</ListItem>
            </List>

            <List className=" col-lg-3 col-md-4 col-6 ">
              <ListItem className="">Gujrāt Hotels</ListItem>
              <ListItem className="">Quetta Hotels</ListItem>
              <ListItem className="">Lower Topa Hotels</ListItem>
              <ListItem className="">Gilgit Hotels</ListItem>
              <ListItem className="">Khānspur Hotels</ListItem>
            </List>

            <List className=" col-lg-3 col-md-4 col-6 ">
              <ListItem className="">Chitral Hotels</ListItem>
              <ListItem className="">Sargodha Hotels</ListItem>
              <ListItem className="">Rahimyar Khan Hotels</ListItem>
              <ListItem className="">Dunga Gali Hotels</ListItem>
              <ListItem className="">Karimabad Hunza Hotels</ListItem>
            </List>

            <List className=" col-lg-3 col-md-4 col-6 ">
              <ListItem className="">Wāh Hotels</ListItem>
              <ListItem className="">Thandiāni Hotels</ListItem>
              <ListItem className="">Kawāi Hotels</ListItem>
              <ListItem className="">Dina Hotels</ListItem>
              <ListItem className="">University Town Hotels</ListItem>
            </List>

            <List className=" col-lg-3 col-md-4 col-6 ">
              <ListItem className="">Sāhīwāl Hotels</ListItem>
              <ListItem className="">Mardan Hotels</ListItem>
              <ListItem className="">Khanpur Hotels</ListItem>
              <ListItem className="">Chāngla Gali Hotels</ListItem>
              <ListItem className="">Astor Hotels</ListItem>
            </List>
          </Box>


        </Box>

      </Box>

    </Box>



  </>
}

export default HeroSection