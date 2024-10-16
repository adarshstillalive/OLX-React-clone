import { ref, query, orderByChild, equalTo, get } from 'firebase/database';
import { db } from './firebase';


const fetchUserAds = async (userId:string | undefined) => {
  if (!userId) {
    console.log("No user ID provided.");
    return [];
  }

  try {
    const adsRef = ref(db, 'ads');
    const userAdsQuery = query(adsRef, orderByChild('uid'), equalTo(userId));

    const snapshot = await get(userAdsQuery);
    
    if (snapshot.exists()) {
      const data = snapshot.val();
      const adsArray = Object.entries(data).map(([id, value]) => ({
        id,
        ...value,
      }));

      return adsArray;
    } else {
      console.log('No ads found for this user');
      return [];
    }
  } catch (error) {
    console.error('Error fetching ads:', error);
    return [];
  }
};

export default fetchUserAds;
