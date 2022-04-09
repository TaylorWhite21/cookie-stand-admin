export default function CreateForm(props) {
  function getSalesData(event) {
    event.preventDefault()
    const newStore = {
      location: event.target.location.value,
      minCust: event.target.minCust.value,
      maxCust: event.target.maxCust.value,
      average: event.target.average.value,
      hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
    }
    props.addStore(newStore)
  }

  return (
    <form
      onSubmit={getSalesData}
      className="items-center justify-center w-3/4 p-6 mx-auto my-5 mt-0 bg-teal-400 rounded-md"
    >
      <div className="bg-teal-400 mx-80">
        <div className="flex justify-center">
          <label className="flex px-2 py-1 ">Location</label>
          <input name="location" className="flex-auto pl-1"></input>
        </div>

        <div className="flex h-1/2 justify-items-center">
          <div className="w-1/3 p-2 m-3 text-sm text-center bg-green-300 ">
            <label>Minimum Customers per Hour</label>
            <input name="minCust" className="flex-auto pl-1"></input>
          </div>

          <div className="w-1/3 p-2 m-3 text-sm text-center bg-green-300 ">
            <label>Maximum Customers per Hour</label>
            <input name="maxCust" className="flex-auto pl-1"></input>
          </div>

          <div className="p-2 m-3 text-sm text-center bg-green-300">
            <label>Average Cookies per Sale </label>
            <input name="average" className="flex-auto pl-1"></input>
          </div>

          <div className="p-2 m-3 text-sm text-center bg-emerald-900">
            <button className="flex px-10 py-2 mx-auto my-4 bg-emerald-900">
              Create
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
