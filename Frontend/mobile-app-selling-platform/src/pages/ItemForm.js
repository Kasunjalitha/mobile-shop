import TopBar from "../components/TopBar";

export default function ItemForm() {
  return (
    <>
      <TopBar />
      <div className="grid p-2 items-center w-full justify-items-center">
        Add New Product
      </div>
      <div className="flex h-full items-center justify-center">
        <form className="p-10 gap-4 flex flex-col">
          <div className="flex flex-row">
            <label className="mr-3 w-24">device name</label>
            <input className="px-2 py-1 w-52 border border-slate-500 rounded-md"></input>
          </div>
          <div className="flex flex-row">
            <label className="mr-3 w-24">chip</label>
            <input className="px-2 py-1 w-52 border border-slate-500 rounded-md"></input>
          </div>
          <div className="flex flex-row">
            <label className="mr-3 w-24">ram</label>
            <input className="px-2 py-1 w-52 border border-slate-500 rounded-md"></input>
          </div>
          <div className="flex flex-row">
            <label className="mr-3 w-24">storage</label>
            <input className="px-2 py-1 w-52 border focus:border-slate-600 border-slate-500 rounded-md"></input>
          </div>
          <div className="flex flex-row">
            <label className="mr-3 w-24">image</label>
            <input className="px-2 py-1 w-52 border border-slate-500 rounded-md"></input>
          </div>
          <div className="flex flex-row">
            <label className="mr-3 w-24">price</label>
            <input className="px-2 py-1 w-52 border border-slate-500 rounded-md"></input>
          </div>
          <div className="flex flex-row">
            <label className="mr-3 w-24">quantity</label>
            <input className="px-2 py-1 w-52 border border-slate-500 rounded-md"></input>
          </div>
          <button className="p-2 hover:shadow-lg bg-violet-600 hover:bg-sky-600 rounded-md text-xs text-white font-medium w-full">
            ADD ITEM
          </button>
        </form>
      </div>
    </>
  );
}
