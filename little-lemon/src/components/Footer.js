import React from 'react'
import logo from '../images/logo.jpg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <section>
        <div className='company-info'>
          <img src={logo} alt="Logo" />
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
        <div className='company-details'>
          <div>
            <h3>Important Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Menu</a></li>
              <li><a href="/">Reservations</a></li>
              <li><a href="/">Order Online</a></li>
              <li><a href="/">Login</a></li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>Address: <br/>Tokyo,Japan</li>
              <li>Phone: <br/> +81 0123-456-789</li>
              <li>Email: <br/> little.tokyo@lemon.co.jp</li>
            </ul>
          </div>
          <div>
            <h3>Social Media Links</h3>
            <ul>
              <li><a href="/">Facebook</a></li>
              <li><a href="/">Instagram</a></li>
              <li><a href="/">Twitter</a></li>
            </ul>
          </div>
        </div>
      </section>
      <div className='copyright'>
        <Link to="/" target='_blank'>
          Little Lemon - Tokyo - 2024 © All rights reserved
        </Link>
      </div>
    </footer>
  )
}

export default Footer
