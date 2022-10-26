import { useNavigate } from 'react-router-dom'
import TripsItem from './TripsItem'

function TripsContainer() {
  const navigate = useNavigate()

  const mockData = [
    {
      id: 1,
      propertyImage: [
        'https://a0.muscache.com/im/pictures/9b65da9a-fcc9-4852-a1c4-d438731c23bd.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/517079c7-bbfa-40e7-93fd-f6d39c5ef7e0.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/f42f8a15-37a2-4e98-a852-3aea43a16a0d.jpg?im_w=1200',
      ],
    },
    {
      id: 2,
      propertyImage: [
        'https://a0.muscache.com/im/pictures/9b65da9a-fcc9-4852-a1c4-d438731c23bd.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/517079c7-bbfa-40e7-93fd-f6d39c5ef7e0.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/f42f8a15-37a2-4e98-a852-3aea43a16a0d.jpg?im_w=1200',
      ],
    },
    {
      id: 3,
      propertyImage: [
        'https://a0.muscache.com/im/pictures/9b65da9a-fcc9-4852-a1c4-d438731c23bd.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/517079c7-bbfa-40e7-93fd-f6d39c5ef7e0.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/f42f8a15-37a2-4e98-a852-3aea43a16a0d.jpg?im_w=1200',
      ],
    },
  ]

  const isTrips = false
  return (
    <>
      <div className="mx-[5rem]">
        <div className="text-[2rem] mt-[1rem] pb-5 border-b-2">
          <h1 className="my-auto">Trips</h1>
        </div>

        {isTrips ? (
          <div className="grid grid-cols-1 gap-10 mt-5 md:grid-cols-3">
            {mockData.map((item) => (
              <TripsItem key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-5 py-7 border-b-2">
              <div className="text-2xl">No trips booked...yet!</div>
              <div className="font-light">
                Time to dust off your bags and start planning your next
                adventure
              </div>
              <button
                className="w-max border-2 border-black rounded-lg py-2 px-5 hover:bg-gray-200"
                onClick={() => navigate('/')}>
                Start searching
              </button>
            </div>

            <div className="text-sm font-light mt-4">
              Can't find your reservation here?{' '}
              <span className="font-normal underline">
                Visit the Help Center
              </span>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default TripsContainer
