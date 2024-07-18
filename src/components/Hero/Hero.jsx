
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './Hero.css';

function Hero() {
  const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true,
  });
const srtop1 = ScrollReveal({
    origin: 'top',
    distance: '20px',
    duration: 1000,
    reset: true,
  });
   useEffect(()=>{
    

      srtop1.reveal('.home .hero-content p', { delay: 100 });
          srtop.reveal('.home .hero-content h1', { delay: 200 });
          srtop.reveal('.home .btn-container .book-now', { delay: 200 });

   },[srtop,srtop1])

  return (
    <div>
    <section className="home" id="home">
      <div className="hero-content">
      <p>Simple - Unique - Friendly</p>
        <h1>
          Make Yourself At Home <br />
          In Our <span>Guest House</span>.
        </h1>
      </div>
     
      
    </section>
    <div class="btn-container">
      <button class="book-now">Book Now</button>
      </div>
    </div>
  );
}

export default Hero;
