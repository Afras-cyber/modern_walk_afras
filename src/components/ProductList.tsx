"use client";
import { useEffect, useState } from "react";
import ProductCard from "./card";
import { getProducts } from "@/actions/products.action";
import { Products } from "../../type";

const ProductSkeleton = () => (
  <div className="flex flex-col bg-white rounded-2xl shadow-[4px_4px_6px_rgba(0,0,0,0)]  shadow-gray-400/50 w-80 lg:w-70 xl:w-70 2xl:w-86 animate-pulse">
    <div className="p-5 text-center">
      <div className="h-6 w-3/4 bg-gray-100 rounded mb-3 mx-auto"></div>
      <div className="h-40 w-[70%] bg-gray-100 rounded mx-auto"></div>
    </div>
    <div className="bg-white text-white p-6 rounded-2xl flex-1">
      <div className="h-6 w-1/2 bg-gray-100 rounded mx-auto mb-2"></div>
      <div className="h-4 w-3/4 bg-gray-100 rounded mx-auto"></div>
    </div>
  </div>
);

const ProductList = ({ category }: { category?: string }) => {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const products = await getProducts({
        category,
      });
      setProducts(products);
      setLoading(false);
    };
    fetchProducts();
  }, [category]);

  return (
    <>
      {loading
        ? Array.from({ length: 8 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))
        : products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              price={product.price}
              image={product.image}
              description={product.description}
              category={product.category}
            />
          ))}
    </>
  );
};

export default ProductList;
