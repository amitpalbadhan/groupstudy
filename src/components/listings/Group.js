import { Link } from 'react-router-dom'

const Group = props => {
  let percentage = (props.size / props.maxSize) * 100 + "%"
  return (
    <div className="m-5 w- p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
      <h1 className="text-2xl font-bold text-gray-700">{props.title}</h1>
      <p className="text-sm mt-2 text-gray-700">{props.subject} ({props.uni ? "Year" : "Grade"} {props.grade})</p>
      <p className="text-sm italic mt-2 text-gray-700">{props.size} / {props.maxSize}</p>
      <div className="relative pt-1">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
          <div style={{width: percentage}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-800"></div>
        </div>
      </div>
      <Link to="/group"> 
        <button className="mt-4 mb-2 py-2 px-5 text-md block font-semibold text-white hover:text-purple-100 bg-blue-900 rounded-lg shadow hover:shadow-md transition duration-300">
          Join
        </button>
      </Link>
    </div>
  )
}

export default Group
