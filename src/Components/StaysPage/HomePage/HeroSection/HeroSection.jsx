import { Autocomplete, Box, Card, Checkbox, Container, FormControlLabel, List, ListItem, Typography } from '@mui/material'
import React, { useState } from 'react'
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
import { AspectRatio } from '@mui/icons-material';
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

  // const data = [
  //   {
  //     src: Dubai, // Correctly referencing the imported Dubai image
  //     title: 'Dubai',
  //     description: 'Jan 31-Feb 1, 2 people',
  //   },
  //   {
  //     src: Skardu,

  //     title: 'Skardu',
  //     description: 'Jan 31-Feb 1, 2 people',

  //   },
  //   {
  //     src: Tokyo,
  //     title: 'Tokyo',
  //     description: 'Jan 31-Feb 1, 2 people',

  //   },
  // ];


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




  return <>

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

        <Box className="translate-middle-y bg-white d-flex align-items-center position-relative border border-4 rounded-1 border-warning col-lg-4 col-md-6 col-sm-12">

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack direction="row" spacing={2}>
              <DatePicker
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
            <Card className="d-flex  w-100 ">


              <img img-fluid style={{ width: "60px" }} className='img-fluid rounded-2' src={Dubai} />
              <Box className="d-flex flex-column justify-content-center ms-2" >
                <Typography className='fs-6 fw-bold' >Dubai</Typography>
                <Typography >
                  Jan 31-Feb 1, 2 people
                </Typography>
              </Box>
            </Card>


          </Box>
          <Box className='col-lg-4 col-md-6 col-sm-12 col-xs-12 pt-4'>

            <Card className="d-flex w-100 ">


              <img className='  rounded-2' src={Skardu} />
              <Box className="d-flex flex-column justify-content-center ms-2" >
                <Typography className='fs-6 fw-bold' >Skardu</Typography>
                <Typography >
                  Jan 31-Feb 1, 2 people
                </Typography>
              </Box>
            </Card>
          </Box>
          <Box className='col-lg-4 col-md-6 col-sm-12 col-xs-1 pt-4'>

            <Card className="d-flex  w-100 ">


              <img className='  rounded-2' src={Tokyo} />
              <Box className="d-flex flex-column justify-content-center ms-2 " >
                <Typography className='fs-6 fw-bold' >Tokyo</Typography>
                <Typography className='' >
                  Jan 31-Feb 1, 2 people
                </Typography>
              </Box>
            </Card>
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
      <Typography className='fw-bold'
      >Trending destinations
        <Box className=" "
        >
          <Box className="row " >
            <Box style={{ width: "470px" }} className='  col-lg-6 col-md-6  '>
              <img className='img-fluid rounded-3' src={trendingDubai} alt="" />
            </Box>
            <Box style={{ width: "460px" }} className='  col-lg-6 col-md-6'>
              <img className='img-fluid  rounded-3' src={trendingAbuDhabi} alt="" />

            </Box>
          </Box>

          <Box className='row mt-2'>
            <Box style={{ width: "310px" }} className='col-lg-4 col-md-4 ms-1' >
              <img className='img-fluid  rounded-3' src={trendingSharjah} alt="" />

            </Box>

            <Box style={{ width: "310px" }} className='col-lg-4 col-md-4' >
              <img className='img-fluid  rounded-3' src={trendingIstanbol} alt="" />

            </Box>

            <Box style={{ width: "310px" }} className='col-lg-4 col-md-4' >
              <img className='img-fluid  rounded-3' src={trendingParis} alt="" />

            </Box>

          </Box>


        </Box>
      </Typography>
    </Box>




    {/* 
    <Box className="container mt-5">
      <Typography className="fw-bold fs-4">Explore Turkey</Typography>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          padding: '15px',
          alignItems: 'center',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          '& > *': { scrollSnapAlign: 'center' },
          '::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {cities.map((city, index) => (
          <Box key={index} style={{ textAlign: 'center', width: '200px' }}>
            <img
              src={city.img}
              alt={city.name}
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <Typography className="fw-bold">{city.name}</Typography>
            <Typography>{city.properties}</Typography>
          </Box>
        ))}
      </Box>
    </Box> */}






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
          '::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar
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

                <Typography className='fs-6 fw-bold text-start mt-1' >{city.name}</Typography>
                <Typography className='text-start' style={{ fontSize: "12px" }}>{city.properties}</Typography>
              </Box>

            </Box>


          ))}
        </Box>
      </Box>
    </Box>



    <Box className="container">
      {/* Section Title */}
      <Typography className="fs-5 fw-bold mt-4">Deals for the weekend</Typography>

      {/* Scrollable Carousel */}
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
          "::-webkit-scrollbar": { display: "none" }, // Hide scrollbar
        }}
      >
        {hotels.map((hotel, index) => (
          <Box

            className=' rounded-2'
            key={index}
            sx={{
              // border: "1px solid #ddd",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              borderRadius: 2,
              flex: "0 0 auto",
              minWidth: "220px",
              maxWidth: "220px",

            }}
          >
            {/* Hotel Image */}
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

            {/* Button Tag */}
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

            {/* Hotel Details */}
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

            {/* Pricing Details */}
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
          "::-webkit-scrollbar": { display: "none" }, // Hide scrollbar
        }}
      >
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
                  // height: index === 0 ? "300px" : "180px",
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
      </Box>
    </Box>


    <Box className='container mt-3'>
      <Typography className='fs-4 fw-bold '>
        Travel more, spend less

      </Typography>
      <Box className="container mt-3 border border-1 rounded-3">
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
      </Box>

    </Box>






    {/* 
    <Box className='container'>
      <Box className='row border-1'>
        <Box classname='col-lg-8 col-md-8 col-sm-12  '>

          <Box>
            <Typography>Find
              apartments
              <br />
              for your next trip

              <Box><Button>Discover homes</Button></Box>
            </Typography>
          </Box>

        </Box>

        <Box classname='col-lg-4 col-md-4 col-sm-12'>
          <img className='img-fluid w-25' src={chair} alt="" />
        </Box>
      </Box>
    </Box> */}












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


{/* 
<Box className='container mt-5'>
<Typography className='fw-bold fs-4'>
Popular with travelers from Pakistan
</Typography>
<Box>
<Box
        sx={{
          display: "flex ", // Show carousel only on small screens
          gap: 2,
          padding:"10px",
          paddingBottom:"15px",
          paddingTop:"15px",
       alignItems:"center",
          overflowX: 'auto', // Enables horizontal scrolling
          width: '100%',
          // backgroundColor:"#0D6EFD",
          scrollSnapType: 'x mandatory',
          '& > *': {
            scrollSnapAlign: 'center',
            display: 'flex', // Ensure items are in line for horizontal scrolling
            marginRight: 1, // Spacing between items
          },
          '::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar
        }}
      >
        <div  className="  px-4 py-2 text-primary border border-1 border-primary  rounded-5">
        <a style={{fontSize:"14px"}} className='text-primary fw-medium text-center ps-1 text-center  text-decoration-none  ' href="#" >
           <span className='d-none d-lg-block d-md-block'>Domestic cities </span>
           <span className=' d-lg-none d-md-none d-sm-block'>Domestic </span>

        </a>
        </div>

        <div className="nav-link active px-4 py-2 text-primary border border-1 border-primary  rounded-5">
        <a style={{fontSize:"14px"}} className='text-primary fw-medium text-center ps-1 text-center  text-decoration-none  ' href="#" >
           
           <span className='d-none d-lg-block d-md-block'>International cities </span>
           <span className=' d-lg-none d-md-none d-sm-block'>International </span>
        </a>
        </div>


        <div className="nav-link active px-4 py-2 text-primary border border-1 border-primary  rounded-5">
        <a style={{fontSize:"14px"}} className='text-primary fw-medium ms-1 text-center text-center  text-decoration-none  '
         href="#" >Regions</a>
        </div>


        <div className="nav-link active px-4 py-2 text-primary border border-1 border-primary  rounded-5">
        <a style={{fontSize:"14px"}} className='text-primary fw-medium text-center ps-1 text-center  text-decoration-none  ' href="#" >
           Countries
        </a>
        </div>


        <div className="nav-link active px-4 py-2 text-primary border border-1 border-primary  rounded-5">
        <a style={{fontSize:"14px"}} className='text-primary fw-medium text-center ps-1 text-center  text-decoration-none d-flex  ' href="#" >                                                                                          Places                                                      </a>
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
            // scrollSnapAlign: 'center',


          },
          '::-webkit-scrollbar': { display: 'none' },
        }} className='container'>


<Box             sx={{
            // display: 'flex',
            gap:1,
            flexWrap: 'nowrap',
            overflowX: 'auto',
            width: '100%',

            '::-webkit-scrollbar': { display: 'none' },

          }} className='row'>

          <List className=' col-lg-3 col-md-4 col-6 ms-3 '>
            <ListItem className=''>Islamabad Hotels</ListItem>
            <ListItem className=''>Rawalpindi Hotels</ListItem>
            <ListItem className=''>Peshawar Hotels</ListItem>
            <ListItem className=''>Hyderabad Hotels</ListItem>
            <ListItem className=''>Bahria Town Hotels</ListItem>
          </List>
          <List className=' col-lg-3 col-md-4 col-6 '>
            <ListItem className=''>Lahore Hotels</ListItem>
            <ListItem className=''>MListtan Hotels</ListItem>
            <ListItem className=''>skardu Hotels</ListItem>
            <ListItem className=''>Hunza Valley Hotels</ListItem>
            <ListItem className=''>Ayubia Town Hotels</ListItem>
          </List>
          <List className=' col-lg-3 col-md-4 col-6 '>
            <ListItem className=''>Karachi Hotels</ListItem>
            <ListItem className=''>Faisalabd Hotels</ListItem>
            <ListItem className=''>Gujranwala Hotels</ListItem>
            <ListItem className=''>Malam Jabba Hotels</ListItem>
            <ListItem className=''>Sialkot Hotels</ListItem>
          </List>
          <List className=' col-lg-3 col-md-4 col-6 '>
            <ListItem className=''>Murree Hotels</ListItem>
            <ListItem className=''>Kalam Hotels</ListItem>
            <ListItem className=''>Swat Hotels</ListItem>
            <ListItem className=''>Muzaffarabad Hotels</ListItem>
            <ListItem className=''>Bahawalpur Hotels</ListItem>
          </List>
          <List className=' col-lg-3 col-md-4 col-6 '>
            <ListItem className=''>Nathia GaListItem Hotels</ListItem>
            <ListItem className=''>Naran Hotels</ListItem>
            <ListItem className=''>Abbottabad Hotels</ListItem>
            <ListItem className=''>Bhurban Hotels</ListItem>
            <ListItem className=''>Mingora Hotels</ListItem>
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

</Box> */}


  
    {/* </div> */}















    {/* <Box className='mt-5'> */}

    {/* <div className="container">
          <ul className="nav mb-2 mb-lg-0 d-flex">
            <li className="nav-item  ">
            <div style={{cursor:"pointer"}} className="nav-link active   py-0 px-3 pb-1 text-white border border-1 border-white  rounded-5">
        <a style={{fontSize:"12px"}} className='text-white fw-medium text-center ps-1 text-center  text-decoration-none  ' href="#" >
           Stays
        </a>
        </div>
</li>


        
            <li className="nav-item  ">
            <div style={{cursor:"pointer"}} className="nav-link active ms-2  py-0 px-3 pb-1 text-white border border-1 border-white  rounded-5">
        <a style={{fontSize:"12px"}} className='text-white fw-medium text-center ps-1 text-center  text-decoration-none  ' href="#" >
           Flights
        </a>
        </div>

            </li>
         
            <li className="nav-item  ">
            <div style={{cursor:"pointer"}} className="nav-link active ms-2  py-0 px-3 pb-1 text-white border border-1 border-white  rounded-5">
        <a style={{fontSize:"12px"}} className='text-white fw-medium text-center ps-1 text-center  text-decoration-none  ' href="#" >
        Car rentels
        </a>
        </div>

            </li>

            <li className="nav-item  ">
            <div style={{cursor:"pointer"}} className="nav-link active ms-2  py-0 px-3 pb-1 text-white border border-1 border-white  rounded-5">
        <a style={{fontSize:"12px"}} className='text-white fw-medium text-center ps-1 text-center  text-decoration-none  ' href="#" >
        Attractions
        </a>
        </div>

            </li>


            <li className="nav-item  ">
            <div className="nav-link active ms-2  py-0 px-3 pb-1 text-white border border-1 border-white  rounded-5">
        <a style={{fontSize:"12px"}} className='text-white fw-medium text-center ps-1 text-center  text-decoration-none  ' href="#" >
        Airport taxis
        </a>
        </div>

            </li>

            
            
           
          </ul>
        </div>

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
        <a style={{fontSize:"14px"}} className='text-white fw-medium text-center ps-1 text-center  text-decoration-none  ' href="#" >
           Stays
        </a>
        </div>

        <div className="nav-link active   px-3 text-white border border-1 border-white  rounded-5">
        <a style={{fontSize:"14px"}} className='text-white fw-medium text-center ps-1 text-center  text-decoration-none  ' href="#" >
           Flights
        </a>
        </div>


        <div className="nav-link active   px-3 text-white border border-1 border-white  rounded-5">
        <a style={{fontSize:"14px"}} className='text-white fw-medium ms-1 text-center text-center  text-decoration-none  '
         href="#" >Cars</a>
        </div>


        <div className="nav-link active   px-3 text-white border border-1 border-white  rounded-5">
        <a style={{fontSize:"14px"}} className='text-white fw-medium text-center ps-1 text-center  text-decoration-none  ' href="#" >
           Attractions
        </a>
        </div>


        <div className="nav-link active   px-3 text-white border border-1 border-white  rounded-5">
        <a style={{fontSize:"14px"}} className='text-white fw-medium text-center ps-1 text-center  text-decoration-none d-flex  ' href="#" >
           Taxis
        </a>
        </div>

        
      </Box > */}
    {/* <Box
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
                      '::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar
                    }}
        
        className='container'>

                   <Box
                   
                   sx={{
                    display: 'flex',
                    gap: 13,
                    flexWrap: 'nowrap',
                    overflowX: 'auto',
                    width: '100%',
        
                    '::-webkit-scrollbar': { display: 'none' },
        
                  }}
                   
                   className='d-flex    '>
                        <List style={{fontSize:"14px"}}  className='list-unstyled fw-normal   '>
                            <ListItem width={1000} className=''>Islamabad Hotels</ListItem>
                            <ListItem className=' w-100'>Rawalpindi Hotels</ListItem>
                            <ListItem className=' w-100'>Peshawar Hotels</ListItem>
                            <ListItem className=' w-100'>Hyderabad Hotels</ListItem>
                            <ListItem className=' '>Bahria Town Hotels</ListItem>
                        </List>
                        <List style={{fontSize:"14px"}} className='list-unstyled '>
                            <ListItem className=' '>Lahore Hotels</ListItem>
                            <ListItem className=' '>MListtan Hotels</ListItem>
                            <ListItem className=' '>skardu Hotels</ListItem>
                            <ListItem className=' '>Hunza Valley Hotels</ListItem>
                            <ListItem className=' '>Ayubia Town Hotels</ListItem>
                        </List>
                        <List style={{fontSize:"14px"}} className='list-unstyled '>
                            <ListItem className=' '>Karachi Hotels</ListItem>
                            <ListItem className=' '>Faisalabd Hotels</ListItem>
                            <ListItem className=' '>Gujranwala Hotels</ListItem>
                            <ListItem className=' '>Malam Jabba Hotels</ListItem>
                            <ListItem className=' '>Sialkot Hotels</ListItem>
                        </List>
                        <List style={{fontSize:"14px"}} className='list-unstyled'>
                            <ListItem className=' '>Murree Hotels</ListItem>
                            <ListItem className=' '>Kalam Hotels</ListItem>
                            <ListItem className=' '>Swat Hotels</ListItem>
                            <ListItem className=' '>Muzaffarabad Hotels</ListItem>
                            <ListItem className=' '>Bahawalpur Hotels</ListItem>
                        </List>
                        <List style={{fontSize:"14px"}} className='list-unstyled'>
                            <ListItem className=' '>Nathia Gali Hotels</ListItem>
                            <ListItem className=' '>Naran Hotels</ListItem>
                            <ListItem className=' '>Abbottabad Hotels</ListItem>
                            <ListItem className=' '>Bhurban Hotels</ListItem>
                            <ListItem className=' '>Mingora Hotels</ListItem>
                        </List>
                    </Box> */}

    {/* </Box> */}
    {/* </Box> */}



    {/*  col-lg-3 col-md-2 col-s m-12 */}

  </>
}

export default HeroSection