import { FC, useState, useEffect } from "react";

import { IProduct } from "./types";
import ProductItem from "./components/product-item";
import Shimmer from "./components/shimmer-skeleton";

const ProductList: FC = () => {
  const [products, setProducts] = useState<IProduct[] | []>([]);

  async function fetchProducts() {
    await fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setProducts(json)); // set the products in state
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (products?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
