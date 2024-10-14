import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";

export default function CartIcon({ numProductInCart }) {
  return (
    <div className="">
      <div className="relative flex">
        <Icon icon={faCartShopping} size="2x" className="hover:text-grey-300 text-white" />
        <span className="absolute -right-1 -top-2 rounded-full bg-red-600 w-5 h-5 p-0 m-0 text-white font-mono text-md font-bold leading-tight text-center flex justify-center items-center">
          {numProductInCart}
        </span>
      </div>
    </div>
  );
}
