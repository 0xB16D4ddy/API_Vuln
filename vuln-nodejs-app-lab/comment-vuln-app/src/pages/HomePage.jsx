import React, { Component } from "react";
import { Outlet } from "react-router-dom";

export class HomePage extends Component {
  render() {
    return (
      <div>
        
        <Outlet />
      </div>
    );
  }
}

export default HomePage;
