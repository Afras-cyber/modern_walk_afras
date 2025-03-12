import ProductCard from "@/components/card";
import CategoryButton from "@/components/categoryButton";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4 py-6">
        <section className="mb-8">
          <h1 className="text-2xl font-bold mb-6">Flash Sale</h1>
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex space-x-10 w-max">
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
                  category: "womens",
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
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-[#0E0E0E]">Categories</h2>
          <div className="grid grid-cols-2 gap-4">
            <CategoryButton
              route="mens-clothing"
              label="Men's Clothing"
              bgColor="bg-[#2BD9AF] hover:bg-teal-600"
            />
            <CategoryButton
              route="womens-clothing"
              label="Women's Clothing"
              bgColor="bg-[#FF5E84] hover:bg-pink-600"
            />
          </div>
        </section>
      </div>
    </>
  );
}
