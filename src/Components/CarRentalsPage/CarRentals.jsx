import React, { useState } from 'react'
import SecondHeader from '../Header/SecondHeader'
import { Accordion, AccordionDetails, AccordionSummary, Box, Card, CardContent, CardMedia, Checkbox, FormControlLabel, Grid, List, ListItem, Typography } from '@mui/material'
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
import CustomerService from "../../assets/images/CustomerService.png"
import FreeCancellation from "../../assets/images/FreeCancellation.png"
import Reviews from "../../assets/images/Reviews.png"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import rental1 from "../../assets/images/rental-1.jpg"
import rental2 from "../../assets/images/rental-2.jpg"
import rental3 from "../../assets/images/rental-3.jpg"
import rental4 from "../../assets/images/rental-4.jpg"
import rental5 from "../../assets/images/rental-5.jpg"
import rental6 from "../../assets/images/rental-6.jpg"
import rental7 from "../../assets/images/rental-7.jpg"
import rental8 from "../../assets/images/rental-8.jpg"
import rental9 from "../../assets/images/rental-9.jpg"
import rental10 from "../../assets/images/rental-10.jpg"
import rental11 from "../../assets/images/rental-3.jpg"
import rental12 from "../../assets/images/rental-1.jpg"
import rental13 from "../../assets/images/rental-2.jpg"
import rental14 from "../../assets/images/rental-3.jpg"
import rental15 from "../../assets/images/rental-4.jpg"
import rental16 from "../../assets/images/rental-5.jpg"
import rental17 from "../../assets/images/rental-6.jpg"
import rental18 from "../../assets/images/rental-7.jpg"
import rental19 from "../../assets/images/rental-10.jpg"
import { Link } from 'react-router';

const CarRentals = () => {
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




    const carRentalLocations = [
        {
            city: 'El Segundo',
            locations: 103,
            averagePrice: 'PKR 14,620.21 per day',
            imageUrl: rental1,
        },
        {
            city: 'Coolangatta',
            locations: 24,
            averagePrice: 'PKR 14,405.52 per day',
            imageUrl: rental2,
        },
        {
            city: 'Phoenix',
            locations: 79,
            averagePrice: 'PKR 15,833.47 per day',
            imageUrl: rental3
        },
        {
            city: 'San Diego',
            locations: 87,
            averagePrice: 'PKR 12,819.11 per day',
            imageUrl: rental4
        },
        {
            city: 'Jamaica',
            locations: 83,
            averagePrice: 'PKR 19,151.46 per day',
            imageUrl: rental5
        },
        {
            city: 'Madrid',
            locations: 102,
            averagePrice: 'PKR 13,110.60 per day',
            imageUrl: rental6
        },
        {
            city: 'Calgary',
            locations: 42,
            averagePrice: 'PKR 13,480.24 per day',
            imageUrl: rental7
        },
        {
            city: 'Milan',
            locations: 122,
            averagePrice: 'PKR 13,485.65 per day',
            imageUrl: rental8
        },
        {
            city: 'Rome',
            locations: 157,
            averagePrice: 'PKR 13,199.76 per day',
            imageUrl: rental9
        },
        {
            city: 'Charlotte',
            locations: 60,
            averagePrice: 'PKR 13,103.10 per day',
            imageUrl: rental10
        },
        {
            city: 'Newark',
            locations: 64,
            averagePrice: 'PKR 16,361.92 per day',
            imageUrl: rental11
        },
        {
            city: 'Richmond',
            locations: 41,
            averagePrice: 'PKR 14,812.25 per day',
            imageUrl: rental12
        },
        {
            city: 'Horley',
            locations: 39,
            averagePrice: 'PKR 12,635.75 per day',
            imageUrl: rental13
        },
        {
            city: 'Woodbridge',
            locations: 29,
            averagePrice: 'PKR 14,391.77 per day',
            imageUrl: rental14
        },
        {
            city: 'Florence',
            locations: 64,
            averagePrice: 'PKR 16,492.50 per day',
            imageUrl: rental15
        },
        {
            city: 'Toronto',
            locations: 45,
            averagePrice: 'PKR 9,791.13 per day',
            imageUrl: rental16
        },
        {
            city: 'Seville',
            locations: 52,
            averagePrice: 'PKR 13,145.18 per day',
            imageUrl: rental17
        },
        {
            city: 'Pendik',
            locations: 29,
            averagePrice: 'PKR 11,869.87 per day',
            imageUrl: rental18
        },
        {
            city: 'Alicante',
            locations: 62,
            averagePrice: 'PKR 12,865.38 per day',
            imageUrl: rental19
        },
        {
            city: 'Lisbon',
            locations: 63,
            averagePrice: 'PKR 13,305.94 per day',
            imageUrl: rental1
        },
        {
            city: 'Kahului',
            locations: 52,
            averagePrice: 'PKR 14,565.54 per day',
            imageUrl: rental2
        },
        {
            city: 'Málaga',
            locations: 37,
            averagePrice: 'PKR 12,323.64 per day',
            imageUrl: rental3
        },
        {
            city: 'Honolulu',
            locations: 74,
            averagePrice: 'PKR 12,051.82 per day',
            imageUrl: rental4
        },
        {
            city: 'Lillestrøm',
            locations: 28,
            averagePrice: 'PKR 15,281.68 per day',
            imageUrl: rental5
        },
    ]




    return <>
        <SecondHeader />

        {/* Heading off Car Rentals Page */}

        <Box className="bg-primary pb-5 ">
            <Box className="container pb-4">
                <Box>
                    <Typography className='fs-1 fw-bold text-white '>Car rentals for any kind of trip
                    </Typography>
                    <Typography variant='body1' className="text-white fs-5">

                        Great cars at great prices from the biggest rental companies
                    </Typography>
                </Box>
            </Box>
        </Box>



        {/* Search bars of Car Rentals Page */}


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
        
        <Link className="btn btn-primary translate-middle-y   border border-4 rounded-1 border-warning col-lg-1 col-md-12 -col-sm-12" to="/hotels-detail">
            <button className="bg-transparent text-white border-0 fw-bold text-center mt-lg-2" >Search</button>
         </Link>
        
      </Box>
    </Box>

        {/* CheckBox */}
        <Box className="container  d-none d-lg-flex fs-6 fw-bold">
            {/* <Checkbox label="hello" defaultChecked /> */}

            <FormControlLabel className='fw-bold fs-5' control={<Checkbox />} label="Drop car off at different location" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Driver aged 30 – 65?" />
        </Box>


        {/* Features Section */}

        <Box sx={{ backgroundColor: "#F5F5F5" }} className='py-5 mt-5'>
            <Box className='container py-5'>
                <Box className='row'>
                    <Box className='col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center align-items-center'>
                        <img className='w-25 ' src={CustomerService} alt="" />
                        <Box>
                            <Typography variant='h6' className='fw-bold'>
                                We’re here for you</Typography>
                            <Typography sx={{ fontSize: "14px" }}>Customer support in over 30 languages

                            </Typography>
                        </Box>
                    </Box>


                    <Box className='col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center align-items-center'>
                        <img className='w-25 ms-3' src={FreeCancellation} alt="" />
                        <Box>
                            <Typography className='fw-bold fs-5 ms-2'>

                                Free cancellation
                            </Typography>
                            <Typography className=' ms-2' sx={{ fontSize: "14px" }}>Up to 48 hours before pick-up for most bookings

                            </Typography>
                        </Box>
                    </Box>




                    <Box className='col-lg-4 col-md-4 col-sm-12 d-flex  align-items-center '>
                        <img className='w-25 text-start ms-3' src={Reviews} alt="" />
                        <Box>
                            <Typography className='fw-bold fs-5 ms-2'>
                                5 million+ reviews</Typography>
                            <Typography className=' ms-2' sx={{ fontSize: "14px" }}>By real, verified customers

                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>




        {/* Frequently Ask Question of car rental pge */}

        <Box className='container mt-5 mb-5'>
            <Typography className='fs-3 fw-bold'>
                Frequently asked questions
            </Typography>

            <Box className=''>
                <Box className='row'>
                    <Box className=' col-lg-6 col-md-12 col-sm-12 '>
                        <Accordion className='border border-1 border-light-subtle rounded-1 py-2 my-2 border-bottom-0' >
                            <AccordionSummary className=''
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >

                                <Typography className='fw-bold text-dark fs-6'>
                                    Why should I book a car rental in Pakistan with Booking.com?
                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontSize: '15px' }} >We make it easy to find a rental that’ll fit your needs. Here’s what we offer:</Typography>
                                <List sx={{ fontSize: '15px' }}>
                                    <ListItem sx={{ fontSize: '15px' }} className=''>1. Coronavirus (Covid-19)FAQ's</ListItem>
                                    <ListItem className=''>2. Huge selection of cars – from compact vehicles to SUVs</ListItem>
                                    <ListItem className=''>3. Support in 30+ languages</ListItem>
                                    <ListItem className=''>4. Free cancellation up to 48 hours before pick-up time on most bookings.</ListItem>
                                </List>

                            </AccordionDetails>
                        </Accordion>


                        <Accordion className='border border-1 border-light-subtle rounded-1 border-top-0 border-bottom-0 py-2 my-2' >
                            <AccordionSummary className=''
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >

                                <Typography className='fw-bold text-dark fs-6'>
                                    Why should I book a car rental in Pakistan with Booking.com?
                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontSize: '15px' }} >We make it easy to find a rental that’ll fit your needs. Here’s what we offer:</Typography>
                                <List sx={{ fontSize: '15px' }}>
                                    <ListItem sx={{ fontSize: '15px' }} className=''>1. Coronavirus (Covid-19)FAQ's</ListItem>
                                    <ListItem className=''>2. Huge selection of cars – from compact vehicles to SUVs</ListItem>
                                    <ListItem className=''>3. Support in 30+ languages</ListItem>
                                    <ListItem className=''>4. Free cancellation up to 48 hours before pick-up time on most bookings.</ListItem>
                                </List>

                            </AccordionDetails>
                        </Accordion>



                        <Accordion className='border border-1 border-light-subtle rounded-1 border-top-0 border-bottom-0 py-2 my-2' >
                            <AccordionSummary className=''
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >

                                <Typography className='fw-bold text-dark fs-6'>
                                    Why should I book a car rental in Pakistan with Booking.com?
                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontSize: '15px' }} >We make it easy to find a rental that’ll fit your needs. Here’s what we offer:</Typography>
                                <List sx={{ fontSize: '15px' }}>
                                    <ListItem sx={{ fontSize: '15px' }} className=''>1. Coronavirus (Covid-19)FAQ's</ListItem>
                                    <ListItem className=''>2. Huge selection of cars – from compact vehicles to SUVs</ListItem>
                                    <ListItem className=''>3. Support in 30+ languages</ListItem>
                                    <ListItem className=''>4. Free cancellation up to 48 hours before pick-up time on most bookings.</ListItem>
                                </List>

                            </AccordionDetails>
                        </Accordion>
                    </Box>












                    <Box className=' col-lg-6 col-md-12 col-sm-12 '>
                        <Accordion className='border border-1 border-light-subtle rounded-1 py-2 my-2 border-bottom-0' >
                            <AccordionSummary className=''
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >

                                <Typography className='fw-bold text-dark fs-6'>
                                    Can I book a rental car for someone else?
                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontSize: '15px' }} >We make it easy to find a rental that’ll fit your needs. Here’s what we offer:</Typography>
                                <List sx={{ fontSize: '15px' }}>
                                    <ListItem sx={{ fontSize: '15px' }} className=''>Of course. Just put their info on the "Driver details" form when booking the car.
                                    </ListItem>
                                </List>

                            </AccordionDetails>
                        </Accordion>


                        <Accordion className='border border-1 border-light-subtle rounded-1 border-top-0 border-bottom-0 py-2 my-2' >
                            <AccordionSummary className=''
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >

                                <Typography className='fw-bold text-dark fs-6'>
                                    Any tips for picking the right car?
                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontSize: '15px' }} >We make it easy to find a rental that’ll fit your needs. Here’s what we offer:</Typography>
                                <List sx={{ fontSize: '15px' }}>
                                    <ListItem sx={{ fontSize: '15px' }} className=''>1. Think about where you’re going. An SUV might be great for cruising down a Texas freeway, but a smaller car will be a lot easier for getting around Rome.
                                    </ListItem>
                                    <ListItem className=''>2. See what other people think. You’ll find lots of reviews and ratings on our site, so check out what other customers liked (and didn’t like) about each company.
                                        Don’t forget the transmission.</ListItem>
                                    <ListItem className=''>3. In some countries, almost everyone drives manual cars, while automatics are the norm in other ones. Make sure you rent a car you can drive!</ListItem>
                                </List>

                            </AccordionDetails>
                        </Accordion>



                        <Accordion className='border border-1 border-light-subtle rounded-1 border-top-0 border-bottom-0 py-2 my-2' >
                            <AccordionSummary className=''
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >

                                <Typography className='fw-bold text-dark fs-6'>
                                    Are all fees included in the rental price?

                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontSize: '15px' }} >The price you see includes the car, mandatory coverage (e.g. Theft Protection, Collision Damage Waiver), and fees that, if they apply, are usually payable at pick-up (e.g. any one-way fees, airport surcharges, or local taxes).</Typography>
                                <List sx={{ fontSize: '15px' }}>
                                    <ListItem sx={{ fontSize: '15px' }} className=''>It also includes any extras you already added (e.g. GPS, baby seats).</ListItem>
                                    <ListItem className=''>It doesn’t include any extra coverage you buy when you get to the rental counter.</ListItem>
                                    <ListItem className=''>Tip: There’s a full price breakdown on the Payment page.</ListItem>
                                </List>

                            </AccordionDetails>
                        </Accordion>
                    </Box>





                </Box>
            </Box>
        </Box>




        <Box className='container'>
            <Typography className='fs-3 fw-bold'>Popular car rental destinations</Typography>
            <Typography>Explore more options to rent a car for cheap</Typography>
            <Box className='d-flex mt-3'>
                <Box className="  px-4 py-2 text-primary border border-1 border-primary  rounded-5">
                    <a style={{ fontSize: "14px" }} className='text-primary fw-medium text-center ps-1 text-center  text-decoration-none  ' href="#" >
                        Cities worldwide

                    </a>
                </Box>
                <Box className=" ms-2 px-4 py-2 text-primary border border-1 border-primary  rounded-5">
                    <a style={{ fontSize: "14px" }} className='text-primary fw-medium text-center ps-1 text-center  text-decoration-none  ' href="#" >
                        Airports worldwide

                    </a>
                </Box>
            </Box>





            <Box className="container my-4">
                <Box className="row">


                    {/* Yaha py map kara hai arry ko car rentl poge ka */}

                    {carRentalLocations.map((rental, index) => (
                        <Box className="col-lg-4  col-12   mb-4" key={index}>
                            <Card className="shadow-sm">
                                <Box className="row no-gutters">

                                    <Box className="col-4 text-center mt-3 ">
                                        <CardMedia
                                            component="img"
                                            image={rental.imageUrl}
                                            alt={rental.city}
                                            className="img-fluid rounded-2"
                                        />
                                    </Box>
                                    {/* Details Section */}
                                    <Box className="col-8">
                                        <CardContent>
                                            <Typography variant="h6" component="Box">
                                                {rental.city}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {rental.locations} car rental locations
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Average Price: {rental.averagePrice}
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                </Box>
                            </Card>
                        </Box>
                    ))}
                </Box>
            </Box>













        </Box>


        <Box>
            <ul className='d-flex container justify-content-between d-none d-lg-flex d-md-flex'>
                <Box className='' ><li>Countries</li></Box>
                <Box className='' ><li>Regions</li></Box>
                <Box className='' ><li>Cities</li></Box>
                <Box className='' ><li>Districts</li></Box>
                <Box className='' ><li>Airports</li></Box>
                <Box className='' ><li>Hotels</li></Box>
                <Box className='' ><li>Apartments</li></Box>
                <Box className='' ><li>Resorts</li></Box>
                <Box className='' ><li>Villas</li></Box>
                <Box className='' ><li>Hostels</li></Box>
                <Box className='' ><li>B&amp;Bs</li></Box>
                <Box className='' ><li>Discover</li></Box>
                <Box className='' ><li>Reviews</li></Box>
            </ul>
        </Box>


    </>
}

export default CarRentals