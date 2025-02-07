import React, { useState, useEffect, useRef } from "react";
import Slider from "../assets/images/slider.avif";
import { Typography, Box } from "@mui/material";

const OurVision = () => {
  const slides = [
    {
      image: Slider,
      header: `Define Desired Features:`,
      content: (
        <>
          <Typography component="p">
            We envision a future where technology is accessible to everyone.
            Our goal is to create a seamless portal that enables companies
            without technical expertise to bring their ideas to life. This
            portal will allow businesses to:
          </Typography>
          <Typography component="p">
            Users can easily outline the functionalities they need, from basic
            tools to complex systems, using a simple and guided interface.
          </Typography>
        </>
      ),
    },
    {
      image: Slider,
      header: `Innovation in Technology:`,
      content: `Technology should evolve to cater to the needs of both individuals and businesses alike. Our platform offers solutions designed to integrate seamlessly with your current systems, making adoption easy and effective.`,
    },
    {
      image: Slider,
      header: `Building Smarter Solutions:`,
      content: `Our goal is to create smart, adaptive, and sustainable technological solutions that can grow with your business. This means tools that are flexible and scalable for diverse industries.`,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // Start from the first actual slide
  const [isTransitioning, setIsTransitioning] = useState(true);

  const sliderRef = useRef<HTMLDivElement>(null);

  // Add cloned slides to create the seamless loop effect
  const loopSlides = [slides[slides.length - 1], ...slides, slides[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      // Jump to the last real slide without transition
      setIsTransitioning(false);
      setCurrentIndex(slides.length);
    } else if (currentIndex === loopSlides.length - 1) {
      // Jump to the first real slide without transition
      setIsTransitioning(false);
      setCurrentIndex(1);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      // Reset the transition after updating the index
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  return (
    <Box
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        //height: "300px",
      }}
    >
      <Box
        ref={sliderRef}
        sx={{
          display: "flex",
          transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {loopSlides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              minWidth: "100%",
              //height: "300px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              //padding: "20px",
              //gap: "250px",
            }}
          >
            <Box
              sx={{
                bottom: "20px",
                left: "20px",
                width: "100%",
                maxWidth: "400px",
                borderRadius: "8px",
              }}
            >
              <Typography
                sx={{
                  fontSize: `22px`,
                  fontWeight: "500",
                  color: "#2252CC",
                  fontFamily: "monospace",
                  padding: "15px",
                }}
              >
                {slide.header}
              </Typography>
              <Box
                sx={{
                  fontSize: `16px`,
                  fontWeight: "500",
                  color: "#2252CC",
                  fontFamily: "monospace",
                  padding: "15px",
                }}
              >
                {slide.content}
              </Box>
            </Box>
            <Box>
              <img
                src={slide.image}
                alt={`Slide ${index}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>

    
      <Box sx={{display:'flex', justifyContent:'space-between',padding:'0px 10px 80px 10px'}}>
   <Box>
  <Box
         onClick={prevSlide}
         style={{
           width:'20px',
           height:'20px',
           transform: 'translateY(-50%)',
           background: 'transparent',
           cursor: 'pointer',
         }}
       >
        <svg 
     data-bbox="50 49.501 99.999 101.001" 
     viewBox="0 0 200 200" 
     height="40" 
     width="40" 
     xmlns="http://www.w3.org/2000/svg" 
     data-type="shape"
 >
     <g fill="blue">
         <path d="M150 100c0 2.209-1.773 4-3.96 4H63.52l39.279 39.672a4.027 4.027 0 0 1 0 5.656 3.928 3.928 0 0 1-5.6 0L51.161 102.83a3.959 3.959 0 0 1-.496-.613c-.064-.097-.108-.203-.163-.304-.069-.127-.145-.25-.2-.384-.054-.132-.086-.271-.125-.407-.033-.113-.076-.222-.1-.339a4.045 4.045 0 0 1 0-1.566c.023-.118.066-.226.099-.339.04-.137.071-.275.125-.407.055-.135.131-.257.2-.384.055-.102.099-.207.163-.304.146-.221.311-.426.496-.613l46.038-46.498a3.932 3.932 0 0 1 5.6 0 4.027 4.027 0 0 1 0 5.656L63.52 96h82.519c2.188 0 3.961 1.791 3.961 4z"></path>
     </g>
 </svg>
       </Box>

   </Box>
   <Box>
   <Box
         onClick={nextSlide}
         style={{
           width:'20px',
           height:'20px',
           transform: 'translateY(-50%)',
           background: 'transparent',
           cursor: 'pointer',
         }}
       >
        <svg 
     data-bbox="49 49.501 100 101.002" 
     viewBox="0 0 200 200" 
     height="40" 
     width="40" 
     xmlns="http://www.w3.org/2000/svg" 
     data-type="shape"
 >
     <g fill="blue">
         <path d="m147.839 102.831-46.038 46.498a3.928 3.928 0 0 1-5.6 0 4.027 4.027 0 0 1 0-5.656L135.48 104H52.96c-2.187 0-3.96-1.791-3.96-4s1.773-4 3.96-4h82.519L96.201 56.328a4.027 4.027 0 0 1 0-5.656 3.932 3.932 0 0 1 5.6 0l46.038 46.498c.185.187.351.392.496.613.064.097.108.201.162.302.07.127.146.25.201.386.054.132.085.27.125.405.033.114.077.223.1.341.102.517.102 1.05 0 1.566-.023.118-.067.227-.1.341-.039.136-.071.273-.125.405-.056.135-.132.258-.201.386-.055.101-.098.205-.162.302a3.967 3.967 0 0 1-.496.614z"></path>
     </g>
 </svg>

       </Box>

   </Box>
  </Box>
    </Box>
  );
};

export default OurVision;
