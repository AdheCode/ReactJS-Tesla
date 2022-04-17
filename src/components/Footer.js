import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <Menu>
        <a href="#">Tesla © 2022</a>
        <a href="#">Privacy & Legal</a>
        <a href="#">Vehicle Recalls</a>
        <HiddenMenu>
          <a href="#">Contact</a>
        </HiddenMenu>
        <a href="#">Careers</a>
        <a href="#">News</a>
        <HiddenMenu>
          <a href="#">Engage</a>
          <a href="#">Locations</a>
        </HiddenMenu>
      </Menu>
      <p>
        Design By <a href="https://github.com/AdheCode">AdheCode</a>
      </p>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  width: 100vw;
  min-height: 70px;
  align-items: center;
  display: flex;
  justify-content: center;
  left: 0;
  right: 0;
  bottom: 0;
  flex-direction: column;
  p {
    font-size: 12px;
    font-weight: 500;
    margin: 10px;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  a {
    margin: 0 10px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 500;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    a {
      margin-bottom: 20px;
    }
  }
`;

const HiddenMenu = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;
