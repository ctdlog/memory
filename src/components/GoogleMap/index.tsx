import { useMemo, useState } from 'react';

import { GoogleMap, LoadScriptNext, MarkerF } from '@react-google-maps/api';

import * as S from '@/components/GoogleMap/index.styled';
import Modal from '@/components/Modal';
import { PUBLIC_GOOGLE_MAPS_API_KEY } from '@/constants/config';
import useToggle from '@/hooks/useToggle';

import { useMarker } from './hooks';

const MapComponent = () => {
  const center = useMemo(() => ({ lat: 37.54, lng: 127.04 }), []);
  const { value: isModalOpen, toggle: toggleModal } = useToggle(false);
  const [currentPosition, setCurrentPosition] = useState({ lat: 0, lng: 0 });
  const { markers, createMarker } = useMarker();

  // eslint-disable-next-line no-undef
  const handleClick = (e: google.maps.MapMouseEvent) => {
    if (!e.latLng) {
      return;
    }

    setCurrentPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() });
    toggleModal();
  };

  if (!PUBLIC_GOOGLE_MAPS_API_KEY) {
    throw new Error(
      'You must provide a Google Maps API key. See https://developers.google.com/maps/documentation/javascript/get-api-key for more information. If you\'re using a .env file, please make sure it\'s included in the "files" array of your package.json (and consider adjusting your .gitignore as well).'
    );
  }

  return (
    <S.Wrapper>
      <LoadScriptNext googleMapsApiKey={PUBLIC_GOOGLE_MAPS_API_KEY}>
        <GoogleMap zoom={18} center={center} mapContainerClassName="map-container" onClick={handleClick}>
          {markers.map((position, index) => (
            <MarkerF key={index} position={position} />
          ))}
        </GoogleMap>
      </LoadScriptNext>
      {isModalOpen && (
        <Modal>
          <Modal.Layout width={400}>
            <h1>이 장소에 남기고 기록하고 싶은 것을 작성해주세요.</h1>
            <h2>
              Position: x({currentPosition.lat}) y({currentPosition.lng})
            </h2>
          </Modal.Layout>
          <Modal.Background onClick={toggleModal} />
        </Modal>
      )}
    </S.Wrapper>
  );
};

export default MapComponent;
