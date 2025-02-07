// import { Grid, Box, Typography } from '@mui/material'
// import React from 'react'

// function Service({ fontSize }: any) {
//   return (
//     <Grid item xs={12} sm={12} md={12} lg={6}>
//       <Box>
//         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//           <Grid item xs={12} md={6}>
//             <Box 
//             //padding="80px 40px"
//             >
//               <Box>
//                 <Typography
//                   sx={{
//                     fontSize: `${fontSize}px`,
//                     fontWeight: "1000",
//                     color: "#2252CC",
//                     fontFamily: "monospace",
//                   }}
//                 >
//                   1
//                 </Typography>
//               </Box>
//               <Box>
//                 <Typography
//                   sx={{
//                     fontSize: `20px`,
//                     fontWeight: "500",
//                     color: "#2252CC",
//                     fontFamily: "monospace",
//                   }}
//                 >
//                   Software <br /> Design
//                 </Typography>
//               </Box>
//               <Box>
//                 <Typography
//                   sx={{
//                     fontSize: `16px`,
//                     fontWeight: "400",
//                     color: "#2252CC",
//                     fontFamily: "monospace",
//                   }}
//                   component="div"  // Change this line to prevent <p> wrapping <ul>
//                 >
//                   <ul>
//                     <li>
//                       We create intuitive and user-friendly designs tailored to your needs.
//                     </li>
//                   </ul>
//                 </Typography>
//               </Box>
//             </Box>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Box 
//             //padding="80px 40px"
//             >
//               <Box>
//                 <Typography
//                   sx={{
//                     fontSize: `${fontSize}px`,
//                     fontWeight: "1000",
//                     color: "#2252CC",
//                     fontFamily: "monospace",
//                   }}
//                 >
//                   2
//                 </Typography>
//               </Box>
//               <Box>
//                 <Typography
//                   sx={{
//                     fontSize: `20px`,
//                     fontWeight: "500",
//                     color: "#2252CC",
//                     fontFamily: "monospace",
//                   }}
//                 >
//                   Application Development
//                 </Typography>
//               </Box>
//               <Box>
//                 <Typography
//                   sx={{
//                     fontSize: `16px`,
//                     fontWeight: "400",
//                     color: "#2252CC",
//                     fontFamily: "monospace",
//                   }}
//                   component="div"  // Change this line to prevent <p> wrapping <ul>
//                 >
//                   <ul>
//                     <li>
//                       From web to mobile applications, we deliver robust and scalable solutions.
//                     </li>
//                   </ul>
//                 </Typography>
//               </Box>
//             </Box>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Box 
//             //padding="80px 40px"
//             >
//               <Box>
//                 <Typography
//                   sx={{
//                     fontSize: `${fontSize}px`,
//                     fontWeight: "1000",
//                     color: "#2252CC",
//                     fontFamily: "monospace",
//                   }}
//                 >
//                   3
//                 </Typography>
//               </Box>
//               <Box>
//                 <Typography
//                   sx={{
//                     fontSize: `20px`,
//                     fontWeight: "500",
//                     color: "#2252CC",
//                     fontFamily: "monospace",
//                   }}
//                 >
//                   Software <br /> & App Testing
//                 </Typography>
//               </Box>
//               <Box>
//                 <Typography
//                   sx={{
//                     fontSize: `16px`,
//                     fontWeight: "400",
//                     color: "#2252CC",
//                     fontFamily: "monospace",
//                   }}
//                   component="div"  // Change this line to prevent <p> wrapping <ul>
//                 >
//                   <ul>
//                     <li>
//                       Comprehensive testing services to ensure flawless performance.
//                     </li>
//                   </ul>
//                 </Typography>
//               </Box>
//             </Box>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Box 
//             //padding="80px 40px"
//             >
//               <Box>
//                 <Typography
//                   sx={{
//                     fontSize: `${fontSize}px`,
//                     fontWeight: "1000",
//                     color: "#2252CC",
//                     fontFamily: "monospace",
//                   }}
//                 >
//                   4
//                 </Typography>
//               </Box>
//               <Box>
//                 <Typography
//                   sx={{
//                     fontSize: `20px`,
//                     fontWeight: "500",
//                     color: "#2252CC",
//                     fontFamily: "monospace",
//                   }}
//                 >
//                   Database Handling and Space Provision
//                 </Typography>
//               </Box>
//               <Box>
//                 <Typography
//                   sx={{
//                     fontSize: `16px`,
//                     fontWeight: "400",
//                     color: "#2252CC",
//                     fontFamily: "monospace",
//                   }}
//                   component="div"  // Change this line to prevent <p> wrapping <ul>
//                 >
//                   <ul>
//                     <li>
//                       Expert database management and secure, scalable storage solutions.
//                     </li>
//                   </ul>
//                 </Typography>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>
//     </Grid>
//   )
// }

// export default Service



// Service.tsx
import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

// Define the ServiceItem component
const ServiceItem: React.FC<{ number: number; title: string; description: string; fontSize: number }> = ({ number, title, description, fontSize }) => {
  return (
    <Box paddingRight={'20px'} paddingTop={'80px'}>
      <Typography
        sx={{
          fontSize: `${fontSize}px`,
          fontWeight: "1000",
          color: "#2252CC",
          fontFamily: "monospace",
        }}
      >
        {number}
      </Typography>
      <Typography
        sx={{
          fontSize: `20px`,
          fontWeight: "500",
          color: "#2252CC",
          fontFamily: "monospace",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: `16px`,
          fontWeight: "400",
          color: "#2252CC",
          fontFamily: "monospace",
        }}
        component="div"
      >
        <ul>
          <li>{description}</li>
        </ul>
      </Typography>
    </Box>
  );
};

// Define the service data array
const serviceData = [
  {
    number: 1,
    title: "Software Design",
    description: "We create intuitive and user-friendly designs tailored to your needs."
  },
  {
    number: 2,
    title: "Application Development",
    description: "From web to mobile applications, we deliver robust and scalable solutions."
  },
  {
    number: 3,
    title: "Software & App Testing",
    description: "Comprehensive testing services to ensure flawless performance."
  },
  {
    number: 4,
    title: "Database Handling and Space Provision",
    description: "Expert database management and secure, scalable storage solutions."
  }
];

// Define the Service component
const Service: React.FC<{ fontSize: number }> = ({ fontSize }) => {
  return (
    <Grid item xs={12} sm={12} md={12} lg={7}>
      <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {serviceData.map((service) => (
            <Grid item xs={12} md={6} key={service.number}>
              <ServiceItem 
                number={service.number} 
                title={service.title} 
                description={service.description} 
                fontSize={fontSize} 
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Grid>
  );
};

export default Service;
