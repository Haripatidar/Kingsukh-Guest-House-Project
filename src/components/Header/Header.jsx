import React, { useEffect, useRef, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-scroll';
import { RxCross1 } from "react-icons/rx";

import "./Header.css"
function Header() {
    const menuRef=useRef(null)
    const navbarRef=useRef(null)

    const [isMenuActive,setMenuActive]=useState(false)

    const handleMenuClick = () => {
        setMenuActive(!isMenuActive);
      };
      const handleLinkClick = () => {
        setMenuActive(false);
      };
      useEffect(() => {
        if (menuRef.current && navbarRef.current) {
          menuRef.current.classList.toggle('fa-times', isMenuActive);
          navbarRef.current.classList.toggle('nav-toggle', isMenuActive);
        }
      }, [isMenuActive]);

  return (
    <header>
        <a href="/" className="logo"> Kingsukh <br/>Guest House</a>
       

        <div id="menu" className={isMenuActive ? 'fa-bars' : 'fa-times'} onClick={handleMenuClick}>
        {isMenuActive ? <RxCross1/> : <GiHamburgerMenu/>}
        </div>
        <nav className={`navbar ${isMenuActive ? 'nav-toggle' : ''}`} ref={navbarRef}>
            
            <ul>
            <li><Link to="home" smooth={true} duration={500} onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} onClick={handleLinkClick}>About</Link></li>
          <li><Link to="rooms" smooth={true} duration={500} onClick={handleLinkClick}>Rooms</Link></li>
          <li><Link to="service" smooth={true} duration={500} onClick={handleLinkClick}>Service</Link></li>
          <li><Link to="gallery" smooth={true} duration={500} onClick={handleLinkClick}>Gallery</Link></li>
          <li><Link to="contact" smooth={true} duration={500} onClick={handleLinkClick}>Contact</Link></li>
            </ul>

        </nav>

        <button class="book"> <a 
              href="https://api.whatsapp.com/send?phone=919007062180&text=Hello,%20I%20would%20like%20to%20book%20a%20room%20at%20Kingsukh%20Guest%20House."
              target="_blank"
              rel="noopener noreferrer"
              className="about-btn"
            >
              <span>Book Now</span>
            </a></button>
     </header>
  )
}

export default Header
