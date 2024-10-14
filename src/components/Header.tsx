import { FaAngleDown } from "react-icons/fa6";
import { FaSearch, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import Header2 from "./Header2";
import LoginModal from "./LoginModal";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const handleToggle = ()=>setIsModalOpen(!isModalOpen)
  

  return (
    <nav className="bg-slate-50 h-16 shadow-md border-2 border-white fixed w-full top-0 z-[999]">
      <div className="flex justify-between items-center w-full px-6">
        
        <div className="flex items-center flex-1 gap-4">

          <div className="w-16 pt-2 h-16 mx-2">
            <div
              className="w-12 h-12 bg-center bg-cover filter brightness-0"
              style={{ backgroundImage: `url(${LOGO_URL})` }}
            ></div>
          </div>

          <div className="flex border-2 border-black rounded h-12 w-64 bg-white">
            <button className="p-2">
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Ernakulam, Kochi"
              className="flex-grow placeholder-gray-700 text-base font-normal focus:outline-none"
            />
            <button className="p-2">
              <FaAngleDown />
            </button>
          </div>

          <div className=" flex items-center border-2 border-black rounded h-12 w-full sm:w-5/7 lg:w-5/7 bg-white">
            <input
              type="text"
              placeholder="Find Cars, Mobile Phones and more..."
              className="flex-grow placeholder-gray-700 text-base font-normal focus:outline-none px-2"
            />
            <button className="w-12 py-4 pl-4 bg-black text-white ">
              <FaSearch />
            </button>
          </div>
        </div>

        <div className="flex ml-4 items-center gap-6">

          <div className="flex items-center cursor-pointer gap-2">
            <p className="font-semibold text-black hover:text-opacity-80">
              ENGLISH
            </p>
            <FaAngleDown />
          </div>

          <div className="flex items-center gap-6">
            <button
              className="text-lg font-semibold underline hover:no-underline"
              onClick={()=>handleToggle()}
            >
              Login
            </button>

            <button
              className="px-4 py-1 border-4 font-semibold border-t-[#23E5DB] 
              border-r-[#3A77FF] border-l-[#FFCE32] border-b-[#3A77FF] 
              rounded-3xl shadow-xl flex items-center gap-2"
            >
              <FaPlus /> SELL
            </button>
          </div>
        </div>
      </div>
      <Header2 />
      <LoginModal isOpen={isModalOpen} onClose={handleToggle} />
    </nav>
    
  );
};

export default Navbar;
