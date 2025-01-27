import React from 'react'
import country from "../../assets/images/flag.png"
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SecondHeader from './SecondHeader';


const Header = () => {
  return<>
    <nav class="navbar navbar-expand-lg bg-primary ">
    <div class="container ">
     
      
      <a class="navbar-brand fw-semibold fs-5 text-white" href="#">Booking.com</a>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
   
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <button style={{fontSize:"14px"}} class="btn bg-transperant border-0 text-white  rounded-pill fw-medium  " >PKR</button>

        <button style={{fontSize:"14px"}}  class="btn border-0 bg-transperant  px-3  fw-medium  " ><img width={22} className='rounded-pill' img-fluid src={country} alt="" /></button>
        <button style={{fontSize:"14px"}}  class="btn border-0 bg-transperant text-white  px-3   fw-medium " ><HelpOutlineOutlinedIcon/></button>


        <button style={{fontSize:"14px"}} class="btn bg-transperant border-0 text-white  rounded-pill fw-medium  " >List your property  </button>





        </ul>
        

          {/* <input class="form-control " type="search" placeholder="Search" aria-label="Search"> */}
          <button style={{fontSize:"12px"}} class="btn bg-white py-1 px-2  text-primary rounded-1 outline-primary me-2 fw-medium " >Register</button>
          <button style={{fontSize:"12px"}} class="btn bg-white py-1 px-2  text-primary rounded-1 outline-primary  fw-medium" >Sign in</button>
        
      </div>
     
      </div>


  </nav>


  </>
}

export default Header