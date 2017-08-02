import React, { Component } from 'react';
import './styles/Header.css';
import logo from './logo.svg';
import instagram from './images/instagram.png';
import pinterest from './images/pinterest.png';
import facebook from './images/facebook.png';
import twitter from './images/twitter.png';
import dribble from './images/dribble.png';

class Header extends Component {
  render() {
    return (

      <div className="Header">
        <img src={logo} className="Header-logo" alt="logo" />

            <ul className="Header-nav">
              <li>work&emsp;•</li>
              <li>about&emsp;•</li>
              <li>services&emsp;•</li>
              <li>contact&emsp;•</li>
              <li>blog</li>

              <li><a href="https://www.instagram.com/aeodesign/"><img src={instagram} alt="instagram" /></a></li>
              <li><a href="https://www.pinterest.com/amynedervelt/"><img src={pinterest} alt="pinterest" /></a></li>
              <li><a href="https://www.facebook.com/aeodesign/"><img src={facebook} alt="facebook"/></a></li>
              <li><a href="https://www.instagram.com/amynedervelt/"><img src={twitter} alt="twitter"/></a></li>
              <li><a href="https://www.instagram.com/amynedervelt/"><img src={dribble} alt="dribble"/></a></li>
            </ul>

      </div>
    );
  }
}

export default Header;
