/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, QUERIES } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <OverlayWrapper isOpen={isOpen} onDismiss={onDismiss}>
      <ContentWrapper aria-label="mobile-menu">
        <Top>
          <UnstyledButton onClick={onDismiss}>
            <Icon id="close" />
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </UnstyledButton>
        </Top>
        <Nav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Nav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </ContentWrapper>
    </OverlayWrapper>
  );
};

const OverlayWrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  background-color: hsla(220deg 5% 40% / 0.8);
`;

const ContentWrapper = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 300px;
  padding: 32px 22px 32px;
  background: ${COLORS.white};
`;

const Top = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

const Nav = styled.nav`
  a {
    display: block;
    margin-bottom: 20px;
    font-size: 1.125rem;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    color: ${COLORS.gray[900]};

    &:hover {
      color: ${COLORS.secondary};
    }
  }
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  a {
    display: block;
    color: ${COLORS.gray[700]};
    font-size: 0.875rem;
    text-decoration: none;

    &:not(:last-of-type) {
      margin-bottom: 10px;
    }

    &:hover {
      color: ${COLORS.secondary};
    }
  }
`;

export default MobileMenu;
