import { Link } from 'react-router-dom';
import React from 'react';
import"./Footer.css"

function Footer() {
  return (
<>

    <footer class="footer-distributed bg-light">

<div class="footer-left">
    <img src='https://i.ibb.co/6PFGtMP/KENNY-HOME-SOLUTIONS-removebg-preview.png' className='footer-img' alt="..."/>
    <p class="footer-links">
    <Link to="/About">About Us</Link>
        |
      <Link to="/ProductPage">Product</Link>
        |
      <Link to="/Resources">Resources</Link>
        |
      <Link to="/ContactUs">Contact Us</Link>     
        {/* <Link href="#">Home</Link>
        <a href="#">About</a>
        <a href="#">Contact</a> */}
    </p>

    <p class="footer-company-name">Copyright © 2023 <strong>Kenny Homes</strong> All rights reserved</p>
</div>

<div class="footer-center">
    <div>
        <i class="fa fa-map-marker"></i>
        <p><span>Khas-104M, Khera Chauganpur,
</span>
Greater Noida, Gautam Budh Nagar-201306      </p>
    </div>

    <div>
        <i class="fa fa-phone"></i>
        <p>+91-8077748721</p>
    </div>
    <div>
        <i class="fa fa-envelope"></i>
        <p><Link to="mailto:info@kennyhomesolutions.com">info@kennyhomesolutions.com</Link></p>
    </div>
</div>
<div class="footer-right">
    <p class="footer-company-about">
        <span>About the company</span>
        <strong>Kenny Home Solutions</strong> Engineers high-quality UPVC and Aluminium products to enhance your comfort and prestige. Our eco-friendly products are designed for strength and modern style, without compromising the environment. Create beautiful, sustainable spaces with us.
    </p>
    <div class="footer-icons">
        <Link to="https://www.facebook.com/profile.php?id=100091889452590" target='blank'><i class="fa fa-facebook"></i></Link>
        <Link to="https://www.instagram.com/kennyhomesolutions_/" target='blank'><i class="fa fa-instagram"></i></Link>
        <Link to="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target='blank'><i class="fa fa-linkedin"></i></Link>
        <Link to="https://www.youtube.com/channel/UCS3nBEfoOiA8NeFyog7T_cA" target='blank'><i class="fa fa-youtube"></i></Link>
    </div>
</div>
</footer>
    </>
  );
}

export default Footer;






