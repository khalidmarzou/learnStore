import { Link, useLocation } from "react-router-dom";
import CartIcon from "../smallComponents/CartIcon";
import Icon from "../smallComponents/Icon";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function Header({ numProductInCart }) {
  const location = useLocation();

  return (
    <header className="bg-[#4A5567] w-full h-20 flex items-center justify-between px-32">
      <Link to="/products">
        <img src="/learnStore/assets/logoWhite.svg" alt="Logo" />
      </Link>

      {location.pathname === "/products/cart" ? (
        <Link to="/products">
          <Icon icon={faHome} className="text-white" size="2x"/>
        </Link>
      ) : (
        <Link to="/products/cart">
          <CartIcon numProductInCart={numProductInCart} />
        </Link>
      )}
    </header>
  );
}
