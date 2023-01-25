/* global google */
import { useEffect, useState } from 'react';

import { collection, doc, getDocs, setDoc } from 'firebase/firestore';

import db from '@/lib/firebase/firebase';

interface LatLng {
  lat: number;
  lng: number;
}

export const useMarker = () => {
  const [markers, setMarkers] = useState<LatLng[]>([]);

  const createMarker = async (e: google.maps.MapMouseEvent) => {
    const lat = e.latLng?.lat();
    const lng = e.latLng?.lng();

    // TODO: React Query로 변경할 것.
    if (lat && lng) {
      setMarkers((current) => [...current, { lat, lng }]);
    }

    await setDoc(doc(db, 'latlng', String(Math.random())), { lat, lng });
  };

  const fetchMarker = async () => {
    const querySnapshot = await getDocs(collection(db, 'latlng'));
    setMarkers(querySnapshot.docs.map((latlngDoc) => latlngDoc.data()) as LatLng[]);
  };

  useEffect(() => {
    fetchMarker();
  }, []);

  return { markers, createMarker };
};
