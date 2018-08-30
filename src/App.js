import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import ModuleDemo from "./routes/ModuleDemo";
import CardDemo from "./routes/CardDemo";

import "./App.css";
import styled, { css } from "react-emotion";
import { mq } from "./utils";

const containerStyles = css(
  mq({
    margin: ["20px 10px", "20px 20px", "20px 20px", "20px 20px", "20px auto"],
    backgroundColor: ["#efefef", "#ececec", "#ebebeb", "#e9e9e9", "#e7e7e7"]
  })
);

const MainContainer = styled("div")`
  max-width: 1160px;
  background-color: #efefef;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/home">Home</Link> <Link to="/article">Article</Link>
        </nav>
        <MainContainer className={containerStyles}>
          <Route path="/" component={Home} />
          <Route path="/module" component={ModuleDemo} />
          <Route path="/card" component={CardDemo} />
        </MainContainer>
      </div>
    );
  }
}

export default App;
