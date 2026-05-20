// File: src/App.js

import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">QuickMove Packers</div>

        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Safe & Reliable Packers And Movers</h1>
          <p>
            We provide secure home shifting, office relocation, and vehicle
            transportation services across India.
          </p>

          <a href="#contact" className="hero-btn">
            Book Now
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="services" id="services">
        <h2>Our Services</h2>

        <div className="service-container">
          <div className="service-card">
            <h3>Home Relocation</h3>
            <p>
              Safe household shifting with professional packing and unpacking
              support.
            </p>
          </div>

          <div className="service-card">
            <h3>Office Shifting</h3>
            <p>
              Fast and secure office relocation with minimal business downtime.
            </p>
          </div>

          <div className="service-card">
            <h3>Vehicle Transport</h3>
            <p>
              Reliable bike and car transportation services with complete safety.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact" id="contact">
        <h2>Get a Free Quote</h2>

        <form className="contact-form">
          <input type="text" placeholder="Enter Your Name" required />

          <input
            type="tel"
            placeholder="Enter Phone Number"
            required
          />

          <select required>
            <option value="">Select Service</option>
            <option>Home Relocation</option>
            <option>Office Shifting</option>
            <option>Vehicle Transport</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 QuickMove Packers And Movers. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;