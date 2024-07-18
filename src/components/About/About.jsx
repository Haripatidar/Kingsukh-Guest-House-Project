import React, { useEffect } from 'react';
import out from "../../assets/images/out.jpg";
import ScrollReveal from 'scrollreveal';
import "./About.css";

function About() {
  const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
  });

  useEffect(() => {
    srtop.reveal('.about-section .about-content h3', { delay: 200 });
    srtop.reveal('.about-section .about-row .about-image', { delay: 200 });
    srtop.reveal('.about-section .about-content .about-tag', { delay: 200 });
    srtop.reveal('.about-section .about-content p', { delay: 200 });
    srtop.reveal('.about-section .about-content .about-box-container1', { delay: 200 });
    srtop.reveal('.about-section .about-content .about-resumebtn', { delay: 200 });
  }, [srtop]);

  return (
    <section className="about-section" id="about">
      <div className="about-row">
        <div className="about-image">
          <img draggable="false" className="tilt" src={out} alt=""/>
        </div>
        <div className="about-content">
          <h2 className="heading">About <span>Us</span></h2>
          <h3>The Best Holidays Start Here!</h3>
          <p>Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.</p>
          <div className="about-box-container1">
            <div className="about-box1">
              <p><span> Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</span></p>
              <p><a href='tel:+919007062180'>Contact us: +91 9007062180</a></p>
            </div>
          </div>
          <div className="about-resumebtn">
          <a 
              href="https://api.whatsapp.com/send?phone=919007062180&text=Hello,%20I%20would%20like%20to%20book%20a%20room%20at%20Kingsukh%20Guest%20House."
              target="_blank"
              rel="noopener noreferrer"
              className="about-btn"
            >
              <span>Book Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;