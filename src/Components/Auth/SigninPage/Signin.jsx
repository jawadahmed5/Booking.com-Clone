// import { AppBar, Box, Button, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
// import React from 'react'
// import { useForm } from 'react-hook-form'
// import { Navigate, useNavigate } from 'react-router'
// import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
// import GoogleIcon from '@mui/icons-material/Google';
// import AppleIcon from '@mui/icons-material/Apple';
// import FacebookIcon from '@mui/icons-material/Facebook';


// const Signin = () => {

//   const navigate = useNavigate()
//   const { handleSubmit, register, formState: { errors } } = useForm()
//   function submit(props) {
//     const user = JSON.parse(localStorage.getItem("user"))
//     if (user.email === props.email && user.password === props.password) {
//       navigate("/")
//     } else {

//     }

//   }

//   return (
//     <>
//       <header>
//         <Box sx={{ flexGrow: 1 }}>
//           <AppBar position="static" className="!bg-blue-900">
//             <Toolbar>
//               <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                 Booking.com
//               </Typography>

//               <Tooltip title="Help and Support">
//                 <IconButton >
//                   <HelpOutlineIcon color='white' />
//                 </IconButton>
//               </Tooltip>
//             </Toolbar>
//           </AppBar>
//         </Box>
//       </header>
//       <div className='grid place-items-center'>
//         <form action="" onSubmit={handleSubmit(submit)}>
//           <div className='my-2'>
//             <label htmlFor="" className='!font-bold text-sm'>Email</label><br />
//             <input placeholder='Enter your Email' className='border w-70 h-8 rounded-1 px-2' {...register("email", { required: "Email is required" })} type="email" />
//             {
//               errors.email &&
//               <p className='text-red-600'>
//                 {
//                   errors.email.message
//                 }
//               </p>
//             }
//           </div>
//           <div className='my-2'>
//             <label htmlFor="" className='!font-bold text-sm'>Password</label><br />
//             <input placeholder='Enter your Password' className='border w-70 h-8 rounded-1 px-2' {...register("password", { required: "password is required" })} type="password" />
//             {
//               errors.password &&
//               <p className='text-red-600'>
//                 {
//                   errors.password.message
//                 }
//               </p>
//             }
//           </div>
//           <Button type="submit" className='w-full mt-2 !font-bold !bg-blue-900' variant="contained">Signin</Button>
//         </form>
//       </div>
//     </>
//   )
// }

// export default Signin