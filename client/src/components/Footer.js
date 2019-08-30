import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className="footerLogo">
        <img src="/images/Guidr Logo.svg" alt="Guidr Logo" style={{width: '30%'}} />
      </div>
      <div className="nav-menu">
        <a href="/index.html">Home</a>
        <a href="/about.html">About</a>
        <a href="/stories-page.html">Stories</a>
        <a href="https://loveguidr.netlify.com/login">Login</a>
        <a href="https://loveguidr.netlify.com/signup">Sign Up</a>
      </div>
      <p>Copyright © 2019, Guidr All Rights Reserved</p>
    </div>
  )
}

export default Footer;