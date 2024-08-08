import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        py: 3,
        px: 2,
        mt: "auto",
        textAlign: "center",
        borderRadius: "8px",
        boxShadow: 1,

      }}
    >
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={4} textAlign={{ xs: "center", md: "left" }}>
          <img
            src="https://cloudseatech.co/wp-content/uploads/2024/01/Cloudsea-logo.png"
            className="w-28 md:w-30"
            alt="CloudSea Tech"
            style={{ width: "100px", marginBottom: "8px" }}
          />
          <Typography variant="body2" color="text.secondary">
            © 2023 CloudSea Tech™. All Rights Reserved.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} textAlign="center">
          <Typography variant="h6" component="div" gutterBottom>
            Quick Links
          </Typography>
          <Box>
            <Link
              to="/layout/aboutus"
              style={{
                marginRight: "16px",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              About
            </Link>
            <Link
              to="#"
              style={{
                marginRight: "16px",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              style={{
                marginRight: "16px",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              Licensing
            </Link>
            <Link
              to="/layout/contactus"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Contact
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} textAlign={{ xs: "center", md: "right" }}>
          <Typography variant="h6" component="div" gutterBottom>
            Follow Us
          </Typography>
          <Box>
            <IconButton href="#" color="inherit" aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton href="#" color="inherit" aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
            <IconButton href="#" color="inherit" aria-label="LinkedIn">
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
