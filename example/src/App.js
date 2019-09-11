import React, { Component } from "react";

import ExampleComponent, { StarRating } from "jc-react-components-library";

export default class App extends Component {
  state = {
    rating: 0,
    isRateGiven: false
  };

  handleSelection = value => {
    this.setState({ rating: value, isRateGiven: true });
  };

  resetRating = () => {
    this.setState({ rating: 0, isRateGiven: false });
  };

  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            color: this.state.isRateGiven ? "gold" : "slateGray"
          }}
        >
          <StarRating
            totalStars={5}
            starSize={96}
            handleSelection={this.handleSelection}
            readOnly={false}
            value={this.state.rating}
          />
        </div>
        {this.state.isRateGiven && (
          <React.Fragment>
            <ExampleComponent
              text={`Current selected value ${this.state.rating}`}
            />
            <button onClick={this.resetRating}>Reset</button>
          </React.Fragment>
        )}
      </div>
    );
  }
}
