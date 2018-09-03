import React, { Component } from "react";
// import { CardModule } from "../components/CardModule";
import Card from "../components/Card";
import styled from "react-emotion";

const Container = styled("div")`
  margin: 100px;
  height: 140px;
`;

class CardDemo extends Component {
  render() {
    return (
      <Container>
        <Card />
      </Container>
    );
  }
}

export default CardDemo;
