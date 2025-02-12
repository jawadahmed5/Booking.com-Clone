// import { Skeleton, Box } from "@mui/material";

// const NavbarSkeleton = () => {
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         height: "56px", // Navbar ki height
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         px: 2, // Padding from left and right
//         bgcolor: "transparent", // No background
//       }}
//     >
//       {/* Logo Skeleton */}
//       <Skeleton variant="text" width={140} height={30} />

//       {/* Navbar Buttons Skeleton */}
//       <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//         <Skeleton variant="circular" width={30} height={30} />
//         <Skeleton variant="text" width={60} height={20} />
//         <Skeleton variant="text" width={60} height={20} />
//       </Box>

//       {/* Sign In & Register Buttons Skeleton */}
//       <Box sx={{ display: "flex", gap: 1 }}>
//         <Skeleton variant="rectangular" width={70} height={30} sx={{ borderRadius: 1 }} />
//         <Skeleton variant="rectangular" width={70} height={30} sx={{ borderRadius: 1 }} />
//       </Box>
//     </Box>
//   );
// };

// export default NavbarSkeleton;

import React from 'react'

const HeaderSkeleton = () => {
  return (
    <div>HeaderSkeleton</div>
  )
}

export default HeaderSkeleton