import { Box, Container, Typography, TextField, Button, Avatar } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  // validation function
  const validateForm = () => {
    let formErrors = {};
    if (!name.trim()) formErrors.name = "Name is required";
    if (!email.trim()) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email is invalid";
    }
    if (!password) formErrors.password = "Password is required";
    else if (password.length < 6)
      formErrors.password = "Password must be at least 6 characters";

    if (!confirmPassword)
      formErrors.confirmPassword = "Confirm Password is required";
    else if (password !== confirmPassword)
      formErrors.confirmPassword = "Passwords do not match";

    return formErrors;
  };

  const submitForm = () => {
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("name:", name);
      console.log("email:", email);
      console.log("password:", password);
      console.log("confirmPassword:", confirmPassword);
      alert("Registration successful ✅");
      navigate("/");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 6,
          bgcolor: "#fff",
          boxShadow: 4,
          borderRadius: "1rem",
          p: 4,
          textAlign: "center",
        }}
      >
        {/* Avatar */}
        <Avatar
          src="/img/login.jpg"
          sx={{
            width: 80,
            height: 80,
            margin: "0 auto",
            mb: 2,
            boxShadow: 3,
          }}
        />

        {/* Title */}
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", mb: 3, color: "#1976d2" }}
        >
          Create Your Account
        </Typography>

        {/* Input Fields */}
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={!!errors.name}
          helperText={errors.name}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!errors.password}
          helperText={errors.password}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          fullWidth
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
          sx={{ mb: 3 }}
        />

        {/* Button */}
        <Button
          onClick={submitForm}
          fullWidth
          variant="contained"
          sx={{
            py: 1.5,
            borderRadius: "0.8rem",
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: "bold",
            bgcolor: "#1976d2",
            "&:hover": {
              bgcolor: "#125aa2",
            },
          }}
        >
          Register 
        </Button>

        {/* Footer */}
        <Typography sx={{ mt: 3, fontSize: "0.9rem", color: "gray" }}>
          Already have an account?{" "}
          <span
            style={{
              color: "#1976d2",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={() => navigate("/Loginpage")}
          >
            Login here
          </span>
        </Typography>
      </Box>
    </Container>
  );
};
export default Registration;
