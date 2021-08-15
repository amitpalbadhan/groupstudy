import Header from '../Header'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="h-screen">
      <Header title="GROUPSTUDY" />
      <main className="mx-24 my-24">
        <div className="flex justify-center items-center">
          <Link to="/listings">
            <div className="m-5 w- p-8 bg-gray-700 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
              <h1 className="text-white text-4xl">
                <span className="text-blue-500">Join</span> a <span className="font-bold">GroupStudy</span>
              </h1>
              <p className="text-white text-lg mt-4">Join others who have already created a study <br />
              group listing, filter between the parameters <br /> and choose the group that best fits you!</p>
            </div>
          </Link>
          <h2 className="text-2xl text-white px-5">OR</h2>
          <Link to="/create">
            <div className="m-5 w- p-8 bg-gray-700 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
              <h1 className="text-white text-4xl">
                <span className="text-blue-500">Create</span> a <span className="font-bold">GroupStudy</span>
              </h1>
              <p className="text-white text-lg mt-4">Create your own study group listing with your <br />
              choice of subject, grade, and size. Give the <br /> group a unique name and wait for others to join!</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
