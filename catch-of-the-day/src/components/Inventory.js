import React from "react";
import AddFishForm from "./AddFishForm";

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h3>Inventory</h3>
        <AddFishForm
          addFish={this.props.addFish}
          loadSampleFishes={this.props.loadSampleFishes}
        />
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
