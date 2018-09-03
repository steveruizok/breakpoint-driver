import React, { Component } from "react";

let count = 0;

export class Sizer extends Component {
  elem = React.createRef();
  state = {
    size: "initial"
  };

  compose = () => {
    let size;

    // get the clientWidth of the supplied target or
    // the component's ref element
    const currentWidth = this.props.target
      ? this.props.target.clientWidth
      : this.elem.current.clientWidth;

    // get the largest size from our sizes prop that includes
    // our current width
    size = Object.keys(this.props.sizes).find(
      k => currentWidth < this.props.sizes[k]
    );

    if (this.state.size === size) {
      return;
    }

    this.setState({
      size: size
    });
  };

  componentWillMount() {
    window.addEventListener("resize", this.compose);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.compose);
  }

  componentDidMount() {
    this.compose();
  }

  render() {
    count++;
    console.log("Resized: " + count);
    return (
      <div className="sizer" ref={this.elem}>
        {this.props.render(this.state.size)}
      </div>
    );
  }
}

Sizer.defaultProps = {
  sizes: {
    s: 576,
    m: 768,
    t: 992,
    d: 1260,
    hd: Infinity
  }
};
