import { MarkerF } from '@react-google-maps/api';

interface Props {
  lat: number;
  lng: number;
}

const Marker = ({ lat, lng }: Props) => {
  return <MarkerF position={{ lat, lng }} />;
};

export default Marker;
