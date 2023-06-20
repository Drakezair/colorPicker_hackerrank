import React, { Component } from "react";
import "./App.css";
import ColorPicker from "./components/colorPicker/index.js";
import "h8k-components";
import useColor from "./hooks/useColor";

const title = "Color Picker";

function withCustomHook(WrappedComponent) {
  return function WithCustomHook(props) {
    const hooksValues = useColor(props.initialSelectedColor);
    return <WrappedComponent hooksValues={hooksValues} {...props} />;
  };
}

class App extends Component {
  render() {
    return (
      <div>
        <h8k-navbar header={title}></h8k-navbar>
        <ColorPicker
          colorPickerOptions={this.props.colorPickerOptions}
          initialSelectedColor={this.props.initialSelectedColor}
          hooksValues={this.props.hooksValues}
        />
      </div>
    );
  }
}

export default withCustomHook(App);
