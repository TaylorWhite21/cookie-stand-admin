import Head from '../components/Head'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import CreateForm from '../components/CreateForm'
import ReportTable from '../components/ReportTable'
import { useState } from 'react'

export default function CookieStandAdmin(props) {
  const [storeList, setStoreList] = useState([
    {
      location: 'orlando',
      minCust: 21,
      maxCust: 25,
      average: 2,
      hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
    },
  ])

  function addStore(newStore) {
    setStoreList([...storeList, newStore])
  }

  return (
    <div>
      <Head />
      <Header />
      <Main />
      <CreateForm addStore={addStore} />
      <ReportTable store={storeList} />
      <Footer stores={storeList} />
    </div>
  )
}
