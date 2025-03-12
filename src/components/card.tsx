import Image from "next/image";

const ProductCard = ({ title, price, image, description, category }: any) => {
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-xl w-full sm:w-80 lg:w-70 xl:w-70 2xl:w-86">
      <div className="p-5 text-center">
        <h2 className="text-lg font-bold mb-3 text-[#0E0E0E] truncate">
          {title}
        </h2>
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
           className="mx-auto h-36 sm:h-40 lg:h-44 w-[80%] sm:w-[70%] object-cover rounded-xl"
          // className="mx-auto h-40 xl:h-40 2xl:h-46 w-[70%] 2xl:w-[60%] object-cover"
        />
      </div>
      <div
        className={`${
          category === "men's clothing" ? "bg-[#2BD9AF]" : "bg-[#FF5E84]"
        } text-white p-3 rounded-2xl flex-1`}
      >
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#0E42FD] mb-2">Rs {price}</h3>
          <p className="text-sm text-[#0E0E0E] line-clamp-3">
            {description.length > 120
              ? description.substring(0, 120) + "..."
              : description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
