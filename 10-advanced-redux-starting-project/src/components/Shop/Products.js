import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  { id: "p1", price: 5, title: "Book", description: "A wonderful book" },
  { id: "p2", price: 6, title: "Car", description: "A wonderful car" },
  { id: "p3", price: 7, title: "Laptop", description: "A wonderful laptop" },
  { id: "p4", price: 8, title: "Phone", description: "A wonderful phone" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
