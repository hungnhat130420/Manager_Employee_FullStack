import React, { Component } from "react";


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div><a href="#!" className="navbar-brand">Employee Manager</a></div>
        </nav>
      </div>
    );
  }
}

export default Header;
