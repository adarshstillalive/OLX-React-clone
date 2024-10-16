import { createContext, ReactNode, useContext, useState } from "react";


interface User{
  uid:string;
  name: string;
  email:string;
}

interface UserContextType{
  user: User|null;
  setUser:(user:User|null)=>void;
}

const UserContext = createContext<UserContextType|undefined>(undefined);

export const useUser = ()=>{
  const context = useContext(UserContext);
  if(!context)throw new Error("No Context")

    return context
}

export const UserProvider = ({children}:{children:ReactNode})=>{

  const [user, setUser] = useState<User|null>(null)

  return(
    <UserContext.Provider value={{user, setUser}}>
      {children}
      </UserContext.Provider>
  )

}