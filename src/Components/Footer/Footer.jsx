import { Box,List, ListItem, Typography } from '@mui/material'
import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails,  } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import country from "../../assets/images/flag.png"
import bookingLogo from "../../assets/images/Booking.com-Logo.wine.png"
import PricelineLogo from "../../assets/images/Priceline_Logo.png"
import KayakLogo from "../../assets/images/Kayak.com-Logo.wine.png"
import AgodaLogo from "../../assets/images/agoda.jpg"
import OpensaveLogo from "../../assets/images/openTable.jpg"



const Footer = () => {
    return (
        <Box className='pt-4' sx={{ backgroundColor: "#F5F5F5" }}>

            <Box className='container '>


                <Box className='row'>

                    <Box className='col-lg-3 col-md-3 d-none d-lg-block d-md-block '>
                        <List style={{ fontSize: "14px" }}>
                            <Typography className='fw-bold text-dark ms-3'>
                                Support
                            </Typography>
                            <ListItem className=''>Coronavirus (Covid-19)FAQ's</ListItem>
                            <ListItem className=''>Manage your trips</ListItem>
                            <ListItem className=''>Contact Customer Service</ListItem>
                            <ListItem className=''>Safety Resource Center</ListItem>
                        </List>
                    </Box>





                    <Box className='col-lg-3 col-md-3 d-none d-lg-block d-md-block '>
                        <List style={{ fontSize: "14px" }}>
                            <Typography className='fw-bold text-dark ms-3'>
                                Terms and Settings
                            </Typography>
                            <ListItem className=''>Privacy and Cookies</ListItem>
                            <ListItem className=''>Terms and conditions</ListItem>
                            <ListItem className=''>Partner dispute</ListItem>
                            <ListItem className=''>Modern Slavery Statement</ListItem>
                            <ListItem className=''>Human Rights Statement</ListItem>
                        </List>
                    </Box>


                    <Box className='col-lg-3 col-md-3 d-none d-lg-block d-md-block '>
                        <List style={{ fontSize: "14px" }}>
                            <Typography className='fw-bold text-dark ms-3'>
                                Partners
                            </Typography>
                            <ListItem className=''>Extranet login</ListItem>
                            <ListItem className=''>Partner help</ListItem>
                            <ListItem className=''>List your property </ListItem>
                            <ListItem className=''>Become an affiliate </ListItem>
                        </List>
                    </Box>

                    <Box className='col-lg-3 col-md-3 d-none d-lg-block d-md-block '>

                        <List style={{ fontSize: "14px" }}>
                            <Typography className='fw-bold text-dark ms-3'>
                                About
                            </Typography>
                            <ListItem className=''>About Booking.com</ListItem>
                            <ListItem className=''>How we work</ListItem>
                            <ListItem className=''>Sustainability</ListItem>
                            <ListItem className=''>Press center</ListItem>
                            <ListItem className=''>Carrers</ListItem>
                            <ListItem className=''>Investor Relations</ListItem>
                            <ListItem className=''>Corporate contact</ListItem>
                        </List>
                    </Box>

                </Box>




                <Box className='d-lg-none d-md-none pt-4'>

                    <Accordion sx={{ backgroundColor: "#F5F5F5" }}>
                        <AccordionSummary className='border-top-0 border-end-0 border-start-0'
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >

                            <Typography className='fw-bold text-dark ms-3'>
                                Support
                            </Typography>

                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                <ListItem className=''>Coronavirus (Covid-19)FAQ's</ListItem>
                                <ListItem className=''>Manage your trips</ListItem>
                                <ListItem className=''>Contact Customer Service</ListItem>
                                <ListItem className=''>Safety Resource Center</ListItem>
                            </List>

                        </AccordionDetails>
                    </Accordion>


                    <Accordion sx={{ backgroundColor: "#F5F5F5", }}>
                        <AccordionSummary className='border-top-0 border-end-0 border-start-0'
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography className='fw-bold text-dark ms-3'>
                                Terms and Settings
                            </Typography>


                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                <ListItem className=''>Privacy and Cookies</ListItem>
                                <ListItem className=''>Terms and conditions</ListItem>
                                <ListItem className=''>Partner dispute</ListItem>
                                <ListItem className=''>Modern Slavery Statement</ListItem>
                                <ListItem className=''>Human Rights Statement</ListItem>
                            </List>

                        </AccordionDetails>
                    </Accordion>


                    <Accordion sx={{ backgroundColor: "#F5F5F5" }}>
                        <AccordionSummary className='border-top-0 border-end-0 border-start-0'
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography className='fw-bold text-dark ms-3'>
                                Partners
                            </Typography>

                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                <ListItem className=''>Extranet login</ListItem>
                                <ListItem className=''>Partner help</ListItem>
                                <ListItem className=''>List your property </ListItem>
                                <ListItem className=''>Become an affiliate </ListItem>
                            </List>

                        </AccordionDetails>
                    </Accordion>



                    <Accordion sx={{ backgroundColor: "#F5F5F5" }}>
                        <AccordionSummary className='border-top-0 border-end-0 border-start-0'
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >

                            <Typography className='fw-bold text-dark ms-3'>
                                About
                            </Typography>

                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                <ListItem className=''>Coronavirus (Covid-19)FAQ's</ListItem>
                                <ListItem className=''>Manage your trips</ListItem>
                                <ListItem className=''>Contact Customer Service</ListItem>
                                <ListItem className=''>Safety Resource Center</ListItem>
                            </List>

                        </AccordionDetails>
                    </Accordion>

                </Box>


            </Box>


            <Box className=''>

                <ul class="container">

                    <button style={{ fontSize: "29px" }} class="btn border-0 bg-transperant   fw-medium  " ><img width={25} className='rounded-pill' img-fluid src={country} alt="" /></button>

                    <button style={{ fontSize: "19px" }} class="btn bg-transperant border-0 text-black  rounded-pill fw-medium  " >PKR</button>

                </ul>


            </Box>
            <hr></hr>

            <Box>
                <Typography sx={{ fontSize: "12px" }} className='text-center text-secondary'>
                    Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.<br></br>
                    Copyright © 1996–2025 Booking.com™. All rights reserved.

                </Typography>

            <Box className='container'>
            <Box className='row text-center justify-content-center'>
                    <Box className='col-lg-2 col-md-2 col-12  '>
                        <img width={100} src={bookingLogo} alt="" />
                    </Box>
                    <Box className='col-lg-2 col-md-2 col-12 '>
                        <img width={100} className='mt-3' src={PricelineLogo} alt="" />
                    </Box>
                    <Box className='col-lg-2 col-md-2 col-12 '>
                        <img width={100} src={KayakLogo} alt="" />
                    </Box>
                    <Box className='col-lg-2 col-md-2 col-12  bg-transperant'>
                        <img width={120} className='mt-3' src={AgodaLogo} alt="" />
                    </Box>
                    <Box className='col-lg-2 col-md-2 col-12 '>
                        <img width={100} className='mt-4 bg-transparent' src={OpensaveLogo} alt="" />
                    </Box>
                </Box>

            </Box>
            </Box>


        </Box>


    )
}

export default Footer

