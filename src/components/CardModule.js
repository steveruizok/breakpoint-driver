import React from "react";
import styled, { css } from "react-emotion";
import { mq } from "../utils";
import { Sizer } from "./Sizer";

const styles = css(
  mq({
    "grid-template-columns": [
      "1fr",
      "1fr 1fr",
      "3fr 2fr",
      "2fr 1fr 1fr",
      "3fr 1fr 1fr"
    ]
  })
);

const CardModuleContainer = styled("div")({
  display: "grid",
  "grid-gap": "20px",
  "box-sizing": "border-box",
  border: "1px solid #7cc"
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
              content = this.props.children.slice(0, 3);
              break;
            }
            case "m": {
              content = this.props.children.slice(0, 4);
              break;
            }
            case "t": {
              content = this.props.children.slice(0, 4);
              break;
            }
            case "d": {
              content = this.props.children.slice(0, 6);
              break;
            }
            case "hd": {
              content = this.props.children.slice(0, 6);
              break;
            }
            default: {
              content = null;
            }
          }

          return (
            <CardModuleContainer className={styles}>
              {content}
              Module / Viewport Size: {size}
            </CardModuleContainer>
          );
        }}
      />
    );
  }
}
