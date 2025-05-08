import React from "react";

class firstComponent extends React.Component {
  constructor(props) {
      super(props);

      this.state ={
          count:0,
      }
  }
  increment = () => {
      this.setState({
          count: this.state.count + 2
      });
  }
    render() {
      return (
          <>
              <div>
                  <span> Hello, I am first react component!</span>
                  <div>
                      {this.state.count}
                  </div>
              </div>
              <div>
                  <span> Hello, I am first react component!</span>
                  <div>
                      {this.state.count}
                  </div>
              </div>
              <button onClick={this.increment}>Increment</button>
          </>
      )
  }
}
export default firstComponent;