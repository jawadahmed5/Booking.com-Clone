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

            <Box  style={{ width: "310px" }} className='col-lg-4 col-md-4' >
              <img className='img-fluid  rounded-3' src={trendingIstanbol} alt="" />

            </Box>

            <Box  style={{ width: "310px" }} className='col-lg-4 col-md-4' >
              <img className='img-fluid  rounded-3' src={trendingParis} alt="" />

            </Box>

          </Box>


        </Box>
      </Typography>
    </Box>



  </>
}

export default HeroSection