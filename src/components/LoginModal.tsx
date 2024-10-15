import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { LuSmartphone } from "react-icons/lu";
import LoginEmailModal from './LoginEmailModal';
import { useUser } from '../utils/userContext';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const {user, setUser} = useUser()
  if (!isOpen) return null;
  const [loginEmail, setLoginEmail] = useState(false)

  const toggleLoginEmail = ()=>setLoginEmail(!loginEmail)

  return !user && (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      aria-labelledby="signupLabel"
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-white rounded-sm shadow-lg w-96 p-6 relative">
        <button
          className="absolute top-2 right-2 text-3xl text-black"
          onClick={onClose}
        >
          ✕
        </button>
        {!loginEmail && <><div className="text-center mb-6 flex flex-col items-center">
          <div className="w-28 my-2">
            <img alt="guitar image" src="https://statics.olx.in/external/base/img/loginEntryPointPost.webp" />
          </div>
          <div className="font-medium py-6">
            Help us become one of the safest places to buy and sell
          </div>
        </div>
        <div className="space-y-4 flex flex-col items-center">

          <button
            className="w-full border-2 border-black font-semibold py-3 rounded hover:border-4 transition flex items-center justify-center space-x-2"
          >
            <LuSmartphone className="text-xl" />
            <span>Continue with phone</span>
          </button>
          <button
            type="submit"
            className="w-full border-2 text-black font-normal py-2 rounded hover:bg-slate-100 transition flex items-center justify-center space-x-2"
          >
            <FcGoogle className="text-xl" />
            <span>Continue with Google</span>
          </button>

          <h1 className="font-semibold text-sm">OR</h1>

          <button
            className="text-sm font-bold underline hover:no-underline"
            onClick={toggleLoginEmail}
          >
            Login with Email
          </button>
          <div className="flex flex-col items-center pt-10 text-center">
            <p className="text-xs my-2">
              All your personal details are safe with us.
            </p>
            <p className="text-xs font-normal items-center">
              If you continue, you are accepting <span className="text-blue-500 cursor-pointer">OLX Terms and Conditions and Privacy Policy</span>
            </p>
          </div>

        </div></>
        }
        {loginEmail && <LoginEmailModal />}
      </div>
    </div>
  );
};

export default LoginModal;
