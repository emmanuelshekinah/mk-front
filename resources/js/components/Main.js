import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Products from './Products';
import Navbar from './Navbar';
import LeftMenu from './LeftMenu';
import HomeSlider from './HomeSlider';

export default class Main extends Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container">
      <a className="navbar-brand" href="#">Mkoven Solutons</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
       <Navbar />
      </div>
    </div>
  </nav>

  <div className="container">

    <div className="row">

     <LeftMenu />
      
      <div className="col-lg-9">

      {/* <HomeSlider /> */}

        <Products />
       

      </div>
      

    </div>
    
  </div>
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
