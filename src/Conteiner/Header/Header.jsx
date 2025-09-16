import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import { Box, Typography, Avatar, Button } from "@mui/material";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

const Header = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 1.5,
        px: 3,
        bgcolor: "#ffffff", // White background
        boxShadow: "0 3px 6px rgba(0,0,0,0.1)", // Soft shadow
      }}
    >
      {/* Logo Section */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "#1976d2" }} // Blue text
        >
          suraj doiphode
        </Typography>
      </Box>

      {/* Navigation Section */}
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          component={Link}
          to="/Homepage"
          sx={{
            fontWeight: "600",
            color: "#333", // Dark gray
            textTransform: "none",
            "&:hover": { color: "#1976d2" }, // Hover blue
          }}
        >
          Home
        </Button>
        <Button
          component={Link}
          to="/AddTask"
          sx={{
            fontWeight: "600",
            color: "#333",
            textTransform: "none",
            "&:hover": { color: "#1976d2" },
          }}
        >
          Add-Task
        </Button>
        <Button
          component={Link}
          to="/Dashboard"
          sx={{
            fontWeight: "600",
            color: "#333",
            textTransform: "none",
            "&:hover": { color: "#1976d2" },
          }}
        >
          Dashboard
        </Button>
      </Box>

      {/* Profile Avatar */}
      <Box>
        <Avatar
          alt="Profile"
          src="/broken-image.jpg"
          sx={{
            bgcolor: "#1976d2", // Blue background
            width: 40,
            height: 40,
            fontWeight: "bold",
          }}
        >
          S
        </Avatar>
      </Box>
    </Container>
  );
};

export default Header;
