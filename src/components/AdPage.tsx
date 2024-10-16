import { useParams } from "react-router-dom"
import { useAds } from "../utils/adContext"
import { useState } from "react";


const AdPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { ads } = useAds();

  const [item] = ads.filter(curr => curr.id === id);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === item.photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? item.photos.length - 1 : prevIndex - 1
    );
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="mx-36 flex flex-col h-screen">

      <div className="relative bg-black flex items-center justify-center w-2/3 h-4/6">

        <button
          className="absolute left-2 text-white text-4xl"
          onClick={handlePrev}
        >
          &#8592;
        </button>

        <img
          alt="item image"
          className="object-contain max-h-full"
          src={item.photos[currentIndex]}
        />

        <button
          className="absolute right-2 text-white text-4xl"
          onClick={handleNext}
        >
          &#8594;
        </button>
      </div>

      <div className="border-2 w-2/3 h-20 flex items-center border-gray-300 overflow-x-auto">
        {item.photos.map((photo, index) => (
          <img
            key={index}
            alt="item thumbnail"
            className={`w-16 h-16 ml-4 cursor-pointer ${index === currentIndex ? 'border-2 border-blue-500' : ''}`}
            src={photo}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>

      <div className="border-2 p-4 w-2/3 mt-2">
        <h1 className="text-xl font-bold">Description</h1>
        <p className="mt-4 text-sm w-2/3">{item.description}</p>
      </div>
    </div>
  );
};
export default AdPage
