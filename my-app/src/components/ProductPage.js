import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './Product.css'

const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: 'uPVC Window',
      category: 'uPVC',
      image: 'https://www.srjwindows.com/wp-content/uploads/2021/11/SRJWINDOWS-FULLHOUSEGLAZING-70-1-2.jpeg',
      productdetails: "/UpvcProductDetails",
    },
    {
      id: 2,
      name: 'uPVC Door',
      category: 'uPVC',
      image: 'https://www.windowmagicindia.com/images/batter-world.jpg',
      productdetails: "/TermsOfUse",
    },
    {
      id: 3,
      name: 'Aluminium Window',
      category: 'Aluminium',
      image: 'https://www.anglianhome.co.uk/-/media/ahi/galleries/windows/aluminium-casement/white-aluminium-kitchen-window-interior.jpg?w=900',
      productdetails: "/AluminiumProductDetails",
    },
    {
      id: 4,
      name: 'Aluminium Door',
      category: 'Aluminium',
      image: 'https://www.doorsplus.com.au/wp-content/uploads/2021/06/aluminium.jpg',
      productdetails: "/PrivacyPolicy",
    }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('uPVC');

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <div onClick={window.scrollTo(0, 0)} className="main-Container">

    <Container >
      <div className=' card-title '>
      <h5>Our Products</h5>
      </div>
      <div className='button-container'>

        <Button
          variant={selectedCategory === 'uPVC' ? 'primary' : 'secondary'}
          onClick={() => setSelectedCategory('uPVC')}
          className="me-5"
        >
          uPVC
        </Button>
        <Button
          variant={selectedCategory === 'Aluminium' ? 'primary' : 'secondary'}
          onClick={() => setSelectedCategory('Aluminium')}
        >
          Aluminium
        </Button>
          </div>
      <Row>
        {filteredProducts.map((product) => (
          
          <Col md={6} key={product.id}>
            
    <div class="main-product-conainer">
    <Link to={product.productdetails}>
    <h5 class="card-title">{product.name}</h5>
  <img src={product.image} class="card-img-top" alt={product.name}/>
    </Link>
  
</div>



                    </Col>
          
        ))}
      </Row>
      
          </Container>
        </div>
  );
};

export default ProductPage;
