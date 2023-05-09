import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';

import { db } from '../services/firebase';

export const useContent = target => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const querySnapShot = await getDocs(collection(db, target))
        const allContent = querySnapShot.docs.map(content => ({
          docId: content.id,
          ...content.data()
        }))
        setContent(allContent)
      } catch (error) {
        console.log(error.message);
      }
    }
    return () => getData()
  }, [target])

  return { [target]: content }
}