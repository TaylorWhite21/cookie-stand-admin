export default function Main(props) {
  return (
    <main className="">
      <div className="p-10 mx-20 my-10 bg-teal-400 m-80">
        <p className="flex justify-center p-4 text-xl font-bold">
          Create Cookie Stand
        </p>

        <form className="flex w-1/2 p-2 mx-auto my-4">
          <p className="flex px-2 py-1 ">Location</p>
          <input name="question" className="flex-auto pl-1"></input>
        </form>

        <div className="flex justify-between">
          <div>
            <p className="flex px-2 py-1">Minimum Customers per Hour</p>
            <form className="flex p-2 mx-auto my-4">
              <input name="question" className="flex-auto pl-1"></input>
            </form>
          </div>

          <div>
            <p className="flex px-2 py-1">Maximum Customers per Hour</p>
            <form className="flex p-2 mx-auto my-4 ">
              <input name="question" className="flex-auto pl-1"></input>
            </form>
          </div>

          <div>
            <p className="flex px-2 py-1">Average Cookies per Sale </p>
            <form className="flex p-2 mx-auto my-4">
              <input name="question" className="flex-auto pl-1"></input>
            </form>
          </div>

          <div className="px-4 py-4 bg-emerald-900">
            <button className="flex px-10 py-2 mx-auto my-4 bg-emerald-900">
              Create
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <p>Report Table Coming Soon.....</p>
      </div>

      <div className="flex justify-center py-5">
        <p>
          "'location':"Barcelona", "minCustomers":2, "maxCustomers":4,
          "avgCookies":2.5"
        </p>
      </div>
    </main>
  )
}
