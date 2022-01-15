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
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <SideR>
          <UnstyledButton>
            <IconWrapper id="shopping-bag" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton>
            <IconWrapper id="search" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton>
            <IconWrapper id="menu" strokeWidth={2} />
          </UnstyledButton>
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
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media ${QUERIES.MAX_TABLET} {
    display: none;
  }
`;

const SideL = styled.div`
  flex: 1;
`;

const SideR = styled.div`
  flex: 1;

  & > * {
    display: none;
  }

  @media ${QUERIES.MAX_TABLET} {
    flex-basis: auto;
    display: flex;
    justify-content: flex-end;
    gap: 45px;

    & > * {
      display: revert;
    }
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
