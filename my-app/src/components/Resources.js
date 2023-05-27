import React from 'react'
import { Link } from 'react-router-dom';
import "./Resources.css"

function Resources() {
  return (
    <>
   <h5 className='top-heading'>"Door and Window Resources"</h5>
    <div onClick={window.scrollTo(0, 0)} className='main-Container'>
    <div class="main-product-conainer bg-light">
    <Link to="/AluminiumPage" >
    <h5 class="card-title">Aluminium Doors & Windows</h5>
  <img src="https://www.aiswindows.com/wp-content/uploads/2021/10/aluminium.jpg" class="card-img-top" alt="..."/>
    </Link>
</div>
<div class="main-product-conainer bg-light">
    <Link to="/UPVCBenefitsPage" >
    <h5 class="card-title">uPVC Doors & Windows</h5>
  <img src="https://www.aiswindows.com/wp-content/uploads/2021/10/upvc-doors.jpg" class="card-img-top" alt="..."/>

    </Link>
  </div>
</div>        

    </>
  )
}

export default Resources
