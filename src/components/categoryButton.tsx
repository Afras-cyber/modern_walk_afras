import Link from "next/link";

const CategoryButton = ({ label, bgColor, route }: any) => {
    return (
      <Link
        href={`/${route}`}
        className={`w-full py-4 text-white font-bold text-5xl rounded-2xl ${bgColor} h-68 flex items-center justify-center shadow-[4px_4px_6px_rgba(0,0,0,0)]  shadow-gray-400/50`}
      >
        {label}
      </Link>
    );
  };

export default CategoryButton