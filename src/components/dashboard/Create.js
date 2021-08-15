import Header from '../Header'
import { Link } from 'react-router-dom'

const Create = () => {
  return (
    <div className="h-screen">
      <Header title="GROUPSTUDY" />
      <main className="flex justify-center items-center">
        <form className="max-w-6xl bg-gray-700 shadow-lg rounded px-12 pt-6 pb-8 mb-4 mt-8">
          <div className="text-white text-2xl flex justify-center border-b-2 py-2 mb-4">
            Create a GroupStudy
          </div>
          <div className="mb-2">
            <label className="block text-gray-300 text-sm font-normal mb-2">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="name"
              required
              autofocus
              placeholder="Group Name"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-300 text-sm font-normal mb-2">
              Subject
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="subject"
              required
              autofocus
              placeholder="Subject"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-300 text-sm font-normal mb-2">
              Grade/Year
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="year"
              required
              autofocus
              placeholder="Grade / Year"
            />
          </div>
          <div className="mb-2 flex items-center">
            <input type="checkbox" id="scales" name="scales"
            />
            <label className="block text-gray-300 text-sm font-normal mx-2">
              University
            </label>
          </div>
          <div className="mb-10">
            <label className="block text-gray-300 text-sm font-normal mb-2">
              Max Group Size
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="size"
              required
              autofocus
              placeholder="Size"
            />
          </div>
          <div className="flex items-center justify-between">
            <Link to="/group">
              <button className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="submit">Create</button>
            </Link>
          </div>
        </form>
      </main>
    </div>
  )
}

export default Create
