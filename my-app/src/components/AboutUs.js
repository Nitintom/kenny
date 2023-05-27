import React from 'react';
import "./AboutUS.css";

function AboutUs() {
  return (
    <>
      <div onClick={window.scrollTo(0, 0)} className="card-container card" style={{maxHeight: '60vh'}}>
  <img src="https://cutewallpaper.org/28/business-background-wallpaper/1981228055.jpg" className="card-img" alt="..."/>
  <div className="card-img-overlay Card-content">
    
    <h5>About Us</h5>
    <p className="Header-Para">A PREMIER UPVC & Aluminium DOORS & WINDOWS COMPANY</p>
      </div>
</div>
<div class="card text-bg-light border-info mb-3 m-auto" style={{maxWidth: '90vw'}}>
  <div class="row g-1">
    <div class="col-md-5 p-5">
      <img src="https://t3.ftcdn.net/jpg/03/04/26/00/360_F_304260079_AwyXBUBSjjReWi8QBd7twbQyzpDsurUv.jpg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-7">
      <div class="card-body">
        <h5 className="card-title">Our Mission</h5>
        <p class="card-text">
          At Kenny Home Solutions, we are committed to making your life easier, more comfortable, and more prestigious. We specialize in engineering high-quality UPVC, Aluminium products that are designed and manufactured to maximize their natural strength and ensure a comfortable and modern lifestyle.
         <br/>We understand that the environment is important to all of us, which is why we focus on designing and manufacturing products that don't harm Mother Nature. We believe that it is possible to create beautiful, functional, and sustainable spaces that enhance the beauty of your home or property without compromising the environment.
              <br/>Our main motto is to build long-term and amicable relationships with our most valuable clients.
              <br/> We are guided by the principle of "7S": Solidity, Soundness, Safety, Saving, Sustainability, Solar power, and Security. These principles guide everything we do, from designing and manufacturing products to providing excellent customer service.
             <br/> We take pride in delivering products and services that exceed your expectations. Whether you're looking to decorate your dream home or property, or simply want to enhance your space, we're here to help. Thank you for considering Kenny Home Solutions, and we look forward to building a long-lasting relationship with you.
        </p>       
      </div>
    </div>
  </div>
</div>
<div class="card text-bg-light border-info mb-3 m-auto" style={{maxWidth: '90vw'}}>
  <div class="row g-5">
  <div class="col-md-5 p-5">
      <img src="https://vivanls.com/images/pageimages/one-ourvision-1576152691.jpg" class="img-fluid rounded-start" alt="..."/>
    </div>
       <div class="col-md-7">
      <div class="card-body">
        <h5 class="card-title">Our Vision</h5>
        <p class="card-text">Our vision is to be the leader in providing uPVC, Aluminium door and window solutions that deliver the best quality, performance, and value for our customers. We are committed to constantly innovating and developing our products to ensure that they meet the highest standards of quality and functionality.
<br/>We believe that our success is measured by the satisfaction of our customers, which is why we are dedicated to providing an enhanced support system that adds value to our customers. Whether you need help selecting the right product, installation assistance, or ongoing maintenance and support, our team is always available to help you.
<br/>Our products are designed to provide comfort and protection for your family. We understand that your home is your sanctuary, which is why we take great care in designing and manufacturing our products to meet the highest standards of safety, security, and energy efficiency. Our products are built to last and are designed to meet the needs of modern families.
<br/>At Kenny Home Solutions, we are committed to providing the best possible service to our customers. Our team of experts is always available to answer your questions, provide advice, and help you find the perfect custom door and window solutions for your home or business.</p>
      </div>
    </div>

  </div>
</div>



    

    </>
  )
}

export default AboutUs
