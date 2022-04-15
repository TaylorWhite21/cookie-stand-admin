import { useAuth } from '../contexts/auth'
import { useState } from 'react'

export default function LoginForm() {
  const { login } = useAuth()
  const [formData, setFormData] = useState({})

  const handleChange = (event) => {
    const newFormData = {
      ...formData,
      [event.target.name]: event.target.value,
    }
    setFormData(newFormData)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    login(formData.username, formData.password)
  }

  return (
    <div className="w-1/2 m-auto mt-20 border border-green-700 rounded bg-emerald-300">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center w-3/4 ml-32">
          <label className="p-2" htmlFor="username">
            User Name
          </label>
          <input
            type="text"
            className={`text-primary  mb-4 w-full p-2 text-sm outline-none transition duration-150 ease-in-out`}
            id="name"
            placeholder="User Name"
            name="username"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col items-center justify-center w-3/4 ml-32">
          <label className="p-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            className={`text-primary mb-4 w-full p-2 text-sm outline-none transition duration-150 ease-in-out`}
            id="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-center pt-5 pb-6">
          <button className={` ml-6  rounded border  bg-green-700 px-80 py-2`}>
            SIGN IN
          </button>
        </div>
      </form>
    </div>
  )
}
