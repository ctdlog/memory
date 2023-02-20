import { ReactNode } from 'react';

import ReactDOM from 'react-dom';

interface Props {
  children: ReactNode;
}

const ModalPortal = ({ children }: Props) => {
  const element = typeof window !== 'undefined' && document.querySelector('#modal-root');
  return element && children ? ReactDOM.createPortal(children, element) : null;
};

export default ModalPortal;
