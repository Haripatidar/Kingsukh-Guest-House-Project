import React from "react";
import "./Map.css";

function Map() {
  return (
    <div className="map-container">
      <iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7300988.860288619!2d76.12479105339358!3d26.68253032437128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1721268382752!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Kingsukh Guest House"
      ></iframe>
       </div>

  );
}

export default Map;