import React, { Component } from "react";
import { CardModule } from "../components/CardModule";
import Card from "../components/Card";

class CardDemo extends Component {
  render() {
    return (
      <div>
        <CardModule>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardModule>
      </div>
    );
  }
}

export default CardDemo;
