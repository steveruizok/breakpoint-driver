import React from "react";
import styled, { css } from "react-emotion";
import { mq } from "../utils";
import { Sizer } from "./Sizer";

const styles = css(
  mq({
    "grid-template-columns": [
      "100%",
      "50% 50%",
      "50% 50%",
      "50% 50%",
      "50% 25% 25%"
    ]
  })
);

const CardModuleContainer = styled("div")({
  display: "grid",
  width: "fill",
  "grid-gap": "20px"
});

export class CardModule extends React.Component {
  render() {
    return (
      <Sizer
        target={document.body}
        sizes={{
          s: 576,
          m: 768,
          t: 992,
          d: 1200,
          hd: Infinity
        }}
        render={size => {
          let content;
          switch (size) {
            case "s": {
              content = this.props.children.slice(0, 1);
              break;
            }
            case "m": {
              content = this.props.children.slice(0, 2);
              break;
            }
            case "t": {
              content = this.props.children.slice(0, 3);
              break;
            }
            case "d": {
              content = this.props.children.slice(0, 4);
              break;
            }
            case "hd": {
              content = this.props.children.slice(0, 5);
              break;
            }
            default: {
              content = null;
            }
          }

          return (
            <CardModuleContainer className={styles}>
              {content}
            </CardModuleContainer>
          );
        }}
      />
    );
  }
}
