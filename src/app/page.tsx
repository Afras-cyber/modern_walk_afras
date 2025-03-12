import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Header from "@/components/Header";

export default function Home() {
  const ProductCard = ({ title, price, image, description }: any) => {
    return (
      <Card className="overflow-hidden shadow-lg rounded-xl">
        <CardHeader className="p-4 bg-white text-center">
          <h2 className="text-lg font-bold mb-3">{title}</h2>
          <Image 
            src={image} 
            alt={title} 
            width={200} 
            height={200} 
            className="mx-auto h-48 w-auto object-contain"
          />
        </CardHeader>
        <CardContent className="bg-teal-500 text-white p-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-700 mb-3">
              Rs {price}
            </h3>
            <p className="text-sm">
              {description}
            </p>
          </div>
        </CardContent>
      </Card>
    );
  };

  const CategoryButton = ({ label, bgColor }: any) => {
    return (
      <button 
        className={`w-full py-4 text-white font-bold text-lg rounded-lg ${bgColor}`}
      >
        {label}
      </button>
    );
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <Header />

      {/* Flash Sale Section */}
      <section className="mb-8">
        <h1 className="text-2xl font-bold mb-6">Flash Sale</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { 
              title: "Mens Cotton Jacket", 
              price: "55.99", 
              image: "/jacket.png", 
              description: "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions" 
            },
            { 
              title: "Womens Short Sleeve", 
              price: "7.95", 
              image: "/womens-tshirt.png", 
              description: "100% soft cotton, short sleeve shirt, perfect for casual wear" 
            }
          ].map((product, index) => (
            <ProductCard 
              key={index} 
              title={product.title}
              price={product.price}
              image={product.image}
              description={product.description}
            />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Categories</h2>
        <div className="grid grid-cols-2 gap-4">
          <CategoryButton 
            label="Men's Clothing" 
            bgColor="bg-teal-500 hover:bg-teal-600"
          />
          <CategoryButton 
            label="Women's Clothing" 
            bgColor="bg-pink-500 hover:bg-pink-600"
          />
        </div>
      </section>
    </div>
  );
}