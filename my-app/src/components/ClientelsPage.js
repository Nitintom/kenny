import React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import "./ClientelsPage.css"
import  Carousel  from './Carousel';

const clients = [
  { name: 'Ravi Dhaka', logo: 'https://media.licdn.com/dms/image/C4E03AQHihWMpsCRqBg/profile-displayphoto-shrink_800_800/0/1522386039373?e=2147483647&v=beta&t=lqXyxdgrR_IZ5A2RMrfHJt__dIIpXc8IrI8yAxjYYNQ', description: 'Different projects have different requirements and we need solutions specific to them. Kenny Home Solutions, have always worked towards putting special emphasis on providing specific solutions to resolve all our windows and doors requirements.' },
  { name: 'Nitin Tomar', logo: 'https://media.licdn.com/dms/image/C4E03AQH_ijyd4wu6HA/profile-displayphoto-shrink_800_800/0/1633925404631?e=2147483647&v=beta&t=StxaRp_a5mAK6Fj1P1cXQx18jfrAv2-Y6teARqHpZCI', description: 'Kenny Home Solutions is an ideal choice not only because of their superior quality but also because they offer the best service. Kenny Home Solutions, brings together the best windows solution and their expert service to cater to our door and window needs.' },
  { name: 'Rashi Jain', logo: 'https://media.licdn.com/dms/image/C5603AQFmdgI-hiPo9A/profile-displayphoto-shrink_800_800/0/1517579520212?e=2147483647&v=beta&t=z43pzcct3fy2E_PhJpO2HQnvvwHijaZozAdXfMpP70A', description: 'Kenny Home Solutions response was very quick as we were looking for Windows that not only look good but also cut out the heat as Gurugram becomes very hot during summers. We contacted two or three uPVC Window providers but Kenny Home Solutions’ response was very quick. They not only gave us heat cancellation but also noise cancellation solutions' },
];

const ClientelsPage = () => (
  <>
  <div onClick={window.scrollTo(0, 0)} className="main-Card-container card mt-5" style={{maxHeight:'80vh'}}>
    <img src="https://strattonleocommunication.com/wp-content/uploads/2016/06/our-clients-banner.jpg" alt='...'/>
  </div>
  <Container className='Main-Container'>
    <h1 className="text-center">Customer Feedback</h1>
    <Row>
      {clients.map((client, index) => (
        <Col key={index} xs={12} md={4} className="mb-4">
          <Card className='card-boundary'>
            <CardImg top src={client.logo} alt={client.name} className='client-img' />
            <CardBody className='Card-Body'>
              <CardTitle className='Client-name'>{client.name}</CardTitle>
              <CardText className='card-para'>{client.description}</CardText>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
  <Carousel/>
  </>
);

export default ClientelsPage;
