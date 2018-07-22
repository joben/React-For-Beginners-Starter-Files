import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {
  state = {
    fishes: {}
  };

  addFish = fish => {
    const fishes = { ...this.state.fishes };
    fishes[`fishes${Date.now()}`] = fish;

    this.setState({ fishes });

    console.log(fish);
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Daily" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
