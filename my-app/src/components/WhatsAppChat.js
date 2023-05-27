import React from 'react';
import "./WhatsApp.css";
import { Link } from 'react-router-dom';


function WhatsAppChat() {
  const phoneNumber = "+918077748721"; // replace with your phone number
  const message = "Hello, I am looking for Windows"; // replace with your message
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div>
      <Link to={url} target="_blank" rel="noopener noreferrer">
        <img src='https://media.tenor.com/Spdlu7aT88AAAAAj/wp.gif' className='whatsappLogo' style={{maxWidth:'40px'}} alt='WhatsApp Logo'/>
      </Link>
    </div>
  );
}

export default WhatsAppChat;
