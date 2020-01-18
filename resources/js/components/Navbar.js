import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Navbar extends Component {
    render() {
        return (
            <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Products</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Cart</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Login</a>
          </li>
        </ul>
        );
    }
}


