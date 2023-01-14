import React from "react";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mbjeljkd");
  if (state.succeeded) {
    return (
      <section id="contact">
        <div className="dataSubmitted">
          <h1>Thankyou for your request</h1>
          <h1>We will get back to you soon!</h1>
        </div>
      </section>
    );
  }
  return (
    <section id="contact">
      <div className="contact_container container">
        <h1 className="contact_me_heading">CONTACT ME</h1>
        <h1 className="get_in_heading">LETS GET IN TOUCH</h1>
        <p>I am available for any project acording to my skills.</p>
        <div className="contact_details_container">
          <form onSubmit={handleSubmit}>
            <div>
              <input placeholder="Name" id="name" name="name" type="text" />
              <ValidationError
                prefix="Nmail"
                field="name"
                errors={state.errors}
              />
              <input
                placeholder="Contact No."
                type="number"
                name="contact"
                id="contact"
              />
              <ValidationError
                prefix="Contact"
                field="contact"
                errors={state.errors}
              />
              <input placeholder="Email" id="email" type="email" name="email" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <button
                type="submit"
                disabled={state.submitting}
                className="contact_btn btn"
              >
                Contact Now
              </button>
            </div>
            <div>
              <input
                id="message"
                name="message"
                placeholder="Type Your Message Here"
                type="text"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
