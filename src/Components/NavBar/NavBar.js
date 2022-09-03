import React, { useState } from "react";
import Logo from "../../Images/Logo.jpg";
import NavBarImage from "../../Images/navBar-logo.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
} from "@mui/material";
import { Box } from "@mui/system";

const pages = ["PATIENTS", "CALENDER", "USERS", "BILLING"];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", height: "70px", marginBottom: "15px" }}
      >
        <Toolbar>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "5px",
                width: "50%",
              }}
            >
              <Box sx={{ marginRight: "50px", display: "flex" }}>
                <Box>
                  {/* MenuIcon */}
                  <IconButton
                    sx={{ display: { xs: "flex", md: "none" } }}
                    onClick={handleOpenNavMenu}
                  >
                    <MenuIcon
                      sx={{ color: "black", height: "40px", width: "40px" }}
                    />
                  </IconButton>
                  {/* Toggling MenuIcon in Small Screens */}
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
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                {/* Logo */}
                <Box>
                  <img src={Logo} alt="Logo" sx={{ width: "40px" }} />
                </Box>
              </Box>
              {/* NavItems */}
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  fontFamily: "Robot",
                  marginLeft: "15px",
                }}
              >
                <MenuItem
                  sx={{
                    color: "white",
                    backgroundColor: "#42a5f5",
                    fontSize: "14px",
                    fontWeight: 300,
                    paddingY: "25px",
                  }}
                >
                  PATIENTS
                </MenuItem>
                <MenuItem
                  sx={{ color: "black", fontSize: "14px", fontWeight: 300 }}
                >
                  CALENDER
                </MenuItem>
                <MenuItem
                  sx={{ color: "black", fontSize: "14px", fontWeight: 300 }}
                >
                  USERS
                </MenuItem>
                <MenuItem
                  sx={{ color: "black", fontSize: "14px", fontWeight: 300 }}
                >
                  BILLING
                </MenuItem>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: "auto",
                justifyContent: "flex-end",
                width: "50%",
              }}
            >
              {/* Notification Icon Container */}
              <Box sx={{ margin: "10px" }}>
                <NotificationsIcon
                  style={{ fontSize: "34px", color: "black" }}
                />
                {/* <Typography style={{backgroundColor: "red", height: "10px", width: "10px", borderRadius: "5px", }}></Typography> */}
              </Box>
              {/* Doctors Profile Image Container */}
              <Box>
                <img
                  src={NavBarImage}
                  alt="Docotrs Logo"
                  style={{ width: "50px", borderRadius: "25px" }}
                />
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
