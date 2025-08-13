import React, { useState } from "react";
import { Avatar } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Login.css";
import Registation from "../Registation/Registation";

import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Stack,
} from "@mui/material";

const Login = () => {
  const registationHandler = () => {
    console.log("this is registation");
    // <navigato/>
  };
  const LoginHandler=(e)=>{
    console.log("this is login",e.target.value);
  }
  return (
    <Container disableGutters maxWidth="xl" className={"mainpage"}>
      <Stack
        disableGutters maxWidth="xl"
        sx={{ width: "100%", height: "100%", }}
        direction={"row"}
        spacing={0}
      >
        <Box
          sx={{
            width: "50%",
            height: "100%",
            borderRadius: 1,
            bgcolor: "primary.dark",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5" // sample restaurant image
            alt="Restaurant"
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: 1,
              bgcolor: "primary",
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            height: "100%",
            borderRadius: 1,
            bgcolor: "primary.main",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        >
          <Box
            sx={{
              // bgcolor: "#2196f3",
              width: "50%",
              height: "20%",
              mt: "10%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 2,
              p: 2,
            }}
          >
            {/* Avatar */}
            <Avatar
              sx={{
                bgcolor: "secondary.main",
                width: 70,
                height: 70,
              }}
            >
              <AccountCircleIcon sx={{ fontSize: 50 }} />
            </Avatar>

            {/* Optional Text */}
            <Typography variant="h6" sx={{ mt: 1, color: "white" }}>
              Login
            </Typography>
          </Box>
          <Box
            sx={{
              // bgcolor: "#2196f3",
              width: "50%",
              height: "30%",
              // mt: "10%",
              borderRadius: 2,
              p: 3,
              display: "flex",
              flexDirection: "column",
              gap: 2, // space between elements
            }}
          >
            {/* Gmail Input */}
            <TextField
              label="Email Address"
              type="email"
              variant="outlined"
              placeholder="Enter your Gmail"
              fullWidth
              sx={{
                bgcolor: "white",
                borderRadius: 1,
                color: "black",
              }}
            />

            {/* Password Input */}
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              placeholder="Enter your password"
              fullWidth
              sx={{
                bgcolor: "white",
                borderRadius: 1,
              }}
            />

            {/* Login Button */}
            <Button
              variant="contained"
              color="secondary"
              onClick={LoginHandler}
              sx={{
                mt: 1,
                fontWeight: "bold",
              }}
            >
              Login
            </Button>
          </Box>
          <Box
            onClick={registationHandler}
            sx={{
              // bgcolor: "#2196f3",
              width: "50%",
              height: "15%",
              mt: "10%",
              borderRadius: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              "&:hover": {
                bgcolor: "#1976d2",
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              Create New Account
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};
export default Login;
