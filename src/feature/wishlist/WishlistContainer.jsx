import WishlistItem from './WishlistItem'

function WishlistContainer() {
  return (
    <>
      <div className="mx-[5rem]">
        <div className="text-[2rem] mt-[1rem]">
          <h1 className="my-auto">Wishlists</h1>
        </div>
        <div className="grid grid-cols-1 gap-10 mt-5 md:grid-cols-3">
          <WishlistItem />
          <WishlistItem />
          <WishlistItem />
          <WishlistItem />
          <WishlistItem />
          <WishlistItem />
          <WishlistItem />
        </div>
      </div>
    </>
  )
}

export default WishlistContainer
