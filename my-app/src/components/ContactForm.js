import React from "react";
import styled from "styled-components";
import "./ContactForm.css";

const ContactForm = () => {
  const Wrapper = styled.section`
    padding: 1rem 0 10rem 0;
  `;

  return (
    <Wrapper>
      <h3 className="common-heading">Feel Free to Contact us</h3>
      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xoqzyapa"
            method="POST"
            className="contact-inputs card mx-auto"
          >
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
              className="text-area mx-5 mt-3"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
              className="mx-5"
            />

            <textarea
              name="message"
              cols="30"
              rows="7"
              autoComplete="off"
              className="mx-5"
              required
            ></textarea>

            <input
              className="btn btn-primary mx-5 m-1"
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};


export default ContactForm;
