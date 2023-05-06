import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Logo from "./logo.jpg";
import { Link } from "react-router-dom";

const pages = ["Home", "About"];
const settings = ["Contact Us"];

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    // setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    // setAnchorElUser(null);
  };

  return (
    <div>
      <AppBar
        position="static mb-5"
        sx={{ color: "#e88c44", backgroundColor: "#ffffff" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img src={Logo} style={{ height: "55px" }} />
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",

                fontWeight: 1000,
                letterSpacing: ".3rem",

                color: "inherit",
                textDecoration: "none",
                color: "#e88c44",
              }}
            >
              ROCK ASIA
            </Typography>

            <Box
              sx={{
                color: "#e88c44",
                flexGrow: 1,
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
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" sx={{ color: "#e88c44" }}>
                      <Link
                        style={{ textDecoration: "none", color: "#e88c44" }}
                        to={`/${page}`}
                      >
                        {page}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              ROCK ASIA
            </Typography>
          
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex",justifyContent:"center" ,alignItems :"center"  } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "#e88c44",display: "block" }}
                >
                  <Link
                    style={{ textDecoration: "none", color: "#e88c44" }}
                    to={`/${page}`}
                  >
                    {page}
                  </Link>
                </Button>
              ))}
              <Button
                id="basic-button"
                color="warning"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                Products
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <Link to="/marble" onClick={handleClose} style={{textDecoration:'none',color:'black'}}>
                  <MenuItem>Marble</MenuItem>
                </Link>
                <Link to="/granite" onClick={handleClose} style={{textDecoration:'none',color:'black'}}>
                  <MenuItem>Granite</MenuItem>
                </Link>
                <Link to="/Sandtone" onClick={handleClose} style={{textDecoration:'none',color:'black'}}>
                  <MenuItem>Sandstones</MenuItem>
                </Link>
                <Link to="/Sand" onClick={handleClose} style={{textDecoration:'none',color:'black'}}>
                  <MenuItem>Sand</MenuItem>
                </Link>
                <Link to="/Temple" onClick={handleClose} style={{textDecoration:'none',color:'black'}}>
                  <MenuItem>Temples</MenuItem>
                </Link>
                <Link to="/Articles" onClick={handleClose} style={{textDecoration:'none',color:'black'}}>
                  <MenuItem>Articles</MenuItem>
                </Link>
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              
              <Link
                        style={{ textDecoration: "none", color: "#e88c44" }}
                        to={"/contact us"}
                      ><Button variant="contained" color="warning">
 Contact Us
</Button>
                      </Link>
              {/* <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      <Link
                        style={{ textDecoration: "none", color: "#e88c44" }}
                        to={`/${setting}`}
                      >
                        {setting}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu> */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
