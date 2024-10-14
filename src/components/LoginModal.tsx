import React from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      aria-labelledby="signupLabel"
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">SIGN UP</h1>
        </div>
        <form className="space-y-4">
          <input
            type="text"
            className="block w-full p-3 border rounded placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="First Name"
          />
          <input
            type="text"
            className="block w-full p-3 border rounded placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Last Name"
          />
          <input
            type="email"
            className="block w-full p-3 border rounded placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Email"
          />
          <input
            type="text"
            className="block w-full p-3 border rounded placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Zipcode"
          />
          <input
            type="password"
            className="block w-full p-3 border rounded placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Password"
          />
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded hover:bg-yellow-500 transition"
          >
            Order up!
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
