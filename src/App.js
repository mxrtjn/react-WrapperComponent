import React from "react";
import ReactMediumEditor from "./components/ReactMediumEditor";
import "./index.css";

class App extends React.Component {
  state = {
    innerText: "",
    innerHtml:
      "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  };

  handleOnChangeText = (innerHtml, innerText) => {
    this.setState({
      innerHtml: innerHtml,
      innerText: innerText
    });
  };

  handleOnClick = _ => {
    this.setState({
      innerHtml: "Hello world - <b>" + new Date().toLocaleTimeString() + "</b>"
    });
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <h2>WRAPPED COMPONENTS APP</h2>
            </div>
            <div className="navbar-header pull-right">
              <h3>Hello world</h3>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-sm-12" />
            <h5>
              <b>Medium Editor Wrapped</b>
            </h5>
            <div className="input-group">
              <ReactMediumEditor
                text={this.state.innerHtml}
                onChangeText={this.handleOnChangeText}
              />
              <button className="btn-primary" onClick={this.handleOnClick}>
                Change text
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
