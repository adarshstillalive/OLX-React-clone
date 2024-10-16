import { FiHeart, FiHelpCircle } from "react-icons/fi";
import { useUser } from "../utils/userContext"
import { LuClipboardList, LuSettings } from "react-icons/lu";
import { GoCreditCard } from "react-icons/go";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useAds } from "../utils/adContext";

interface ProCardProps{
  onClose2:()=>void
}

const ProfileCard:React.FC<ProCardProps> = ({onClose2}) => {
  const navigate = useNavigate()
  const { user, setUser } = useUser()
  const {ads, setAds} = useAds()

  const handleNavigate = (path:string)=>{
    navigate(path)
    onClose2()
  }

  const handleLogout = ()=>{
    setUser(null);
    setAds([])
    handleNavigate('/')
  }
  return (
    <div className="absolute flex flex-col gap-2 w-60  border-0 border-black right-36 top-16 z-5 bg-white shadow-lg rounded-sm">
      <div className="flex flex-col p-4 items-center">
        <div className="flex items-center p-4 justify-start">
    <img alt="user logo" className="w-16 rounded-full" src="
https://apollo.olx.in/v1/files/jxdvyqtjsazh-IN/image;s=120x120"/>

        <h2 className="text-lg m-4 font-bold">{user?.name}</h2>
        </div>
        <button
          className="w-full text-white bg-green-950 border-2 font-semibold py-3 flex items-center justify-center space-x-2"
        >
          View and edit profile
        </button>
      </div>
      <div>
      </div>
      <div className="w-full border-t-2">
        <button
          className="w-full font-normal py-3 rounded hover:bg-cyan-100 transition items-center flex pl-4 space-x-2"
          onClick={()=>handleNavigate('/myads')}
        >
          <FiHeart className="text-xl" />
          <span>My ADS</span>
        </button>
        <button
          className="w-full font-normal py-3 rounded hover:bg-cyan-100 transition items-center flex pl-4 space-x-2"
        >
          <LuClipboardList className="text-xl" />
          <span>Buy Business Packages</span>
        </button>
        <button
          className="w-full font-normal py-3 rounded hover:bg-cyan-100 transition items-center flex pl-4 space-x-2"
        >
          <GoCreditCard className="text-xl" />
          <span>Bought Packages & Billing</span>
        </button>
    </div>
      <div className="w-full border-t-2">
        <button
          className="w-full font-normal py-3 rounded hover:bg-cyan-100 transition items-center flex pl-4 space-x-2"
        >
          <FiHelpCircle className="text-xl" />
          <span>Help</span>
        </button>
        <button
          className="w-full font-normal py-3 rounded hover:bg-cyan-100 transition items-center flex pl-4 space-x-2"
        >
          <LuSettings className="text-xl" />
          <span>Settings</span>
        </button>
        <button
          className="w-full font-normal py-3 rounded hover:bg-cyan-100 transition items-center flex pl-4 space-x-2"
        onClick={()=>handleLogout()}
        >
          <RiLogoutBoxLine className="text-xl" />
          <span>Logout</span>
        </button>
    </div>
    </div>
  );
}

export default ProfileCard
