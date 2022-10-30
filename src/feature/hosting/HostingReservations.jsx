import { useState } from 'react'
import { useEffect } from 'react'
import { useProperty } from '../../contexts/PropertyContext'
import HostingItem from './HostingItem'
import NoHosting from './NoHosting'

function HostingReservations() {
  const { getPropertyByUser } = useProperty()
  const [myProperty, setMyProperty] = useState(null)

  console.log(myProperty)

  const fetchMyProperty = async () => {
    const res = await getPropertyByUser()
    setMyProperty(res?.data?.property)
  }

  useEffect(() => {
    fetchMyProperty()
  }, [])

  return (
    <div className="px-[16%] mt-[65px]">
      <div className="flex justify-between h-[45px] mb-6">
        <h1 className="text-3xl font-semibold">Your reservations</h1>
        <div className="flex items-center underline">
          <h1 className="font-semibold">All reservations (0)</h1>
        </div>
      </div>
      <div className=" flex gap-4">
        <button className="h-[40px] px-4 text-[0.92rem] font-normal border rounded-3xl">
          Currently hosting ({myProperty?.length})
        </button>
        {/* <button className="h-[40px] px-4 text-[0.92rem] font-normal border rounded-3xl">
          Checking out (0)
        </button> */}
        {/* <button className="h-[40px] px-4 text-[0.92rem] font-normal border rounded-3xl">
          Arriving soon (0)
        </button>
        <button className="h-[40px] px-4 text-[0.92rem] font-normal border rounded-3xl">
          Upcoming (0)
        </button>
        <button className="h-[40px] px-4 text-[0.92rem] font-normal border rounded-3xl">
          Pending Review (0)
        </button> */}
      </div>
      {myProperty?.length === 0 ? (
        <NoHosting />
      ) : (
        <div className="w-full flex h-[15rem]">
          {myProperty?.map((item) => (
            <HostingItem item={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  )
}

export default HostingReservations
