"use server";

import { Products } from "../../type";

// NEED TO SET ON .env.local file
const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "https://fakestoreapi.com";

export const getProducts = async ({
  category = "all",
}: {
  priceSort?: string;
  category?: string;
}): Promise<Products[]> => {
  try {
    const res = await fetch(`${SERVER_URL}/products`);
    if (!res.ok) {
      throw new Error(`Failed to fetch products, status: ${res.status}`);
    }

    let products: Products[] = await res.json();

    if (category === "men's clothing" || category === "women's clothing") {
      products = products.filter((product) => product.category === category);
    } else {
      products = products.filter(
        (product) =>
          product.category === "men's clothing" ||
          product.category === "women's clothing"
      );
    }
    // latest to oldest
    products.sort((a, b) => b.price - a.price);

    return products;
  } catch (error) {
    throw new Error(`Failed to fetch products: ${error}`);
  }
};
