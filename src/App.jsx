import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage.jsx";
import Product from "./Pages/Product/Product.jsx";
import Myprofile from "./Pages/Myprofile/Myprofile.jsx";
// import Button from "./Component/Button/Button.jsx";
import Header from "./Conteiner/Header/Header.jsx";
import Login from "./Pages/Loginpage/Login.jsx";
import styles from "./App.module.css";
import Container from "@mui/material/Container";
import Loginpage from "./Pages/Loginpage/Login.jsx";
import { Box } from "@mui/material";
function App() {
  return (
    <Container>
        <Header/>
      <Box   className={styles['body-aria']}>
        
      <Routes>
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/product" element={<Product/>} />
        <Route path="/Myprofile" element={<Myprofile/>} />
        <Route path="/*" element={<Login/>}/>
        {/* <Route path="/product" element={<Product/>} /> */}
        {/* <Route path="/product" element={<Product/>} /> */}
      </Routes>
      </Box>    
      {/* <Login/> */}
    </Container>
  );
}

export default App;
