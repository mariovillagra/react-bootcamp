import React, { Component } from "react";
import GoToPage from "../src/components/GoToPage";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextName: "about"
    };
  }

  handleClick = () => {
    console.log("a click here");
  };

  render() {
    return (
      <div>
        <div>Index page</div>
        <br />
        <GoToPage
          toPage={`/${this.state.nextName}`}
          name={this.state.nextName}
        />
      </div>
    );
  }
}

export default Index;
