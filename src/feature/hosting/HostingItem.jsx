import { Link } from 'react-router-dom'

function HostingItem({ item }) {
  return (
    <div className="flex flex-col justify-center gap-3 border-2 my-10 mx-4 p-10 rounded-2xl font-bold">
      <div>Name: {item?.propertyName}</div>
      <div>Price per night: {item?.pricePerDate}</div>
      <div>Created: {item?.updatedAt.substring(0, 10)}</div>

      <div className="flex gap-3">
        <Link to={`/rooms/${item?.id}`}>
          <button
            type="button"
            className="px-4 py-1 rounded-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
            View
          </button>
        </Link>
        <button className="px-4 py-1 rounded-lg focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300">
          Delete
        </button>
      </div>
    </div>
  )
}

export default HostingItem
