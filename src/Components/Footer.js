import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    // const SVGComponent = (props) => (
    //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/></svg>
    // );
    

    const networks = this.props.data.social.map(function (network) {
      return (
         <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              {/* <ul className="social-links">
                {networks}
                <li key={'tiktok'}>
                  <a href="https://www.tiktok.com/@chivis11792?_t=8hwJXrjFv3L&_r=1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ fill: '#525252', height: '18px' }}>
                    <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
                  </svg>
                  </a>
                </li>
              </ul> */}


              <ul className="copyright">
                <li>&copy; Copyright 2024 Shelby Rheyn</li>
                <li>
                  Design by{" "}
                  <a title="Github" href="https://github.com/shelbyrheyn?tab=repositories">
                    Shelby Rheyn
                  </a>
                </li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
