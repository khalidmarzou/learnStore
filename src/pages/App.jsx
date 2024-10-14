import { useLocation } from "react-router-dom";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import Screen from "../components/layouts/Screen";
import Products from "../components/layouts/Products";
import Cart from "../components/layouts/Cart";
import Alert from "../components/alerts/Alert"
import { useEffect, useState } from "react";

export default function App() {
  const location = useLocation(); // Current URL

  const [sneakers, setSneakers] = useState([
    {
      id: 1,
      title: "AIR ADJUST FORCE SP",
      marque: "Nike",
      price: 199,
      description: "A versatile sneaker designed for comfort and style with adjustable features.",
      stars: 2,
      quantity: 10,
      image: "AIR+ADJUST+FORCE+SP.png",
    },
    {
      id: 2,
      title: "AIR JORDAN 3 RETRO",
      marque: "Jordan",
      price: 220,
      description: "A classic retro sneaker with premium materials and the iconic Air Jordan design.",
      stars: 5,
      quantity: 15,
      image: "AIR+JORDAN+3+RETRO.png",
    },
    {
      id: 3,
      title: "AIR JORDAN 9 G QS",
      marque: "Jordan",
      price: 190,
      description: "Limited edition quickstrike sneaker with exclusive design and top-tier performance.",
      stars: 3,
      quantity: 8,
      image: "AIR+JORDAN+9+G+QS.png",
    },
    {
      id: 4,
      title: "AIR PENNY II SS",
      marque: "Nike",
      price: 185,
      description: "The return of the iconic Penny Hardaway sneaker with a fresh and modern twist.",
      stars: 1,
      quantity: 12,
      image: "AIR+PENNY+II+_+SS.png",
    },
    {
      id: 5,
      title: "COSMIC UNITY 3",
      marque: "Nike",
      price: 160,
      description: "An eco-friendly sneaker built with sustainability and performance in mind.",
      stars: 0,
      quantity: 20,
      image: "COSMIC+UNITY+3.png",
    },
    {
      id: 6,
      title: "NIKE ISPA LINK AXIS",
      marque: "Nike",
      price: 210,
      description: "The latest in Nike’s ISPA line, blending innovative technology with cutting-edge design.",
      stars: 4,
      quantity: 5,
      image: "NIKE+ISPA+LINK+AXIS.png",
    },
  ]);

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [currentCount, setCurrentCount] = useState(0);

  function show(id) {
    const foundProduct = sneakers.find((item) => item.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setLoading(false);
    }
  }

  function store(id, quantity) {
    const existingItemIndex = cart.findIndex((item) => item.id === id);

    if (existingItemIndex !== -1) {
      const updatedCart = cart.map((item, index) => {
        if (index === existingItemIndex) {
          return { ...item, quantity: item.quantity + quantity };
        }
        return item;
      });

      setCart(updatedCart);
    } else {
      const newItem = { ...sneakers.find((item) => item.id === id) };
      newItem.quantity = quantity;
      setCart([...cart, newItem]);
    }
  }

  function handleCountChange(count) {
    setCurrentCount(count);
  }

  function editQuantity(id) {
    const updatedSneakers = sneakers.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - currentCount };
      }
      return item;
    });
    setSneakers(updatedSneakers);
  }

  function handleClickBuy() {
    if (currentCount > 0 && product.id) {
      store(product.id, currentCount);
      editQuantity(product.id);
    }
  }

  useEffect(() => {
    if (!loading) {
      console.log(cart);
    }
  }, [cart]);

  useEffect(() => {
    if (product.id) {
      show(product.id);
    }
  }, [sneakers]);

  return (
    <>
      <Alert />
      <Header numProductInCart={cart.length} />
      {location.pathname === "/products/cart" ? (
        <Cart cart={cart} setCart={setCart} sneakers={sneakers} setSneakers={setSneakers} />
      ) : (
        <>
          <Screen product={product} loading={loading} onCountChange={handleCountChange} onClickBuy={handleClickBuy} />
          <Products sneakers={sneakers} show={show} />
        </>
      )}
      <Footer />
    </>
  );
}
