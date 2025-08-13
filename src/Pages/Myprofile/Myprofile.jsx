import { useParams } from "react-router-dom";

const Myprofile = () => {
  const {product_id}= useParams(25);
  console.log(product_id)
  return (
     <>
      <h1>Myprofile page {product_id}</h1>
    </>
  );
};
export default Myprofile;
