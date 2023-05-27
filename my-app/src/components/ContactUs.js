import React from "react";
// import {Link} from 'react-router-dom';
import "./ContactUs.css";
import ContactForm from "./ContactForm";
import { useState } from "react";

function ContactUs() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div onClick={window.scrollTo(0, 0)} className="main-card-container card">
        <img
          src="https://imagedelivery.net/UakEzlxlDkH0uH3fJuXDug/4638e558-d591-4eb7-9720-7bc094197500/w=1920,fit=cover"
          className="card-img-top"
          alt="..."
        />

        <div class="container text-center">
          {show && (
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.373128553522!2d77.4730653!3d28.558556199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ced34318733fd%3A0xc426e39baed4eca7!2sKenny%20Home%20Solutions!5e0!3m2!1sen!2sin!4v1682003365127!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{border:'0'}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          )}
          <div class="row">
            <div class="col col-sd-12 p-2">
              <div class="Card-Container card mb-2">
                <img
                  src="https://t4.ftcdn.net/jpg/02/54/62/25/360_F_254622588_6OClHyYpak64rVI8y9QVjUvDlStsDEu9.jpg"
                  style={{ height: "100px", width: "100px" }}
                  class="card-img-top mx-auto"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="main-sub-heading card-title">Visit Our Place</h5>
                  <p class="compant-name card-text">
                    Kenny Home Solutions Private Limited
                  </p>
                  <p class="Main-text card-text">
                    Khas-104M, Khera Chauganpur, Greater Noida,
                    <br />
                    Gautam Budh Nagar-201306
                  </p>
                  <div className=" d-flex justify-content-center">
                    <button
                      type="button"
                      onClick={() => setShow(!show)}
                      className="buttons btn btn-primary"
                    >
                      View Us on Map
                    </button>
                  </div>
                </div>
              </div>
              <div class="Card-Container card p-3">
                <img
                  src="https://www.freeiconspng.com/uploads/whatsapp-black-logo-icon--24.png"
                  style={{ height: "80px", width: "80px" }}
                  class="card-img-top mx-auto pt-2"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="main-sub-heading card-title">Quick Support</h5>
                  <p class="Main-text card-text">
                    Tel: +91-8077748721
                    <br />
                    info@kennyhomesolutions.com
                  </p>
                </div>
              </div>
            </div>
            <div class="col col-sd-12 p-1">
              <div className="Card-Container card">
                {/* <h5 class="main-sub-heading card-title">Contact Form</h5> */}
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
