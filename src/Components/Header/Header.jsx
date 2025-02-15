import React, { useState } from 'react'
import country from "../../assets/images/flag.png"
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SecondHeader from './SecondHeader';
import { Link } from 'react-router';
import { Box, Tooltip, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';



const Header = () => {


  const currencies = [
    { name: "U.S. Dollar", code: "USD" },
    { name: "Euro", code: "EUR" },
    { name: "United Arab Emirates ", code: "AED" },
    { name: "Pound Sterling", code: "GBP" },
    { name: "Saudi Arabian Riyal", code: "SAR" },
    { name: "Thai Baht", code: "THB" },
    { name: "Canadian Dollar", code: "CAD" },
    { name: "Pakistani Rupee", code: "PKR" },
    { name: "Property's Currency", code: "€$£" },
    { name: "Argentine Peso", code: "ARS" },
    { name: "Australian Dollar", code: "AUD" },
    { name: "Azerbaijani Manat", code: "AZN" },
    { name: "Bahraini Dinar", code: "BHD" },
    { name: "Brazilian Real", code: "BRL" },
    { name: "Bulgarian Lev", code: "BGN" },
    { name: "Chilean Peso", code: "CLP" },
    { name: "Chinese Yuan", code: "CNY" },
    { name: "Colombian Peso", code: "COP" },
    { name: "Czech Koruna", code: "CZK" },
    { name: "Danish Krone", code: "DKK" },
    { name: "Egyptian Pound", code: "EGP" },
    { name: "Fijian Dollar", code: "FJD" },
    { name: "Georgian Lari", code: "GEL" },
    { name: "Hong Kong Dollar", code: "HKD" },
    { name: "Hungarian Forint", code: "HUF" },
    { name: "Icelandic Króna", code: "ISK" },
    { name: "Indian Rupee", code: "INR" },
    { name: "Indonesian Rupiah", code: "IDR" },
    { name: "Israeli New Shekel", code: "ILS" },
    { name: "Japanese Yen", code: "JPY" },
    { name: "Jordanian Dinar", code: "JOD" },
    { name: "Kazakhstani Tenge", code: "KZT" },
    { name: "Kuwaiti Dinar", code: "KWD" },
    { name: "Macanese Pataca", code: "MOP" },
    { name: "Malaysian Ringgit", code: "MYR" },
    { name: "Mexican Peso", code: "MXN" },
    { name: "Moldovan Leu", code: "MDL" },
    { name: "Namibian Dollar", code: "NAD" },
    { name: "New Taiwan Dollar", code: "TWD" },
    { name: "New Zealand Dollar", code: "NZD" },
    { name: "Norwegian Krone", code: "NOK" },
    { name: "Omani Rial", code: "OMR" },
    { name: "Polish Złoty", code: "PLN" },
    { name: "Qatari Riyal", code: "QAR" },
    { name: "Romanian Leu", code: "RON" },
    { name: "Russian Ruble", code: "RUB" },
    { name: "Singaporean Dollar", code: "SGD" },
    { name: "South African Rand", code: "ZAR" },
    { name: "South Korean Won", code: "KRW" },
    { name: "Swedish Krona", code: "SEK" },
    { name: "Swiss Franc", code: "CHF" },
    { name: "Turkish Lira", code: "TRY" },
    { name: "Ukrainian Hryvnia", code: "UAH" },
    { name: "West African CFA Franc", code: "XOF" }
  ];


  const languages = [
    { name: "English (US)", code: "en-US", flag: "https://flagcdn.com/w40/us.png" },
    { name: "English (UK)", code: "en-GB", flag: "https://flagcdn.com/w40/gb.png" },
    { name: "Deutsch", code: "de", flag: "https://flagcdn.com/w40/de.png" },
    { name: "Nederlands", code: "nl", flag: "https://flagcdn.com/w40/nl.png" },
    { name: "Français", code: "fr", flag: "https://flagcdn.com/w40/fr.png" },
    { name: "Español", code: "es", flag: "https://flagcdn.com/w40/es.png" },
    { name: "Español (AR)", code: "es-AR", flag: "https://flagcdn.com/w40/ar.png" },
    { name: "Español (MX)", code: "es-MX", flag: "https://flagcdn.com/w40/mx.png" },
    { name: "Català", code: "ca", flag: "https://flagcdn.com/w40/es.png" },
    { name: "Italiano", code: "it", flag: "https://flagcdn.com/w40/it.png" },
    { name: "Português (PT)", code: "pt-PT", flag: "https://flagcdn.com/w40/pt.png" },
    { name: "Português (BR)", code: "pt-BR", flag: "https://flagcdn.com/w40/br.png" },
    { name: "Norsk", code: "no", flag: "https://flagcdn.com/w40/no.png" },
    { name: "Suomi", code: "fi", flag: "https://flagcdn.com/w40/fi.png" },
    { name: "Svenska", code: "sv", flag: "https://flagcdn.com/w40/se.png" },
    { name: "Dansk", code: "da", flag: "https://flagcdn.com/w40/dk.png" },
    { name: "Čeština", code: "cs", flag: "https://flagcdn.com/w40/cz.png" },
    { name: "Magyar", code: "hu", flag: "https://flagcdn.com/w40/hu.png" },
    { name: "Română", code: "ro", flag: "https://flagcdn.com/w40/ro.png" },
    { name: "日本語", code: "ja", flag: "https://flagcdn.com/w40/jp.png" },
    { name: "简体中文", code: "zh-CN", flag: "https://flagcdn.com/w40/cn.png" },
    { name: "繁體中文", code: "zh-TW", flag: "https://flagcdn.com/w40/tw.png" },
    { name: "Polski", code: "pl", flag: "https://flagcdn.com/w40/pl.png" },
    { name: "Ελληνικά", code: "el", flag: "https://flagcdn.com/w40/gr.png" },
    { name: "Русский", code: "ru", flag: "https://flagcdn.com/w40/ru.png" },
    { name: "Türkçe", code: "tr", flag: "https://flagcdn.com/w40/tr.png" },
    { name: "Български", code: "bg", flag: "https://flagcdn.com/w40/bg.png" },
    { name: "العربية", code: "ar", flag: "https://flagcdn.com/w40/sa.png" },
    { name: "한국어", code: "ko", flag: "https://flagcdn.com/w40/kr.png" },
    { name: "עברית", code: "he", flag: "https://flagcdn.com/w40/il.png" },
    { name: "Latviski", code: "lv", flag: "https://flagcdn.com/w40/lv.png" },
    { name: "Українська", code: "uk", flag: "https://flagcdn.com/w40/ua.png" },
    { name: "हिन्दी", code: "hi", flag: "https://flagcdn.com/w40/in.png" },
    { name: "Bahasa Indonesia", code: "id", flag: "https://flagcdn.com/w40/id.png" },
    { name: "Bahasa Malaysia", code: "ms", flag: "https://flagcdn.com/w40/my.png" },
    { name: "ภาษาไทย", code: "th", flag: "https://flagcdn.com/w40/th.png" },
    { name: "Eesti", code: "et", flag: "https://flagcdn.com/w40/ee.png" },
    { name: "Hrvatski", code: "hr", flag: "https://flagcdn.com/w40/hr.png" },
    { name: "Lietuvių", code: "lt", flag: "https://flagcdn.com/w40/lt.png" },
    { name: "Slovenčina", code: "sk", flag: "https://flagcdn.com/w40/sk.png" },
    { name: "Srpski", code: "sr", flag: "https://flagcdn.com/w40/rs.png" },
    { name: "Slovenščina", code: "sl", flag: "https://flagcdn.com/w40/si.png" },
    { name: "Tiếng Việt", code: "vi", flag: "https://flagcdn.com/w40/vn.png" },
    { name: "Filipino", code: "fil", flag: "https://flagcdn.com/w40/ph.png" },
    { name: "Íslenska", code: "is", flag: "https://flagcdn.com/w40/is.png" }
  ];



  const style = {

  };




// Language modal

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  // Currency Modal

  const [currencyOpen, setCurrencyOpen] = useState(false);
  const currencyHandleOpen = () => setCurrencyOpen(true);
  const currencyHandleClose = () => setCurrencyOpen(false);




  return <>
    <nav class="navbar navbar-expand-lg bg-primary ">
      <div class="container ">


        <a class="navbar-brand fw-semibold fs-5 text-white" href="#">Booking.com</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <Tooltip className='bg-transparent border-0 text-white hoverItems text-start btn bg-transperant border-0 text-white   fw-medium  ' title="Select your currency" >
            <button onClick={currencyHandleOpen}  style={{ fontSize: "16px" }} class="hoverItems text-start btn bg-transperant border-0 text-white   fw-medium  " >PKR</button>
            </Tooltip>
            <Tooltip className='bg-transparent border-0 text-white hoverItems text-start btn bg-transperant border-0 text-white   fw-medium  '  title="Select your language" >

            <button onClick={handleOpen} style={{ fontSize: "16px" }} class="hoverItems text-start btn border-0 bg-transperant  px-3  fw-medium  " ><img width={22} className='rounded-pill' img-fluid src={country} alt="" /></button>
           </Tooltip>

           <Tooltip className='bg-transparent border-0 text-white hoverItems text-start btn bg-transperant border-0 text-white   fw-medium  ' title="Contact customer service" >

            <button style={{ fontSize: "16px" }} class="hoverItems text-start btn border-0 bg-transperant text-white  px-3   fw-medium " ><HelpOutlineOutlinedIcon /></button>
</Tooltip>



            <button style={{ fontSize: "16px" }} class="hoverItems text-start btn bg-transperant border-0 text-white me-1 fw-medium  " >List your property  </button>





          </ul>


          <Link to="/Register" >
            <button style={{ fontSize: "12px" }} class="btn bg-white py-1 px-2  text-primary rounded-1 outline-primary me-2 fw-medium " >Register</button>
          </Link>
          <Link to="/Signin" >
            <button style={{ fontSize: "12px" }} class="btn bg-white py-1 px-2  text-primary rounded-1 outline-primary  fw-medium" >Sign in</button>
          </Link>
        </div>

      </div>


      {/* Modal */}


      <div>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className='w-75' sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',

            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            overflowY: "scroll",
            height: 600
          }}>
            <div className='row  '>

              <Typography className='fw-bold fs-4'>
                Select your language


              </Typography>

              <Typography className='mt-5 fw-bold '>
                All language


              </Typography>

              {languages.map((country) => (




                <div className='col-lg-3 col-md-4 col-sm-12 gy-3 '>

                  <div  className='d-flex  country-box rounded-4 px-2 py-4'>
                    <div>
                      <img className='rounded-circle w-75 h-100' src={country.flag} alt="" />

                    </div>

                    <div className='ms-3 '>
                      <Typography>
                        {country.name}
                      </Typography>


                    </div>
                  </div>



                </div>








              ))}
            </div>



          </Box>
        </Modal>
      </div>





{/* CURRENCY MODAL */}
      <div>
        {/* <Button onClick={currencyHandleOpen}>Open modal</Button> */}
        <Modal
        open={currencyOpen}
          onClose={currencyHandleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className='w-75' sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',

            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            overflowY: "scroll",
            height: 600
          }}>
            <div className='row  '>

              <Typography className='fw-bold fs-4'>
              Select your currency


              </Typography>

              
              <Typography className='fs-7'>
              Where applicable, prices will be converted to—and shown in—the currency you select. The currency you pay in may differ based on your reservation, and a service fee may also apply.


              </Typography>

              <Typography className='mt-5 fw-bold '>
              All currencies


              </Typography>

              {currencies.map((currency) => (




                <div className='col-lg-3 col-md-4 col-sm-12 gy-3 '>

                  <div  className='d-flex  country-box rounded-3 py-2 px-1'>

                    <div className='ms-3 '>
                      <Typography className=' fs-6'>
                        {currency.name}
                      </Typography >
                      <Typography sx={{fontSize:12}} className='fw-lighter pt-1 text-black-50'>
                        {currency.code}
                      </Typography>


                    </div>
                  </div>



                </div>








              ))}
            </div>



          </Box>
        </Modal>
      </div>



      {/* <div className='container-fluid'>
        <div className=''>


          <div style={{ width: "3000px" }} className=' '>

            <div className=' border border-1 border-black'>

<div className='row'>
                <div className='col-3'>
              {languages.map((country) => (
              

                <div className='d-flex border border-1 border-danger'>
                  <div>
                    <img src={country.flag} alt="" />

                  </div>

                  <div>
                    <Typography>
                      {country.name}
                    </Typography>


                    <Typography>
                      {country.code}
                    </Typography>
                  </div>

                </div>

                </div>
                
                
                </div>





              ))}
            </div>


          </div>

        </div>
      </div> */}

    </nav >





  </>
}

export default Header