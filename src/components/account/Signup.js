import Header from '../Header'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="h-screen">
      <Header title="GROUPSTUDY" />
      <main className="flex justify-center items-center">
        <form className="max-w-6xl bg-gray-700 shadow-lg rounded px-12 pt-6 pb-8 mb-4 mt-8">
          <div className="text-white text-2xl flex justify-center border-b-2 py-2 mb-4">
            Sign Up
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-normal mb-2"
              for="username"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              v-model="form.email"
              type="email"
              required
              autofocus
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-normal mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              v-model="form.password"
              type="password"
              placeholder="Password"
              name="password"
              required
              autocomplete="current-password"
            />
          </div>
          <div className="flex items-center justify-between">
            <Link to="/dashboard">
              <button className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="submit">Sign Up</button>
            </Link>
            <Link to="/signin">
              <a
                className="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800"
              >
                Login?
              </a>
            </Link>
          </div>
        </form>
      </main>
    </div>
  )
}

export default Signup
