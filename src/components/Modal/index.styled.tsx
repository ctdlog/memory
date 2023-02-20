import styled from '@emotion/styled';

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  background: rgb(0 0 0 / 60%);
`;

const Layout = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  width: ${({ width }: { width?: number }) => (width ? `${width}px` : 'auto')};
  z-index: 100;
`;

export { Background, Layout };
