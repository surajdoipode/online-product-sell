import { Avatar, Container, Box, TextField, Button, Typography, Paper } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // error states
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validate = () => {
    let isValid = true;

    // Email validation
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Enter a valid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Password validation
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const loginHandler = () => {
    if (validate()) {
      console.log("Login Success:", { email, password });
      navigate("/Dashboard");
    } else {
      console.log("Validation Failed");
    }
  };

  const handleRegistration = () => {
    navigate("/Registation");
  };

  return (
    <Container disableGutters maxWidth="xl" sx={{ height: "100vh" }}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={8}
          sx={{
            width: "100%",
            maxWidth: 400,
            p: 4,
            borderRadius: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
            bgcolor: "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(8px)",
          }}
        >
          {/* Avatar */}
          <Avatar sx={{ bgcolor: "primary.main", width: 70, height: 70 }}>
            <AccountCircleIcon sx={{ fontSize: 50 }} />
          </Avatar>

          {/* Title */}
          <Typography variant="h5" fontWeight="bold" color="primary.main">
            Welcome Back
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            Please log in to continue
          </Typography>

          {/* Form */}
          <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Email Address"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!emailError}
              helperText={emailError}
              sx={{ bgcolor: "white", borderRadius: 1 }}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!passwordError}
              helperText={passwordError}
              sx={{ bgcolor: "white", borderRadius: 1 }}
            />

            {/* Login Button */}
            <Button
              variant="contained"
              fullWidth
              onClick={loginHandler}
              sx={{
                bgcolor: "primary.main",
                fontWeight: "bold",
                borderRadius: 2,
                "&:hover": { bgcolor: "primary.dark" },
              }}
            >
              Login
            </Button>
          </Box>

          {/* Register Link */}
          <Typography variant="body2" color="text.secondary">
            Don’t have an account?{" "}
            <Button onClick={handleRegistration} sx={{ color: "primary.main", fontWeight: "bold" }}>
              Create New Account
            </Button>
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login;
