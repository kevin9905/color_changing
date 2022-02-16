import { Component } from "react";

class SizeSetting extends Component {
  changeSize(size) {
    this.props.onChangeSize(size);
  }
  render() {
    return (
      <div className="card ">
        <div className="card-header bg-warning">
          <h3 className="card-title">Size : {this.props.fontSize}px</h3>
        </div>
        <div className="card-body ">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.changeSize(-2)}
          >
            down
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.changeSize(2)}
          >
            up
          </button>
        </div>
      </div>
    );
  }
}

export default SizeSetting;
