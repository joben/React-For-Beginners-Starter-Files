import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import samplefishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  componentDidMount() {
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
    //console.log("Mounted");
  }
  componentDidUpdate() {
    console.log(this.state.order);
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }
  componentWillUnmount() {
    //console.log("Unmounting");
    base.removeBinding(this.ref);
  }
  addFish = fish => {
    const fishes = { ...this.state.fishes };
    fishes[`fishes${Date.now()}`] = fish;

    this.setState({ fishes });
  };
  updateFish = (key, updatedFish) => {
    const fishes = { ...this.state.fishes };
    fishes[key] = updatedFish;
    this.setState({ fishes: fishes });
  };
  deleteFish = key => {
    const fishes = { ...this.state.fishes };
    fishes[key] = null;
    this.setState({ fishes: fishes });
  };
  loadSampleFishes = () => {
    this.setState({ fishes: samplefishes });
  };
  addToOrder = key => {
    const orders = { ...this.state.order };
    orders[key] = orders[key] + 1 || 1;
    this.setState({ order: orders });
  };
  removefromOrder = key => {
    const orders = { ...this.state.order };
    delete orders[key];
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
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removefromOrder={this.removefromOrder}
        />
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
        />
      </div>
    );
  }
}

export default App;