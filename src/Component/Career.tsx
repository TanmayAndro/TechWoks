import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import redFaceImage from "../assets/images/redFaceEmoji.avif";
import yellowFaceImage from "../assets/images/yellowFaceEmoji.avif";


function Career() {
    const career = [
        {
            image : redFaceImage,
            header : 'Software Developer',
            content : 'We are currently hiring for React Js and ROR developers who have 3 to 7 years of experience.',
            apply :'/',
        },
        {
            image : yellowFaceImage,
            header : 'HR recruiter',
            content : 'We have a vacancy for an HR professional with 2+ years of experience',
            apply :'/',
        }
      ];
      const handleApply=(url:string)=>{
        console.log(url)

      }
  return (
    <Box paddingBottom={'20px'} padding="0px 30px 30px 30px">
    {career.map((data:any, index:number) => (
    <Box key={index} >
             
    <hr></hr>
    <Grid
  container
  rowSpacing={{xs: 3, sm: 1, md: 1}}
  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
  display='flex' justifyContent='center' alignItems='center'
  padding={'30px 0px 30px 0px'} 
>
  <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center', padding:'0px !important'}} item xs={12} sm={2} md={2} lg={2}>
  <Box sx={{padding:'0px',display:'flex',justifyContent:'center',alignItems:'center',width:'81px',height:'81px', borderRadius:'12px',bgcolor:'#DEE6EF'}}>
      <img width={50} height={50} src={data.image} alt="techWoks"/>
    </Box>
 

  </Grid>
  <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center'}}  item xs={12} sm={3} md={3} lg={3}>
  
  <Box>
  <Typography sx={{fontSize: `22px`,
      color: "#2252CC",
      fontFamily: "monospace",fontWeight:'600'}}>{data.header}</Typography> 
   </Box>
  

  </Grid>
  <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center'}}  item xs={12} sm={5} md={5} lg={5}>
  <Box>
   <Typography sx={{fontSize: `16px`,
      color: "#2252CC",
      fontFamily: "monospace",fontWeight:'500'}}>{data.content}</Typography> 
   </Box>
 

  </Grid>
  <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center'}}  item xs={12} sm={2} md={2} lg={2}>
  <Box>

<Button onClick={()=>handleApply(data.apply)} sx={{fontSize: `16px`,
color: "#2252CC",
fontFamily: "monospace",fontWeight:'500', cursor:'pointer',textTransform:'none',height:'32px',
':hover':{
    backgroundColor:'#2252CC',
    color:'#FFFFFF',
    borderRadius:'12px'
}
}}>Apply</Button> 
</Box>
    
    </Grid>
  </Grid>
  
</Box>
    ))}
    <hr></hr>
    </Box>
  )
}

export default Career