import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { CATEGORIES } from '../utils/constant';

const Header2 = () => {
  

  return (
    <div className="flex justify-center h-10 mt-1 border-2">
      <div className="flex justify-center items-center gap-2 w-40 h-10">
        <button className="text-sm font-semibold">ALL CATEGORIES</button>
        <FaAngleDown />
      </div>
      <div className="flex gap-6">
        {CATEGORIES.map(item=>(<button key={item} className="text-sm font-normal">{item}</button>))}
      </div>
    </div>
  )
}

export default Header2
