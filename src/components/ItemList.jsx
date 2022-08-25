import Item from "./Item";

const ItemList = ({ products = [] }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((prod) => (
          <Item product={prod} key={prod.id} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
