import React, { Component } from "react";
import { CardModule } from "../components/CardModule";

import styled, { css } from "react-emotion";

const Box = styled("div")`
  background-color: #fff;
  border: 1px solid #aaa;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 64px;
`;

class ModuleDemo extends Component {
  render() {
    return (
      <div>
        <CardModule>
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
          <Box>4</Box>
          <Box>5</Box>
          <Box>6</Box>
        </CardModule>
      </div>
    );
  }
}

export default ModuleDemo;
