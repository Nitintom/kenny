import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "./ServicePage.css"

const services = [
  {
    title: 'Window Installation',
    description: 'Professional installation of all types of windows.',
    image: 'https://png.pngtree.com/png-vector/20190513/ourmid/pngtree-window-icon-png-image_1040512.jpg',
    category: 'windows',
  },
  {
    title: 'Window Repair',
    description: 'Expert repair services for all types of windows.',
    image: 'data:image/png;base64,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',
    category: 'windows',
  },
  {
    title: 'Door Installation',
    description: 'Professional installation of all types of doors.',
    image: 'https://png.pngtree.com/png-vector/20190926/ourmid/pngtree-door-icon-png-image_1747414.jpg',
    category: 'doors',
  },
  {
    title: 'Door Repair',
    description: 'Expert repair services for all types of doors.',
    image: 'https://cdn-icons-png.flaticon.com/512/87/87725.png',
    category: 'doors',
  },
];

const ServicePage = () => (
  <Container onClick={window.scrollTo(0, 0)} className='main-container'>
    <Row>
      <Col xs={12} md={6}>
        <h2 className='main-Heading'>Windows Services</h2>
        {services
          .filter((service) => service.category === 'windows')
          .map((service) => (
            <div className='service-main-container' key={service.title}>
              <img src={service.image} className='sevice-img' alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
      </Col>
      <Col xs={12} md={6}>
        <h2 className='main-Heading'>Doors Services</h2>
        {services
          .filter((service) => service.category === 'doors')
          .map((service) => (
            <div className='service-main-container' key={service.title}>
              <img src={service.image} className='sevice-img' alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
      </Col>
    </Row>
  </Container>
);

export default ServicePage;
