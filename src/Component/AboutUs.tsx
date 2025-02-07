// import { Grid, Box, Typography } from '@mui/material'
// import React from 'react'

// function AboutUs() {
//   return (
//      <Grid item xs={12} sm={12} md={12} lg={7}>
//                     <Box padding="80px 40px">
//                       <Typography
//                         sx={{
//                           fontSize: `16px`,
//                           fontWeight: "400",
//                           color: "#2252CC",
//                           fontFamily: "monospace",
//                         }}
//                       >
//                         <p>
//                           At TechWoks, we are a team of passionate innovators
//                           dedicated to simplifying software development for
//                           businesses. Our mission is to empower companies,
//                           regardless of their technical expertise, to achieve their
//                           goals through tailored software solutions.
//                         </p>
//                         <p>
//                           We believe that every business deserves access to
//                           cutting-edge technology, and we work tirelessly to make
//                           that vision a reality. Our team comprises experienced
//                           developers, designers, and strategists who bring a wealth
//                           of knowledge and creativity to every project. With a
//                           customer-centric approach, we prioritize understanding
//                           your unique challenges and delivering solutions that
//                           exceed expectations.
//                         </p>
//                         <p>
//                           What sets us apart is our commitment to transparency,
//                           collaboration, and continuous improvement. From initial
//                           consultations to project delivery, we ensure that every
//                           step of the process is seamless, efficient, and aligned
//                           with your objectives. Together, we strive to create
//                           software that not only works but truly transforms the way
//                           you operate.
//                         </p>
//                       </Typography>
//                     </Box>
//                   </Grid>
//   )
// }

// export default AboutUs



import { Grid, Box, Typography } from '@mui/material';
import React from 'react';

function AboutUs() {
  return (
    <Grid item xs={12} sm={12} md={12} lg={7}>
      <Box padding="80px 40px">
        <Typography
          sx={{
            fontSize: `16px`,
            fontWeight: "400",
            color: "#2252CC",
            fontFamily: "monospace",
          }}
        >
          At TechWoks, we are a team of passionate innovators dedicated to simplifying software development for businesses. Our mission is to empower companies, regardless of their technical expertise, to achieve their goals through tailored software solutions.
        </Typography>
        <Typography
          sx={{
            fontSize: `16px`,
            fontWeight: "400",
            color: "#2252CC",
            fontFamily: "monospace",
            marginTop: '16px', // Add some spacing between paragraphs
          }}
        >
          We believe that every business deserves access to cutting-edge technology, and we work tirelessly to make that vision a reality. Our team comprises experienced developers, designers, and strategists who bring a wealth of knowledge and creativity to every project. With a customer-centric approach, we prioritize understanding your unique challenges and delivering solutions that exceed expectations.
        </Typography>
        <Typography
          sx={{
            fontSize: `16px`,
            fontWeight: "400",
            color: "#2252CC",
            fontFamily: "monospace",
            marginTop: '16px', // Add some spacing between paragraphs
          }}
        >
          What sets us apart is our commitment to transparency, collaboration, and continuous improvement. From initial consultations to project delivery, we ensure that every step of the process is seamless, efficient, and aligned with your objectives. Together, we strive to create software that not only works but truly transforms the way you operate.
        </Typography>
      </Box>
    </Grid>
  );
}

export default AboutUs;