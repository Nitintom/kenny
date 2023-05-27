import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./Resources.css"

const AluminiumPage = () => {
  const benefits = [
    {
      id: 1,
      title: 'Durability',
      description: 'Aluminium windows and doors are highly durable and resistant to weather, corrosion, and rust, making them ideal for use in homes and commercial buildings.',
      icon: 'https://cdn.dribbble.com/users/815896/screenshots/2103967/durable.png'
    },
    {
      id: 2,
      title: 'Energy Efficiency',
      description: 'Aluminium frames are highly energy-efficient, reducing heat loss and preventing drafts. They also offer excellent thermal insulation and can help reduce energy bills.',
      icon: 'https://static.thenounproject.com/png/1130011-200.png'
    },
    {
      id: 3,
      title: 'Design Flexibility',
      description: 'Aluminium frames can be customized to fit any shape or size, allowing for greater design flexibility. They are also available in a wide range of colors and finishes to match any architectural style.',
      icon: 'https://t4.ftcdn.net/jpg/03/17/68/05/360_F_317680590_Q4WjoDP9OYlzrrUdwVOVaRTxAdlKikMz.jpg'
    }
  ];

  return (

    <Container onClick={window.scrollTo(0, 0)} className='Top-container'>
      <h5 className='heading'>What Is Aluminium ?</h5>
      <p className='main-para'>Aluminium is a versatile metal that offers several advantages. It exhibits a unique combination of strength and ductility, making it suitable for a wide range of applications. Additionally, Aluminium is highly resistant to corrosion, making it a popular choice for outdoor use. Its polished surface has a strong reflectance property, making it ideal for both decorative and functional purposes. Notably, Aluminium is sound-absorbing and 100% non-toxic, making it a safe and eco-friendly choice. Overall, Aluminium is a perfect metal for use in fenestration systems and has the potential for broader applications.</p>
      <h5 className='heading'>Why Aluminium ?</h5>
      <p className='main-para' >In modern times, Aluminium has become the go-to material for fenestration systems due to its exceptional properties. It is a lightweight metal that weighs about 1/3rd the weight of steel and iron, resulting in much lighter end products. Additionally, Aluminium offers unmatched surface finishes and colours, providing a bespoke choice for customers. It exhibits strong mechanical properties, making it suitable for slim profiles that other traditional fenestration materials fail to accommodate. Notably, Aluminium can be easily machined and designed to meet sustainability and efficiency requirements, making it a perfect choice for environmentally conscious projects. Its excellent thermal conductivity and durability further add to its appeal for fenestration systems. Overall, Aluminium is a superior choice for modern-day fenestration, offering unmatched versatility and performance.



</p>
      <h4 className='heading'>Benefits of Aluminium Windows and Doors</h4>
      <Row>
        {benefits.map((benefit) => (
          <Col md={4} key={benefit.id}>
            <div className='benefits-container'>
            <img src={benefit.icon} className='upvc-img' alt={benefit.title} />
            <h2 className='heading-style'>{benefit.title}</h2>
            <p>{benefit.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AluminiumPage;
