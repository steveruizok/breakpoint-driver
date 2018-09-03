import React, { Component } from "react";
import { ModuleA } from "../components/modules";

// import styled from "react-emotion";

// const Box = styled("div")`
//   background-color: #fff;
//   border: 1px solid #aaa;
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   min-height: 64px;
// `;

class ModuleDemo extends Component {
  render() {
    return (
      <div>
        <ModuleA>{[1, 2, 3, 4, 5, 6, 7]}</ModuleA>
      </div>
    );
  }
}

export default ModuleDemo;
