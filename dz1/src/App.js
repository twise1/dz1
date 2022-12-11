import React, { Component } from "react";
class App extends Component {
  state = {
    znac: 0,
    isActive: false
  };
  Ogr = (event) => {
    if (this.state.znac < -10 || this.state.znac > 10) {
      this.setState({ isActive: true });
    }
  };
  ChangeButton1 = (event) => {
    this.setState({ znac: this.state.znac - 1 });
  };

  ChangeButton2 = (event) => {
    this.setState({ znac: this.state.znac + 1 });
  };
  componentDidMount(){
    window.addEventListener("change",this.Ogr);
  }
  render() {
    return (
      <div className="element">
        <button
          name="b1"
          id="b1"
          onClick={this.ChangeButton1}
          disabled={this.state.isActive}
        >
          -
        </button>
        <input
          type="number"
          name="inp1"
          id="inp1"
          value={this.state.znac}
          onChange={this.Ogr}
        />
        <button
          name="b2"
          id="b2"
          onClick={this.ChangeButton2}  
          disabled={this.state.isActive}
        >
          +
        </button>
      </div>
    );
  }
}
export default App;
