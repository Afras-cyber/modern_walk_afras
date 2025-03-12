import Link from "next/link";

const CategoryButton = ({ label, bgColor, route }: any) => {
    return (
      <Link
        href={`/${route}`}
        className={`w-full py-4 text-white font-bold text-5xl rounded-2xl ${bgColor} h-60 flex items-center justify-center shadow-2xl`}
      >
        {label}
      </Link>
    );
  };

export default CategoryButton