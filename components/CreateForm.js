import useResource from '../hooks/useResource'
import { useState } from 'react'

export default function CreateForm(props) {
  const { resources, loading, createResource, deleteResource } = useResource()
  const [storeData, setStoreData] = useState({})

  const handleChange = (event) => {
    const newStoreData = {
      ...storeData,
      [event.target.name]: event.target.value,
    }
    console.log('new store data', newStoreData)
    setStoreData(newStoreData)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('store data', storeData)
    createResource(storeData)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="items-center justify-center w-3/4 p-6 mx-auto my-5 mt-0 bg-teal-400 rounded-md"
    >
      <div className="bg-teal-400 mx-80">
        <div className="flex justify-center">
          <label className="flex px-2 py-1 ">Location</label>
          <input
            placeholder="Cookie Stand Location"
            type="text"
            name="location"
            className="flex-auto pl-1"
            onChange={handleChange}
          ></input>
        </div>

        <div className="flex h-1/2 justify-items-center">
          <div className="w-1/3 p-2 m-3 text-sm text-center bg-green-300 ">
            <label>Minimum Customers per Hour</label>
            <input
              placeholder="0"
              type="number"
              name="minCust"
              className="flex-auto pl-1"
              onChange={handleChange}
            ></input>
          </div>

          <div className="w-1/3 p-2 m-3 text-sm text-center bg-green-300 ">
            <label>Maximum Customers per Hour</label>
            <input
              placeholder="0"
              type="number"
              name="maxCust"
              className="flex-auto pl-1"
              onChange={handleChange}
            ></input>
          </div>

          <div className="p-2 m-3 text-sm text-center bg-green-300">
            <label>Average Cookies per Sale </label>
            <input
              placeholder="0"
              type="number"
              name="average"
              className="flex-auto pl-1"
              onChange={handleChange}
            ></input>
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
