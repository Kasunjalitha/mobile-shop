import CartItemCard from "../components/CartItemCard";
import TopBar from "../components/TopBar";

var item = [
  {
    id: 0,
    device_name: "Mobile Phone 1",
    image:
      "https://i.etsystatic.com/34874305/c/2116/1682/244/198/il/c81873/4218798041/il_340x270.4218798041_r0m4.jpg",
    price: 30000.0,
    qty: 1,
  },
  {
    id: 1,
    device_name: "Mobile Phone 2",
    image:
      "https://i.etsystatic.com/34874305/c/2116/1682/244/198/il/c81873/4218798041/il_340x270.4218798041_r0m4.jpg",
    price: 50000.0,
    qty: 1,
  },
];

export default function Cart() {
  return (
    <>
      <TopBar />
      <div className="grid p-2 items-center w-full justify-items-center">
        Item Cart
      </div>
      <div className="p-10 gap-4 items-center justify-center flex flex-col">
        <div className="p-1 flex flex-row w-11/12 border-b content-between gap-20">
          <p>Device Name</p>
          <p className="mx-3 w-6 h-6 ">Image</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Action</p>
        </div>
        {item.map((i) => (
          <CartItemCard
            key={i.id}
            // handleOpen={handleOpen}
            item={i}
          />
        ))}
      </div>
    </>
  );
}
