import React, { useEffect, useState, forwardRef } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Banner from "./Banner";
import Service from "./Service";
import Industries from "./Industries";
import OurVision from "./OurVision";
import Career from "./Career";
import Contact from "./Contact";
import AboutUs from "./AboutUs";

interface HomeProps {
  serviceRef: React.RefObject<HTMLDivElement>;
  caseStudiesRef: React.RefObject<HTMLDivElement>;
  careerRef: React.RefObject<HTMLDivElement>;
  getInTouchRef : React.RefObject<HTMLDivElement>;
}

const Home = forwardRef<HTMLDivElement, HomeProps>(({ serviceRef,caseStudiesRef, careerRef, getInTouchRef }, ref) => {
  const [scalingFactor, setScalingFactor] = useState<number>(0);
  const [scrollbarWidth, setScrollbarWidth] = useState<number>(0);

  const [scrollPosition, setScrollPosition] = useState(0);

    
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const minScroll = 100;
  const maxScroll = 500;
  const minFontSize = 16;
  const maxFontSize = 100;
  const calculateFontSize = () => {
    if (scrollPosition < minScroll) {
      return minFontSize;
    } else if (scrollPosition > maxScroll) {
      return maxFontSize;
    } else {
      // Linearly interpolate font size between minScroll and maxScroll
      return (
        minFontSize +
        ((scrollPosition - minScroll) / (maxScroll - minScroll)) *
          (maxFontSize - minFontSize)
      );
    }
  };

  const fontSize = calculateFontSize();

  // Function to calculate the scaling factor (e.g., based on viewport width)
  const calculateScalingFactor = () => {
    const viewportWidth = window.innerWidth;
    // Replace this formula with your custom scaling logic
    return viewportWidth;
  };

  // Function to calculate scrollbar width
  const calculateScrollbarWidth = () => {
    // Create a temporary element to measure scrollbar width
    const scrollDiv = document.createElement("div");
    scrollDiv.style.overflow = "scroll";
    scrollDiv.style.width = "100%";
    scrollDiv.style.height = "100%";
    scrollDiv.style.visibility = "hidden";
    document.body.appendChild(scrollDiv);

    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  const computeFontSize = (
    scalingFactor: number,
    scrollbarWidth: number,
    maxValue: number,
    minValue: number,
    firstValue: number,
    SecondValue: number
  ): number => {
    const value = Math.max(
      maxValue,
      Math.min(
        minValue,
        Math.max(firstValue, SecondValue * (scalingFactor - scrollbarWidth))
      )
    );
    return value;
  };

  useEffect(() => {
    // Initial calculation on component mount
    setScalingFactor(calculateScalingFactor());
    setScrollbarWidth(calculateScrollbarWidth());

    // Recalculate scaling factor on window resize
    const handleResize = () => setScalingFactor(calculateScalingFactor());
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          backgroundImage:
            "linear-gradient(180deg, #2252CC 0%, #ED87B0 31.641588712993425%, #F5DCE6 66.01380465323466%, #E6E6E6 98.28555458470395%)",
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
              bgcolor: "#F2F2F2",
              width: "100%",
              height: "100%",
              borderRadius: "12px",
            }}
          >
            <Banner
              scalingFactor={scalingFactor}
              scrollbarWidth={scrollbarWidth}
              computeFontSize={computeFontSize}
            />
          </Box>
        </Box>
      </Box>
      
      
      
      <Box
        ref={serviceRef}
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          backgroundImage:
            "linear-gradient(180deg, #E6E6E6 4.098135964912281%, #E6E6E6 31.236293859649123%, #EBC337 51.67900219298246%, #008643 78.5704495614035%, #008643 100%)",
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
              bgcolor: "#F2F2F2",
              width: "100%",
              height: "100%",
              borderRadius: "12px",
            }}
          >
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12} sm={12} md={12} lg={5}>
                <Box
                  padding="80px 40px"
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
                        color: "#2252CC",
                        fontFamily: "monospace",
                      }}
                    >
                      OUR SERVICES
                    </Typography>
                  </Box>
                </Box>
                <Box padding="0px 40px 80px 40px">
                  <Box
                    sx={{
                      fontSize: `22px`,
                      fontWeight: "500",
                      color: "#2252CC",
                      fontFamily: "monospace",
                      maxWidth: "307px",
                    }}
                  >
                    Empowering businesses with design, development, testing, and
                    database solutions.
                  </Box>
                </Box>
              </Grid>
              <Service fontSize={fontSize} />
            </Grid>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          backgroundImage:
            "linear-gradient(180deg, #008643 0%, #ED87B0 31.641588712993425%, #F5DCE6 66.01380465323466%, #E6E6E6 98.28555458470395%)",
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
              bgcolor: "#F2F2F2",
              width: "100%",
              height: "100%",
              borderRadius: "12px",
            }}
          >
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12} sm={12} md={12} lg={5}>
                <Box
                  padding="80px 40px"
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
                        color: "#2252CC",
                        fontFamily: "monospace",
                      }}
                    >
                      ABOUT US
                    </Typography>
                  </Box>
                </Box>
                <Box padding="0px 40px 80px 40px">
                  <Box
                    sx={{
                      fontSize: `22px`,
                      fontWeight: "500",
                      color: "#2252CC",
                      fontFamily: "monospace",
                      maxWidth: "307px",
                    }}
                  >
                    Your Trusted Partner in Software Development
                  </Box>
                </Box>
              </Grid>
              <AboutUs />
            </Grid>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          backgroundImage:
            "linear-gradient(180deg, #008643 0%, #ED87B0 31.641588712993425%, #F5DCE6 66.01380465323466%, #E6E6E6 98.28555458470395%)",
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
              bgcolor: "#F2F2F2",
              width: "100%",
              height: "100%",
              borderRadius: "12px",
            }}
          >
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12} sm={12} md={12} lg={5}>
                <Box
                  padding="80px 40px"
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
                        color: "#2252CC",
                        fontFamily: "monospace",
                      }}
                    >
                      INDUSTRIES
                    </Typography>
                  </Box>
                </Box>
                <Box padding="0px 40px 80px 40px">
                  <Box
                    sx={{
                      fontSize: `22px`,
                      fontWeight: "500",
                      color: "#2252CC",
                      fontFamily: "monospace",
                      maxWidth: "307px",
                    }}
                  >
                    Delivering Value Across Diverse Sectors
                  </Box>
                </Box>
              </Grid>
              <Industries />
            </Grid>
          </Box>
        </Box>
      </Box>

      <Box
        ref={caseStudiesRef}
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
              bgcolor: "#F2F2F2",
              width: "100%",
              height: "100%",
              borderRadius: "12px",
            }}
          >
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12} sm={12} md={12} lg={5}>
                <Box
                  padding="80px 40px"
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
                        color: "#2252CC",
                        fontFamily: "monospace",
                      }}
                    >
                      Our Vision
                    </Typography>
                  </Box>
                </Box>
                <Box padding="0px 40px 80px 40px">
                  <Box
                    sx={{
                      fontSize: `22px`,
                      fontWeight: "500",
                      color: "#2252CC",
                      fontFamily: "monospace",
                      maxWidth: "307px",
                    }}
                  >
                    Creating Platform to Ease software creation.
                  </Box>
                </Box>
              </Grid>
              <Box width={"100%"} padding="0px 40px 80px 40px">
                <OurVision />
              </Box>
            </Grid>
          </Box>
        </Box>
      </Box>

      <Box
        ref={careerRef}
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
              bgcolor: "#F2F2F2",
              width: "100%",
              height: "100%",
              borderRadius: "12px",
            }}
          >
            <Box
              padding="80px 40px"
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
                    color: "#2252CC",
                    fontFamily: "monospace",
                  }}
                >
                  CAREERS
                </Typography>
              </Box>
            </Box>
            <Box padding="0px 40px 80px 40px">
              <Box
                sx={{
                  fontSize: `22px`,
                  fontWeight: "500",
                  color: "#2252CC",
                  fontFamily: "monospace",
                  maxWidth: "307px",
                }}
              >
                Work with Us:
              </Box>
            </Box>
            <Career />
          </Box>
        </Box>
      </Box>

      <Box
        ref={getInTouchRef}
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
              bgcolor: "#F2F2F2",
              width: "100%",
              height: "100%",
              borderRadius: "12px",
            }}
          >
            <Box
              padding="80px 40px"
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
                    color: "#2252CC",
                    fontFamily: "monospace",
                  }}
                >
                  GET IN TOUCH
                </Typography>
              </Box>
            </Box>
          

            <Contact />
          </Box>
        </Box>
      </Box>

    </>
  );
});

export default Home;
