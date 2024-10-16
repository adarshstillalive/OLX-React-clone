
import { useUser } from "../utils/userContext"
import AdCard from "./AdCard";
import { useAds } from "../utils/adContext";


const MyADS = () => {
  const { user } = useUser()
  const {ads} = useAds()
  

  return (
    <div className="mx-8 sm:mx-16 lg:mx-32 my-4 pb-96">
      <div className="flex gap-4 items-center rounded-sm bg-slate-100 h-20 border p-4">

        <div className="flex-shrink-0">
          <img
            className="w-14"
            alt="Sell banner"
            src="https://statics.olx.in/olxin/packages/sell_banner.png"
          />
        </div>

        <div className="flex flex-col flex-grow gap-1">
          <h1 className="text-lg font-bold">Want to sell more?</h1>
          <p className="text-sm text-gray-600">
            Post more ads for less. Save money with our packages.
          </p>
        </div>

        <div className="flex-shrink-0">
          <button className="px-14 py-2 font-semibold text-white bg-green-950 rounded-sm hover:bg-green-800">
            Show me packages
          </button>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-2">
        {ads.length>0 && ads.map(ad=>(<AdCard key={ad.id} ads={ad} />))}
        
      </div>
    </div>

  );
}

export default MyADS
