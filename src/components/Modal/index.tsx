import { HTMLAttributes, ReactNode } from 'react';

import * as S from '@/components/Modal/index.styled';

import ModalPortal from './ModalPortal';

const Modal = ({ children }: { children: ReactNode }) => <ModalPortal>{children}</ModalPortal>;

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  width?: number;
}

const Layout = ({ children, width = 300 }: LayoutProps) => <S.Layout width={width}>{children}</S.Layout>;

interface BackgroundProps extends HTMLAttributes<HTMLDivElement> {}

const Background = ({ ...props }: BackgroundProps) => <S.Background {...props} />;

Modal.Layout = Layout;
Modal.Background = Background;

export default Modal;
