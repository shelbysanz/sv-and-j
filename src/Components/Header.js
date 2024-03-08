import React, { Component } from "react";
import Fade from "react-reveal";
import backgroundImage from "../assets/cleaning_image.jpeg";


class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home" className='background-image' style={{ backgroundImage:`url(${backgroundImage})`, backgroundSize: 'cover' }}>

        <nav id="nav-wrap" className="nav-bar">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>
          
          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                Services
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline" style={{color:'white', 'fontFamily': 'Abril Fatface', 'fontWeight': 'bold'}}>Welcome to {name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3 style={{'color': 'white', 'fontWeight': 'bold'}}>{description}</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href={'#portfolio'} className="button btn project-btn">
                  <i className="fa fa-home"></i>
                  See Our Work!
                </a>
                <a href={'#contact'} className="button btn github-btn">
                  <i className="fa fa-phone"></i>
                  Request An Estimate!
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
