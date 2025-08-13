import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Container  from "@mui/material/Container"; //mui import container
import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
// import { ShoppingCartIcon } from "@mui/icons-material";
const Header = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{ border: "2px solid red ", height: "3rem ", bgcolor: "red" }}
      className={styles["HeaderMain"]}
    >
      {/* this is logo section */}
      <Box className={styles["left-box"]}>
      logo
      </Box>

      {/* this is btn section */}
      <Box className={styles["right-box"]}>
        <button>
          <Link className={styles["my-link"]} to="/Homepage">
            Home
          </Link>
        </button>
        <button>
          <Link className={styles["my-link"]} to="/Product">
            Product
          </Link>
        </button>
        <button>
          <Link className={styles["my-link"]} to="/Myprofile">
            Service
          </Link>
            
        </button>
      </Box>
      <Box className={styles["profile-box"]}>
        <Typography variant="h5">
          <Avatar
            sx={{ bgcolor: "deepOrange[500] " }}
            alt="Remy Sharp"
            src="/broken-image.jpg"
          >
            S
          </Avatar>
        </Typography>
      </Box>
    </Container>
  );
};
export default Header;
