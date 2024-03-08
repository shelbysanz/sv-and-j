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
            <Fade bottom duration={2000}>
              <ul className="social-home">
                <a href={'https://instagram.com/svjcleaningcervices?utm_source=qr'} className="button btn project-btn">
                  <i className="fa fa-instagram"></i>
                  Instagram
                </a>
                <a href={'https://www.google.com/search?q=SV%26J+Cleaning+Services&sca_esv=935992698d2d35ba&rlz=1C5CHFA_enUS1000US1000&sxsrf=ACQVn080oRha5SZY6rc39Oh66iALxlSkFA%3A1709927767247&ei=V23rZdvTDsmsiLMP-8ihkAY&ved=0ahUKEwib26GpueWEAxVJFmIAHXtkCGIQ4dUDCBE&uact=5&oq=SV%26J+Cleaning+Services&gs_lp=Egxnd3Mtd2l6LXNlcnAiFlNWJkogQ2xlYW5pbmcgU2VydmljZXMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsANI5AxQywRY6QtwAXgBkAEAmAEAoAEAqgEAuAEDyAEA-AEC-AEBmAIBoAIGmAMAiAYBkAYIkgcBMaAHAA&sclient=gws-wiz-serp'} className="button btn github-btn">
                  <i className="fa fa-globe"></i>
                  Google
                </a>
                <a href={'https://www.tiktok.com/@chivis11792?_t=8hwJXrjFv3L&_r=1'} className="button btn github-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ fill: 'white', height: '12px', marginRight: '4px' }}>
                    <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
                  </svg>
                  Tik Tok
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
