import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
// import Testimonials from './Components/Testimonials'
import Portfolio from "./Components/Portfolio";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      website_data: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getWebsiteData() {
    $.ajax({
      url: "./website_data.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ website_data: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getWebsiteData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.website_data.main} />
        <About data={this.state.website_data.main} />
        <Portfolio data={this.state.website_data.portfolio} />
        <Contact data={this.state.website_data.main} />
        {/* <Testimonials data={this.state.website_data.main} /> */}
        <Footer data={this.state.website_data.main} />
      </div>
    );
  }
}

export default App;
