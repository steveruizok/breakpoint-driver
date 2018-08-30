import React, { Component } from "react";

export class Sizer extends Component {
  elem = React.createRef();
  count = 0;
  state = {
    size: "intital"
  };

  compose = () => {
    let size;
    const width = this.props.target
      ? this.props.target.clientWidth
      : this.elem.current.clientWidth;

    size = Object.keys(this.props.sizes).find(k => width < this.props.sizes[k]);

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
    return <div ref={this.elem}>{this.props.render(this.state.size)}</div>;
  }
}

Sizer.defaultProps = {
  sizes: {
    s: 576,
    m: 768,
    t: 992,
    d: 1200,
    hd: Infinity
  }
};
