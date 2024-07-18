import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiFillTwitterCircle } from "react-icons/ai";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Kingsukh Guest House</h3>
          <p>
            Discover a world of comfort, luxury, and adventure as you explore
            our curated selection of hotels, making every moment of your getaway
            truly extraordinary.
          </p>
          <button className="footer-btn">BOOK NOW</button>
        </div>
        <div className="footer-section">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Browse Destinations</li>
            <li>Special Offers & Packages</li>
            <li>Room Types & Amenities</li>
            <li>Customer Reviews & Ratings</li>
            <li>Travel Tips & Guides</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>OUR SERVICES</h3>
          <ul>
            <li>Concierge Assistance</li>
            <li>Flexible Booking Options</li>
            <li>Airport Transfers</li>
            <li>Wellness & Recreation</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>CONTACT US</h3>
          <p>Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
          <p>Email: kkghosh0099@gmail.com</p>
          <p>Phone: +91 9007062180</p>
          <div className="social-icons">
            <AiFillFacebook />
            <AiFillInstagram />
            <AiFillYoutube />
            <AiFillTwitterCircle />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Kingsukh Guest House. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;