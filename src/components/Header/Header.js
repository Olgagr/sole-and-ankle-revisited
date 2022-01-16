import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS, QUERIES } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <SideL>
          <Logo />
        </SideL>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women&nbsp;sdfdsf</NavLink>
          <NavLink href="/kids">Kidsdsfdsf</NavLink>
          <NavLink href="/collections">Collectionssdfdsfds</NavLink>
        </Nav>
        <SideR>
          <MobileActionButtons>
            <UnstyledButton>
              <IconWrapper id="shopping-bag" strokeWidth={2} />
            </UnstyledButton>
            <UnstyledButton>
              <IconWrapper id="search" strokeWidth={2} />
            </UnstyledButton>
            <UnstyledButton onClick={() => setShowMobileMenu(true)}>
              <IconWrapper id="menu" strokeWidth={2} />
            </UnstyledButton>
          </MobileActionButtons>
        </SideR>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${QUERIES.MAX_TABLET} {
    justify-content: space-between;
    align-items: center;
  }

  @media ${QUERIES.MAX_PHONE} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: clamp(1rem, 7.2vw - 5.5rem, 3rem);
  margin: 0px 48px;

  @media ${QUERIES.MAX_TABLET} {
    display: none;
  }
`;

const SideL = styled.div`
  flex: 1;

  @media ${QUERIES.MAX_TABLET} {
    flex: revert;
  }
`;

const SideR = styled.div`
  flex: 1;

  @media ${QUERIES.MAX_TABLET} {
    flex: revert;
  }
`;

const MobileActionButtons = styled.div`
  display: none;

  @media ${QUERIES.MAX_TABLET} {
    gap: 45px;
    display: flex;
  }

  @media ${QUERIES.MAX_PHONE} {
    gap: 24px;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const IconWrapper = styled(Icon)`
  color: ${COLORS.gray[900]};
`;

export default Header;
