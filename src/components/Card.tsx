import useTheme from "../custom-hooks/useTheme";
import { Product } from "../types/ThemeTypes";

const Card = ({ product }: Product) => {
  const { selectedTheme } = useTheme();
  return (
    <div className={`card ${selectedTheme} h-96 p-3`}>
      <div className="card-img w-full h-4/6 rounded-xl">
        <img
          src={product.img}
          alt={product.name}
          className="object-cover w-full h-[95%] relative self-center bg-white rounded-xl"
        />
      </div>
      <div className="w-full h-1/6 items-center text-center p-2">
        <p className="text-xl font-bold -mt-2">{product.name}</p>
        <p className="font-semibold mt-1">{`${product.price}/person`}</p>
      </div>
      <hr className="text my-1 border-gray-300" />
      <div className="flex w-full h-1/6 items-center justify-between py-2 px-3 overflow-hidden">
        <button className="font-semibold text-cyan-500">Details</button>
        <button className="font-semibold text-rose-400">Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
