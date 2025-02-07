// import { 
//     TextField,
//     Button,
//     Box,
//     Grid,
//     Typography,
//     FormHelperText,
//     FormLabel,
//  } from '@mui/material'
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import React from 'react'
//     // Validation Schema
//     const validationSchema = Yup.object({
//         firstName: Yup.string().required("Enter a first name."),
//         lastName: Yup.string().required("Enter a last name."),
//         email: Yup.string().email("Enter an email address like example@mysite.com.").required("Email is required."),
//         phone: Yup.string()
//           .matches(/^\d{10}$/, "Enter a valid 10-digit phone number.")
//           .optional(),
//         message: Yup.string().optional(),
//       });
// export default function Contact() {

// const formik = useFormik({
//       initialValues: {
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         message: "",
//       },
//       validationSchema,
//       onSubmit: (values) => {
//         console.log("Form Data:", values);
//       },
//     });
//   return (
//     <Box>
//         <Grid
//   container
//   rowSpacing={{xs: 3, sm: 1, md: 1}}
//   columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//   //display='flex' justifyContent='center' alignItems='center'
//   padding="0px 40px 80px 40px" 
// >
//   <Grid marginTop='16px' item xs={12} sm={6} md={6} lg={6}>
//     <Box maxWidth={'300px'}>
//        <Typography sx={{fontSize: `24px`,
//       color: "#2252CC",
//       fontFamily: "monospace",fontWeight:'600'}}>Let's discuss your software needs. Fill out the contact form below or give us a call to discuss your project and how we can help you achieve your goals.</Typography>
//     </Box>
//   </Grid>
//   <Grid sx={{}} item xs={12} sm={6} md={6} lg={6}>
//   <Box
//       sx={{
//         maxWidth: "600px",
//         margin: "0 auto",
//         padding: "20px 20px 20px 0px",
//         //backgroundColor: "#f5f5f5",
//         borderRadius: "8px",
//         width:'100%'
//       }}
//     >
//       <Typography
//         variant="h5"
//         component="h1"
//         sx={{
//           color: "#2252CC",
//           fontWeight: "bold",
//           textAlign: "left",
//           marginBottom: "40px",
//           fontFamily: "monospace",
//         }}
//       >
//         Contact us
//       </Typography>

//       <form onSubmit={formik.handleSubmit}>
//         <Grid container spacing={2}>
//           {/* First Name */}
//           <Grid item xs={12} sm={6}>
//             {/* <TextField
//               fullWidth
//               id="firstName"
//               name="firstName"
//               label="First name *"
//               variant="standard"
//               focused
//               value={formik.values.firstName}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.firstName && Boolean(formik.errors.firstName)}
//               helperText={
//                 formik.touched.firstName && formik.errors.firstName ? (
//                   <Box display="flex" alignItems="center" color="#8D96AD">
//                     <svg
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                       width="20"
//                       height="20"
//                       aria-hidden="true"
//                       style={{ marginRight: "5px" }}
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M9.5,3 C13.084,3 16,5.916 16,9.5 C16,13.084 13.084,16 9.5,16 C5.916,16 3,13.084 3,9.5 C3,5.916 5.916,3 9.5,3 Z M9.5,4 C6.467,4 4,6.467 4,9.5 C4,12.533 6.467,15 9.5,15 C12.533,15 15,12.533 15,9.5 C15,6.467 12.533,4 9.5,4 Z M10,11 L10,12 L9,12 L9,11 L10,11 Z M10,7 L10,10 L9,10 L9,7 L10,7 Z"
//                       ></path>
//                     </svg>
//                     {formik.errors.firstName}
//                   </Box>
//                 ) : null
//               }
//               InputProps={{
//                 disableUnderline: false, // Show underline for standard variant
//                 sx: {
//                   "&:before": {
//                     borderBottomColor: formik.touched.firstName && formik.errors.firstName ? "red" : "gray", // Before focus
//                   },
//                   "&:after": {
//                     borderBottomColor: formik.touched.firstName && formik.errors.firstName ? "red" : "blue", // After focus
//                   },
//                 },
//               }}
//               InputLabelProps={{
//                 sx: {
//                   color: formik.touched.firstName && formik.errors.firstName ? "red" : "black",
//                   "&.Mui-focused": {
//                     color: formik.touched.firstName && formik.errors.firstName ? "red" : "blue",
//                   },
//                 },
//               }}
//             /> */}
//             <FormLabel sx={{color:"blue"}}>First name *</FormLabel>
//             <TextField
//             sx={{marginTop:'20px'}}
//   fullWidth
//   id="firstName"
//   name="firstName"
//   variant="standard"
//   value={formik.values.firstName}
//   onChange={formik.handleChange}
//   onBlur={formik.handleBlur}
//   error={formik.touched.firstName && Boolean(formik.errors.firstName)}
//   helperText={
//     formik.touched.firstName && formik.errors.firstName ? (
//       <Box display="flex" alignItems="center" color="#8D96AD">
//         <svg
//           viewBox="0 0 20 20"
//           fill="currentColor"
//           width="20"
//           height="20"
//           aria-hidden="true"
//           style={{ marginRight: "5px" }}
//         >
//           <path
//             fillRule="evenodd"
//             d="M9.5,3 C13.084,3 16,5.916 16,9.5 C16,13.084 13.084,16 9.5,16 C5.916,16 3,13.084 3,9.5 C3,5.916 5.916,3 9.5,3 Z M9.5,4 C6.467,4 4,6.467 4,9.5 C4,12.533 6.467,15 9.5,15 C12.533,15 15,12.533 15,9.5 C15,6.467 12.533,4 9.5,4 Z M10,11 L10,12 L9,12 L9,11 L10,11 Z M10,7 L10,10 L9,10 L9,7 L10,7 Z"
//           ></path>
//         </svg>
//         {formik.errors.firstName}
//       </Box>
//     ) : null
//   }
//   InputProps={{
//     disableUnderline: false,
//     sx: {
//       "&:before": {
//         borderBottomColor: formik.touched.firstName && formik.errors.firstName ? "gray !important" : "blue !important", // Default underline 
//         //borderBottomWidth: "2px",
//       },
//       "&:after": {
//         borderBottomColor: formik.touched.firstName && formik.errors.firstName ? "gray !important" : "green !important", // Focused underline
//         //borderBottomWidth: "2px",
//       },
//       "&:hover:not(.Mui-disabled):before": {
//         borderBottomColor: formik.touched.firstName && formik.errors.firstName ? "gray !important" : "blue !important", // Hover effect
//       },
//     },
//   }}

// />

//           </Grid>

//           {/* Last Name */}
//           <Grid item xs={12} sm={6}>
//           <FormLabel sx={{color:"blue"}}>Last name *</FormLabel>
//             <TextField
//             sx={{marginTop:'20px'}}
//               fullWidth
//               id="lastName"
//               name="lastName"
//               variant="standard"
//               value={formik.values.lastName}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.lastName && Boolean(formik.errors.lastName)}
//               helperText={
//                 formik.touched.lastName && formik.errors.lastName ? (
//                   <Box display="flex" alignItems="center" color="#8D96AD">
//                     <svg
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                       width="20"
//                       height="20"
//                       aria-hidden="true"
//                       style={{ marginRight: "5px" }}
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M9.5,3 C13.084,3 16,5.916 16,9.5 C16,13.084 13.084,16 9.5,16 C5.916,16 3,13.084 3,9.5 C3,5.916 5.916,3 9.5,3 Z M9.5,4 C6.467,4 4,6.467 4,9.5 C4,12.533 6.467,15 9.5,15 C12.533,15 15,12.533 15,9.5 C15,6.467 12.533,4 9.5,4 Z M10,11 L10,12 L9,12 L9,11 L10,11 Z M10,7 L10,10 L9,10 L9,7 L10,7 Z"
//                       ></path>
//                     </svg>
//                     {formik.errors.lastName}
//                   </Box>
//                 ) : null
//               }
//               InputProps={{
//                 disableUnderline: false,
//                 sx: {
//                   "&:before": {
//                     borderBottomColor: formik.touched.lastName && formik.errors.lastName ? "gray !important" : "blue !important", // Default underline 
//                     //borderBottomWidth: "2px",
//                   },
//                   "&:after": {
//                     borderBottomColor: formik.touched.lastName && formik.errors.lastName ? "gray !important" : "green !important", // Focused underline
//                     //borderBottomWidth: "2px",
//                   },
//                   "&:hover:not(.Mui-disabled):before": {
//                     borderBottomColor: formik.touched.lastName && formik.errors.lastName ? "gray !important" : "blue !important", // Hover effect
//                   },
//                 },
//               }}
            
//             />
//           </Grid>

//           {/* Email */}
//           <Grid item xs={12} sm={6}>
//           <FormLabel sx={{color:"blue"}}>Email *</FormLabel>
//             <TextField
//             sx={{marginTop:'20px'}}
//               fullWidth
//               id="email"
//               name="email"
//               variant="standard"
//               value={formik.values.email}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.email && Boolean(formik.errors.email)}
//               helperText={
//                 formik.touched.email && formik.errors.email ? (
//                   <Box display="flex" alignItems="center" color="#8D96AD">
//                     <span style={{display:"flex",alignItems:"flex-start"}}>
//                     <svg
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                       width="20"
//                       height="20"
//                       aria-hidden="true"
//                       style={{ marginRight: "5px" }}
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M9.5,3 C13.084,3 16,5.916 16,9.5 C16,13.084 13.084,16 9.5,16 C5.916,16 3,13.084 3,9.5 C3,5.916 5.916,3 9.5,3 Z M9.5,4 C6.467,4 4,6.467 4,9.5 C4,12.533 6.467,15 9.5,15 C12.533,15 15,12.533 15,9.5 C15,6.467 12.533,4 9.5,4 Z M10,11 L10,12 L9,12 L9,11 L10,11 Z M10,7 L10,10 L9,10 L9,7 L10,7 Z"
//                       ></path>
//                     </svg>
//                     {formik.errors.email}
//                     </span>
//                   </Box>
//                 ) : null
//               }
//               InputProps={{
//                 disableUnderline: false,
//                 sx: {
//                   "&:before": {
//                     borderBottomColor: formik.touched.email && formik.errors.email ? "gray !important" : "blue !important", // Default underline 
//                     //borderBottomWidth: "2px",
//                   },
//                   "&:after": {
//                     borderBottomColor: formik.touched.email && formik.errors.email ? "gray !important" : "green !important", // Focused underline
//                     //borderBottomWidth: "2px",
//                   },
//                   "&:hover:not(.Mui-disabled):before": {
//                     borderBottomColor: formik.touched.email && formik.errors.email ? "gray !important" : "blue !important", // Hover effect
//                   },
//                 },
//               }}
//             />
//           </Grid>

//           {/* Phone */}
//           <Grid item xs={12} sm={6}>
//           <FormLabel sx={{color:"blue"}}>Phone</FormLabel>
//             <TextField
//             sx={{marginTop:'20px'}}
//               fullWidth
//               id="phone"
//               name="phone"
//               variant="standard"
//               value={formik.values.phone}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.phone && Boolean(formik.errors.phone)}
//               helperText={
//                 formik.touched.phone && formik.errors.phone ? (
//                   <Box display="flex" alignItems="center" color="#8D96AD">
//                     <svg
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                       width="20"
//                       height="20"
//                       aria-hidden="true"
//                       style={{ marginRight: "5px" }}
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M9.5,3 C13.084,3 16,5.916 16,9.5 C16,13.084 13.084,16 9.5,16 C5.916,16 3,13.084 3,9.5 C3,5.916 5.916,3 9.5,3 Z M9.5,4 C6.467,4 4,6.467 4,9.5 C4,12.533 6.467,15 9.5,15 C12.533,15 15,12.533 15,9.5 C15,6.467 12.533,4 9.5,4 Z M10,11 L10,12 L9,12 L9,11 L10,11 Z M10,7 L10,10 L9,10 L9,7 L10,7 Z"
//                       ></path>
//                     </svg>
//                     {formik.errors.phone}
//                   </Box>
//                 ) : null
//               }
//               InputProps={{
//                 disableUnderline: false,
//                 sx: {
//                   "&:before": {
//                     borderBottomColor: formik.touched.phone && formik.errors.phone ? "gray !important" : "blue !important", // Default underline 
//                     //borderBottomWidth: "2px",
//                   },
//                   "&:after": {
//                     borderBottomColor: formik.touched.phone && formik.errors.phone ? "gray !important" : "green !important", // Focused underline
//                     //borderBottomWidth: "2px",
//                   },
//                   "&:hover:not(.Mui-disabled):before": {
//                     borderBottomColor: formik.touched.phone && formik.errors.phone ? "gray !important" : "blue !important", // Hover effect
//                   },
//                 },
//               }}
//             />
//           </Grid>

//           {/* Message */}
//           <Grid item xs={12}>
//           <FormLabel sx={{color:"blue"}}>Message</FormLabel>
//             <TextField
//             sx={{marginTop:'20px'}}
//               fullWidth
//               id="message"
//               name="message"
//               variant="standard"
//               multiline
//               rows={4}
//               value={formik.values.message}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.message && Boolean(formik.errors.message)}
//               helperText={
//                 formik.touched.message && formik.errors.message ? (
//                   <Box display="flex" alignItems="center" color="#8D96AD">
//                     <svg
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                       width="20"
//                       height="20"
//                       aria-hidden="true"
//                       style={{ marginRight: "5px" }}
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M9.5,3 C13.084,3 16,5.916 16,9.5 C16,13.084 13.084,16 9.5,16 C5.916,16 3,13.084 3,9.5 C3,5.916 5.916,3 9.5,3 Z M9.5,4 C6.467,4 4,6.467 4,9.5 C4,12.533 6.467,15 9.5,15 C12.533,15 15,12.533 15,9.5 C15,6.467 12.533,4 9.5,4 Z M10,11 L10,12 L9,12 L9,11 L10,11 Z M10,7 L10,10 L9,10 L9,7 L10,7 Z"
//                       ></path>
//                     </svg>
//                     {formik.errors.message}
//                   </Box>
//                 ) : null
//               }
//               InputProps={{
//                 disableUnderline: false,
//                 sx: {
//                   "&:before": {
//                     borderBottomColor: formik.touched.message && formik.errors.message ? "gray !important" : "blue !important", // Default underline 
//                     //borderBottomWidth: "2px",
//                   },
//                   "&:after": {
//                     borderBottomColor: formik.touched.message && formik.errors.message ? "gray !important" : "green !important", // Focused underline
//                     //borderBottomWidth: "2px",
//                   },
//                   "&:hover:not(.Mui-disabled):before": {
//                     borderBottomColor: formik.touched.message && formik.errors.message ? "gray !important" : "blue !important", // Hover effect
//                   },
//                 },
//               }}

//             />
//           </Grid>
//         </Grid>

//         <Box sx={{ textAlign: "center", marginTop: "20px" }}>
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             sx={{
//               width:'100%',  
//               backgroundColor: "#2252CC",
//               textTransform: "none",
//               fontWeight: "bold",
//               fontFamily: "monospace",
//               borderRadius: "20px",
//               padding: "10px 30px",
//             }}
//           >
//             Submit
//           </Button>
//         </Box>
//       </form>
//     </Box>

// </Grid>
//   </Grid>
//     </Box>
//   )
// }


import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Grid,
  Typography,
  FormLabel,
  Snackbar,
  Alert,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

// Validation Schema
const validationSchema = Yup.object({
  firstName: Yup.string().required('Enter a first name.'),
  lastName: Yup.string().required('Enter a last name.'),
  email: Yup.string()
    .email('Enter an email address like example@mysite.com.')
    .required('Email is required.'),
  phone: Yup.string()
    .matches(/^\d{10}$/, 'Enter a valid 10-digit phone number.')
    .optional(),
  message: Yup.string().optional(),
});

export default function Contact() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        // Prepare the data to match the API requirements
        const formData = {
          full_name: `${values.firstName} ${values.lastName}`,
          interested_in: 'Yoga Nidra', // Static value as per your requirement
          phone_number: values.phone,
          email: values.email,
          anything_to_say: values.message,
        };

        // Send the form data to the API endpoint
        const response = await axios.post(
          'https://be-royal-mindfulness.onrender.com/customer_supports',
          formData
        );

        // Handle the response
        if (response.status === 200 || response.status === 201) {
          console.log('Form submitted successfully!', response.data);
          setSnackbarMessage('Thank you for contacting us! We will get back to you soon.');
          setSnackbarSeverity('success');
          setSnackbarOpen(true);
          formik.resetForm(); // Reset the form after successful submission
        } else {
          console.error('Failed to submit the form:', response.data);
          setSnackbarMessage('Failed to submit the form. Please try again.');
          setSnackbarSeverity('error');
          setSnackbarOpen(true);
        }
      } catch (error) {
        console.error('Error submitting the form:', error);
        setSnackbarMessage('An error occurred while submitting the form. Please try again.');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
      }
    },
  });

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box>
      <Grid
        container
        rowSpacing={{ xs: 3, sm: 1, md: 1 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        padding="0px 40px 80px 40px"
      >
        <Grid marginTop="16px" item xs={12} sm={6} md={6} lg={6}>
          <Box maxWidth={"300px"}>
            <Typography
              sx={{
                fontSize: 24,
                color: '#2252CC',
                fontFamily: 'monospace',
                fontWeight: '600',
              }}
            >
              Let's discuss your software needs. Fill out the contact form below or give us a call to discuss your project and how we can help you achieve your goals.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box
            sx={{
              maxWidth: '600px',
              margin: '0 auto',
              padding: '20px 20px 20px 0px',
              borderRadius: '8px',
              width: '100%',
            }}
          >
            <Typography
              variant="h5"
              component="h1"
              sx={{
                color: '#2252CC',
                fontWeight: 'bold',
                textAlign: 'left',
                marginBottom: '40px',
                fontFamily: ' monospace',
              }}
            >
              Contact us
            </Typography>

            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={2}>
                {/* First Name */}
                <Grid item xs={12} sm={6}>
                  <FormLabel sx={{ color: 'blue' }}>First name *</FormLabel>
                  <TextField
                    sx={{ marginTop: '20px' }}
                    fullWidth
                    id="firstName"
                    name="firstName"
                    variant="standard"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={
                      formik.touched.firstName && formik.errors.firstName ? (
                        <Box display="flex" alignItems="center" color="#8D96AD">
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            width="20"
                            height="20"
                            aria-hidden="true"
                            style={{ marginRight: '5px' }}
                          >
                            <path
                              fillRule="evenodd"
                              d="M9.5,3 C13.084,3 16,5.916 16,9.5 C16,13.084 13.084,16 9.5,16 C5.916,16 3,13.084 3,9.5 C3,5.916 5.916,3 9.5,3 Z M9.5,4 C6.467,4 4,6.467 4,9.5 C4,12.533 6.467,15 9.5,15 C12.533,15 15,12.533 15,9.5 C15,6.467 12.533,4 9.5,4 Z M10,11 L10,12 L9,12 L9,11 L10,11 Z M10,7 L10,10 L9,10 L9,7 L10,7 Z"
                            ></path>
                          </svg>
                          {formik.errors.firstName}
                        </Box>
                      ) : null
                    }
                    InputProps={{
                      disableUnderline: false,
                      sx: {
                        '&:before': {
                          borderBottomColor: formik.touched.firstName && formik.errors.firstName ? 'gray !important' : 'blue !important',
                        },
                        '&:after': {
                          borderBottomColor: formik.touched.firstName && formik.errors.firstName ? 'gray !important' : 'green !important',
                        },
                        '&:hover:not(.Mui-disabled):before': {
                          borderBottomColor: formik.touched.firstName && formik.errors.firstName ? 'gray !important' : 'blue !important',
                        },
                      },
                    }}
                  />
                </Grid>

                {/* Last Name */}
                <Grid item xs={12} sm={6}>
                  <FormLabel sx={{ color: 'blue' }}>Last name *</FormLabel>
                  <TextField
                    sx={{ marginTop: '20px' }}
                    fullWidth
                    id="lastName"
                    name="lastName"
                    variant="standard"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    helperText={
                      formik.touched.lastName && formik.errors.lastName ? (
                        <Box display="flex" alignItems="center" color="#8D96AD">
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            width="20"
                            height="20"
                            aria-hidden="true"
                            style={{ marginRight: '5px' }}
                          >
                            <path
                              fillRule="evenodd"
                              d="M9.5,3 C13.084,3 16,5.916 16,9.5 C16,13.084 13.084,16 9.5,16 C5.916,16 3,13.084 3,9.5 C3,5.916 5.916,3 9.5,3 Z M9.5,4 C6.467,4 4,6.467 4,9.5 C4,12.533 6.467,15 9.5,15 C12.533,15 15,12.533 15,9.5 C15,6.467 12.533,4 9.5,4 Z M10,11 L10,12 L9,12 L9,11 L10,11 Z M10,7 L10,10 L9,10 L9, 7 L10,7 Z"
                            ></path>
                          </svg>
                          {formik.errors.lastName}
                        </Box>
                      ) : null
                    }
                    InputProps={{
                      disableUnderline: false,
                      sx: {
                        '&:before': {
                          borderBottomColor: formik.touched.lastName && formik.errors.lastName ? 'gray !important' : 'blue !important',
                        },
                        '&:after': {
                          borderBottomColor: formik.touched.lastName && formik.errors.lastName ? 'gray !important' : 'green !important',
                        },
                        '&:hover:not(.Mui-disabled):before': {
                          borderBottomColor: formik.touched.lastName && formik.errors.lastName ? 'gray !important' : 'blue !important',
                        },
                      },
                    }}
                  />
                </Grid>

                {/* Email */}
                <Grid item xs={12} sm={6}>
                  <FormLabel sx={{ color: 'blue' }}>Email *</FormLabel>
                  <TextField
                    sx={{ marginTop: '20px' }}
                    fullWidth
                    id="email"
                    name="email"
                    variant="standard"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={
                      formik.touched.email && formik.errors.email ? (
                        <Box display="flex" alignItems="center" color="#8D96AD">
                          <span style={{ display: 'flex', alignItems: 'flex-start' }}>
                            <svg
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              width="20"
                              height="20"
                              aria-hidden="true"
                              style={{ marginRight: '5px' }}
                            >
                              <path
                                fillRule="evenodd"
                                d="M9.5,3 C13.084,3 16,5.916 16,9.5 C16,13.084 13.084,16 9.5,16 C5.916,16 3,13.084 3,9.5 C3,5.916 5.916,3 9.5,3 Z M9.5,4 C6.467,4 4,6.467 4,9.5 C4,12.533 6.467,15 9.5,15 C12.533,15 15,12.533 15,9.5 C15,6.467 12.533,4 9.5,4 Z M10,11 L10,12 L9,12 L9,11 L10,11 Z M10,7 L10,10 L9,10 L9,7 L10,7 Z"
                              ></path>
                            </svg>
                            {formik.errors.email}
                          </span>
                        </Box>
                      ) : null
                    }
                    InputProps={{
                      disableUnderline: false,
                      sx: {
                        '&:before': {
                          borderBottomColor: formik.touched.email && formik.errors.email ? 'gray !important' : 'blue !important',
                        },
                        '&:after': {
                          borderBottomColor: formik.touched.email && formik.errors.email ? 'gray !important' : 'green !important',
                        },
                        '&:hover:not(.Mui-disabled):before': {
                          borderBottomColor: formik.touched.email && formik.errors.email ? 'gray !important' : 'blue !important',
                        },
                      },
                    }}
                  />
                </Grid>

                {/* Phone */}
                <Grid item xs={12} sm={6}>
                  <FormLabel sx={{ color: 'blue' }}>Phone</FormLabel>
                  <TextField
                    sx={{ marginTop: '20px' }}
                    fullWidth
                    id="phone"
                    name="phone"
                    variant="standard"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={
                      formik.touched.phone && formik.errors.phone ? (
                        <Box display="flex" alignItems="center" color="#8D96AD">
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            width="20"
                            height="20"
                            aria-hidden="true"
                            style={{ marginRight: '5px' }}
                          >
                            <path
                              fillRule="evenodd"
                              d="M9.5,3 C13.084,3 16,5.916 16,9.5 C16,13.084 13.084,16 9.5,16 C5.916,16 3,13.084 3, 9.5 C3,5.916 5.916,3 9.5,3 Z M9.5,4 C6.467,4 4,6.467 4,9.5 C4,12.533 6.467,15 9.5,15 C12.533,15 15,12.533 15,9.5 C15,6.467 12.533,4 9.5,4 Z M10,11 L10,12 L9,12 L9,11 L10,11 Z M10,7 L10,10 L9,10 L9,7 L10,7 Z"
                            ></path>
                          </svg>
                          {formik.errors.phone}
                        </Box>
                      ) : null
                    }
                    InputProps={{
                      disableUnderline: false,
                      sx: {
                        '&:before': {
                          borderBottomColor: formik.touched.phone && formik.errors.phone ? 'gray !important' : 'blue !important',
                        },
                        '&:after': {
                          borderBottomColor: formik.touched.phone && formik.errors.phone ? 'gray !important' : 'green !important',
                        },
                        '&:hover:not(.Mui-disabled):before': {
                          borderBottomColor: formik.touched.phone && formik.errors.phone ? 'gray !important' : 'blue !important',
                        },
                      },
                    }}
                  />
                </Grid>

                {/* Message */}
                <Grid item xs={12}>
                  <FormLabel sx={{ color: 'blue' }}>Message</FormLabel>
                  <TextField
                    sx={{ marginTop: '20px' }}
                    fullWidth
                    id="message"
                    name="message"
                    variant="standard"
                    multiline
                    rows={4}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.message && Boolean(formik.errors.message)}
                    helperText={
                      formik.touched.message && formik.errors.message ? (
                        <Box display="flex" alignItems="center" color="#8D96AD">
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            width="20"
                            height="20"
                            aria-hidden="true"
                            style={{ marginRight: '5px' }}
                          >
                            <path
                              fillRule="evenodd"
                              d="M9.5,3 C13.084,3 16,5.916 16,9.5 C16,13.084 13.084,16 9.5,16 C5.916,16 3,13.084 3,9.5 C3,5.916 5.916,3 9.5,3 Z M9.5,4 C6.467,4 4,6.467 4,9.5 C4,12.533 6.467,15 9.5,15 C12.533,15 15,12.533 15,9.5 C15,6.467 12.533,4 9.5,4 Z M10,11 L10,12 L9,12 L9,11 L10,11 Z M10,7 L10,10 L9,10 L9,7 L10,7 Z"
                            ></path>
                          </svg>
                          {formik.errors.message}
                        </Box>
                      ) : null
                    }
                    InputProps={{
                      disableUnderline: false,
                      sx: {
                        '&:before': {
                          borderBottomColor: formik.touched.message && formik.errors.message ? 'gray !important' : 'blue !important',
                        },
                        '&:after': {
                          borderBottomColor: formik.touched.message && formik.errors.message ? 'gray !important' : 'green !important',
                        },
                        '&:hover:not(.Mui-disabled):before': {
                          borderBottomColor: formik.touched.message && formik.errors.message ? 'gray !important' : 'blue !important',
                        },
                      },
                    }}
                  />
                </Grid>
              </Grid>

              <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{
                    width: '100%',
                    backgroundColor: '#2252CC',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    fontFamily: 'monospace',
                    borderRadius: '20px',
                    padding: '10px 30px',
                  }}
                >
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>

      {/* Snackbar for success/error messages */}
      {/* <Snackbar open={snackbarOpen} auto={true} close={handleCloseSnackbar} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar> */}
      <Snackbar
  open={snackbarOpen}
  autoHideDuration={3000} // Set the duration for auto-hide
  onClose={handleCloseSnackbar}
  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
>
  <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
    {snackbarMessage}
  </Alert>
</Snackbar>
    </Box>
  );
}