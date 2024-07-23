import { products } from "../data/productData";
import Card from "./Card";

const ProductList = () => {
  return (
    <div className="product-list !mb-28">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
