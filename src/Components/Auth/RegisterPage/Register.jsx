import { AppBar, Box, Button, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import React from 'react'
import { useForm } from "react-hook-form";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link, useNavigate } from 'react-router'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { InputAdornment, TextField, } from '@mui/material'
import country from "../../../assets/images/flag.png"


const Register = () => {
  const navigate = useNavigate()
  const { handleSubmit, register, formState: { errors } } = useForm()
  function submit(props) {
    localStorage.setItem("user", JSON.stringify(props))
    navigate("/signin")
  }


  return <>
    <header >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">

          <Toolbar className="container">
            <Typography className='fs-4 fw-bold' sx={{ flexGrow: 1 }}>
              Booking.com
            </Typography>


            <button style={{ fontSize: "14px" }} class="btn border-0 bg-transperant  px-3  fw-medium  " ><img width={22} className='rounded-pill' img-fluid src={country} alt="" /></button>


            <Tooltip title="Help and Support">
              <IconButton >
                <HelpOutlineIcon className='text-white me-3' />
              </IconButton>
            </Tooltip>
            <Link to="/Signin" >
              <button style={{ fontSize: "12px" }} class="btn bg-white py-1 px-2  text-primary rounded-1 outline-primary  fw-medium" >Sign in</button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </header>


    <Box className='mt-3'>


      <Box sx={{ display: "flex", justifyContent: "center", }} className=''>
        <form action="" onSubmit={handleSubmit(submit)} className=' '>

          <Typography className='text-start fs-5 fw-bold'> Sign in or create an account</Typography>
          <Typography sx={{ fontSize: "14px" }} className='mt-3 '>
            You can sign in using your Booking.com account to<br /> access our services.
          </Typography>
          <Box className=' mt-2'>
            <Box className='text-start'>  <label className='fw-semibold  '>Full Name</label><br /></Box>

            <TextField sx={{ width: "330px" }} size='small' placeholder='Enter your full name' className=' rounded-1' {...register("FullName", { required: "Full Name is required", errors })} type="text" ></TextField>
            {
              errors.FullName &&
              <p className='text-danger text-center  fw-semibold'>
                {
                  errors.FullName.message
                }
              </p>
            }
          </Box>


          <Box className=' mt-2'>
            <Box className='text-start'>  <label className='fw-semibold  '>Email address</label><br /></Box>

            <TextField sx={{ width: "330px" }} size='small' placeholder='Enter your email address' className=' rounded-1' {...register("email", { required: "Email is required", errors })} type="email" ></TextField>
            {
              errors.email &&
              <p className='text-danger text-center  fw-semibold'>
                {
                  errors.email.message
                }
              </p>
            }
          </Box>
          <Box className='my-2'>
            <Box className='text-start '>  <label className='fw-semibold  '>Password</label><br /></Box>

            <TextField sx={{ width: "330px" }} size='small' placeholder='Enter your Password' className=' rounded-1 ' {...register("password", { required: "Password is required" })} type="password" ></TextField>
            {
              errors.password &&
              <p className='text-danger text-center fw-semibold'>
                {
                  errors.password.message
                }
              </p>
            }

          </Box>
          <Button fullWidth type="submit" className='mt-2 fw-bold' variant="contained">Register</Button>
          <Typography className='fs-6 text-center mt-2 '>
            or use one of these options
          </Typography>

          <Box className='text-center mt-3 '>
            <button className='mx-3 fw-bold  border-0  '><GoogleIcon /></button>
            <button className='mx-3 border-0'><GitHubIcon /></button>

            <button className='mx-3 border-0'><AppleIcon /></button>
          </Box>
          <hr></hr>

          <Typography sx={{ fontSize: '12px' }} className='text-center '>By signing in or creating an account, you agree with our <span className='text-primary'>Terms <br /> </span>& <span className='text-primary'>Conditions</span> and <span className='text-primary'> Privacy Statement</span></Typography>
          <Typography sx={{ fontSize: '12px' }} className='text-center mt-3'>All rights reserved.<br />
            Copyright (2006-2025) – Booking.com™</Typography>
        </form>
      </Box>

    </Box>


  </>
}

export default Register