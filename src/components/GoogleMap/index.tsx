/* global google */
import { useEffect, useMemo, useState } from 'react';

import { GoogleMap, LoadScriptNext, MarkerF } from '@react-google-maps/api';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';

import * as S from '@/components/GoogleMap/index.styled';
import { PUBLIC_GOOGLE_MAPS_API_KEY } from '@/constants/config';
import db from '@/lib/firebase/firebase';

interface LatLng {
  lat: number;
  lng: number;
}

const MapComponent = () => {
  const center = useMemo(() => ({ lat: 37.54, lng: 127.04 }), []);
  const [selected, setSelected] = useState<LatLng[]>([]);

  const handleClick = async (e: google.maps.MapMouseEvent) => {
    const lat = e.latLng?.lat();
    const lng = e.latLng?.lng();

    // TODO: React Query로 변경할 것.
    if (lat && lng) {
      setSelected((current) => [...current, { lat, lng }]);
    }

    await setDoc(doc(db, 'latlng', String(Math.random())), { lat, lng });
  };

  const fetchMarker = async () => {
    const querySnapshot = await getDocs(collection(db, 'latlng'));
    setSelected(querySnapshot.docs.map((latlngDoc) => latlngDoc.data()) as LatLng[]);
  };

  useEffect(() => {
    fetchMarker();
  }, []);

  if (!PUBLIC_GOOGLE_MAPS_API_KEY) {
    return <div>Invalid API KEY</div>;
  }

  return (
    <S.Wrapper>
      <LoadScriptNext googleMapsApiKey={PUBLIC_GOOGLE_MAPS_API_KEY}>
        <GoogleMap zoom={18} center={center} mapContainerClassName="map-container" onClick={handleClick}>
          {selected.map((position, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <MarkerF key={index} position={position} />
          ))}
        </GoogleMap>
      </LoadScriptNext>
    </S.Wrapper>
  );
};

export default MapComponent;
