"use client";
import Header from "@/components/Header";
import ProductList from "@/components/ProductList";
import { useParams, useRouter, notFound } from "next/navigation";
import { useEffect, useState } from "react";

const Category = () => {
  const [showName, setShowName] = useState<string | null>(null);
  const { category } = useParams();
  const router = useRouter();

  useEffect(() => {
    if (category === "mens-clothing") {
      setShowName("Men's Clothing");
    } else if (category === "womens-clothing") {
      setShowName("Women's Clothing");
    } else {
      notFound();
    }
  }, [category, router]);

  if (!showName) return null;

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-6">
        <section className="mb-8">
          <h1 className="text-2xl font-bold mb-6">{showName}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-8 ">
            <ProductList priceSort="desc" category={showName.toLowerCase()} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Category;
