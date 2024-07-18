
import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';
import { MdOutlineSecurity } from "react-icons/md";
import { Ri24HoursLine } from "react-icons/ri";
import { MdRestaurantMenu } from "react-icons/md";
import { SlSupport } from "react-icons/sl";
import palash from "../../assets/images/palash.webp"
import "./Service.css"

function Service() {
   const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
  });

  useEffect(() => {
    srtop.reveal('.about .content h3', { delay: 200 });
    srtop.reveal('.about .row .image', { delay: 200 });
    srtop.reveal('.about .content .tag', { delay: 200 });
    srtop.reveal('.about .content p', { delay: 200 });
    srtop.reveal('.about .content .box-container', { delay: 200 });
    srtop.reveal('.about .content .resumebtn', { delay: 200 });
  }, [srtop]);

  return (
    <>
        <section className="service" id="service">
      <div className="row">
        <div className="image">
          <img draggable="false" className="tilt" src={palash} alt="" />
        </div>
        <div className="content">
          <h2 className="heading">Services</h2>
          <h3>Strive Only For The Best.</h3>
          <div className="box-container">
            <div className="box">
              <span className="icon"><MdOutlineSecurity /></span>
              <p>High Class Security</p>
            </div>
            <div className="box">
              <span className="icon"><Ri24HoursLine /></span>
              <p>24 Hours Room Service</p>
            </div>
            <div className="box">
              <span className="icon"><MdRestaurantMenu /></span>
              <p>Restaurant</p>
            </div>
            <div className="box">
              <span className="icon"><SlSupport /></span>
              <p>Tourist Guide Support</p>
            </div>
          </div>
        </div>
      </div>

     
    </section>
    <div className="customer">
        <div className="customer-container">
          <div className="customer-box">
            <h1>100+</h1>
            <p>Bookings Completed</p>
          </div>
          <div className="customer-box">
            <h1>150+</h1>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
    </>


  )
}

export default Service;
