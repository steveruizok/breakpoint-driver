import React from "react";
import styled, { css } from "react-emotion";
import { Sizer } from "./Sizer";

import { mq } from "../utils";

const styles = css(
  mq({
    padding: ["10px", "20px"]
  })
);

const CardContainer = styled("div")`
  display: block;
  justify-content: space-around;
  overflow: hidden;
  min-height: 48px;
  background: #fff;
  border-radius: 2px;
  height: 100%;
  width: 100%;
  background: #c792ea77;
  border: 1px solid #c792ea;
`;

class Wodge extends React.Component {
  render() {
    console.log("Card rendered");
    return (
      <CardContainer>
        <Sizer
          sizes={{
            xs: 116,
            s: 292,
            m: 456,
            l: 660,
            xl: Infinity
          }}
          render={size => {
            return (
              <div className={styles}>
                <h4>Wodge</h4>
                {this.props.children}
                {/* <p>Card size: {size}</p> */}
              </div>
            );
          }}
        />
      </CardContainer>
    );
  }
}

export default Wodge;
