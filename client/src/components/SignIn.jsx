import * as React from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, redirect } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Logo from "./Logo";
import axios from "axios";
import { Auth } from "../context/Auth";

const url = "http://localhost:3000/user/login";

const defaultTheme = createTheme();

export default function SignIn() {
  const [data, setData] = React.useState({
    userName: localStorage.getItem("userName") || "",
    password: localStorage.getItem("password") || "",
  });

  const [warning, setWarning] = React.useState("");
  const {setLoggedIn} = React.useContext(Auth);
  const {setProfile} = React.useContext(Auth);
  const handleSubmit = async (e) => {
    if (data.password && data.userName) {
      e.preventDefault();
      try {
        const res = await axios.post(url, data);
        setWarning(() => "");
        console.log(res.data.userData);
        localStorage.setItem("token", res.data.token);
        setLoggedIn(()=>true);
        setProfile(res.data.userData);
      } catch (err) {
        setWarning(() => err.response.data.message);
      }
    } else {
      setWarning(() => "not enough info");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Logo />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <div style={{ color: "red" }}>{warning}</div>
          <Box component="form">
            <TextField
              margin="normal"
              required
              fullWidth
              id="userName"
              label="User Name"
              name="userName"
              autoFocus
              value={data.userName}
              onChange={(e) =>
                setData((data) => {
                  return { ...data, userName: e.target.value };
                })
              }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={data.password}
              autoComplete="current-password"
              onChange={(e) =>
                setData((data) => {
                  return { ...data, password: e.target.value };
                })
              }
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
