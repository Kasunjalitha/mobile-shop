export default function CartItemCard(props) {
  return (
    <div className="p-1 flex flex-row w-11/12 border-b content-between gap-20">
      {props.item.device_name}
      <img className="mx-3 w-6 h-6 " src={props.item.image} />
      <p className="flex gap-1">
        <p>Rs.</p>
        {props.item.price}
      </p>
      {props.item.qty}
      <button className="p-2 hover:shadow-lg bg-red-600 rounded-md text-xs text-white font-medium">
        DELETE
      </button>
    </div>
  );
}
