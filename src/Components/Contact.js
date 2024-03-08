import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";
import axios from "axios";
import Swal from 'sweetalert2'
import '../index.scss';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer_name: "",
      customer_email: "",
      customer_subject_line: "",
      customer_message: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit =  async (e) => {
    e.preventDefault();

    // Log the form data to the console for testing
    console.log(this.state);
    try {
      axios.post('https://wqc7s8xca1.execute-api.us-east-1.amazonaws.com/prod/send-email', this.state)
      .then(response => {
        if (response.status === 200) {
          Swal.fire({
            title: "Success",
            icon: "success",
            text: "We received your request! We'll get back in touch soon! Thank you!",
            confirmButtonColor: "#04ABFB",
          }).then(confirmed => {
            window.location.reload();
          });
        }
     })
     .catch(error => {
      console.error("Error sending email:", error);
      Swal.fire({
        title: "Error",
        text: "An error occurred while attempting to send your request! We are looking into this! Try giving us a call!",
        icon: "error",
        confirmButtonColor: "#04ABFB",
      });
     });
    } catch (e) {
      console.error("Error sending email:", e);
      Swal.fire({
        title: "Error Sending Email",
        text: "An error occurred while attempting to send your request! We are looking into this! Try giving us a call!",
        icon: "error",
        confirmButtonColor: "#04ABFB",
      });
    }
  };

  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const message = this.props.data.contactUsMessage;

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{message}</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <form
                id="contactForm"
                name="contactForm"
                method="post"
                action=""
                onSubmit={this.handleSubmit}
              >
                <fieldset>
                  <div>
                    <label htmlFor="customer_name">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="customer_name"
                      name="customer_name"
                      onChange={this.handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="customer_email">
                      Your Email <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="customer_email"
                      name="customer_email"
                      onChange={this.handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="customer_subject_line">Subject</label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="customer_subject_line"
                      name="customer_subject_line"
                      onChange={this.handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="customer_message">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      cols="50"
                      rows="15"
                      id="customer_message"
                      name="customer_message"
                      onChange={this.handleChange}
                      required
                    ></textarea>
                  </div>

                  <div>
                    <button className="submit">Submit</button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form>

              <div id="message-warning"> Error boy</div>
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, thank you!
                <br />
              </div>
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Contact Us</h4>
                <p className="address">
                  {name}
                  {street} <br />
                  {city}, {state} {zip}
                  <br />
                  <span>{phone}</span>
                </p>
              </div>

              {/* <div className="widget widget_tweets">
                <h4 className="widget-title">Updates</h4>
                <ul id="twitter">
                  <li>
                    <span>
                      This is a tiny Lorem Ipsum. Proin gravida
                      nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                      quis bibendum auctor, nisi elit consequat ipsum. <br></br>
                      <a href="./">http://example.com/</a>
                    </span>
                    <b>
                      <a href="./">2 Days Ago</a>
                    </b>
                  </li>
                  <li>
                    <span>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi. <br></br>
                      <a href="./">http://example.com/</a>
                    </span>
                    <b>
                      <a href="./">3 Days Ago</a>
                    </b>
                  </li>
                </ul>
              </div> */}
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
