import { useAuth } from "@/core/providers/auth/auth_context"
import useSearchFilter from "@/hooks/useSearchFilter"
import { observer } from "@legendapp/state/react"
import { Bath, Bed, HeartIcon, House, Star } from "lucide-react"
import placeHolderImg from "@/assets/landing-i3.png"

export const Listings = observer(() => {
  const search = useSearchFilter()
  const auth = useAuth()
  const user = auth.user.peek()
  const listingsFound = search.listings.found.get()
  const listings = search.listings.data.get()

  // TODO: create a like button
  const setLike = (id: string) => {
    console.log(id)
  }

  return (
    <div className="overflow-y-auto w-[40rem] bg-red-300 px-5">
      <h3 className="text-sm px-4 font-bold">
        {listingsFound}{" "}
        <span className="text-gray-700 font-normal">
          Places in {search.filter.location.peek()}
        </span>
      </h3>
      <div>
        {
          listings.map((ls) => 
            <Card 
              key={ls.id} 
              {...ls}
              like={user && user.likes && user.likes.includes(ls.id)} 
              setLike={auth.user && setLike}
            /> 
          )
        }
      </div>
    </div>
  )
})

// TODO: MAKE clickable
function Card(props: PropertiesSchema & { like?: boolean, setLike?: (id: string, like: boolean) => void } ) {
  return (
    <div>
      <div className="relative">
        {/* <div><img src={props.photoUrls?.[0] || "/placeholder.jpg"}/></div> */}
        <div className="w-full relative">
          <img className="object-cover w-full" src={placeHolderImg}/>
        </div>
        <div className="absolute bottom-2 left-4 flex gap-2">
          {
            props.isPetsAllowed && 
            <span className="bg-white/80 text-black text-xs font-semibold px-2 py-1 rounded-full">
              Pets Allowed
            </span>
          }
          {
            props.isParkingIncluded &&
            <span className="bg-white/80 text-black text-xs font-semibold px-2 py-1 rounded-full">
              Parking Included
            </span>
          }
        </div>
        {
          props.like && <button
            className="absolute bottom-2 right-4 bg-white hover:bg-white/90 rounded-full p-2 cursor-pointer"
            onClick={() => props.setLike!(props.id, !props.like)}
          >
          <HeartIcon
            className={`w-5 h-5 ${
              props.like ? "text-red-500 fill-red-500" : "text-gray-600"
            }`}
          />
          </button>
        }
      </div>

      <div>
        <div>
          <h1>{props.name}</h1>
          <p className="text-gray-600 mb-2">
            {props.address}, {props.city}
          </p>
        </div>
        <div className='flex justify-between mb-2'>
          <div className='flex items-center'>
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span className="font-semibold">
                {props.averageRating.toFixed(1)}
            </span>
            <span className="text-gray-600 ml-1">
              ({props.numberOfReviews} Reviews)
            </span>
          </div>
          <p className="text-lg font-bold text-center">
            ${props.pricePerMonth.toFixed(0)}{" "}
            <span className="text-gray-600 text-base font-normal"> /month</span>
          </p>
        </div>
      </div>

      <hr />

      <div className="flex justify-between items-center gap-4 text-gray-600 mt-2 mb-7">
        <span className="flex items-center">
          <Bed className="w-5 h-5 mr-2" />
          {props.beds} Bed
        </span>
        <span className="flex items-center">
          <Bath className="w-5 h-5 mr-2" />
          {props.baths} Bath
        </span>
        <span className="flex items-center">
          <House className="w-5 h-5 mr-2" />
          {props.squareFeet} sq ft
        </span>
      </div>
    </div>
  )
}