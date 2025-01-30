import { FC, useState, useEffect, ChangeEvent } from "react";

import { IProduct } from "./types";
import ProductItem from "./components/product-item";
import Shimmer from "./components/shimmer-skeleton";

// const for categories but initially value is without filter
const CATEGORIES = ["Men's clothing", "Women's clothing", "Jewelery", "Electronics"];

const ProductList: FC = (): JSX.Element => {
  const [products, setProducts] = useState<IProduct[] | []>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[] | []>([]);

  /**
   * Fetches products from FakeStoreAPI and updates the state of products and filtered products
   * with the fetched products.
   */
  async function fetchProducts() {
    await fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => {
        setProducts(json)
        setFilteredProducts(json)
      }); // set the products in state
  }

/**
 * Filters the list of products based on the selected category.
 * If "all" is selected, it resets to show all products.
 * 
 * @param {ChangeEvent<HTMLSelectElement>} e - The change event triggered by selecting a category.
 */

  function handleCategoryChange(e: ChangeEvent<HTMLSelectElement>) {
    if (e.target.value === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === e.target.value
      );
      setFilteredProducts(filtered);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  // if there are no products, show shimmer
  if (products?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Products
          </h2>
          {/* category filter dropdown */}
          <div className="flex items-end">
            <label htmlFor="category" className="py-1">
              Category:{" "}
            </label>
            <select onChange={handleCategoryChange} className="mx-2 border border-gray-300 px-3 py-1 rounded text-gray-900 bg-slate-100">
              <option value="all">All</option>
              {CATEGORIES.map((category) => (
                <option key={category} value={category.toLowerCase()}>{category}</option>
              ))}
            </select>
          </div>
        </div>
        {/* this is the list of products also smooth transition when product is filtered */}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 transition-discrete transition delay-150 duration-300 ease-in-out">
          {filteredProducts.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
