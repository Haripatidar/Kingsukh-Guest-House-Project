import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import ScrollReveal from 'scrollreveal';
import './Gallery.css';
import photos from '../../data/photos'; // Assuming you have an array of photo URLs

const Gallery = () => {
  const tiltRefs = useRef([]);

  useEffect(() => {
    tiltRefs.current.forEach(ref => {
      if (ref) {
        VanillaTilt.init(ref, {
          max: 25,
          speed: 400,
          glare: true,
          'max-glare': 0.5,
        });
      }
    });

    const srtop = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 1000,
      reset: true,
    });

    srtop.reveal('.gallery-item', { interval: 200 });
  }, []);

  return (
    <section className="gallery-section" id="gallery">
    <h2 className="gallery-heading">GALLERY <span className="underline"></span></h2>
    <div className="gallery">
      {photos.map((photo, index) => (
        <div className="gallery-item" key={index} ref={el => tiltRefs.current[index] = el}>
          <img src={photo.url} alt={`Gallery ${index}`} />
        </div>
      ))}
    </div>
  </section>
  );
};

export default Gallery;