import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor() {
    super();

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>This is Swiggy Clone</h1>
        <h2>Yes you heared it right.</h2>
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1 className="font-bold">{loggedInUser}</h1>}
        </UserContext.Consumer>
        {/* <UserClass name={"First "} location={"Jaipur"} /> */}
        {/* <UserClass name={"Second "} location={"Jaipur"} />
        <UserClass name={"Third "} location={"Jaipur"} /> */}
      </div>
    );
  }
}

export default About;
