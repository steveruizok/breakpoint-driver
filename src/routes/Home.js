import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <p>This is a demo of Modules and Cards.</p>
        <p>
          Modules change their layouts based on the viewport width. Cards change
          their layouts based on their own element widths.
        </p>
        <p>Both use a component called Resizer to drive layout changes.</p>
      </div>
    );
  }
}

export default Home;
