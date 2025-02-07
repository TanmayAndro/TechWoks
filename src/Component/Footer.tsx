import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Logo from "../assets/images/logo.avif";
const footerMenu = [
  {name:'Service',link:'/service'},
  {name:'Case Studies',link:'/casestudies'},
  {name:'Careers',link:'/careers'},
  {name:'Privacy Policy',link:'/privacypolicy'}
]

const address = [
  {address1:'RH15, Treasure Town',
   address2:'Bijalpur',
   city:'Indore',
   state:'(M.P)',
   country:'India',
   pincode:'452012',
   email:'tanmay.agnihotri@techwoks.com',
   phone:'',
  }
]


function Footer({handleOpenPage}:any) {
  const handleNavigation = (url:string) => {
    console.log(url);
  }
  return (
    <Box
    sx={{
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      backgroundImage:
        "linear-gradient(180deg, #E6E6E6 0%, #ED87B0 31.641588712993425%, #F5DCE6 66.01380465323466%, #E6E6E6 98.28555458470395%)",
    }}
  >
    <Box
      sx={{
        display: "flex",
        padding: "16px 18px",
      }}
    >
      <Box
        sx={{
          bgcolor: "#2A5DCC",
          width: "100%",
          height: "100%",
          borderRadius: "12px",
        }}
      >
    <Box>
      <Grid
        container
        rowSpacing={{ xs: 3, sm: 1, md: 1 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        padding="0px 40px 40px 40px"
      >
        <Grid item xs={12} sm={4} md={4} lg={4}>
        <Grid
        container alignItems="center"
        marginTop={'95px'} 
      >
        <Grid display={'flex'} justifyContent='flex-end' marginLeft={'-80px'} alignItems={'center'} item xs={12} sm={6} md={6} lg={6}>
          <img  style={{
            width: 60,
            height: 60,
            display: "block", // Prevent inline spacing
          }} src={Logo} alt='techWoks'/>
         
          </Grid>
        <Grid display={'flex'} justifyContent='flex-start' item xs={12} sm={6} md={6} lg={6}>
        <Box sx={{
          fontSize:'22px',
          color:'#FFFFFF',
          fontFamily:'monospace',
          fontWeight:'600' 
        }} component="span">
          TechWoks
          </Box>
        </Grid>

      </Grid>

        </Grid>
        <Grid marginTop="16px" item xs={12} sm={4} md={4} lg={4}>
        <Box
              padding="20px 0px"
              sx={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <Box
                sx={{
                  width: "14px",
                  height: "14px",
                  backgroundColor: "#ed87b0",
                  borderRadius: "2px",
                }}
              ></Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: `16px`,
                    color: "#FFFFFF",
                    fontFamily: "monospace",
                  }}
                >
                  MENU
                </Typography>
              </Box>
              </Box> 
              <Box>
              {footerMenu.map((menu, index) => {
  return (
    <Typography key={index} onClick={()=>handleOpenPage(menu.link)}
      sx={{
        fontSize: `16px`,
        color: "#FFFFFF",
        fontFamily: "monospace",
      }}
    >
      {menu.name}
    </Typography>
  );
})}

              
                
              </Box>
            
        </Grid>
        <Grid marginTop="16px" item xs={12} sm={4} md={4} lg={4}>
          <Box>
          <Box
              padding="20px 0px"
              sx={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
          <Box
                sx={{
                  width: "14px",
                  height: "14px",
                  backgroundColor: "#ed87b0",
                  borderRadius: "2px",
                }}
              ></Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: `16px`,
                    color: "#FFFFFF",
                    fontFamily: "monospace",
                  }}
                >
                  Contact
                </Typography>
              </Box>
              </Box>
          {address.map((add, index) => {
  return (
    <Typography key={index}
      sx={{
        fontSize: `16px`,
        color: "#FFFFFF",
        fontFamily: "monospace",
      }}
    >
      {add.address1},<br/>
      {add.address2}, {add.city}<br/>
      {add.state}, {add.country}<br/>
      pincode :- {add.pincode}<br/>
      {add.email}
      
    </Typography>
  );
})}
          </Box>
        </Grid>
      </Grid>
    </Box>
    </Box>
    </Box>
    </Box>
  );
}

export default Footer;
