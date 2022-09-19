import ItemStock from "./ItemStock";

const ItemListStock = ({ stock = [] }) => {
  return (
    <>
     <h3 className="flex flex-wrap items-center justify-center mt-0 px-2 py-3 text-xs font-bold uppercase tracking-wide no-underline hover:no-underline font-bold text-xl "> On FireStore's sale!!!</h3>
      <div className="container grid justify-center items-center DEFAULT:grid-col-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-y-2 gap-x-2">
       
        {stock.map((prodStock) => (
          <ItemStock product={prodStock} key={prodStock.id} />
        ))}
      </div>
    </>
  );
};

export default ItemListStock;


