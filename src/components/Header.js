import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Header = props => {
  return (
    <header className="max-w-6xl mx-auto">
      <nav className="flex justify-center">
        <Link to="/">
          <div className="my-5">
            <img src={logo}alt="" className="w-24 m-auto p-auto" />
            <h1 className="text-gray-200 font-bold text-center text-xl">{props.title}</h1>
          </div>
        </Link>
      </nav>
    </header>
  )
}

export default Header
