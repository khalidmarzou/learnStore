export default function Button({onClickBuy}) {
  return (
    <button
      onClick={onClickBuy}
      type="button"
      className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2"
    >
      Add to cart
    </button>
  );
}
