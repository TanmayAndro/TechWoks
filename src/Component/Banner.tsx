import { Box, Typography } from '@mui/material'
import React from 'react'
import redFaceImage from "../assets/images/redFaceEmoji.avif";
import greenFaceImage from "../assets/images/greenFaceEmoji.avif";
import yellowFaceImage from "../assets/images/yellowFaceEmoji.avif";
import pc from "../assets/images/pc.avif";

function Banner({scalingFactor,scrollbarWidth,computeFontSize}:any) {

  return (
    <Box sx={{ position: "relative" }}>
                  <img
                    src="https://static.wixstatic.com/media/c837a6_ac0f7274085544bb80141c9fc83dccba~mv2.jpg"
                    alt="Masked"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      maskImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 674 360" height="360" width="674"%3E%3Cg%3E%3Cpath d="M639 0H129c-19.33 0-35 15.67-35 35v38c0 19.33-15.67 35-35 35H35c-19.33 0-35 15.67-35 35v182c0 19.33 15.67 35 35 35h534c19.33 0 35-15.67 35-35v-38c0-19.33 15.67-35 35-35s35-15.67 35-35V35c0-19.33-15.67-35-35-35" fill="%23000000"/%3E%3C/g%3E%3C/svg%3E')`,
                      maskPosition: "center",
                      maskRepeat: "no-repeat",
                      maskSize: "90% 90%",
                      WebkitMaskImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 674 360" height="360" width="674"%3E%3Cg%3E%3Cpath d="M639 0H129c-19.33 0-35 15.67-35 35v38c0 19.33-15.67 35-35 35H35c-19.33 0-35 15.67-35 35v182c0 19.33 15.67 35 35 35h534c19.33 0 35-15.67 35-35v-38c0-19.33 15.67-35 35-35s35-15.67 35-35V35c0-19.33-15.67-35-35-35" fill="%23000000"/%3E%3C/g%3E%3C/svg%3E')`,
                      WebkitMaskPosition: "center",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskSize: "90% 90%",
                      marginTop: "36px",
                    }}
                  />
                  <Box sx={{ position: "absolute", top: "15%", left: "21%" }}>
                    <Typography
                      sx={{
                        fontSize: `${computeFontSize(
                          scalingFactor,
                          scrollbarWidth,
                          42,
                          180,
                          0.5,
                          0.0539063
                        )}px`,
                        color: "#F2F2F2",
                      }}
                    >
                      Crafting Exceptional
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: `${computeFontSize(
                          scalingFactor,
                          scrollbarWidth,
                          42,
                          180,
                          0.5,
                          0.0539063
                        )}px`,
                        color: "#F2F2F2",
                      }}
                    >
                      Software Solutions
                    </Typography>
                  </Box>
    
                  <Box
                    sx={{
                      position: "absolute",
                      top: "55%",
                      left: "9%",
                      maxWidth: "388px",
                    }}
                  >
                    <Box sx={{ display: "flex", gap: "24px", marginBottom: "8px" }}>
                      <Box>
                        <img
                          width={48}
                          height={48.28}
                          src={redFaceImage}
                          alt="techWoks"
                        />
                      </Box>
                      <Box>
                        <img
                          width={48}
                          height={48.28}
                          src={greenFaceImage}
                          alt="techWoks"
                        />
                      </Box>
                      <Box>
                        <img
                          width={48}
                          height={48.28}
                          src={yellowFaceImage}
                          alt="techWoks"
                        />
                      </Box>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: `${computeFontSize(
                          scalingFactor,
                          scrollbarWidth,
                          12,
                          180,
                          0.5,
                          0.0159063
                        )}px`,
                        color: "#F2F2F2",
                        fontFamily: "monospace",
                      }}
                    >
                      We help businesses achieve their goals with innovative and
                      reliable software development.
                    </Typography>
                  </Box>
    
                  <Box
                    sx={{
                      position: "absolute",
                      top: "60%",
                      left: "70%",
                      maxWidth: "388px",
                    }}
                  >
                    <Box>
                      <img width={287} height={294} src={pc} alt="techWoks" />
                    </Box>
                  </Box>
                </Box>
  )
}

export default Banner