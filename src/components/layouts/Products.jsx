import Product from "../cards/Product";

export default function Products({ sneakers, show }) {
  return (
    <main className="bg-[#F6FAFD] h-2/5 flex justify-center items-center gap-5">
      {sneakers.map((item) => (
        <Product key={item.id} id={item.id} image={item.image} show={() => show(item.id)} />
      ))}
    </main>
  );
}
