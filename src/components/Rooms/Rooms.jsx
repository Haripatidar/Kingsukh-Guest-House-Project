import React from 'react'
import room1 from "../../assets/images/room1.jpg"
import room2 from "../../assets/images/room2.jpg"
import "./Rooms.css"

function Rooms() {
  return (
   <section class="rooms" id='rooms'>
     <div className="container">
    <h2>OUR LIVING ROOM</h2>
    <h1>The Most Memorable Rest Time Starts Here.</h1>
    <div className="card-container">
        <div className="card">
            <img src={room1} alt="Cozy Haven Room" />
            <div className="card-content">
                <h3>Cozy Haven Room</h3>
                <p>Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.</p>
                <p>Starting from <strong>Rs. 1000/night</strong></p>
                <button className="btn">BOOK NOW</button>
            </div>
        </div>
        <div className="card">
            <img src={room2} alt="Spacious Serenity Suite" />
            <div className="card-content">
                <h3>Spacious Serenity Suite</h3>
                <p>Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.</p>
                <p>Starting from <strong>Rs. 1500/night</strong></p>
                <button className="btn">BOOK NOW</button>
            </div>
        </div>
    </div>
</div>
   </section>
  )
}

export default Rooms;
