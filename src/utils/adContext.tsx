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
  ads: Ads[];
  setAds: React.Dispatch<React.SetStateAction<Ads[]>>; 
}

const adsContext = createContext<AdContextType | undefined>(undefined);

export const useAds = () => {

  const context = useContext(adsContext);

  if (!context) throw new Error('Context error');
  return context;
  
};



export const AdsProvider = ({ children }: { children: ReactNode }) => {

  const [ads, setAds] = useState<Ads[]>([]); 

  return (
    <adsContext.Provider value={{ ads, setAds }}>
      {children}
    </adsContext.Provider>
  );
};
