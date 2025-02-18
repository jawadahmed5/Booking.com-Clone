import React, { useState } from "react";
import { Link, useParams } from "react-router";
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button, Rating, Breadcrumbs, Chip } from "@mui/material";
import dummyIamge from "../../assets/images/Deal-5.jpg"
import SecondHeader from "../Header/SecondHeader";
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Person2Icon from '@mui/icons-material/Person2';
import { useLocalStorageState } from '@toolpad/core/useLocalStorageState';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AspectRatio, CheckBox, Star } from '@mui/icons-material';
import CardActions from '@mui/material/CardActions';
import HouseIcon from '@mui/icons-material/House';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import BathtubIcon from '@mui/icons-material/Bathtub';
import BalconyIcon from '@mui/icons-material/Balcony';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import WifiIcon from '@mui/icons-material/Wifi';
import PetsIcon from '@mui/icons-material/Pets';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import ShareSharpIcon from '@mui/icons-material/ShareSharp';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import hotelpic1 from "../../assets/images/HOTEL-1.jpg"
import hotelpic2 from "../../assets/images/HOTEL-2.jpg"
import hotelpic3 from "../../assets/images/HOTEL-3.jpg"
import hotelpic4 from "../../assets/images/HOTEL-4.jpg"
import hotelpic5 from "../../assets/images/HOTEL-5.jpg"
import hotelpic6 from "../../assets/images/HOTEL-6.jpg"
import hotelpic7 from "../../assets/images/HOTEL-7.jpg"
import hotelpic8 from "../../assets/images/HOTEL-8.jpg"
import hotelpic9 from "../../assets/images/HOTEL-9.jpg"
import hotelpic10 from "../../assets/images/HOTEL-10.jpg"
import hotelpic11 from "../../assets/images/HOTEL-11.jpg"
import hotelpic12 from "../../assets/images/HOTEL-12.jpg"
import hotelpic13 from "../../assets/images/HOTEL-13.jpg"
import hotelpic14 from "../../assets/images/HOTEL-14.jpg"
import hotelpic15 from "../../assets/images/HOTEL-15.jpg"




const Availability = () => {


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

  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }


  const breadcrumbs = [
    <Link to="/" style={{ fontSize: "14px" }}
      underline="hover" key="1" color="inherit" onClick={handleClick}>
      Stays
    </Link>,
    <Link
      style={{ fontSize: "14px" }}
      underline="hover"
      key="2"
      color="inherit"
      onClick={handleClick}
    >
      Home
    </Link>,

    <Link
      to="/hotels-detail"
      style={{ fontSize: "14px" }}

      underline="hover"
      key="3"
      color="inherit"
      href="/src/Components/HotelsDetailPage/HotelsDetailPage.jsx"
      onClick={handleClick}
    >
      All Apartments

    </Link>,

    <Typography
      key="3" sx={{ color: 'text.primary', fontSize: "14px" }}>
      Pakistan
    </Typography>,
  ];




  const hotelAvailability = [
    {
      id: 1,
      name: "Elysium Downtown Luxury Apartments",
      location: "Elysium tower opposite Centaurus Mall Islamabad, Blue Area, 44000 Islamabad, Pakistan",
      rating: 9.5,
      reviews: " 15 reviews",
      locationRating: 9.7,
      customerreview: "Our stay at Centaurus Elysium Downtown luxury Apartments Facing Centaurus mall Islamabad was nothing short of amazing! Perfectly located with",
      country: "United Arab Emirates",
      description: `You might be eligible for a Genius discount at Elysium Downtown Luxury Apartments Facing Centaurus Mall Islamabad. To check if a Genius discount is available for your selected dates sign in.

     Genius discounts at this property are subject to book dates, stay dates and other available deals.
   
     Boasting garden views, Elysium Downtown Luxury Apartments Facing Centaurus Mall Islamabad provides accommodation with patio, around 3.5 km from Shah Faisal Mosque. Featuring a lift, this property also provides guests with a picnic area. The apartment features mountain views, an outdoor fireplace, a 24-hour front desk, and free WiFi is available throughout the property.
   
     At the apartment complex, every unit comes with air conditioning, a seating area, a flat-screen TV with streaming services, a kitchen, a dining area, a safety deposit box and a private bathroom with a walk-in shower, bathrobes and slippers. An oven, a microwave and toaster are also available, as well as a kettle. Additional in-room amenities include wine or champagne, fruits and chocolates or cookies.
   
     The apartment serves a continental and Asian breakfast and breakfast in the room is also available. Guests can grab a bite to eat in the in-house family-friendly restaurant, which specialises in American cuisine and also offers vegetarian, vegan and dairy-free options.
   
     Yoga classes and fitness classes are arranged at the fitness room in-house. For guests with children, Elysium Downtown Luxury Apartments Facing Centaurus Mall Islamabad offers an indoor play area, outdoor play equipment and a baby safety gate. Both a bicycle rental service and a car rental service are available at the accommodation.
   
     Lake View Park is 12 km from Elysium Downtown Luxury Apartments Facing Centaurus Mall Islamabad, while Ayūb National Park is 19 km from the property. Islamabad International Airport is 31 km away.
   
     Couples particularly like the location — they rated it 9.6 for a two-person trip.`,
      facilities: [
        "Apartments",
        "Breakfast",
        "Restaurant",
        "Bathroom",
        "Balcony",
        "Shuttle ",
        "View",
        "Free WiFi",
        "Pets allowed",
        "Family rooms",
      ],

      breakfastOptions: ["Continental", "Asian"],
      images: [
        hotelpic1,
        hotelpic2,
        hotelpic3,
        // hotelpic2,
      ],


    },

    {
      id: 2,
      name: "Elysium-Mountain luxury Apartments Opposite Centaurus mall Islamabad",
      location: "Elysium tower opposite Centaurus Mall Islamabad, Blue Area, 44000 Islamabad, Pakistan",
      rating: 9.5,
      reviews: " 16 reviews",
      locationRating: 8.7,
      customerreview: "“Elysium Mountain Apartments is an excellent place to stay in Islamabad, offering a prime location with easy access to major attractions. One of its",
      country: "Pakistan",
      description: `You might be eligible for a Genius discount at Elysium-Mountain luxury Apartments Opposite Centaurus mall Islamabad. To check if a Genius discount is available for your selected dates sign in.

Genius discounts at this property are subject to book dates, stay dates and other available deals.

Located within 3.5 km of Shah Faisal Mosque and 12 km of Lake View Park, Elysium-Mountain luxury Apartments Opposite Centaurus mall Islamabad features rooms with air conditioning and a private bathroom in Islamabad. Featuring a 24-hour front desk, this property also provides guests with a children's playground. The apartment also provides free WiFi, free private parking and facilities for disabled guests.

The apartment provides guests with a patio, mountain views, a seating area, satellite flat-screen TV, a fully equipped kitchen with a dishwasher and an oven, and a private bathroom with bidet and bathrobes. A microwave, a toaster and fridge are also provided, as well as a kettle. Additional in-room amenities include wine or champagne, fruits and chocolates or cookies.

The apartment specialises in a continental and Asian breakfast and breakfast in the room is also available. Guests can enjoy a meal at the on-site family-friendly restaurant, which serves African cuisine and also offers vegetarian, vegan and dairy-free options.

Guests can stay active with the fitness classes held on site. Bike hire and car hire are available at this apartment and the area is popular for skiing. An indoor play area is also available at Elysium-Mountain luxury Apartments Opposite Centaurus mall Islamabad, while guests can also relax in the garden.

Ayūb National Park is 19 km from the accommodation, while Taxila Museum is 36 km from the property. Islamabad International Airport is 31 km away, and the property offers a paid airport shuttle service.

Couples particularly like the location — they rated it 10 for a two-person trip.`,
      facilities: [
        "Apartments",
        "Breakfast",
        "Restaurant",
        "Bathroom",
        "Balcony",
        "Shuttle ",
        "View",
        "Free WiFi",
        "Pets allowed",
        "Family rooms",
      ],

      breakfastOptions: ["Continental", "Asian"],
      images: [
        hotelpic4,
        hotelpic5,
        hotelpic6,
        // hotelpic2,
      ],


    },
    {
      id: 3,
      name: "Sky Heights Signature Apartments Facing Centaurus Mall Islamabad",
      location: "Elysium Tower Opposite Centaurus mall Islamabad, Blue Area, 44000 Islamabad, Pakistan",
      rating: 9.85,
      reviews: " 12 reviews",
      locationRating: 9.2,
      customerreview: "““wonderful stay at sky hieght apartment Apartment Islamabad. The room was exceptionally neat and clean, with fresh bed sheets and towels provided",
      country: "Pakistan",
      description: `You might be eligible for a Genius discount at Sky Heights Signature Apartments Facing Centaurus Mall Islamabad. To check if a Genius discount is available for your selected dates sign in.

Genius discounts at this property are subject to book dates, stay dates and other available deals.

Featuring garden views, Sky Heights Signature Apartments Facing Centaurus Mall Islamabad features accommodation with patio, around 3.5 km from Shah Faisal Mosque. This property offers access to a balcony and free private parking. The apartment offers mountain views, an outdoor fireplace, a 24-hour front desk, and free WiFi is available throughout the property.

The units in the apartment complex are equipped with air conditioning, a seating area, a flat-screen TV with streaming services, a kitchen, a dining area, a safety deposit box and a private bathroom with a bidet, bathrobes and slippers. A dishwasher, an oven and microwave are also featured, as well as a coffee machine and a kettle. Additional in-room amenities include wine or champagne, fruits and chocolates or cookies.

The apartment serves a continental and Asian breakfast and breakfast in the room is also available. Guests may eat in the on-site family-friendly restaurant, which is open for dinner, lunch, brunch and cocktails.

For guests with children, Sky Heights Signature Apartments Facing Centaurus Mall Islamabad provides outdoor play equipment and a baby safety gate. Both a bicycle rental service and a car rental service are available at the accommodation.

Lake View Park is 12 km from Sky Heights Signature Apartments Facing Centaurus Mall Islamabad, while Ayūb National Park is 19 km away. Islamabad International Airport is 31 km from the property.

Families particularly like the location — they rated it 9.8 for a stay with kids.`,
      facilities: [
        "Apartments",
        "Breakfast",
        "Restaurant",
        "Bathroom",
        "Balcony",
        "Shuttle ",
        "View",
        "Free WiFi",
        "Pets allowed",
        "Family rooms",
      ],

      breakfastOptions: ["Continental", "Asian"],
      images: [
        hotelpic7,
        hotelpic8,
        hotelpic9,
        // hotelpic2,
      ],


    },
    {
      id: 4,
      name: "Holiday In Islamabad",
      location: "2 Ibn-e-Sina Road, E-11 Sector, 44000 Islamabad, Pakistan",
      rating: 8.5,
      reviews: " 19 reviews",
      locationRating: 8.2,
      customerreview: "“I had a fantastic stay with them—the room was clean and comfortable, and the staff were incredibly welcoming. The location was perfect, and I’d.",
      country: "England",
      description: `You might be eligible for a Genius discount at Holiday In Islamabad. To check if a Genius discount is available for your selected dates sign in.

Genius discounts at this property are subject to book dates, stay dates and other available deals.

Offering a terrace and garden view, Holiday In Islamabad is located in Islamabad, 11 km from Shah Faisal Mosque and 22 km from Taxila Museum. This property offers access to a balcony, free private parking and free WiFi. The accommodation provides a 24-hour front desk, full-day security and organising tours for guests.

At the guest house, each unit is equipped with air conditioning, a seating area, a flat-screen TV with cable channels, a kitchenette, a dining area, a safety deposit box and a private bathroom with a walk-in shower, bathrobes and slippers. A dishwasher, a microwave and toaster are also provided, as well as a kettle. At the guest house, all units are equipped with bed linen and towels.

An à la carte, Full English/Irish or vegetarian breakfast is available at the property.

A car rental service is available at the guest house.

Lake View Park is 23 km from Holiday In Islamabad, while Ayūb National Park is 26 km away. Islamabad International Airport is 33 km from the property.

Families particularly like the location — they rated it 9.7 for a stay with kids.`,
      facilities: [
        "Apartments",
        "Breakfast",
        "Restaurant",
        "Bathroom",
        "Balcony",
        "Shuttle ",
        "View",
        "Free WiFi",
        "Pets allowed",
        "Family rooms",
      ],

      breakfastOptions: ["Continental", "Asian"],
      images: [
        hotelpic10,
        hotelpic11,
        hotelpic12,
        // hotelpic2,
      ],


    },
    {
      id: 5,
      name: "Blue Moon Residency Jinnah Super",
      location: "house 2-A, street No. 26, F-6/2, F-6 Sector, 49000 Islamabad, Pakistan",
      rating: 9.5,
      reviews: " 21 reviews",
      locationRating: 9.3,
      customerreview: "Best property in Islamabad for family stay.I feel here like home.Sight seen are exceptional infrastructure of mountains Almost 5 minutes away",
      country: "Pakistan",
      description: `You might be eligible for a Genius discount at Blue Moon Residency Jinnah Super. To check if a Genius discount is available for your selected dates sign in.

Genius discounts at this property are subject to book dates, stay dates and other available deals.

In the F-6 Sector district of Islamabad, close to Safa Gold Mall, Blue Moon Residency Jinnah Super features a garden and a washing machine. This bed and breakfast features free private parking and a shared kitchen. The bed and breakfast offers city views, a sun terrace, a 24-hour front desk, and free WiFi is available throughout the property.

The units at the bed and breakfast come with air conditioning, a seating area, a flat-screen TV with streaming services, a safety deposit box and a private bathroom with a bidet, bathrobes and slippers. An oven, a toaster and fridge are also featured, as well as a kettle. At the bed and breakfast, the units are fitted with bed linen and towels.

The bed and breakfast serves a buffet and Full English/Irish breakfast and breakfast in the room is also available. Guests may chill out in the on-site lounge, while a grocery delivery service and packed lunches are also available.

Bike hire and car hire are available at Blue Moon Residency Jinnah Super and the area is popular for hiking and walking tours. The bed and breakfast also has outdoor fireplace and a picnic area for a day out in the open.

Shah Faisal Mosque is 4 km from the accommodation, while Lake View Park is 11 km from the property. Islamabad International Airport is 34 km away, and the property offers a paid airport shuttle service.

Families particularly like the location — they rated it 10 for a stay with kids.`,
      facilities: [
        "Apartments",
        "Breakfast",
        "Restaurant",
        "Bathroom",
        "Balcony",
        "Shuttle ",
        "View",
        "Free WiFi",
        "Pets allowed",
        "Family rooms",
      ],

      breakfastOptions: ["Continental", "Asian"],
      images: [
        hotelpic13,
        hotelpic14,
        hotelpic15,
      ],


    },
    {
      id: 6,
      name: "Elysium-Sky Views Elite Apartments Facing Centaurus Mall Islamabad",
      location: "Elysium tower opposite Centaurus mall Islamabad, Blue Area, 44000 Islamabad, Pakistan",
      rating: 7.5,
      reviews: " 13 reviews",
      locationRating: 89.3,
      customerreview: "Our work trip with family turned into a delightful experience at Elysium Sky Views Elite",
      country: "Dubai",
      description: `You might be eligible for a Genius discount at Elysium-Sky Views Elite Apartments Facing Centaurus Mall Islamabad. To check if a Genius discount is available for your selected dates sign in.

Genius discounts at this property are subject to book dates, stay dates and other available deals.

Located within 3.5 km of Shah Faisal Mosque and 12 km of Lake View Park, Elysium-Sky Views Elite Apartments Facing Centaurus Mall Islamabad features rooms with air conditioning and a private bathroom in Islamabad. Featuring a 24-hour front desk, this property also provides guests with a picnic area. The apartment also provides free WiFi, free private parking and facilities for disabled guests.

The apartment provides guests with a patio, mountain views, a seating area, satellite flat-screen TV, a fully equipped kitchen with a dishwasher and an oven, and a private bathroom with bidet and bathrobes. A microwave, a toaster and fridge are also featured, as well as a coffee machine and a kettle. Additional in-room amenities include wine or champagne, fruits and chocolates or cookies.

À la carte and continental breakfast options with warm dishes, local specialities and pancakes are available. Guests can enjoy a meal at the on-site family-friendly restaurant, which serves American cuisine and also offers vegetarian, vegan and dairy-free options.

For guests with children, the apartment offers an indoor play area, outdoor play equipment and a baby safety gate. A ski equipment rental service, ski-to-door access and a ski pass sales point are all offered at Elysium-Sky Views Elite Apartments Facing Centaurus Mall Islamabad, and guests can go skiing in the surroundings.

Ayūb National Park is 19 km from the accommodation, while Taxila Museum is 36 km from the property. Islamabad International Airport is 31 km away, and the property offers a paid airport shuttle service.

Families particularly like the location — they rated it 10 for a stay with kids.`,
      facilities: [
        "Apartments",
        "Breakfast",
        "Restaurant",
        "Bathroom",
        "Balcony",
        "Shuttle ",
        "View",
        "Free WiFi",
        "Pets allowed",
        "Family rooms",
      ],

      breakfastOptions: ["Continental", "Asian"],
      images: [
        hotelpic1,
        hotelpic9,
        hotelpic5,
      ],


    },
    {
      id: 7,
      name: "Elysium Serviced Apartment",
      location: "Elysium tower ,Plot no 5 blue area opposite centarus F-8/G-8 Islamabad, Blue Area, 44000 Islamabad, Pakistan",
      rating: 8.5,
      reviews: " 17 reviews",
      locationRating: 9.3,
      description: `Offering a terrace and mountain view, Elysium Serviced Apartment is set in Islamabad, 3.8 km from Shah Faisal Mosque and 12 km from Lake View Park. This apartment offers free private parking and a 24-hour front desk. The apartment has family rooms as well as facilities for disabled guests.

Some units come with air conditioning, a flat-screen TV, washing machine and a kettle, as well as a fully equipped kitchen. At the apartment complex, units are fitted with a private bathroom.

There is a coffee shop, and a minimarket is also available.

A baby safety gate is also available for guests at the apartment.

Ayūb National Park is 20 km from Elysium Serviced Apartment, while Taxila Museum is 36 km from the property. Islamabad International Airport is 31 km away.

.`,
      facilities: [
        "Apartments",
        "Breakfast",
        "Restaurant",
        "Bathroom",
        "Balcony",
        "Shuttle ",
        "View",
        "Free WiFi",
        "Pets allowed",
        "Family rooms",
      ],

      breakfastOptions: ["Continental", "Asian"],
      images: [
        hotelpic8,
        hotelpic3,
        hotelpic12,
      ],


    },
    {
      id: 9,
      name: "Three Trees Hotel",
      location: "3-D Plot # 3-D,G-7 Markaz Islamabad, G-7 Sector, 04405 Islamabad, Pakistan",
      rating: 8.8,
      reviews: " 15 reviews",
      locationRating: 8.7,
      customerreview: "The location is great, so were the rooms and the services",
      country: "Turkey",
      description: `You might be eligible for a Genius discount at Three Trees Hotel. To check if a Genius discount is available for your selected dates sign in.

Genius discounts at this property are subject to book dates, stay dates and other available deals.

Set in Islamabad, 5.8 km from Shah Faisal Mosque, Three Trees Hotel offers accommodation with a shared lounge, free private parking and a restaurant. With free WiFi, this 3-star hotel offers room service and a 24-hour front desk. The accommodation features a concierge service, luggage storage space and currency exchange for guests.

At the hotel the rooms come with air conditioning, a seating area, a flat-screen TV with cable channels, a safety deposit box and a private bathroom with a shower, free toiletries and slippers. Three Trees Hotel provides some units with mountain views, and rooms are equipped with a kettle. All guest rooms will provide guests with a fridge.

The daily breakfast offers buffet, continental or Asian options.

Lake View Park is 10 km from the accommodation, while Ayūb National Park is 19 km from the property. Islamabad International Airport is 31 km away.

Families particularly like the location — they rated it 8.5 for a stay with kids`,
      facilities: [
        "Apartments",
        "Breakfast",
        "Restaurant",
        "Bathroom",
        "Balcony",
        "Shuttle ",
        "View",
        "Free WiFi",
        "Pets allowed",
        "Family rooms",
      ],

      breakfastOptions: ["Continental", "Asian"],
      images: [
        hotelpic13,
        hotelpic2,
        hotelpic7,
      ],


    },
    {
      id: 10,
      name: "Elysium Luxurious Apartments Opposite Centaurus Mall Islamabad-LMY",
      location: "Elysium Tower Jinnah Avenue Blue Area Islamaba, Blue Area, 44000 Islamabad, Pakistan",
      rating: 9.8,
      reviews: " 25 reviews",
      locationRating: 9.3,
      customerreview: "The location is great, so were the rooms and the services",
      country: "Finland",
      description: `Offering city views, Elysium Luxurious Apartments Opposite Centaurus Mall Islamabad-LMY is an accommodation set in Islamabad, 12 km from Lake View Park and 19 km from Ayūb National Park. The air-conditioned accommodation is 3.5 km from Shah Faisal Mosque, and guests can benefit from on-site private parking and complimentary WiFi. The accommodation offers a lift and full-day security for guests.

The spacious apartment is fitted with 2 bedrooms, 2 bathrooms, bed linen, towels, a flat-screen TV with streaming services, a fully equipped kitchen, and a balcony with mountain views. Guests at this apartment can enjoy fruits and chocolates or cookies. The accommodation is soundproof.

Taxila Museum is 36 km from the apartment, while Safa Gold Mall is 2.8 km away. The nearest airport is Islamabad International Airport, 31 km from Elysium Luxurious Apartments Opposite Centaurus Mall Islamabad-LMY.

`,
      facilities: [
        "Apartments",
        "Breakfast",
        "Restaurant",
        "Bathroom",
        "Balcony",
        "Shuttle ",
        "View",
        "Free WiFi",
        "Pets allowed",
        "Family rooms",
      ],

      breakfastOptions: ["Continental", "Asian"],
      images: [
        hotelpic6,
        hotelpic14,
        hotelpic5,
      ],


    },


  ];




  const { id } = useParams()
  const hotelData = hotelAvailability.find((rest) => rest.id === parseInt(id))

  console.log(id, "id");




  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );




  return <>
    <SecondHeader />


    <Box className="container d-none d-lg-block d-md-block">
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


    <Box className='container'>
      <Stack spacing={2}>

        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="10" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
    </Box>




    <Box sx={{}}>
      <Box key={hotelData.id} style={{ marginBottom: "10px", padding: "10px" }}>


        <Box className='container'>
          <Box className='row'>
            <Box className='col-lg-8 col-md-8 col-sm-12'>
              <Box className='d-flex'>
                <Rating value={hotelData.rating / 2} precision={0.1} readOnly />
                <Chip label="New to Booking" color="warning" className=' fw-normal rounded-1 px-2' size="small" />
                <Typography className='text-white bg-warning ms-2  rounded-2'>
                  <ThumbUpIcon />
                </Typography>
              </Box>


              <Box className=''>
                <h2>{hotelData.name}</h2>

              </Box>
            </Box>





            <Box className='col-lg-4 col-md-4 col-sm-12 d-none d-lgblock d-md-block'>
              <Box className='d-flex justify-content-around '>
                <Typography className="text-primary fs-5 ">
                  <FavoriteBorderSharpIcon />
                </Typography>
                <Typography className="text-primary fs-5 ms-2">
                  <ShareSharpIcon />
                </Typography>

                <Button variant='contained' className="ms-3">
                  Reserve your apartment stay

                </Button>
              </Box>

              <Box>
                <Typography className="text-end mt-2 ">
                  <span className='text-primary me-2'>
                    <LocalOfferOutlinedIcon />
                  </span>
                  <Button variant="contained" size="small" className="text-white rounded-2 fw-semibold">
                    We Price Match
                  </Button >
                </Typography>
              </Box>
            </Box>

          </Box>
        </Box>

        <Box className='container mt-2'>
          <Typography variant="body2" color="text.secondary">
            <span className="text-primary"><LocationOnIcon /></span>    {hotelData.location}
            <a className="text-decoration-none" href="https://maps.app.goo.gl/sTE5z7BgWuChbt2F8">
              <span className="fw-bold text-primary"> - Excellent location - show map</span>

            </a>
          </Typography>
        </Box>

        <Box className='container mt-2'>
          <Box className='row'>
            <Box className='col-lg-9 col-md-9 col-sm-12'>
              <Box className='d-flex '>
                <Box>
                  <img className="img-fluid rounded-3" style={{ height: "100%" }} width="560" src={hotelData.images[0]} alt="" />
                </Box>
                <Box className='ms-2'>
                  <img className="img-fluid rounded-3" width="275" src={hotelData.images[1]} alt="" />
                  <Box className='mt-2'>
                    <img className="img-fluid rounded-3" width="275" src={hotelData.images[2]} alt="" />

                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className='col-lg-3 col-md-3 col-sm-12'>
              <Box sx={{ minWidth: 275 }}>
                <Card>
                  <React.Fragment>
                    <CardContent>
                      <Box className='d-flex justify-content-end text-end'>
                        <Box>
                          <Typography className="text-end fs-6 fw-semibold">
                            Superb
                          </Typography>
                          <Typography sx={{ fontSize: "13px" }} color="grey" >
                            {hotelData.reviews}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography className="bg-primary p-1 rounded-bottom-3 rounded-start-3 text-end ms-2 text-white" >{hotelData.rating}</Typography>

                        </Box>

                      </Box>
                      <hr />

                      <Typography variant="body2">
                        <span className="fw-bold">Guest who stayed here</span><br></br>
                        "{hotelData.customerreview}"
                      </Typography>
                      <Typography className="text-end fw-semibold" variant="body2">
                        {hotelData.country}
                      </Typography>
                    </CardContent>
                    <hr></hr><Box className='d-flex justify-content-around pb-2'>

                      <Typography className="fw-semibold mt-1">
                        Excellent Location
                      </Typography>
                      <Typography className="border border-1 p-1 border-black rounded-top-3 rounded-end-3 ">
                        {hotelData.locationRating}
                      </Typography>
                    </Box>

                    <Box>

                      <Box className="position-relative mt-2 ">
                        <iframe className='rounded-2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.824470487258!2d73.10539277479822!3d33.713490635543025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfc0697d15d10d%3A0x1aaf6f84f1af44a4!2sOne%20Constitution%20Avenue!5e0!3m2!1sen!2s!4v1738765511573!5m2!1sen!2s" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <Button variant='contained' size='small' className='w-75 position-absolute top-50 mt-5 start-50 translate-middle '>Show on the map</Button>

                      </Box>
                    </Box>

                  </React.Fragment>

                </Card>
              </Box>
            </Box>

          </Box>
        </Box>




        <Box className='container'>
          <Box className='row'>
            <Box className='col-lg-2 col-md-2 col-sm-12 text-center'>
              <Typography className="border border-1 border-secondary-subtle rounded-3 mt-3 px-3 py-2">
                <HouseIcon />   {hotelData.facilities[0]}
              </Typography>
            </Box>
            <Box className='col-lg-2 col-md-2 col-sm-12 text-center'>
              <Typography className="border border-1 border-secondary-subtle rounded-3 mt-3 px-3 py-2">
                <FreeBreakfastIcon />  {hotelData.facilities[1]}
              </Typography>
            </Box>
            <Box className='col-lg-2 col-md-2 col-sm-12 text-center'>
              <Typography className="border border-1 border-secondary-subtle rounded-3 mt-3 px-3 py-2">
                <RestaurantIcon />   {hotelData.facilities[2]}
              </Typography>
            </Box>
            <Box className='col-lg-2 col-md-2 col-sm-12 text-center'>
              <Typography className="border border-1 border-secondary-subtle rounded-3 mt-3 px-3 py-2">
                <BathtubIcon />  {hotelData.facilities[3]}
              </Typography>
            </Box>
            <Box className='col-lg-2 col-md-2 col-sm-12 text-center'>
              <Typography className="border border-1 border-secondary-subtle rounded-3 mt-3 px-3 py-2">
                <BalconyIcon />   {hotelData.facilities[4]}
              </Typography>
            </Box>
            <Box className='col-lg-2 col-md-2 col-sm-12 text-center'>
              <Typography className="border border-1 border-secondary-subtle rounded-3 mt-3 px-3 py-2">
                <AirportShuttleIcon />   {hotelData.facilities[5]}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className='container'>
          <Box className='row'>
            <Box className='col-lg-3 col-md-3 col-sm-12 text-center'>
              <Typography className="border border-1 border-secondary-subtle rounded-3 mt-3 px-3 py-2">
                <RemoveRedEyeIcon />   {hotelData.facilities[6]}
              </Typography>
            </Box>
            <Box className='col-lg-3 col-md-3 col-sm-12 text-center'>
              <Typography className="border border-1 border-secondary-subtle rounded-3 mt-3 px-3 py-2">
                <WifiIcon />   {hotelData.facilities[7]}
              </Typography>
            </Box>
            <Box className='col-lg-3 col-md-3 col-sm-12 text-center'>
              <Typography className="border border-1 border-secondary-subtle rounded-3 mt-3 px-3 py-2">
                <PetsIcon />   {hotelData.facilities[8]}
              </Typography>
            </Box>
            <Box className='col-lg-3 col-md-3 col-sm-12 text-center'>
              <Typography className="border border-1 border-secondary-subtle rounded-3 mt-3 px-3 py-2">
                <FamilyRestroomIcon />   {hotelData.facilities[9]}
              </Typography>
            </Box>
          </Box>
        </Box>


        <Box className='container mt-4'>
          <Box className='row'>
            <Box className='col-lg-9 col-md-9 col-sm-12'>
              <Typography className='text-secondary'>
                {hotelData.description}
              </Typography>
            </Box>
            <Box className='col-lg-3 col-md-3 col-sm-12 py-5'>
              <Card className="bg-body-secondary p-3">
                <Typography className="fw-bold">
                  Property highlights <br />

                  Breakfast info


                </Typography>
                <Typography>
                  Continental, Asian



                </Typography>
                <Button className="mt-4" fullWidth variant="contained" size="small">Reserve</Button>
              </Card>
            </Box>
          </Box>
        </Box>

      </Box>

    </Box>

  </>

};

export default Availability;
