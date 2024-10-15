import { useEffect, useState, createContext } from 'react'
import { LOGO_URL } from '../utils/constant'
import { checkEmail, checkPassword } from '../utils/validate';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useUser } from '../utils/userContext';



const LoginEmailModal = () => {
  const {user, setUser} = useUser()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('')
  const [checkEmailInFirebase, setCheckEmailInFirebase] = useState(false);

  if (checkEmailInFirebase) {

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const name = "Tom"
        setUser({name, email})
        setCheckEmailInFirebase(false)
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage('Invalid Credentials')
        console.log(error);
        setCheckEmailInFirebase(false)

      })

  }

  useEffect(() => {
    const isValid = checkEmail(email) && checkPassword(password)
    isValid ? setIsDisabled(false) : setIsDisabled(true)
  }, [email, password])

  return !user &&(
    <>
      <div className="flex flex-col gap-6 items-center">
        <div
          className="w-12 h-12 bg-center bg-cover filter brightness-0"
          style={{ backgroundImage: `url(${LOGO_URL})` }}
        ></div>
        <h1 className="text-xl font-bold">
          Enter your email to login
        </h1>

        <input
          placeholder="Email"
          className="border-2 pl-2 border-slate-300 w-full h-12"
          onChange={(e) => setEmail(e.target.value)}
        >
        </input>

        <input
          placeholder="Password"
          type='password'
          className="border-2 pl-2 border-slate-300 w-full h-12"
          onChange={(e) => setPassword(e.target.value)}
        >
        </input>
        <p className="text-red-500 text-sm">{errorMessage}</p>
        <div className="w-full bg-yellow-50 p-2 text-base">
          If you are a new user please select any other login option from previous page.
        </div>

        <button
          className={`w-full py-3 rounded flex items-center justify-center space-x-2 font-semibold border-2 
    ${isDisabled
              ? 'bg-gray-300 text-green-950 cursor-not-allowed border-gray-400'
              : 'bg-green-950 text-white border-black hover:bg-slate-100 hover:text-green-950'
            }
            `}
          onClick={() => setCheckEmailInFirebase(true)}
          disabled={isDisabled}
        >
          <span>Next</span>
        </button>
        <p className="text-xs text-center">
          Your email is never shared with external parties nor do we use it to spam you in any way
        </p>
        <div className="my-2"></div>
      </div>
    </>
  )
}

export default LoginEmailModal
