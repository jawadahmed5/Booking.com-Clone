// import { Skeleton, Box } from "@mui/material";

// const SecondHeaderSkeleton = () => {
//   return (
//     <>
//       {/* Navbar Skeleton for Large Screens */}
//       <Box
//         sx={{
//           display: { xs: "none", lg: "block" },
//           width: "100%",
//           height: "56px",
//           bgcolor: "grey.300", // Grey skeleton background
//           paddingX: 2,
//           display: "flex",
//           justifyContent: "",
//           alignItems: "center",
//           gap: 2,
//         }}
//       >
//         {/* Skeleton Items */}
//         {Array.from({ length: 5 }).map((_, index) => (
//           <Box
//             key={index}
//             sx={{
//               display: "flex",
//               alignItems: "left",
//               gap: 1,
//               borderRadius: "16px",
//               padding: "5px 12px",
//               bgcolor: "grey.400", // Each item background
//             }}
//           >
//             <Skeleton variant="circular" width={24} height={24} />
//             <Skeleton variant="text" width={60} height={20} />
//           </Box>
//         ))}
//       </Box>

//       {/* Mobile Skeleton (Scrolling Tabs) */}
//       <Box
//         sx={{
//           display: { xs: "flex", sm: "none" },
//           gap: 2,
//           padding: "10px",
//           paddingBottom: "15px",
//           paddingTop: "15px",
//           alignItems: "left",
//           overflowX: "auto",
//           width: "100%",
//           bgcolor: "grey.300", // Grey skeleton background for mobile
//           scrollSnapType: "x mandatory",
//           "& > *": {
//             scrollSnapAlign: "left",
//             display: "flex",
//             marginRight: 1,
//           },
//           "::-webkit-scrollbar": { display: "none" },
//         }}
//       >
//         {Array.from({ length: 5 }).map((_, index) => (
//           <Box
//             key={index}
//             sx={{
//               display: "flex",
//               alignItems: "left",
//               gap: 1,
//               borderRadius: "16px",
//               padding: "5px 12px",
//               bgcolor: "grey.400", // Each item background
//             }}
//           >
//             <Skeleton variant="circular" width={24} height={24} />
//             <Skeleton variant="text" width={50} height={18} />
//           </Box>
//         ))}
//       </Box>
//     </>
//   );
// };

// export default SecondHeaderSkeleton;


import React from 'react'

const SecondHeaderSkeleton = () => {
  return (
    <div>SecondHeaderSkeleton</div>
  )
}

export default SecondHeaderSkeleton