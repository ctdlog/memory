import { BiDotsVerticalRounded } from 'react-icons/bi';
import { RxHamburgerMenu } from 'react-icons/rx';

import * as S from '@/components/Header/index.styled';

const Header = () => (
  <S.Header>
    <RxHamburgerMenu />
    <h1>Memory</h1>
    <BiDotsVerticalRounded />
  </S.Header>
);

export default Header;
