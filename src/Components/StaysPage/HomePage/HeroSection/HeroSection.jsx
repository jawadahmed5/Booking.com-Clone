import { Autocomplete, Box, Card, Checkbox, FormControlLabel, Typography } from '@mui/material'
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
      image: "los-angeles-hotel.jpg",
      title: "5 of the best hotels in Los Angeles",
      subtitle: "From Hollywood to Beverly Hills discover 5 of the best hotels in Los Angeles for your stay",
    },
    {
      image: "orlando-hotels.jpg",
      title: "The 6 best Orlando hotels for families",
      subtitle: "Discover the best Orlando hotels for families for your vacation.",
    },
    {
      image: "ski-towns.jpg",
      title: "5 best ski towns around the world",
      subtitle: "Discover a winter wonderland in these charming ski destinations",
    },
    {
      image: "thanksgiving-vacation-homes.jpg",
      title: "5 vacation homes for a Thanksgiving getaway",
      subtitle: "Enjoy Thanksgiving dinner at these vacation homes.",
    },
    {
      image: "bangkok-rooftop-bars.jpg",
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
              <img className='img-fluid text-start rounded-3' src={trendingAbuDhabi} alt="" />

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
                style={{ width: '100%', maxWidth: 140, minWidth: 140, borderRadius: 8 }}
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





  </>
}

export default HeroSection