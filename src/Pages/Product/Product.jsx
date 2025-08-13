import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../Component/ProductCard/productCard";
import { Box, Typography } from "@mui/material";
const product = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        // console.log(res.data);
        setproducts(res.data);
      })

      .catch((err) => {
        console.error("Error fetching:", err);
      });

    // console.log("users data", products);
  }, []);

  return (
    <>
      <Typography>this product page</Typography>
      <Box>
        {products.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </Box>
    </>
  );
};
export default product;
