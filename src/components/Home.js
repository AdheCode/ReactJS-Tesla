import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        img="/images/model-3.jpg"
        title="Model 3"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        img="/images/model-y.jpg"
        title="Model Y"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        img="/images/model-s.jpg"
        title="Model S"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        img="/images/model-x.jpg"
        title="Model X"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        img="/images/solar-panel.jpg"
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        img="/images/solar-roof.jpg"
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        img="/images/accessories.jpg"
        title="Accessories"
        description=""
        leftBtnText="Shop Now"
      />
      <Footer />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
