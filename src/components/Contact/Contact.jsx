import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import contact from "../../assets/images/contact.png";
import "./Contact.css";

function Contact() {
  const srtop = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 1000,
    reset: true,
  });

  useEffect(() => {
    srtop.reveal(".contact-section .contact-container", { delay: 400 });
  }, [srtop]);

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Info</h2>
          <p><FaMapMarkerAlt /> Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
          <p><FaEnvelope /> kkghosh0099@gmail.com</p>
          <p><FaPhoneAlt /> +91 9007062180</p>
          <div className="social-icons">
            <a href="#"><FaFacebook/></a>
            <a href="#"><FaTwitter/></a>
            <a href="#"><FaInstagram/></a>
            <a href="#"><FaLinkedin/></a>
          </div>
        </div>
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form>
            <div className="form-group">
              <input type="text" name="first_name" placeholder="First Name" required />
              <input type="text" name="last_name" placeholder="Last Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Email Address" required />
              <input type="text" name="mobile" placeholder="Mobile Number" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Write your message here..." required></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;