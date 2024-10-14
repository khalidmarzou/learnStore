import Button from "../smallComponents/Button";
import Counter from "../smallComponents/Counter";
import Stars from "../smallComponents/Stars";

export default function Screen({ product, loading, onCountChange, onClickBuy }) {
  if (loading) {
    return (
      <main className="h-3/5 bg-white flex items-center justify-center gap-24">
        <article className="h-4/5 bg-[#F6F6F6] w-1/4">
          <div className="animate-pulse rounded-md bg-slate-200 h-full w-full"></div>
        </article>
        <article className="w-1/3 h-4/5 flex flex-col items-start justify-center">
          <div className="animate-pulse w-full space-y-6">
            <div className="h-8 bg-slate-200 rounded w-3/4"></div>
            <div className="h-6 bg-slate-200 rounded w-1/2"></div>
            <div className="h-4 bg-slate-200 rounded w-1/3"></div>
            <div className="h-3 bg-slate-200 rounded w-full mt-3"></div>
            <div className="h-3 bg-slate-200 rounded w-5/6"></div>
            <div className="h-10 bg-slate-200 rounded w-1/2"></div>
            <div className="h-8 bg-slate-200 rounded w-1/3"></div>
          </div>
        </article>
      </main>
    );
  }

  return (
    <main className="h-3/5 bg-white flex items-center justify-center gap-24">
      <article className="h-4/5 bg-[#F6F6F6] w-1/4 flex justify-center items-center">
        <img src={`/learnStore/assets/nikeSneakers/${product.image}`} alt="" />
      </article>
      <article className="w-1/3 h-4/5 flex flex-col items-start justify-between">
        <h1 className="font-extrabold text-4xl">{product.title}</h1>
        <h2 className="font-bold text-2xl text-gray-400">{product.marque}</h2>
        <Stars stars={product.stars} />
        <p className="text-justify">{product.description}</p>
        <h1 className="font-extrabold text-3xl">${product.price}</h1>
        <Counter max={product.quantity} id={product.id} onCountChange={onCountChange} />
        <h1 className="text-lg text-gray-600 font-semibold">
          In Stock: <span className="text-black">{product.quantity}</span>
        </h1>
        <Button onClickBuy={onClickBuy} />
      </article>
    </main>
  );
}
