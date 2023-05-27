import React from "react";
import Slider from "react-slick";
import "./ClientelsPage.css";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

function Carousel() {
  
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
      <h2 className="main-heading-Clients"> Our Clients </h2>
      <Slider className="main-conainer-cover" {...settings}>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/f/fe/Srmseal.png"
            alt="..."
          />
        </div>
        <div>
        <img
            src="https://www.yayskool.com/images/school/mount-litera-zee-school-karnal-34764300.jpg"
            alt="..."
          />
        </div>
        <div>
        <img
            src="https://media.glassdoor.com/sqll/549867/fiem-industries-squarelogo-1630668823752.png"
            alt="..."
          />
        </div>
        <div>
        <img
            src="https://www.uflexltd.com/assets/images/logo-uflexltd.com.jpg"
            alt="..."
          />
        </div>
        <div>
        <img
            src="https://dynamic.exportersindia.com/company_logo/6421141.jpg"
            alt="..."
          />
        </div>
        <div>
        <img
            src="https://www.kmc.com.my/wp-content/uploads/2020/05/KMC-new-logo-300x235.png"
            alt="..."
          />
        </div>
        <div>
        <img
            src="https://play-lh.googleusercontent.com/rsfEhUsPJ2MKWoZ5-QQ3qYu3_keHvh20ZjJ_mABIqB5xZ_uuyyPuVVr_JV0943JEPKY"
            alt="..."
          />
        </div>
        <div>
        <img
            src="https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/logos/original/1503996471_CrystalGoldenLogo.png"
            alt="..."
          />
        </div>
        <div>
        <img
            src="https://upload.wikimedia.org/wikipedia/en/3/3d/SVSU-transparent-Logo.png"
            alt="..."
          />
        </div>
      </Slider>
    </div>
  );
}
export default Carousel;
