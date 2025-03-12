import ProductCard from "@/components/card";
import Image from "next/image";

const Category = () => {

  return (
    <div className="container mx-auto px-4 py-6">
      <section className="mb-8">
        <h1 className="text-2xl font-bold mb-6">{`Men's Clothing`}</h1>
        <div className="grid grid-cols-4 grid-flow-row  gap-10">
          {[
            {
              title: "Mens Cotton Jacket",
              price: "55.99",
              image: "/jacket.png",
              description:
                "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions",
              category: "mens",
            },

            {
              title: "Mens Cotton Jacket",
              price: "55.99",
              image: "/jacket.png",
              description:
                "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions",
              category: "mens",
            },

            {
              title: "Mens Cotton Jacket",
              price: "55.99",
              image: "/jacket.png",
              description:
                "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions",
              category: "mens",
            },

            {
              title: "Mens Cotton Jacket",
              price: "55.99",
              image: "/jacket.png",
              description:
                "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions",
              category: "mens",
            },

            {
              title: "Mens Cotton Jacket",
              price: "55.99",
              image: "/jacket.png",
              description:
                "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions",
              category: "mens",
            },

            {
              title: "Mens Cotton Jacket",
              price: "55.99",
              image: "/jacket.png",
              description:
                "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions",
              category: "mens",
            },
          ].map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              price={product.price}
              image={product.image}
              description={product.description}
              category={product.category}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Category;
