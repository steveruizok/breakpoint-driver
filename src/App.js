import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import ModuleDemo from "./routes/ModuleDemo";
import ModuleVariants from "./routes/ModuleVariants";
import CardDemo from "./routes/CardDemo";

import "./App.css";
import styled, { css } from "react-emotion";
import { mq } from "./utils";

const containerStyles = css(
  mq({
    margin: ["20px 10px", "20px 20px", "20px 20px", "20px 20px", "20px auto"]
  })
);

const MainContainer = styled("div")`
  max-width: 1260px;
  display: grid;
  row-gap: 40px;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/card">Card</Link>
            </li>
            <li>
              <Link to="/module">Module</Link>
            </li>
            <li>
              <Link to="/variants">Module Variants</Link>
            </li>
          </ul>
        </nav>
        <MainContainer className={containerStyles}>
          <Route path="/" exact={true} component={Home} />
          <Route path="/variants" component={ModuleVariants} />
          <Route path="/module" component={ModuleDemo} />
          <Route path="/card" component={CardDemo} />
        </MainContainer>
      </div>
    );
  }
}

export default App;
