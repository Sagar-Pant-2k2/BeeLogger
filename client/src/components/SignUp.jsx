import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Logo from "./Logo";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default () => {
  const navigate = useNavigate();

  const url = "http://localhost:3000/user/register";

  const [data, setData] = React.useState({
    realName: "",
    userName: "",
    password: "",
  });
  const [warning, setWarning] = React.useState("");

  const handleSubmit = async (e) => {
    if (data.password && data.userName && data.realName) {
      e.preventDefault();
      try {
        const res = await axios.post(url, data);
        setWarning(() => "");
        localStorage.setItem("userName", data.userName);
        localStorage.setItem("password", data.password);
        navigate("/signin");
      } catch (err) {
        console.log("chud gaya hayee ", err);
        setWarning(() => err.response.data.message);
      }
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
            Sign Up
          </Typography>
          <div style={{ color: "red" }}>{warning}</div>
          <Box component="form">
            <TextField
              margin="normal"
              required
              fullWidth
              id="realName"
              label="Real Name"
              name="realName"
              value={data.realName}
              autoFocus
              onChange={(e) => {
                setData((data) => {
                  return { ...data, realName: e.target.value };
                });
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="userName"
              label="User Name"
              name="userName"
              value={data.userName}
              onChange={(e) => {
                setData((data) => {
                  return { ...data, userName: e.target.value };
                });
              }}
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
              onChange={(e) => {
                setData((data) => {
                  return { ...data, password: e.target.value };
                });
              }}
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
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/signin">{"already have account? Sign In"}</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
