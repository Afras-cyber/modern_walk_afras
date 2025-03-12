import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Header from "@/components/Header";

export default function Home() {
  const ProductCard = ({ title, price, image, description, category }: any) => {
    return (
      <div className="flex flex-col bg-white  rounded-2xl shadow-xl w-1/4">
        <div className="p-5 text-center ">
          <h2 className="text-lg font-bold mb-3 text-[#0E0E0E]">{title}</h2>
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="mx-auto h-42 w-auto object-contain"
          />
        </div>
        <div
          className={`${
            category == "mens" ? "bg-[#2BD9AF]" : "bg-[#FF5E84]"
          } text-white p-3 rounded-2xl flex-1  `}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#0E42FD] mb-2">
              Rs {price}
            </h3>
            <p className="text-sm text-[#0E0E0E] ">{description}</p>
          </div>
        </div>
      </div>
     
    );
  };

  const CategoryButton = ({ label, bgColor }: any) => {
    return (
      <button
        className={`w-full py-4 text-white font-bold text-5xl rounded-2xl ${bgColor} h-60`}
      >
        {label}
      </button>
    );
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-6">
        {/* Flash Sale Section */}
        <section className="mb-8">
          <h1 className="text-2xl font-bold mb-6">Flash Sale</h1>
          <div className="flex  gap-6">
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
                title: "Womens Short Sleeve",
                price: "7.95",
                image: "/skirt.png",
                description:
                  "100% soft cotton, short sleeve shirt, perfect for casual wear",
                categroy: "womens",
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
                title: "Womens Short Sleeve",
                price: "7.95",
                image: "/skirt.png",
                description:
                  "100% soft cotton, short sleeve shirt, perfect for casual wear",
                category: "womens",
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

        {/* Categories Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-[#0E0E0E]">Categories</h2>
          <div className="grid grid-cols-2 gap-4">
            <CategoryButton
              label="Men's Clothing"
              bgColor="bg-[#2BD9AF] hover:bg-teal-600"
            />
            <CategoryButton
              label="Women's Clothing"
              bgColor="bg-[#FF5E84] hover:bg-pink-600"
            />
          </div>
        </section>
      </div>
    </>
  );
}
