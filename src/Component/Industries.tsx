import { Grid, Box, Typography } from '@mui/material'
import React from 'react'
import artboardOne from "../assets/images/ArtboardOne.avif";
import artboardTwo from "../assets/images/ArtboardTwo.avif";
import artboardThree from "../assets/images/ArtboardThree.avif";


// const industries = [
//     {
//         image:artboardOne,
//         title : 'FinTech & Banking',
//         description:{
//             value:'Wealth Management & Investment',
//             value:'Payment Processing & Fraud Detection',
//             value:'RegTech & Compliance'
//         }
//     },
//     {
//         image:artboardTwo,
//         title : 'E-commerce & Retail',
//         description:{
//             value:'Electronic Health Records',
//             value:'Patient Management Systems',
//             value:'Medical Imaging & Data Analytics'
//         }
//     },
//     {
//         image:artboardThree,
//         title : 'Ed-tech and communication application',
//         description:{
//             value:'Communication and Media & hierarchy bases Platforms',
//             value:'Omnichannel University and country level Experience',
//             value:'Management & reports generation and Optimization based appl.'
//         }
//     }
// ]

const industries = [
    {
        image: artboardOne,
        title: 'FinTech & Banking',
        description: [
            { value: 'Wealth Management & Investment' },
            { value: 'Payment Processing & Fraud Detection' },
            { value: 'RegTech & Compliance' }
        ]
    },
    {
        image: artboardTwo,
        title: 'E-commerce & Retail',
        description: [
            { value: 'Electronic Health Records' },
            { value: 'Patient Management Systems' },
            { value: 'Medical Imaging & Data Analytics' }
        ]
    },
    {
        image: artboardThree,
        title: 'Ed-tech and communication application',
        description: [
            { value: 'Communication and Media & hierarchy bases Platforms' },
            { value: 'Omnichannel University and country level Experience' },
            { value: 'Management & reports generation and Optimization based appl.' }
        ]
    }
];

function Industries() {
  return (
    <Grid item xs={12} sm={12} md={12} lg={7}>
                    <Box  padding="80px 40px">
                    {industries.map((data, index) => (
    <Box marginTop={'40px'} key={index} sx={{ bgcolor: "#438743", borderRadius: "8px" }}>
        <Box padding="40px 40px">
            <Box
                sx={{
                    width: "120px",
                    height: "120px",
                    bgcolor: "#DEE6EF",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box>
                    <img src={data.image} alt="techWoks" />
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                }}
            >
                <Typography
                    sx={{
                        fontSize: `22px`,
                        fontWeight: "500",
                        color: "#F2F2F2",
                        fontFamily: "monospace",
                        marginTop: "16px",
                    }}
                >
                    {data.title}
                </Typography>
                {data.description.map((desc, descIndex) => (
                    <Typography
                        key={descIndex}
                        sx={{
                            fontSize: `16px`,
                            fontWeight: "500",
                            color: "#F2F2F2",
                            fontFamily: "monospace",
                            marginTop: "-10px",
                        }}
                    >
                        {desc.value}
                    </Typography>
                ))}
            </Box>
        </Box>
    </Box>
))}
    
                    </Box>
                  </Grid>
  )
}

export default Industries