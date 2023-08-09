import React, { Component } from 'react'
export class New extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0,
            name: ""
        }
    }
    componentDidMount() {
        console.log("Component mounted!");
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("Components updated!");
    }
    componentWillUnmount() {
        console.log("component will unmount");
    }
    handleIncrement = () => {
        this.setState({count: this.state.count +1});
        this.setState({name: "Vignesh"});
    }
  render() {   
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <p>Name: {this.state.name}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    )
  }
}

export default New