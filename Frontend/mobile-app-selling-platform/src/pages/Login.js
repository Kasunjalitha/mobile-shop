export default function Login() {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col self-center gap-4 p-10 bg-slate-50 w-max rounded-md shadow-lg">
          <form className="flex flex-col gap-5">
            <div className="flex flex-row">
              <label className="mr-3 w-24">Email</label>
              <input className="px-2 py-1 w-52 border border-slate-500 rounded-md"></input>
            </div>
            <div className="flex flex-row">
              <label className="mr-3 w-24">Password</label>
              <input
                type="password"
                className="px-2 py-1 w-52 border border-slate-500 rounded-md"
              ></input>
            </div>
            <button className="p-2 hover:shadow-lg bg-sky-500 hover:bg-sky-600 rounded-md text-xs text-white font-medium w-full">
              LOGIN
            </button>
          </form>
          <p className="flex gap-1 justify-center">
            Don't have an account?{" "}
            <a className="no-underline text-cyan-700" href="/register">
              Register
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
