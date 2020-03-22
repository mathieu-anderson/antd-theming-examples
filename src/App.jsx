import React, { Component } from "react";
import { Select, Radio, Slider } from "antd";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ant design theming examples</h1>
        </header>
        <p className="App-intro">
          Trying out what{" "}
          <a href="https://ant.design/docs/react/customize-theme">the docs</a>{" "}
          tell us.
        </p>
        <p>
          <Select
            defaultValue="lucy"
            size="large"
            onChange={value => console.log(value)}
          >
            <Option value="jack">Jack</Option>

            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </p>
        <p>
          <Radio.Group defaultValue="a" buttonStyle="solid">
            <Radio.Button value="a">Hangzhou</Radio.Button>
            <Radio.Button value="b" disabled>
              Shanghai
            </Radio.Button>
            <Radio.Button value="c">Beijing</Radio.Button>
            <Radio.Button value="d">Chengdu</Radio.Button>
          </Radio.Group>
        </p>
        <p>
          <Slider defaultValue={30} />
        </p>
      </div>
    );
  }
}

export default App;
