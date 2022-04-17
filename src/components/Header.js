import React, { useState } from "react";
import styled from "styled-components";
import { CgClose } from "react-icons/cg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <a href="/">
        <img src="/images/logo.svg" />
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <a onClick={() => setIsOpen(true)}>Menu</a>
      </RightMenu>
      <MenuNav show={isOpen}>
        <CloseWrapper>
          <CustomClose onClick={() => setIsOpen(false)}>
            <CgClose />
          </CustomClose>
        </CloseWrapper>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Powerwall</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Find Us</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Investor Relations</a>
        </li>
      </MenuNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  z-index: 1;
  width: 100vw;
  min-height: 60px;
  align-items: center;
  display: flex;
  position: fixed;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  flex: 1;
  width: 100%;
  @media (max-width: 1024px) {
    flex-direction: column;
    display: none;
  }
  a {
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    margin-right: 20px;
  }

  a:hover {
    background-color: hsla(0, 0%, 0%, 0.05);
    border-radius: 12px;
    padding: 10px;
    opacity: 0.85;
    color: black;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  a {
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    margin-left: 20px;
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    padding: 0px;
    a {
      display: none;
    }

    a:last-child {
      display: block;
      background-color: hsla(0, 0%, 0%, 0.05);
      border-radius: 12px;
      padding: 10px;
      opacity: 0.85;
      color: black;
    }
  }
`;

const MenuNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.4s;
  flex-direction: column;
  text-align: start;
  overflow-y: auto;
  @media (max-width: 768px) {
    width: 275px;
  }
  li {
    padding: 15px 0;
    a {
      font-size: 14px;
      font-weight: 500;
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
  }
`;

const CustomClose = styled(CgClose)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
