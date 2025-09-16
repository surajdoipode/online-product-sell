import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage.jsx";
import Product from "./Pages/Product/Product.jsx";
import Header from "./Conteiner/Header/Header.jsx";
import Login from "./Pages/Loginpage/Login.jsx";
import styles from "./App.module.css";
import Container from "@mui/material/Container";
import Registation from "./Pages/Registation/Registation.jsx";
import { Box } from "@mui/material";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import AddTask from "./Pages/AddTask/AddTask.jsx";
import { useState } from "react";
function App() {
  const [passWordstore, setPassWordStore] = useState("this is the password state");
  return (
    <Container>
      <Header />
      <Box className={styles["body-aria"]}>
        <Routes>
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/Dashboard" element={<Dashboard setPassWordStore={setPassWordStore} />} />
          <Route path="/" element={<Login />} />
          <Route path="/Registation" element={<Registation />} />
          <Route path="/AddTask" element={<AddTask />} />
          <Route path="/Loginpage" element={<Login />} />
        </Routes>
      </Box>
      {/* <Login/> */}
    </Container>
  );
}

export default App;
