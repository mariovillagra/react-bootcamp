import React, { Component } from "react";
import GoToPage from "../src/components/GoToPage";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextPage: "index"
    };
  }

  render() {
    return (
      <div>
        <div>About page</div>
        <br />
        <GoToPage
          toPage={`/${this.state.nextPage}`}
          name={this.state.nextPage}
        />
      </div>
    );
  }
}

export default About;
