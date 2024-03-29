import React, { useContext } from "react";
import { userContext } from "../../App";
import "./style.css";

const Footer = () => {
  const { aboutRef } = useContext(userContext);

  return (
    <div className="foot">
      <div className="footer" id="about" ref={aboutRef}>
        <div className="first">
          <h2>Quora.</h2>
          <p>
            Explore our courses and take your skills to the next level! Join
            thousands of learners worldwide.
          </p>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone:+123-456-7890</p>
          <p>16 Street, Amman, Jordan</p>
        </div>
        <div>
          {" "}
          <form className="newsletter-form" action="#" method="post">
            <input
              className="email"
              type="email"
              name="email"
              placeholder="Your Email Address"
              required
            />
            <button className="btn3" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
