import React from 'react'

const CommonItemCard = ({item}) => {
  return (
    <div className="h-64 border-2 rounded-md border-gray-300 overflow-hidden">
    <div className="h-3/5 border-2 bg-gray-900 flex justify-center items-center border-gray-300 m-2">
      <img className="object-cover w-full h-full" alt="item image" src={item.photos[0]} />
    </div>
    <div className="px-2 py-2 h-2/5 flex flex-col">
      <h1 className="text-xl font-bold truncate">₹ {item.price}</h1>
      <p className="text-md text-gray-600 truncate">{item.title}</p>
      <p className="text-xs text-gray-600 truncate">{item.description}</p>
    </div>
  </div>


  )
}

export default CommonItemCard
