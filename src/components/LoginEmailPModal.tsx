import React from 'react'
import { LOGO_URL } from '../utils/constant'

const LoginEmailPModal = () => {
  return (
    <div>
      <div
          className="w-12 h-12 bg-center bg-cover filter brightness-0"
          style={{ backgroundImage: `url(${LOGO_URL})` }}
        ></div>
        <h1 className="text-xl font-bold">
          password
        </h1>

        <input
          placeholder="Email"
          className="border-2 pl-2 border-slate-300 w-full h-12"
            
            >
        </input>
    </div>
  )
}

export default LoginEmailPModal
