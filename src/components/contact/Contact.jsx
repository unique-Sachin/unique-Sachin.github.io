import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact_container container">
        <h1 className="contact_me_heading">CONTACT ME</h1>
        <h1 className="get_in_heading">LETS GET IN TOUCH</h1>
        <p>I am available for any project acording to my skills.</p>
        <div className="contact_details_container">
          <div>
            <input placeholder="Name" type="text" />
            <input placeholder="Contact No." type="text" />
            <input placeholder="Email" type="email" />
            <div className="contact_btn">
              <a href="" rel="noreferrer" className="btn">
                Contact Now
              </a>
            </div>
          </div>
          <div>
            <input
              className="message_box_input"
              placeholder="Type Your Message Here"
              type="text"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
