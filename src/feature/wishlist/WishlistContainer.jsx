import { Navigate, useNavigate } from 'react-router-dom'
import { useProperty } from '../../contexts/PropertyContext'
import WishlistItem from './WishlistItem'

function WishlistContainer() {
  const { wishList } = useProperty()
  const navigate = useNavigate()
  return (
    <>
      <div className="mx-[5rem]">
        <div className="text-[2rem] mt-[1rem]">
          <h1 className="my-auto">Wishlists</h1>
        </div>
        {wishList?.length !== 0 || !wishList ? (
          <div className="grid grid-cols-1 gap-10 mt-5 md:grid-cols-3">
            {wishList?.map((property) => (
              <WishlistItem key={property?.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-[2rem] mt-[1rem] pb-5 border-t-2">
            <div className="flex flex-col gap-5 py-7 border-b-2">
              <div className="text-xl">No Wishlist ... yet!</div>
              <div className="font-light text-lg">
                Time to Add Wishlist for Your Journey
              </div>
              <button
                className="w-max border-2 border-black rounded-lg py-2 px-5 hover:bg-gray-200 text-lg"
                onClick={() => navigate('/')}>
                Start searching
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default WishlistContainer
