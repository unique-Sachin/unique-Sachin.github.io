import React from "react";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import { BsLinkedin, BsGithub } from "react-icons/bs";


const Contact = () => {
  const [state, handleSubmit] = useForm("");
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
        <div className="contact_head_container">
          <div>
            <h1 className="contact_me_heading">CONTACT ME</h1>
            <h1 className="get_in_heading">LETS GET IN TOUCH</h1>
            <p>I am available for any project acording to my skills.</p>
          </div>
          <div>
            <h3>
              Email:
              <a
                style={{
                  marginLeft: ".5rem",
                }}
                target={"_blank"}
                rel="noopener noreferrer"
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sachin.mern@gmail.com"
              >
                sachin.mern@gmail.com
              </a>
            </h3>
            <h3>
              Contact:
              <a
                style={{
                  marginLeft: ".5rem",
                }}
                href="tel:7080623634"
              >
                +91 7080623634
              </a>
            </h3>
            <div className="contact_socialHandle">
              <a
                href="https://www.linkedin.com/in/sachin-mishra-a790bb174/"
                rel="noreferrer"
                target="_blank"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://github.com/unique-Sachin"
                rel="noreferrer"
                target="_blank"
              >
                <BsGithub />
              </a>
            </div>
          </div>
        </div>
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
              <input
                className="message2"
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
              <button
                type="submit"
                disabled={state.submitting}
                className="contact_btn btn"
              >
                Contact Now
              </button>
            </div>
            <div className="massage_container">
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
