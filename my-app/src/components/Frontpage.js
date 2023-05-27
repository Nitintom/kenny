import React from 'react'
import ClientelsPage from './ClientelsPage'
// import FrontpageProduct from './FrontpageProduct'
import "./FrontPage.css"
import CoverflowSlider from './CoverflowSlider'
import Address from './Address'

function Frontpage() {
  return (
    <div onClick={window.scrollTo(0, 0)} className='main-container'>
    <div id="carouselExampleAutoplaying" className="carousel carousel-light slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="carouselExampleAutoplaying" data-bs-slide-to="1" className="active" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="carouselExampleAutoplaying" data-bs-slide-to="2" className="active" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="carouselExampleAutoplaying" data-bs-slide-to="3" className="active" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner  p-2">
    <div className="carousel-item active" data-bs-interval="1000">
      <img src="https://buildingandinteriors.com/wp-content/uploads/2022/09/deceuninck-upvc-doors-and-windows_11zon-scaled.jpg" className="d-block w-100 h-90px p-2" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>uPVC Doors</h5>
       
      </div>
    </div>
    <div className="carousel-item " data-bs-interval="2000">
      <img src="https://images.squarespace-cdn.com/content/v1/566650f9a12f444e2a970a74/1521866599296-8I41I8E1RF3SQPL86BBK/Enjoy+Nature+with+Futuretech+uPVC+Windows.jpeg" className="d-block w-100 h-90px p-2" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>uPVC Windows</h5>
             </div>
    </div>
    <div className="carousel-item " data-bs-interval="3000">
      <img src="https://www.woodminium.com/wp-content/uploads/2021/02/blog-3.jpg" className="d-block w-100 h-80 p-2" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Aluminium Windows</h5>
              </div>
    </div>
    <div className="carousel-item " data-bs-interval="4000">
      <img src="https://www.visionartaluminium.com/wp-content/uploads/2022/09/aluminum-door-types.jpg" className="d-block w-100 h-90 p-2" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Aluminium Doors</h5>
       
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div class="m-auto p-2 border-dark bg-light" style={{maxWidth: '98vw'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://matrixwindoors.com/wp-content/uploads/2021/02/Benefits-of-Having-uPVC-Door-and-Windows-at-Home-1.jpeg" style={{minWidth:'300px'}} class="img-fluid rounded-start p-1 mt-4" alt="..."/>
    </div>
    <div class="col-md-8 p-auto">
      <div class="card-body">
        <h5 class="card-title-main">About Kenny Home Solutions</h5>
        <p class="card-content card-text p-2">Great fenestration is the key to achieving peace and class in any building, and at Kenny Homes, we are committed to providing the very best in fenestration solutions. Fenestration refers to the design, construction, and placement of windows and doors, both indoor and outdoor, skylights, and any other elements that allow natural light to flow between spaces.

As a renowned name in the fenestration industry, we at Kenny Homes are dedicated to bringing about change through the infusion of the latest technologies. We partner with international players in technology-based products to offer high-quality uPVC window and door systems that are designed to meet the diverse needs of our customers.

Our commitment to innovation and quality has earned us a reputation as a leading player in the industry, and we continue to push the boundaries of what's possible with fenestration. Whether you're looking for energy-efficient windows, soundproof doors, or any other fenestration solution, we have the expertise and technology to deliver the very best products.

In summary, at Kenny Homes, we understand the importance of great fenestration in achieving peace and class in any building. We are committed to leveraging the latest technologies and partnering with leading industry players to provide high-quality uPVC window and door systems that meet the needs of our customers.</p>
        
      </div>
    </div>
  </div>
</div>
    <Address/>
    {/* <CoverflowSlider/> */}
    <ClientelsPage/>
    </div>
   

  )
}

export default Frontpage
