import Header from './Header'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="h-screen">
      <Header title="GROUPSTUDY" />
      <main className="mx-24 my-24">
        <div className="lg:flex pr-6 items-center lg:text-left w-full justify-between mt-12 text-center">
          <div className="pl-6">
            <h1 className="text-white text-4xl">
            A <span className="font-bold">free</span> online tool for finding <br />
            a study buddy <span className="text-blue-500 font-bold">GROUPSTUDY</span>
            </h1>
            <p className="text-white text-lg mt-4">A community initiative to help students get <br />
            back on track during the on going pandemic</p>
            <div className="flex justify-center my-10">
              <Link to="/signup">
                <button className="mx-5 mb-2 py-4 px-10 text-lg block font-semibold text-white hover:text-blue-900 bg-blue-900 hover:bg-blue-100 rounded-lg shadow hover:shadow-md transition duration-300">
                  SIGN UP
                </button>
              </Link>
              <Link to="/signin">
                <button className="mx-5 mb-2 py-4 px-10 text-lg block font-semibold text-white hover:text-blue-900 bg-blue-900 hover:bg-blue-100 rounded-lg shadow hover:shadow-md transition duration-300">
                  SIGN IN
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <img className="w-full h-96 mr-96" src="https://tailwindcomponents.com/svg/website-designer-bro.svg" alt="" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
