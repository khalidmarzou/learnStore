import { useEffect, useState } from "react";
import Icon from "./Icon";
import { faArrowTrendUp, faArrowTrendDown } from "@fortawesome/free-solid-svg-icons";

export default function Counter({ max, id, onCountChange }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
  }, [id, max]);

  useEffect(() => {
    onCountChange(count);
  }, [count]);

  function plus() {
    if (count >= max) {
      return;
    }
    setCount(count + 1);
  }

  function minus() {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
  }

  return (
    <form className="mb-3">
      <div className="relative flex items-center max-w-[8rem]">
        <button
          onClick={minus}
          type="button"
          className="bg-gray-100 hover:bg-gray-200 border border-gray-300 p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none flex justify-center items-center"
        >
          <Icon icon={faArrowTrendDown} />
        </button>
        <input
          value={count}
          type="text"
          className="outline-none bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-xl focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5"
          required
          readOnly
        />
        <button
          onClick={plus}
          type="button"
          className="bg-gray-100 hover:bg-gray-200 border border-gray-300 p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none flex justify-center items-center"
        >
          <Icon icon={faArrowTrendUp} />
        </button>
      </div>
    </form>
  );
}
