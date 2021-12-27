import { useParams } from "react-router-dom";

export const ProductDetail = (props) => {
  const params = useParams();

  return (
    <section>
      <h2>Product Detail</h2>
      <p>{params.id}</p>
    </section>
  );
};
