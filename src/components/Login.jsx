import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../reducers/user";
import axios from "axios";
import { Typography, Button, FormControl, ListItem } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { red, green, blue } from "@mui/material/colors";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import { fontGrid } from "@mui/material/styles/cssUtils";

const url = "https://localhost:7105/api/Login";

const Login = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState(false);

  console.log("Redux store email: ", Email);
  console.log("Redux store password: ", Password);

  const Root = styled("div")(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      // backgroundColor: red[500],
      marginTop: -30,
      // margin: 20,
    },
    [theme.breakpoints.up("md")]: {
      backgroundColor: blue[500],
    },
  }));

  const theme = createTheme({
    htmlFontSize: 10,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const login = await axios.post(
        url,
        { Email, Password },
        { headers: { "Content-Type": "application/json" } }
      );
      const response = login.data;
      console.log("Login response: ", response);
      if (response) {
        dispatch(
          setUser({
            name: response.name,
          })
        );
        navigate("/layout/dashboard");
      } else {
        console.log("Email or password are not correct");
        setError(true);
      }
    } catch (error) {
      console.error("Error during login: ", error);
      setError(true);
    }
  };

  useEffect(() => {});

  return (
    <Box
      sx={{
        backgroundImage:
          'url("https://akriviahcm.com/blog/wp-content/uploads/2024/01/features-of-employee-management-system.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Root>
        <ThemeProvider theme={theme}>
          <Typography
            variant="h4"
            color="whitesmoke"
            sx={{
              mb: 1,
              textAlign: "center",
              display: "flex",
              fontWeight: "50px",
            }}
            fontSize={50}
          >
            Employee Management
          </Typography>
        </ThemeProvider>
      </Root>

      <div>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            backgroundColor: "white", // To make the form more visible
            borderRadius: 2,
            padding: 4,
            boxShadow: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
            Login
          </Typography>
          <TextField
            fullWidth
            name="username"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="UserName"
            type="text"
            sx={{ padding: 4 }}
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password" // Changed to password type
            variant="outlined"
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            fullWidth
          >
            Login
          </Button>
          {error && (
            <Typography color="error" variant="body2" sx={{ mt: 2 }}>
              Incorrect email or password
            </Typography>
          )}
          <Button
            //component={Link} // Assuming you're using react-router-dom's Link
            to="/signup"
            sx={{ mt: 2 }}
            fullWidth
          >
            SignUp
          </Button>
        </Box>
      </div>
    </Box>
  );
};

export default Login;
