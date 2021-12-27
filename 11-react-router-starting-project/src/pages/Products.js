import { Link } from "react-router-dom";

export const Products = (props) => {
  return (
    <section>
      <h2>Products</h2>
      <ul>
        <li>
          <Link to="/products/1">A Book</Link>
        </li>
        <li>
          <Link to="/products/2">A House</Link>
        </li>
        <li>
          <Link to="/products/3">A Phone</Link>
        </li>
      </ul>
    </section>
  );
};
