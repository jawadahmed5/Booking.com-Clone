import SecondHeader from '../Header/SecondHeader'
import { Box, Breadcrumbs, Button, Card, CardContent, CardMedia, Checkbox, Chip, Container, FormControlLabel, List, ListItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import Person2Icon from '@mui/icons-material/Person2';
import { useLocalStorageState } from '@toolpad/core/useLocalStorageState';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Link } from 'react-router';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HotelDetailPic1 from '../../assets/images/HotelDetailPic-1.webp';
import HotelDetailPic2 from '../../assets/images/HotelDetailPic-2.webp'
import HotelDetailPic3 from '../../assets/images/HotelDetailPic-3.webp'
import HotelDetailPic4 from '../../assets/images/HotelDetailPic-4.webp'
import HotelDetailPic5 from '../../assets/images/HotelDetailPic-5.webp'
import HotelDetailPic6 from '../../assets/images/HotelDetailPic-6.webp'
import HotelDetailPic7 from '../../assets/images/HotelDetailPic-7.webp'
import HotelDetailPic8 from '../../assets/images/HotelDetailPic-8.webp'
import HotelDetailPic9 from '../../assets/images/HotelDetailPic-9.webp'
import HotelDetailPic10 from '../../assets/images/HotelDetailPic-10.webp'

const HotelsDetailPage = () => {

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







    const hotels = [
        {
            id: 1,
            name: "Elysium Downtown Luxury Apartments",
            location: "Blue Area, Islamabad",
            distance: "4.6 km from downtown",
            rating: 10,
            reviews: 9,
            description: "Deluxe King Studio ",
            RoomDetails: "Entire studio • 1 bathroom • 1 kitchen • 84m²",
            bedType: "1 king bed",
            breakfast: "Breakfast included",
            cancellation: "Free cancellation",
            noPrepaymentNeeded: "No prepayment needed",
            payAtProperty: "Pay at the property",
            availableRooms: 5,
            price: {
                original: 34000,
                discounted: 20400,
                taxesAndFees: 5304
            },
            deal: "Limited-time Deal",
            newToBooking: true,
            featured: "featured",
            availability: "See availability",
            image: HotelDetailPic1
        },
        {
            id: 2,
            name: "Elysium-Mountain Luxury Apartments",
            location: "Blue Area, Islamabad",
            distance: "4.6 km from downtown",
            rating: 10,
            reviews: 12,
            description: "Deluxe King Studio ",
            RoomDetails: "Entire studio • 1 bathroom • 1 kitchen • 84m²",
            bedType: "1 king bed",
            breakfast: "Breakfast included",
            availableRooms: 5,
            price: {
                original: 30000,
                discounted: 22500,
                taxesAndFees: 5850
            },
            deal: "Early 2025 Deal",
            newToBooking: true,
            featured: "featured",
            availability: "See availability",
            image: HotelDetailPic2
        },
        {
            id: 3,
            name: "Sky Heights Signature Apartments",
            location: "Blue Area, Islamabad",
            distance: "4.6 km from downtown",
            rating: 10,
            reviews: 8,
            description: "Deluxe King Studio ",
            RoomDetails: "Entire studio • 1 bathroom • 1 kitchen • 84m²",
            bedType: "1 king bed",
            breakfast: "Breakfast included",
            availableRooms: 3,
            price: {
                original: 33000,
                discounted: 24750,
                taxesAndFees: 6435
            },
            deal: "Early 2025 Deal",
            newToBooking: true,
            featured: "featured",
            availability: "See availability",
            image: HotelDetailPic3
        },
        {
            id: 4,
            name: "Holiday Inn Islamabad",
            location: "E-11 Sector, Islamabad",
            distance: "12 km from downtown",
            rating: 9.5,
            reviews: 70,
            description: "Deluxe Double Room (2 Adults + 1 Child) - 2 beds (1 full, 1 futon)",
            cancellation: "Free cancellation",
            noPrepaymentNeeded: "No prepayment needed",
            payAtProperty: "Pay at the property",
            availableRooms: 4,
            price: {
                original: 6000,
                discounted: 6000,
                taxesAndFees: 1020
            },
            availability: "See availability",
            image: HotelDetailPic4
        },
        {
            id: 5,
            name: "Blue Moon Residency Jinnah Super",
            location: "F-6 Sector, Islamabad",
            distance: "2.5 km from downtown",
            rating: 8.7,
            reviews: 49,
            description: "Deluxe Double Room (2 Adults + 1 Child) - 1 full bed",
            cancellation: "Free cancellation",
            noPrepaymentNeeded: "No prepayment needed",
            payAtProperty: "Pay at the property",
            availableRooms: 5,
            price: {
                original: 9999,
                discounted: 7999,
                taxesAndFees: 1360
            },
            deal: "Early 2025 Deal",
            availability: "See availability",
            image: HotelDetailPic5
        },
        {
            id: 6,
            name: "Elysium-Sky Views Elite Apartments",
            location: "Blue Area, Islamabad",
            distance: "4.6 km from downtown",
            rating: 10,
            reviews: 7,
            description: "Deluxe King Studio ",
            RoomDetails: "Entire studio • 1 bathroom • 1 kitchen • 65m²",
            bedType: "1 king bed",
            cancellation: "Free cancellation",
            noPrepaymentNeeded: "No prepayment needed",
            payAtProperty: "Pay at the property",
            availableRooms: 4,
            price: {
                original: 31000,
                discounted: 23250,
                taxesAndFees: 6045
            },
            deal: "Early 2025 Deal",
            newToBooking: true,
            featured: "featured",
            availability: "See availability",
            image: HotelDetailPic6
        },
        {
            id: 7,
            name: "Elysium Heights Premium Serviced Apartments",
            location: "Blue Area, Islamabad",
            distance: "4.6 km from downtown",
            rating: 10,
            reviews: 3,
            description: "Deluxe King Studio ",
            RoomDetails: "Entire studio • 1 bathroom • 1 kitchen • 70m²",
            bedType: "1 full bed",
            cancellation: "Free cancellation",
            availableRooms: 3,
            price: {
                original: 30000,
                discounted: 24000,
                taxesAndFees: 8200
            },
            deal: "Early 2025 Deal",
            newToBooking: true,
            featured: "featured",
            availability: "See availability",
            image: HotelDetailPic7
        },
        {
            id: 8,
            name: "Reina Boutique Hotel - G6",
            location: "G-6 Sector, Islamabad",
            distance: "1.1 km from downtown",
            rating: 8.0,
            reviews: 363,
            description: "Deluxe Room - 1 king bed",
            cancellation: "Free cancellation",
            noPrepaymentNeeded: "No prepayment needed",
            payAtProperty: "Pay at the property",
            availableRooms: 1,
            price: {
                original: 11250,
                discounted: 8438,
                taxesAndFees: 1434
            },
            deal: "Early 2025 Deal",
            availability: "See availability",
            image: HotelDetailPic8
        },
        {
            id: 9,
            name: "Three Trees Hotel",
            location: "G-7 Sector, Islamabad",
            distance: "3.3 km from downtown",
            rating: 7.8,
            reviews: 65,
            description: "Standard Twin Room - 2 twin beds",
            breakfast: "Breakfast included",
            cancellation: "Free cancellation",
            noPrepaymentNeeded: "No prepayment needed",
            payAtProperty: "Pay at the property",
            availableRooms: 2,
            price: {
                original: 9880,
                discounted: 9880,
                taxesAndFees: 1680
            },
            availability: "See availability",
            image: HotelDetailPic9
        },
        {
            id: 10,
            name: "Luxury Apartments - Elysium Opposite to Centaurus Mall",
            location: "Blue Area, Islamabad",
            distance: "4.6 km from downtown",
            rating: 8.0,
            reviews: 11,
            description: "One-Bedroom Apartment with Balcony and Mountain View - Entire apartment • 1 bedroom • 1 living room • 1 bathroom • 1 kitchen • 102m²",
            bedType: "2 beds (1 king, 1 sofa bed)",
            cancellation: "Free cancellation",
            noPrepaymentNeeded: "No prepayment needed",
            payAtProperty: "Pay at the property",
            availableRooms: 1,
            price: {
                original: 20425,
                discounted: 20425,
                taxesAndFees: 3472
            },
            availability: "See availability",
            image: HotelDetailPic10
        }
    ];

    console.log(hotels);








    return <>
        {/* Header and serach bar */}
        <Box className='pb-5'>
            <SecondHeader />

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


            {/* herarchiey navigationj breadecrumbs */}
            {/* <Box className='container'>
                <Stack spacing={2}>

                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="10" />}
                        aria-label="breadcrumb"
                    >
                        {Breadcrumbs}
                    </Breadcrumbs>
                </Stack>
            </Box> */}


            {/* Cheack box section */}
            <Box className='container'>
                <Box className='row'>
                    <Box className='col-lg-3 col-md-3 col-sm-12 d-none d-lg-block d-md-block'>




                        <Box className="position-relative mt-2 ">
                            <iframe className='rounded-2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.824470487258!2d73.10539277479822!3d33.713490635543025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfc0697d15d10d%3A0x1aaf6f84f1af44a4!2sOne%20Constitution%20Avenue!5e0!3m2!1sen!2s!4v1738765511573!5m2!1sen!2s" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <Button variant='contained' size='small' className='w-75 position-absolute top-50 mt-5 start-50 translate-middle '>Show on the map</Button>

                        </Box>

                        <Card className='border border-1 border-secondary-subtle'>
                            <Box><Typography className='fw-bold p-2'>
                                Filter by:
                            </Typography></Box>
                            <hr></hr>
                            <Typography className='fw-bold p-2'>
                                Your previous filters
                            </Typography>
                            <Box className='d-flex justify-content-between '>
                                <Box className='ps-2'>
                                    <FormControlLabel control={<Checkbox />} label="" /><span className=' mt-2'>Wonderful: 9+</span>


                                </Box>
                                <Box className='text-center '>
                                    <Typography className='text-center mt-2 pe-2' >
                                        197
                                    </Typography>
                                </Box>
                            </Box>
                            <Box className='d-flex justify-content-between '>
                                <Box className='ps-2'>
                                    <FormControlLabel control={<Checkbox />} label="" /><span className=' mt-2'>Hotels</span>


                                </Box>
                                <Box className='text-center '>
                                    <Typography className='text-center mt-2 pe-2' >
                                        116
                                    </Typography>
                                </Box>



                            </Box>
                            <Box className='d-flex justify-content-between '>
                                <Box className='ps-2'>
                                    <FormControlLabel control={<Checkbox />} label="" /><span className=' mt-2'>Villas</span>


                                </Box>
                                <Box className='text-center '>
                                    <Typography className='text-center mt-2 pe-2' >
                                        12
                                    </Typography>
                                </Box>
                            </Box>

                        </Card>






                        <Card className='border border-1 border-secondary-subtle'>

                            <Typography className='fw-bold p-2'>
                                Your previous filters
                            </Typography>
                            <Box className='d-flex justify-content-between '>
                                <Box className='ps-2'>
                                    <FormControlLabel control={<Checkbox />} label="" /><span className=' mt-2'>Wonderful: 9+</span>


                                </Box>
                                <Box className='text-center '>
                                    <Typography className='text-center mt-2 pe-2' >
                                        197
                                    </Typography>
                                </Box>
                            </Box>
                            <Box className='d-flex justify-content-between '>
                                <Box className='ps-2'>
                                    <FormControlLabel control={<Checkbox />} label="" /><span className=' mt-2'>Airport shuttle</span>


                                </Box>
                                <Box className='text-center '>
                                    <Typography className='text-center mt-2 pe-2' >
                                        166
                                    </Typography>
                                </Box>
                            </Box>
                            <Box className='d-flex justify-content-between '>
                                <Box className='ps-2'>
                                    <FormControlLabel control={<Checkbox />} label="" /><span className=' mt-2'>Apartments</span>


                                </Box>
                                <Box className='text-center '>
                                    <Typography className='text-center mt-2 pe-2' >
                                        127
                                    </Typography>
                                </Box>
                            </Box>

                            <Box className='d-flex justify-content-between '>
                                <Box className='ps-2'>
                                    <FormControlLabel control={<Checkbox />} label="" /><span className=' mt-2'>Free cancellation</span>


                                </Box>
                                <Box className='text-center '>
                                    <Typography className='text-center mt-2 pe-2' >
                                        155
                                    </Typography>
                                </Box>
                            </Box>


                            <Box className='d-flex justify-content-between '>
                                <Box className='ps-2'>
                                    <FormControlLabel control={<Checkbox />} label="" /><span className=' mt-2'>Guesthouses</span>


                                </Box>
                                <Box className='text-center '>
                                    <Typography className='text-center mt-2 pe-2' >
                                        222
                                    </Typography>
                                </Box>
                            </Box>



                            <Box className='d-flex justify-content-between '>
                                <Box className='ps-2'>
                                    <FormControlLabel control={<Checkbox />} label="" /><span className=' mt-2'>Parking</span>


                                </Box>
                                <Box className='text-center '>
                                    <Typography className='text-center mt-2 pe-2' >
                                        100
                                    </Typography>
                                </Box>
                            </Box>


                            <Box className='d-flex justify-content-between '>
                                <Box className='ps-2'>
                                    <FormControlLabel control={<Checkbox />} label="" /><span className=' mt-2'>Free wifi</span>


                                </Box>
                                <Box className='text-center '>
                                    <Typography className='text-center mt-2 pe-2' >
                                        184
                                    </Typography>
                                </Box>
                            </Box>


                            <Box className='d-flex justify-content-between '>
                                <Box className='ps-2'>
                                    <FormControlLabel control={<Checkbox />} label="" /><span className=' mt-2'>Free Breakfast</span>


                                </Box>
                                <Box className='text-center '>
                                    <Typography className='text-center mt-2 pe-2' >
                                        105
                                    </Typography>
                                </Box>
                            </Box>



                            <Box className='d-flex justify-content-between '>
                                <Box className='ps-2'>
                                    <FormControlLabel control={<Checkbox />} label="" /><span className=' mt-2'>Double Bed</span>


                                </Box>
                                <Box className='text-center '>
                                    <Typography className='text-center mt-2 pe-2' >
                                        105
                                    </Typography>
                                </Box>
                            </Box>




                        </Card>













                        <Card className='border border-1 border-secondary-subtle'>

                            <Typography className='fw-bold p-2'>
                                Your previous filters
                            </Typography>
                            <Box className='d-flex justify-content-between '>
                                <Box className='ps-2'>
                                    <FormControlLabel control={<Checkbox />} label="" /><span className=' mt-2'>Wonderful: 9+</span>


                                </Box>
                                <Box className='text-center '>
                                    <Typography className='text-center mt-2 pe-2' >
                                        197
                                    </Typography>
                                </Box>
                            </Box>
                            <Box className='d-flex justify-content-between '>
                                <Box className='ps-2'>
                                    <FormControlLabel control={<Checkbox />} label="" /><span className=' mt-2'>Entire homes & apartments
                                    </span>


                                </Box>
                                <Box className='text-center '>
                                    <Typography className='text-center mt-2 pe-2' >
                                        297
                                    </Typography>
                                </Box>
                            </Box>
                            <Box className='d-flex justify-content-between '>
                                <Box className='ps-2'>
                                    <FormControlLabel control={<Checkbox />} label="" /><span className=' mt-2'>Apartments</span>


                                </Box>
                                <Box className='text-center '>
                                    <Typography className='text-center mt-2 pe-2' >
                                        97
                                    </Typography>
                                </Box>
                            </Box>

                            <Box className='d-flex justify-content-between '>
                                <Box className='ps-2'>
                                    <FormControlLabel control={<Checkbox />} label="" /><span className=' mt-2'>Guesthouses</span>


                                </Box>
                                <Box className='text-center '>
                                    <Typography className='text-center mt-2 pe-2' >
                                        266
                                    </Typography>
                                </Box>
                            </Box>

                            <Box className='d-flex justify-content-between '>
                                <Box className='ps-2'>
                                    <FormControlLabel control={<Checkbox />} label="" /><span className=' mt-2'>Bed and Breakfasts</span>


                                </Box>
                                <Box className='text-center '>
                                    <Typography className='text-center mt-2 pe-2' >
                                        30
                                    </Typography>
                                </Box>
                            </Box>



                            <Box className='d-flex justify-content-between '>
                                <Box className='ps-2'>
                                    <FormControlLabel control={<Checkbox />} label="" /><span className=' mt-2'>Kitchen facilities</span>


                                </Box>
                                <Box className='text-center '>
                                    <Typography className='text-center mt-2 pe-2' >
                                        30-0
                                    </Typography>
                                </Box>
                            </Box>


                            <Box className='d-flex justify-content-between '>
                                <Box className='ps-2'>
                                    <FormControlLabel control={<Checkbox />} label="" /><span className=' mt-2'>All-inclusive</span>


                                </Box>
                                <Box className='text-center '>
                                    <Typography className='text-center mt-2 pe-2' >
                                        90
                                    </Typography>
                                </Box>
                            </Box>


                            <Box className='d-flex justify-content-between '>
                                <Box className='ps-2'>
                                    <FormControlLabel control={<Checkbox />} label="" /><span className=' mt-2'>Sea view</span>


                                </Box>
                                <Box className='text-center '>
                                    <Typography className='text-center mt-2 pe-2' >
                                        23
                                    </Typography>
                                </Box>
                            </Box>



                            <Box className='d-flex justify-content-between '>
                                <Box className='ps-2'>
                                    <FormControlLabel control={<Checkbox />} label="" /><span className=' mt-2'>Private bathroom</span>


                                </Box>
                                <Box className='text-center '>
                                    <Typography className='text-center mt-2 pe-2' >
                                        11
                                    </Typography>
                                </Box>
                            </Box>




                            <Box className='d-flex justify-content-between '>
                                <Box className='ps-2'>
                                    <FormControlLabel control={<Checkbox />} label="" /><span className=' mt-2'>Air conditioning
                                    </span>


                                </Box>
                                <Box className='text-center '>
                                    <Typography className='text-center mt-2 pe-2' >
                                        101
                                    </Typography>
                                </Box>
                            </Box>


                            <Box className='d-flex justify-content-between '>
                                <Box className='ps-2'>
                                    <FormControlLabel control={<Checkbox />} label="" /><span className=' mt-2'>Balcony
                                    </span>


                                </Box>
                                <Box className='text-center '>
                                    <Typography className='text-center mt-2 pe-2' >
                                        8
                                    </Typography>
                                </Box>
                            </Box>


                            <Box className='d-flex justify-content-between '>
                                <Box className='ps-2'>
                                    <FormControlLabel control={<Checkbox />} label="" /><span className=' mt-2'>Pool
                                    </span>


                                </Box>
                                <Box className='text-center '>
                                    <Typography className='text-center mt-2 pe-2' >
                                        2
                                    </Typography>
                                </Box>
                            </Box>

                            <Box className='d-flex justify-content-between '>
                                <Box className='ps-2'>
                                    <FormControlLabel control={<Checkbox />} label="" /><span className=' mt-2'>Generator
                                    </span>


                                </Box>
                                <Box className='text-center '>
                                    <Typography className='text-center mt-2 pe-2' >
                                        20
                                    </Typography>
                                </Box>
                            </Box>


                            <Box className='d-flex justify-content-between '>
                                <Box className='ps-2'>
                                    <FormControlLabel control={<Checkbox />} label="" /><span className=' mt-2'>Television
                                    </span>


                                </Box>
                                <Box className='text-center '>
                                    <Typography className='text-center mt-2 pe-2' >
                                        21
                                    </Typography>
                                </Box>
                            </Box>



                            <Box className='d-flex justify-content-between '>
                                <Box className='ps-2'>
                                    <FormControlLabel control={<Checkbox />} label="" /><span className=' mt-2'>Free call service
                                    </span>


                                </Box>
                                <Box className='text-center '>
                                    <Typography className='text-center mt-2 pe-2' >
                                        921
                                    </Typography>
                                </Box>
                            </Box>


                            <Box className='d-flex justify-content-between '>
                                <Box className='ps-2'>
                                    <FormControlLabel control={<Checkbox />} label="" /><span className=' mt-2'>Free dusting
                                    </span>


                                </Box>
                                <Box className='text-center '>
                                    <Typography className='text-center mt-2 pe-2' >
                                        786
                                    </Typography>
                                </Box>
                            </Box>


                            <Box className='d-flex justify-content-between '>
                                <Box className='ps-2'>
                                    <FormControlLabel control={<Checkbox />} label="" /><span className=' mt-2'>Free card service
                                    </span>


                                </Box>
                                <Box className='text-center '>
                                    <Typography className='text-center mt-2 pe-2' >
                                        110
                                    </Typography>
                                </Box>
                            </Box>



                            <Box className='d-flex justify-content-between '>
                                <Box className='ps-2'>
                                    <FormControlLabel control={<Checkbox />} label="" /><span className=' mt-2'>Material
                                    </span>


                                </Box>
                                <Box className='text-center '>
                                    <Typography className='text-center mt-2 pe-2' >
                                        553
                                    </Typography>
                                </Box>
                            </Box>

                        </Card>





                    </Box>
                    <Box className='col-lg-9 col-md-9 col-sm-12' >
                        <Typography className='fw-bold'>Kalām: 4 properties found</Typography>

                        <Box className='d-flex gap-2'>
                            <Box className="nav-link active  py-1 px-1 text-center text-primary border border-1 border-primary   rounded-5">
                                <a style={{ fontSize: "14px" }} className='text-primary fw-medium ms-1  text-center px-1 text-decoration-none w-25  '
                                    href="#" >PKR 2,000 – PKR 25,000 (per night)</a>
                            </Box>
                            <Box className="nav-link active  py-1  text-center text-primary border border-1 border-primary   rounded-5">
                                <a style={{ fontSize: "14px" }} className='text-primary fw-medium ms-1  text-center px-1 text-decoration-none w-25  '
                                    href="#" >Wonderful: 9+</a>
                            </Box>
                        </Box>


                        {/* Products */}

                        <Box className='mt-3 '>
                            {hotels.map((hotel, index) => (
                                <Card key={hotels.id} className='border border-1 p-1 rounded-2 mt-3 pb-3'>
                                    <Box className='container-fluid'>
                                        <Box className='row'>

                                            <Box className='col-lg-4 col-md-2 col-sm-12  '>
                                                <img width={270} className='p-2 rounded-4' src={hotel.image} alt="" />
                                            </Box>
                                            <Box className='col-lg-5 col-md-7 col-sm-12'>

                                                <Box >
                                                    <Typography variant="h6" fontWeight="bold" color="primary">
                                                        {hotel.name}       <Chip label="Featured" className='text-center border border-black fw-normal pt-1 rounded-1 ' size="small" />

                                                    </Typography>

                                                    <Box display="flex" alignItems="center" gap={1}>


                                                    </Box>
                                                    <Typography variant="body2" color="textSecondary">
                                                        {hotel.location} - {hotel.distance}
                                                    </Typography>
                                                    <Chip className='text-center rounded-1 ' label={hotel.deal} color="success" size="small" />

                                                    <Typography fontSize={14} fontWeight="bold" mt={1}>
                                                        {hotel.description}
                                                    </Typography>
                                                    <Typography fontSize={12} >
                                                        {hotel.RoomDetails}
                                                    </Typography>

                                                    <Typography fontSize={12}>
                                                        {hotel.bedType}
                                                    </Typography>
                                                    <Typography className='fw-semibold' fontSize={12} color="success">{hotel.breakfast}</Typography>

                                                    <Typography className='fw-semibold' fontSize={12} color="success">{hotel.cancellation}</Typography>
                                                    <Typography fontSize={12} color="success"><span className='fw-semibold'>{hotel.noPrepaymentNeeded}</span> - {hotel.payAtProperty}</Typography>
                                                    <Typography fontSize={12} color="error" fontWeight="bold">
                                                        Only {hotel.availableRooms} left at this price!
                                                    </Typography>
                                                </Box>


                                            </Box>

                                            <Box className='col-lg-3 col-md-3 col-sm-12 text-end d-flex flex-column justify-content-between'>
                                                <Box>
                                                    <Typography color='primary' className='fw-bold px-1'>
                                                        Exceptional
                                                        <Chip label={hotel.rating} className='bg-primary text-white ms-1' size="small" />
                                                    </Typography>
                                                    <Typography fontSize={12} color="textSecondary">
                                                        {hotel.reviews} real reviews
                                                    </Typography>
                                                    <Chip label={`Location ${hotel.rating}`} className='text-primary rounded-1' size="small" />

                                                </Box>
                                                <Typography>
                                                    <Chip label={`New to Booking.com`} className=' rounded-1 bg-warning text-black' size="small" />

                                                </Typography>

                                                <Box mt={2}>
                                                    <Typography fontSize={14}>
                                                        {hotel.duration}
                                                    </Typography>
                                                    <Typography fontSize={12} className="text-decoration-line-through text-danger">
                                                        PKR {hotel.price.original}
                                                    </Typography>
                                                    <Typography variant="h6" className='fw-bold '>
                                                        PKR {hotel.price.discounted}
                                                    </Typography>
                                                    <Typography fontSize={12} color="textSecondary">
                                                        + PKR {hotel.price.taxesAndFees} taxes and fees
                                                    </Typography>
                                                </Box>
                                                <Link to={`/availability/${hotel.id}`}>
                                                    <Button variant="contained" className='bg-primary text-white mt-2'>
                                                        {hotel.availability}
                                                    </Button>
                                                </Link>
                                            </Box>

                                        </Box>


                                    </Box>



                                </Card>
                            ))}
                        </Box>
                    </Box>



                </Box>
            </Box>
        </Box>
    </>
}

export default HotelsDetailPage