import { hours } from '../data'

export default function ReportTable(props) {
  if (props.store == 0) {
    return <h2>No Cookie Stands Available</h2>
  }

  return (
    <div>
      <div className="flex justify-center">
        <p></p>
        <table className="w-1/2 mx-auto my-4">
          <thead>
            <tr>
              <th className="border border-gray-700">Location</th>
              {hours.map((hour) => {
                return (
                  <th className="border border-gray-700" key={Math.random()}>
                    {hour}
                  </th>
                )
              })}
              <th className="border border-gray-700">Total</th>
            </tr>
          </thead>
          <tbody>
            {props.store.map((store) => {
              return (
                <tr key={Math.random()}>
                  <td>{store.location}</td>
                  {store.hourly_sales.map((sale) => {
                    return <td>{sale}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
