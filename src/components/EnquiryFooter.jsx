import React from 'react'
import logoImage from '../assets/Logo.png'

const FOOTER_COLUMNS = [
  {
    title: 'Company',
    links: ['About Us', 'Blog', 'Online Payment', 'FeedBack', 'Disclaimer', 'Travel Tips', 'Site Map'],
  },
  {
    title: 'Our Services',
    links: ['Rent Bus', 'Rent Car', 'Rent Traveller / Mini Van', 'Book Bus Ticket', 'Popular Destination', 'Send Enquiry'],
  },
  {
    title: 'Book a Car',
    links: [
      'Swift Dzire Car Hire',
      'Hyundai Aura Car Hire',
      'Innova Crysta Car Hire',
      'Honda City Car Hire',
      'Toyota Fortuner Car Hire',
      'Ertica Car Hire',
    ],
  },
  {
    title: 'Coach Hire',
    links: [
      'Mini Bus Hire',
      'Bus Hire for Local City Tour',
      'Bus Hire for Airport Transfer',
      'Bus Hire for Outstation',
      'Bus Hire for Wedding',
      'Bus Hire for Chardham Yatra',
      'Bus Hire for Corporate Event',
    ],
  },
]

export default function EnquiryFooter() {
  return (
    <footer className="main-footer">
      <div className="section-container">
        <div className="footer-grid">
          <article className="brand-column">
            <div className="footer-logo">
              <img src={logoImage} alt="ANT Tourist" className="footer-logo-img" />
            </div>
            <div className="footer-brand-copy">
              ANT Travels delivers reliable bus, car, and traveller rental services for local, outstation, corporate, wedding, and tour bookings. Safe rides, trained drivers, and transparent pricing for every journey.
            </div>
            <div className="social-links">
              <a href="#" className="social-icon"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" /></a>
              <a href="#" className="social-icon"><img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" /></a>
              <a href="#" className="social-icon"><img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="YouTube" /></a>
              <a href="#" className="social-icon"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" /></a>
              <a href="#" className="social-icon plain"><img src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png" alt="X" style={{ width: '14px', height: '14px' }} /></a>
            </div>
          </article>

          {FOOTER_COLUMNS.map((column) => (
            <article key={column.title} className="footer-nav-column">
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 ANT TRAVEL PRIVATE LTD. ALL RIGHTS RESERVED.</p>
          <div className="footer-legal">
            <a href="#">PRIVACY POLICY</a>
            <a href="#">TERMS & CONDITIONS</a>
            <a href="#">REFUND POLICY & CANCELLATION</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
