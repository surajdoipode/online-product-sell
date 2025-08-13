import styles from "./ProductCard.module.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button1 from "../Button/Button1.jsx";
import AddCard from "../AddCard/AddCard.jsx";
const productCard = ({ data }) => {
  console.log(data);
  const addCardHandler = () => {
    alert("not database conection");
    console.log("button click");
    return (<>
        <AddCard/>
      </>
    );
  };
  return (
    <>
      {/* main conteinner (screen) */}
      <Container maxWidth="xl">
        {/* product header */}

        {/* product cards */}
        {/* <Container maxWidth="xl" sx={{ border: "1px solid red" }}> */}
        <Card className={styles["product-card"]}>
          <Typography
            variant="h6"
            component="div"
            className={styles["headr-section"]}
          >
            <b>{data?.title}</b>
          </Typography>
          {/* image box */}
          <Box className={styles["img-box"]}>
            <img src={data?.image} alt="img" className={styles["img"]} />
          </Box>
          <Box className={styles["price-box"]}>
            <Typography variant="h5">
              <b>Catagery</b> {data?.category}
            </Typography>
            <Typography variant="h5">
              <b>RS </b> {data?.price}
            </Typography>
          </Box>
          <Box className={styles["btn-bind"]}>
            <Button1 lable="Add Card" func={addCardHandler} />
          </Box>
        </Card>
      </Container>
      {/* </Container> */}
    </>
  );
};
export default productCard;
// import styles from "./ProductCard.module.css";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import Button1 from "../Button/Button1.jsx";
// import { useState } from "react";

// const ProductCard = ({ data }) => {
//   const [showAddCard, setShowAddCard] = useState(false);

//   const addCardHandler = () => {
//     alert("not database connection");
//     setShowAddCard(true);
//   };

//   return (
//     <Container maxWidth="xl">
//       <Card
//         className={styles["product-card"]}
//         sx={{
//           p: 2,
//           m: 2,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           maxWidth: { xs: "100%", sm: 350 },
//           width: "100%",
//         }}
//       >
//         <Typography
//           variant="h6"
//           component="div"
//           className={styles["headr-section"]}
//           sx={{ textAlign: "center" }}
//         >
//           <b>{data?.title}</b>
//         </Typography>

//         {/* image box */}
//         <Box
//           className={styles["img-box"]}
//           sx={{
//             width: "100%",
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
//           <img
//             src={data?.image}
//             alt="img"
//             style={{
//               width: "100%",
//               maxHeight: 200,
//               objectFit: "contain",
//             }}
//           />
//         </Box>

//         <Box
//           className={styles["price-box"]}
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             width: "100%",
//             mt: 2,
//           }}
//         >
//           <Typography variant="body1">
//             <b>Category:</b> {data?.category}
//           </Typography>
//           <Typography variant="body1">
//             <b>₹</b> {data?.price}
//           </Typography>
//         </Box>

//         <Box className={styles["btn-bind"]} sx={{ mt: 2, width: "100%" }}>
//           <Button1 lable="Add Card" func={addCardHandler} />
//         </Box>

//         {showAddCard && (
//           <Box sx={{ mt: 2, width: "100%" }}>
//             {/* Your AddCard component here */}
//             {/* <AddCard /> */}
//           </Box>
//         )}
//       </Card>
//     </Container>
//   );
// };

// export default ProductCard;
