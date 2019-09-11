import React, { Component } from "react";

import ExampleComponent, { StarRating } from "jc-react-components-library";

export default class App extends Component {
  render() {
    return (
      <div>
        <StarRating />
        <ExampleComponent text="Modern React component module" />
      </div>
    );
  }
}
