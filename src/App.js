import { Component } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import component
import ColorPicker from "./component/ColorPicker";
import Result from "./component/Result";
import Reset from "./component/Reset";
import SizeSetting from "./component/SizeSetting";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      fontSize: 12,
    };
    this.onSetColor = this.onSetColor.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onSettingDefault = this.onSettingDefault.bind(this);
  }
  onSetColor(params) {
    this.setState({
      color: params,
    });
  }
  onChangeSize(value) {
    if (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) {
      this.setState({
        fontSize: this.state.fontSize + value,
      });
    }
  }
  onSettingDefault(value) {
    if (value === true) {
      this.setState({
        color: "red",
        fontSize: 12,
      });
    }
  }
  render() {
    return (
      <div className="container mt-50">
        <h1>Welcome to my Color Picker App</h1>
        <div className="row">
          <ColorPicker
            color={this.state.color}
            onReceiveColor={this.onSetColor}
          />
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting
              fontSize={this.state.fontSize}
              onChangeSize={this.onChangeSize}
            />
            <br />
            <Reset onSettingDefault={this.onSettingDefault} />
          </div>
          <Result color={this.state.color} fontSize={this.state.fontSize} />
        </div>
      </div>
    );
  }
}

export default App;
