import Image from "next/image";

const ProductCard = ({ title, price, image, description, category }: any) => {
    return (
      <div className="flex flex-col bg-white  rounded-2xl shadow-xl w-70">
        <div className="p-5 text-center ">
          <h2 className="text-lg font-bold mb-3 text-[#0E0E0E]">{title}</h2>
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            // className="mx-auto h-42 w-auto object-contain"
               className="mx-auto h-40 w-[70%]  object-cover"
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

  export default ProductCard