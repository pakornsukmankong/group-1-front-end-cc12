import Avatar from '../../components/Avatar'
import Facility from './Facility'
import Highlight from './Highlight'
import Map from './Map'
import { useLoadScript } from '@react-google-maps/api'
import ImageItem from './ImageItem'

function RoomContainer() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCjS_58fk-DKUFw0nSQyeHpy1myF5HCy4o',
  })

  return (
    <>
      {/* property name ,review, location */}
      <div className="flex flex-col gap-2 py-5 border-b-2">
        <p className="text-3xl">Rare Villa right on the beach!!</p>
        <div className="flex gap-2 justify-start items-center font-light">
          <svg viewBox="0 0 32 32" className="block h-[1rem] w-[1rem]">
            <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" />
          </svg>
          <p>4.68</p>
          <p>&middot; 100 review</p>
          <p>&middot; Muang Pattaya,Chang Wat Chon Buri, Thailand</p>
        </div>
      </div>

      {/* property Image */}
      <ImageItem />

      <div className="md:grid md:grid-cols-2">
        <div>
          {/* owner and property info */}
          <div className="flex gap-2 py-5 border-b-2 justify-between items-center">
            <div className="flex flex-col gap-2">
              <p className="text-2xl">Entire home hosted by Floksong</p>
              <p className="font-light">
                6 guests &middot; 2 bedrooms &middot; 3 beds &middot; 2 baths
              </p>
            </div>
            <Avatar hSize="h-10" wSize="w-10" />
          </div>

          {/* Highlight */}
          <div className="flex flex-col gap-2 py-5 border-b-2 justify-start">
            <Highlight />
            <Highlight />
            <Highlight />
          </div>

          {/* about this place */}
          <div className="flex flex-col gap-2 py-5 border-b-2 justify-start">
            <p className="text-xl">About this place</p>
            <p className="font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, hic repellendus voluptatibus veritatis architecto
              impedit minus quam sed possimus. Distinctio harum ad praesentium
              tempore, cumque cupiditate eveniet omnis porro veritatis
              reiciendis id, mollitia blanditiis? Nostrum molestias error
              possimus, odio repellendus ipsum facilis quis laboriosam veritatis
              voluptatum inventore eaque delectus dolores.
            </p>
          </div>

          {/* What this place offers */}
          <div className="flex flex-col gap-2 py-5 border-b-2 justify-start">
            <p className="text-xl my-2">What this place offers</p>
            <Facility />
            <Facility />
            <Facility />
            <Facility />
            <Facility />
          </div>
        </div>
        <div className="sticky">
          <img
            className=""
            src="https://a0.muscache.com/im/pictures/ade75bc6-9a2a-453f-9d6d-b7919ff7bd4a.jpg?im_w=720"
          />
        </div>
      </div>

      {/* Where you will be */}
      <div className="flex flex-col gap-2 py-5 border-b-2 justify-start">
        <p className="text-xl my-2">Where you'll be</p>
        {isLoaded ? <Map /> : <div>Loading...</div>}
      </div>

      {/* Reviews */}
      <div className="flex flex-col gap-2 py-5 border-b-2 ">
        <div className="text-xl my-2 flex justify-start items-center gap-2">
          <svg viewBox="0 0 32 32" className="block h-[1rem] w-[1rem]">
            <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" />
          </svg>
          <p>4.68</p>
          <p> &middot; 100 reviews</p>
        </div>
        <div className="flex flex-col border-2 rounded-xl p-3">
          <div className="flex items-center mb-2">
            <Avatar hSize="h-10" wSize="w-10" />
            <div className="ml-3">
              <p className="font-medium">Floksong</p>
              <p className="font-thin text-sm">June 2022</p>
            </div>
          </div>
          <div className="font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            nesciunt numquam aliquam eius ducimus? Cumque reiciendis, nam id
            perferendis aut itaque consequuntur quod excepturi fugiat
            accusantium asperiores reprehenderit consequatur quidem optio ex,
            inventore eos exercitationem illo obcaecati atque, nostrum debitis
            sunt maxime harum! Natus rerum, illo cum laboriosam non qui!
          </div>
        </div>
      </div>

      {/* Hosted By */}
      <div className="flex flex-col py-5 border-b-2 ">
        <div className="flex gap-3">
          <Avatar hSize="h-12" wSize="w-12" />
          <div className="flex flex-col">
            <p className="text-xl">Hosted By Floksong</p>
            <p className="text-sm font-thin mb-3">Joined in October 2013</p>
          </div>
        </div>
        <div className="flex items-center justify-start mb-3">
          <svg viewBox="0 0 32 32" className="block h-[1rem] w-[1rem]">
            <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" />
          </svg>
          <p className="ml-3">100 Reviews</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-light text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            labore!
          </p>
          <p>During your stay </p>
          <p className="font-light text-gray-600">
            If you need any information, please do not hesitate to ask, as our
            house is close to your house, ready to take care of you
          </p>
          <p className="font-light text-gray-600">Languages: English , Thai</p>
        </div>
      </div>
    </>
  )
}

export default RoomContainer
