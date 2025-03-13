import CategoryButton from "@/components/categoryButton";
import Header from "@/components/Header";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-6">
        <section className="mb-4">
          <h1 className="text-2xl font-bold mb-6">Flash Sale</h1>
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex space-x-10 w-max">
              <ProductList  />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-[#0E0E0E]">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
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
