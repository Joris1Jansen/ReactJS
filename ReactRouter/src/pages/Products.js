import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h1>The products page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A book</Link>
        </li>
        <li>
          <Link to="/products/p2">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">An online course</Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;
