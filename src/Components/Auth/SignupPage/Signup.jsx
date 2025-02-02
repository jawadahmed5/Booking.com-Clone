// import { AppBar, Box, Button, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
// import React from 'react'
// import { useForm } from "react-hook-form";

// import { useNavigate } from 'react-router'
// import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
// import GoogleIcon from '@mui/icons-material/Google';
// import AppleIcon from '@mui/icons-material/Apple';
// import FacebookIcon from '@mui/icons-material/Facebook';


// import { InputAdornment, TextField, } from '@mui/material'
// import { Card } from 'react-bootstrap'
// // import { Link } from 'react-router-dom'
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import { Controller } from 'react-hook-form';


// const Signup = () => {
//     const navigate = useNavigate()
//     const { handleSubmit, register, formState: { errors } } = useForm()
//     function submitForm(props) {
//         localStorage.setItem("user", JSON.stringify(props))
//         navigate("/signin")
//     }


//     return <>
//         <header>
//             <Box sx={{ flexGrow: 1 }}>
//                 <AppBar position="static" className="!bg-blue-900">
//                     <Toolbar>
//                         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                             Booking.com
//                         </Typography>

//                         <Tooltip title="Help and Support">
//                             <IconButton >
//                                 {/* <HelpOutlineIcon color='white' /> */}
//                             </IconButton>
//                         </Tooltip>
//                     </Toolbar>
//                 </AppBar>
//             </Box>
//         </header>


//         <Box className='text-center d-flex justify-content-center'>
//             <div className=' mt-1 border border-1 border-secondary w-50 '>
//                 <Typography className='!font-bold'>
//                     Create an Account
//                 </Typography>
//                 <form onSubmit={handleSubmit(submitForm)}>
//                     <div className='my-2'>
//                         <label htmlFor="" className='!font-bold text-sm'>Name</label><br />
//                         <input placeholder='Enter your Name' className='border w-70 h-8 rounded-1 px-2' {...register("name", { required: "Name is required" })} type="text" />
//                         {
//                             errors.name &&
//                             <p className='text-red-600'>
//                                 {
//                                     errors.name.message
//                                 }
//                             </p>
//                         }
//                     </div>
//                     <div className='my-2'>
//                         <label htmlFor="" className='!font-bold text-sm'>Email</label><br />
//                         <input placeholder='Enter your Email' className='border w-70 h-8 rounded-1 px-2' {...register("email", { required: "Email is required" })} type="email" />
//                         {
//                             errors.email &&
//                             <p className='text-red-600'>
//                                 {
//                                     errors.email.message
//                                 }
//                             </p>
//                         }
//                     </div>
//                     <div className='my-2'>
//                         <label htmlFor="" className='!font-bold text-sm'>Password</label><br />
//                         <input placeholder='Enter your Password' className='border w-70 h-8 rounded-1 px-2' {...register("password", { required: "password is required" })} type="password" />
//                         {
//                             errors.password &&
//                             <p className='text-red-600'>
//                                 {
//                                     errors.password.message
//                                 }
//                             </p>
//                         }
//                     </div>
//                     <Button type="submit" className='w-full mt-2 !font-bold !bg-blue-900' variant="contained">Register</Button>
//                 </form>
//                 <Typography className='my-3'>
//                     or use one of these options
//                 </Typography>
//                 <div className='flex gap-4'>
//                     <button className='h-16 w-16 border rounded-1 hover:!border-blue-500 transition-all'><GoogleIcon /></button>
//                     <button className='h-16 w-16 border rounded-1 hover:!border-blue-500 transition-all'><AppleIcon /></button>
//                     {/* <button className='h-16 w-16 border rounded-1 hover:!border-blue-500 transition-all'><FacebookIcon /></button> */}
//                 </div>
//             </div>




//         </Box>


//     </>
// }

// export default Signup