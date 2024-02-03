import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //creating state variables
    this.state = {
      count: 0,
    };
    console.log(this.props.name + "Child Constructor");
  }

  componentDidMount() {
    console.log(this.props.name + "Child Component Did Mount");
  }

  render() {
    console.log(this.props.name + "Child Render");
    return (
      <div>
        <h2>Name: {this?.props?.name}</h2>
        <h2>Location: {this?.props?.location}</h2>
        <h2>Count: {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
      </div>
    );
  }
}

export default UserClass;
