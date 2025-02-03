import React, { useState } from 'react'
import SecondHeader from '../Header/SecondHeader'
import { Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, FormControlLabel, List, ListItem, Typography } from '@mui/material'
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
                    {/* <KingBedOutlinedIcon /> */}
                    <input width={100}

                        type="text"
                        placeholder="Pick-up location"
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




        {/* Frequently Ask Question */}

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




    </>
}

export default CarRentals