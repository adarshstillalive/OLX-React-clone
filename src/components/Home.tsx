
import { useEffect } from 'react';
import { useCommonAds } from '../utils/commonContext'
import fetchAllAds from '../utils/fetchAllAds';
import CommonItemCard from './CommonItemCard';

const Home = () => {
  const {commonAds, setCommonAds} = useCommonAds();

  useEffect(()=>{
    const unsubscribe = fetchAllAds(setCommonAds)

    return ()=> unsubscribe && unsubscribe()
  },[])

  return commonAds.length>0? (
    <div className="mx-40">
      <h1 className="text-2xl">Fresh recommendations</h1>
      <div className="gap-4 grid grid-cols-4">
        {commonAds.map(item=>(<CommonItemCard key={item.id} item={item} />))}
      </div>
    </div>
  ):(
    <div className="flex items-center justify-center">
    <h1 className="text-3xl items-center font-bold">No Items</h1>
    </div>
  )
}

export default Home
