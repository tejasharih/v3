import React, { useEffect } from 'react'; // Import useEffect
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Ensure this is linked
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <Router>
      <div className="app">
        <CustomCursor /> {/* Add custom cursor */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function CustomCursor() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    const handleMouseMove = (e) => {
      const x = e.pageX; // Use pageX to account for scrolling
      const y = e.pageY; // Use pageY to account for scrolling

      // Update cursor position
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;

      // Create a trail element
      const trail = document.createElement('div');
      trail.classList.add('trail');
      trail.style.left = `${x}px`;
      trail.style.top = `${y}px`;

      document.body.appendChild(trail);

      // Remove trail after animation
      setTimeout(() => {
        trail.remove();
      }, 500);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cursor.remove();
    };
  }, []);

  return null;
}


function Header() {
  return (
    <header className="header">
      <img src="images/logo.jpg" alt="Logo" className="logo" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <>
      <HeroSection />
      <GallerySection />
      <ContactSection />
    </>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="hero">
      <h1>Welcome to V3 Catering Service</h1>
      <p>Experience homemade Indian dishes made with love.</p>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="about">
      <h2>About Us</h2>
      <p>
        V are 3 friends who spontaneously decided to form a catering company
        after realizing our mutual interest in running a business and our
        passion for cooking good Indian food. Our only goal is to make
        food that makes you happy. :)
      </p>
    </section>
  );
}

function GallerySection() {
  return (
    <section id="gallery" className="gallery">
      <Carousel autoPlay infiniteLoop useKeyboardArrows emulateTouch showThumbs={false}>
        <div>
          <img src="images/food.jpg" alt="North Indian Variety" />
          <p className="legend">North Indian Variety</p>
        </div>
        <div>
          <img src="images/food3.jpeg" alt="Fresh and Creative" />
          <p className="legend">Fresh and Creative</p>
        </div>
        <div>
          <img src="images/food2.jpg" alt="Savory and Sweet Bites" />
          <p className="legend">Savory and Sweet Bites</p>
        </div>
        <div>
          <img src="images/food4.jpeg" alt="Creamy Malai Kofta" />
          <p className="legend">Creamy Malai Kofta</p>
        </div>
        <div>
          <img src="images/food6.jpeg" alt="Stylish Cuisine" />
          <p className="legend">Stylish Cuisine</p>
        </div>
        <div>
          <img src="images/food7.jpg" alt="V3 Dal Makhni" />
          <p className="legend">V3 Dal Makhni</p>
        </div>
      </Carousel>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <form action="https://formspree.io/f/mannvlzy" method="POST">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      © 2025 V3 Catering. All rights reserved.
    </footer>
  );
}


export default App;

