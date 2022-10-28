import ItemCard from "../components/ItemCard";
import TopBar from "../components/TopBar";

var device = [
  {
    id: 0,
    device_name: "Mobile Phone 1",
    chip: "chip type",
    ram: 2,
    storage: 32,
    image:
      "https://i.etsystatic.com/34874305/c/2116/1682/244/198/il/c81873/4218798041/il_340x270.4218798041_r0m4.jpg",
    price: 30000.0,
    qty: 4,
  },
  {
    id: 1,
    device_name: "Mobile Phone 2",
    chip: "chip type 2",
    ram: 2,
    storage: 64,
    image:
      "https://i.etsystatic.com/34874305/c/2116/1682/244/198/il/c81873/4218798041/il_340x270.4218798041_r0m4.jpg",
    price: 50000.0,
    qty: 3,
  },
];

export default function Home() {
  return (
    <>
      <TopBar />
      <div className="p-10 gap-4 items-center flex flex-col">
        {device.map((i) => (
          <ItemCard
            key={i.id}
            // handleOpen={handleOpen}
            product={i}
          />
        ))}
      </div>
    </>
  );
}
