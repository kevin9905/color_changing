import { Component } from "react";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["red", "green", "blue", "yellow", "orange", "purple", "black"],
    };
  }
  showColor(color) {
    return {
      backgroundColor: color,
    };
  }
  setActiveColor(color) {
    this.props.onReceiveColor(color);
  }
  render() {
    var elmColors = this.state.colors.map((color, index) => {
      return (
        <span
          key={index}
          style={this.showColor(color)}
          className={this.props.color === color ? "active" : ""}
          onClick={() => this.setActiveColor(color)}
        ></span>
      );
    });
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="card text-white">
          <div className="card-header bg-info">
            <h3 className="card-title">Color Picker</h3>
          </div>
          <div className="card-body">
            {elmColors}
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
