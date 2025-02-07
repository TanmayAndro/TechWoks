import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../assets/images/logo.avif";
import { createTheme, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";

const pages = [{page:"Services",link:'/service'}, {page:"Case Studies",link:'/casestudies'}, {page:"Careers",link:'/careers'}];
const settings = [{page:"Services",link:'/service'}, {page:"Case Studies",link:'/casestudies'}, {page:"Careers",link:'/careers'}, {page:"Get In Touch",link:'/getintouch'}];

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 790,
      lg: 1200,
      xl: 1536,
    },
  },
});

function ResponsiveAppBar({handleOpenPage}:any) {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > prevScrollPos && currentScrollPos > 300) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

const handleGetInTouch = () => {
console.log('Get In Touch')
} 

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        sx={{
          bgcolor: "transparent",
          boxShadow: "none",
          marginTop: "20px",
          paddingLeft: "50px",
          paddingRight: "50px",
          transition: "top 0.3s linear",
          top: scrollingDown ? "-80px" : "0",
          zIndex: 1201,
        }}
        position="fixed"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
              <img src={Logo} alt="TechWorks" />
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontSize: "20px",
                fontWeight: "500px",
                fontFamily: "monospace",
                letterSpacing: " -0.06em",
                color: "#2252cc",
                textDecoration: "none",
              }}
            >
              TechWoks
            </Typography>

            <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
              <img src={Logo} alt="TechWorks" />
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontSize: "20px",
                fontWeight: "500px",
                fontFamily: "monospace",
                letterSpacing: " -0.06em",
                color: "#2252cc",
                textDecoration: "none",
              }}
            >
              TechWoks
            </Typography>

            <Box
              sx={{
                flexGrow: { xs: 0, md: 1 },
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{
                  bgcolor: "#2252cc",
                  "&:hover": {
                    bgcolor: "#1a439d",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {settings.map((data,index) => (
                  <MenuItem key={index} onClick={()=>handleOpenPage(data.link)}>
                    <Typography sx={{ textAlign: "center" }}>{data.page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "space-evenly",
              }}
            >
              {pages.map((data,index) => (
                <Button
                  key={index}
                  onClick={()=>handleOpenPage(data.link)}
                  sx={{
                    my: 2,
                    color: "#2252cc",
                    fontFamily: "madefor-text",
                    fontSize: "17px",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    letterSpacing: "0em",
                    lineHeight: "1.4em",
                    textTransform: "none",
                    display: "block",
                  }}
                >
                  {data.page}
                </Button>
              ))}
            </Box>
            <Box
              sx={{ flexGrow: 0, display: { xs: "none", md: "flex" }, mr: 1 }}
            >
              <Button
                sx={{
                  height: "32px",
                  padding: "6px 16px",
                  textTransform: "none",
                  backgroundColor: "#385ECB",
                  borderRadius: "12px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "8px",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      height: "10px",
                      width: "10px",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "2px",
                    }}
                  ></Box>
                  <Box>
                    <Typography
                      onClick={()=>{handleOpenPage('/getintouch')}}
                      sx={{
                        fontFamily: "monospace",
                        fontSize: "16px",
                        letterSpacing: "0em",
                        color: "#F2F2F2",
                      }}
                    >
                      Get In Touch
                    </Typography>
                  </Box>
                </Box>
              </Button>
              {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;
