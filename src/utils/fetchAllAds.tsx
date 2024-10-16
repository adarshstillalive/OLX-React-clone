import { ref, onValue } from 'firebase/database';
import { db } from '../utils/firebase'; 

const fetchAllAds = (callback) => {
  const adsRef = ref(db, 'ads'); 

  const unsubscribe = onValue(adsRef, (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      const adsArray = Object.entries(data).map(([id, value]) => ({
        id,
        ...value,
      }));
      callback(adsArray);
    } else {
      console.log('No ads found');
      callback([]);
    }
  });

  return unsubscribe;
};

export default fetchAllAds;
