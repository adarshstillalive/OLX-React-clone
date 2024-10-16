import { createContext, ReactNode, useContext, useState } from "react";

interface Ads {
  id: string;
  uid: string;
  brand: string;
  title: string;
  description: string;
  price: string;
  photos: string[];
}

interface AdContextType {
  commonAds: Ads[];
  setCommonAds: React.Dispatch<React.SetStateAction<Ads[]>>; 
}

const commonContext = createContext<AdContextType | undefined>(undefined);

export const useCommonAds = () => {

  const context = useContext(commonContext);

  if (!context) throw new Error('Context error');
  return context;
  
};



export const CommonAdsProvider = ({ children }: { children: ReactNode }) => {

  const [commonAds, setCommonAds] = useState<Ads[]>([]); 

  return (
    <commonContext.Provider value={{ commonAds, setCommonAds }}>
      {children}
    </commonContext.Provider>
  );
};
