import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import samplefishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  addFish = fish => {
    const fishes = { ...this.state.fishes };
    fishes[`fishes${Date.now()}`] = fish;

    this.setState({ fishes });

    console.log(fish);
  };
  loadSampleFishes = () => {
    this.setState({ fishes: samplefishes });
  };
  addToOrder = key => {
    const orders = { ...this.state.order };
    orders[key] = orders[key] + 1 || 1;
    this.setState({ order: orders });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Daily" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
