export default function Cart({ cart, setCart, sneakers, setSneakers }) {
  // remove product from the cart
  function removeFromCart(id) {
    const itemToRemove = cart.find((item) => item.id === id);
    const updatedSneakers = sneakers.map((sneaker) => {
      if (sneaker.id === id) {
        return { ...sneaker, quantity: sneaker.quantity + itemToRemove.quantity };
      }
      return sneaker;
    });

    setSneakers(updatedSneakers);
    setCart(cart.filter((item) => item.id !== id));
  }

  // decrase Quantity from the cart of one product
  function decreaseQuantity(id) {
    const updatedCart = cart
      .map((item) => {
        if (item.id && item.quantity == 1) {
          removeFromCart(item.id);
          return;
        }
        if (item.id === id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);

    const updatedSneakers = sneakers.map((sneaker) => {
      if (sneaker.id === id) {
        const cartItem = cart.find((item) => item.id === id);
        if (cartItem && cartItem.quantity > 0) {
          return { ...sneaker, quantity: sneaker.quantity + 1 };
        }
      }
      return sneaker;
    });

    setSneakers(updatedSneakers);
    setCart(updatedCart);
  }


  // validate the cart
  function validateCart() {
    setCart([]);
  }

  // make the cart empty
  function emptyCart() {
    const updatedSneakers = sneakers.map((sneaker) => {
      const cartItem = cart.find((item) => item.id === sneaker.id);
      if (cartItem) {
        return { ...sneaker, quantity: sneaker.quantity + cartItem.quantity };
      }
      return sneaker;
    });
    setSneakers(updatedSneakers);
    setCart([]);
  }

  return (
    <main className="h-3/5 flex flex-col items-center justify-center bg-white">
      {cart.length === 0 ? (
        <h2 className="text-2xl font-semibold text-gray-600">Your cart is empty</h2>
      ) : (
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-semibold mb-6">Shopping Cart</h2>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b border-gray-200 py-4">
              <div className="flex items-center space-x-4">
                <img
                  src={`/assets/nikeSneakers/${item.image}`}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
                <button
                  className="bg-gray-200 text-black px-3 py-1 rounded hover:bg-gray-300"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center mt-6">
            <button
              className="bg-green-500 text-white px-6 py-2 rounded shadow-md hover:bg-green-600"
              onClick={validateCart}
            >
              Validate Cart
            </button>
            <button className="bg-red-500 text-white px-6 py-2 rounded shadow-md hover:bg-red-600" onClick={emptyCart}>
              Empty Cart
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
