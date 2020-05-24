import Link from 'next/link';

import { Container, Flex } from '../styles/globalStyles';
import { HeaderContainer } from '../styles/headerStyles';

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Flex spaceBetween flexStart noHeight>
          <Link href='/'>
            <img src={require('../assets/img/logo.png')} alt="Logo" />
          </Link>
        </Flex>
      </Container>
    </HeaderContainer>
  );
};

export default Header;