import { Link } from "react-router-dom";

export default function Product({ image, show, id }) {
  return (
    <Link
      to={`/products/${id}`}
      onClick={show}
      className="bg-[#F7F8FA] h-5/6 w-64 shadow-md hover:bg-[#e6e7e9] rounded"
    >
      <img src={`/learnStore/assets/nikeSneakers/${image}`} />
    </Link>
  );
}
