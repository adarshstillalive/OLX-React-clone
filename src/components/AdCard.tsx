
import { IoEyeOutline } from 'react-icons/io5'
import { FaHeart } from 'react-icons/fa6'
import { Link } from 'react-router-dom';

const AdCard = ({ads}) => {
  
  return (
    <Link to={`/item/${ads.id}`} className="h-36 w-full rounded-md flex border-2 border-gray-300 mb-4">
      <div className="w-32 border-r-2 pl-2 flex flex-col justify-center border-gray-300">
        <p className="text-xs">FROM:</p>
        <p className="text-xs">TO:</p>
      </div>
      <div className="w-full">
        <div className="h-24 flex border-b-2 items-center border-gray-300">
          <div className="w-16 h-16 ml-8 rounded-sm border-2 border-gray-300 overflow-hidden">
            {ads.photos[0] ? (
              <img alt="ad image" src={ads.photos[0]} className="w-full h-full object-cover" />
            ) : (
              <div className="flex items-center justify-center w-full h-full text-gray-400">
                No Image
              </div>
            )}
          </div>
          <div className="w-full">
            <h2 className="font-semibold pl-4 text-lg">{ads.title}</h2>
          </div>
        </div>
        <div className="flex h-8 pt-3 justify-between items-center">
          <div className="pl-8 gap-4 flex items-center">
            <IoEyeOutline />
            <p>Views: 32</p>
            <FaHeart />
            <p>Likes: 8</p>
          </div>
          <div className="flex items-center gap-4 pr-8">
            <button className="border-2 border-green-950 rounded-md p-2 text-xs font-semibold hover:bg-green-950 hover:text-white transition duration-200">
              Mark as sold
            </button>
            <button className="border-2 border-green-950 rounded-md p-2 text-xs font-semibold hover:bg-green-950 hover:text-white transition duration-200">
              Sell faster now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default AdCard
