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
                  "id": 1,
                  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                  "price": 109.95,
                  "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                  "category": "men's clothing",
                  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                  "rating": {
                    "rate": 3.9,
                    "count": 120
                  }
                },
                {
                  "id": 2,
                  "title": "Mens Casual Premium Slim Fit T-Shirts ",
                  "price": 22.3,
                  "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                  "category": "men's clothing",
                  "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                  "rating": {
                    "rate": 4.1,
                    "count": 259
                  }
                },
                {
                  "id": 3,
                  "title": "Mens Cotton Jacket",
                  "price": 55.99,
                  "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
                  "category": "men's clothing",
                  "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
                  "rating": {
                    "rate": 4.7,
                    "count": 500
                  }
                },
                {
                  "id": 4,
                  "title": "Mens Casual Slim Fit",
                  "price": 15.99,
                  "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
                  "category": "men's clothing",
                  "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
                  "rating": {
                    "rate": 2.1,
                    "count": 430
                  }
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
          <div className="grid grid-cols-2 gap-10 ">
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
