import { useMemo } from 'react';

import { GoogleMap, LoadScriptNext, MarkerF } from '@react-google-maps/api';

import * as S from '@/components/GoogleMap/index.styled';
import { PUBLIC_GOOGLE_MAPS_API_KEY } from '@/constants/config';

import { useMarker } from './hooks';

const MapComponent = () => {
  const center = useMemo(() => ({ lat: 37.54, lng: 127.04 }), []);
  const { markers, createMarker } = useMarker();

  if (!PUBLIC_GOOGLE_MAPS_API_KEY) {
    return <div>Invalid API KEY</div>;
  }

  return (
    <S.Wrapper>
      <LoadScriptNext googleMapsApiKey={PUBLIC_GOOGLE_MAPS_API_KEY}>
        <GoogleMap zoom={18} center={center} mapContainerClassName="map-container" onClick={createMarker}>
          {markers.map((position, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <MarkerF key={index} position={position} />
          ))}
        </GoogleMap>
      </LoadScriptNext>
    </S.Wrapper>
  );
};

export default MapComponent;
