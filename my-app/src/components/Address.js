import React from "react";
import Slider from "react-slick";
import "./Address.css";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

function Address() {
  
  var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 3,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 4000,
      cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 3,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 4000,
      cssEase: "linear"
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="Main-Container">
      <h2 className="main-heading-Clients"> Our Products </h2>
      <h5 className='aluminium-sub-heading'>Aluminium</h5>
      <Slider className="main-conainer-cover" {...settings}>
      <div class="card-container card m-1">
    <img src="https://www.windowmagicindia.com/images/aluminium/lift-sliding.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="items-name heading-card-title ">Lifts & Sliding</h5>
         </div>
  </div>
  <div class="card-container card m-1">
    <img src="https://www.windowmagicindia.com/images/aluminium/sliding-doors.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="items-name heading-card-title ">Sliding Doors</h5>
          </div>
  </div>
  <div class="card-container card m-1">
    <img src="https://www.windowmagicindia.com/images/aluminium/sliding-fold.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="items-name heading-card-title ">Sliding Fold</h5>
    </div>
  </div>
  <div class="card-container card m-1">
    <img src="https://www.windowmagicindia.com/images/aluminium/sliding-windows.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="items-name heading-card-title ">Sliding Windows</h5>
    </div>
  </div>
  <div class="card-container card m-1">
    <img src="https://www.windowmagicindia.com/images/aluminium/casement-doors.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="items-name heading-card-title ">Casement Door</h5>
    </div>
  </div>
  <div class="card-container card m-1">
    <img src="https://www.windowmagicindia.com/images/aluminium/casement-windows.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="items-name heading-card-title ">Casement Windows</h5>
    </div>
  </div>

  <div class="card-container card m-1">
    <img src="https://aluminiumwindowsanddoors.net.au/wp-content/uploads/2016/07/aluminium-and-glass-french-doors.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="items-name heading-card-title ">French Windows</h5>
  </div>
  </div>
      </Slider>
      <h5 className='aluminium-sub-heading'>uPVC</h5>
      <Slider className="main-conainer-cover" {...settings}>
      <div class="card-container card m-1">
    <img src="https://www.corawindows.com/images/windows/fixedWindow.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="items-name heading-card-title ">Fixed Windows</h5>
  </div>
  </div>
  <div class="card-container card m-1">
    <img src="https://www.koemmerling.co.in/wp-content/uploads/2019/12/01.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="items-name heading-card-title ">Sliding Doors</h5>
  </div>
  </div>
  <div class="card-container card m-1">
    <img src="https://elitetec.co.za/uploads/uPVC-Top-Hung-Window-models.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="items-name heading-card-title ">Top Hung Windows</h5>
  </div>
  </div>

  <div class="card-container card m-1">
    <img src="https://d21xn5q7qjmco5.cloudfront.net/images/gallery_images/1661332140.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="items-name heading-card-title ">Sliding Windows</h5>
  </div>
  </div>

  <div class="card-container card m-1">
    <img src="https://www.vinayakfenster.com/wp-content/uploads/2017/07/casement-window-full.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="items-name heading-card-title ">Casement Windows</h5>
  </div>
  </div>
  <div class="card-container card m-1">
    <img src="https://www.aiswindows.com/wp-content/uploads/2018/06/shutterstock_553009777-resized-1.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="items-name heading-card-title ">Casement Doors</h5>
  </div>
  </div>
  <div class="card-container card m-1">
    <img src="https://www.aiswindows.com/wp-content/uploads/2018/06/shutterstock_701975962-resized.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="items-name heading-card-title ">French Windows</h5>
  </div>
  </div>
      </Slider>

    </div>
  );
}
export default Address;
