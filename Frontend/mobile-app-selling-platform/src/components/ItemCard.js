export default function ItemCard(props) {
  return (
    <div className="bg-slate-100 p-6 flex flex-row w-11/12 shadow-lg rounded-md">
      <img className="mr-6 my-3 w-40 h-40 " src={props.product.image} />
      <div className="flex flex-col p-2 border  w-full">
        <div className="items-center gap-1">
          {/* <div className="flex flex-row items-center justify-between"> */}
          <p className="font-medium">{props.product.device_name}</p>
          <p className="flex gap-1">
            <p>Rs.</p>
            {/* <p className="pt-1 text-gray-900 text-sm font-medium"> */}
            {props.product.price}
          </p>
        </div>
        <div className="text-gray-700 text-sm">
          <p className="flex flex-row gap-1">
            <p className="text-black">Memory chip:</p>
            {props.product.chip}
          </p>
          <p className="flex flex-row gap-1">
            <p className="text-black">RAM:</p>
            {props.product.ram}
            <p>GB</p>
          </p>
          <p className="flex flex-row gap-1">
            <p className="text-black">Storage:</p>
            {props.product.storage}
            <p>GB</p>
          </p>
          <p className="flex flex-row gap-1">
            {props.product.qty}
            <p>items available</p>
          </p>
        </div>
        <div className="flex justify-end">
          <button className="p-2 hover:shadow-lg bg-emerald-500 rounded-md text-xs text-white font-medium">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
