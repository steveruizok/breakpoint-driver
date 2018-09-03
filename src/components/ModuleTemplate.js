import React from "react";
import styled, { css } from "react-emotion";
import { Sizer } from "./Sizer";

const Cell = styled("div")`
  display: block;
  height: 100%;
  width: 100%;
`;

const default_container = css`
  display: grid;
  grid-gap: 20px;
  grid-auto-rows: 28px;
  grid-template-columns: repeat(16, 1fr);
  grid-auto-rows: fit-content;
  border: 1px solid #7cc;
`;

export class ModuleTemplate extends React.Component {
  keyCount = 0; // replace with some kind of uniqueId or whatever
  renderCount = 0; // number of times this has rendered
  childCount = 0; // number of children to display

  // Create an element around a child, set its style based on priotity,
  // and pass the priority (primary, secondary, or tertiary) as a prop
  wrapChild = (sizeStyle, priority, child) => {
    this.keyCount++;

    let Component = sizeStyle[priority].component;

    return (
      <Cell className={sizeStyle[priority].style}>
        <Component key={`cell_${this.keyCount}`} priority={priority}>
          {child}
        </Component>
      </Cell>
    );
  };

  // Same as above, but for an array of children.
  wrapChildren = (sizeStyle, priority, children) => {
    return children.map(child => this.wrapChild(sizeStyle, priority, child));
  };

  // Set the number of children to display and the styles for
  // primary, secondary, and tertiary grid containers
  setStyles = size => {
    if (size === "initial") {
      return;
    }

    const sizeStyle = this.props.styles[size]
      ? this.props.styles[size]
      : this.props.styles[Object.keys(this.props.styles)[0]];

    this.childCount = sizeStyle.childCount;
    this.primary = sizeStyle.primary;
    this.secondary = sizeStyle.secondary;
    this.tertiary = sizeStyle.tertiary;
  };

  render() {
    this.renderCount++;
    return (
      <Sizer
        target={document.body}
        sizes={{
          s: 576,
          m: 768,
          t: 992,
          d: 1260,
          hd: Infinity
        }}
        render={size => {
          if (size === "initial" || !Array.isArray(this.props.children)) {
            return <div>nope</div>;
          }

          console.log(this.props.styles);

          const sizeStyle = this.props.styles[size]
            ? this.props.styles[size]
            : this.props.styles(Object.keys(this.props.styles)[0]);

          let container = this.props.container
            ? this.props.container
            : default_container;

          return (
            <div>
              <div className={container}>
                {this.wrapChild(sizeStyle, "primary", this.props.children[0])}
                {this.props.children[1]
                  ? this.wrapChild(
                      sizeStyle,
                      "secondary",
                      this.props.children[1]
                    )
                  : null}
                {this.wrapChildren(
                  sizeStyle,
                  "tertiary",
                  this.props.children.slice(
                    2,
                    sizeStyle.childCount ? sizeStyle.childCount : undefined
                  )
                )}
              </div>
              {/* Module / viewport size: {size}, Rendered: {this.renderCount} times */}
            </div>
          );
        }}
      />
    );
  }
}
