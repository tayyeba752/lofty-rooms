import React from "react";
import "./HomeCss/Clinder.css";
import NavBar from "../nav-bar/NavBar";
import Footer from "./Footer";
const Clinder =()=>{
    return(
        <>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>



        <NavBar/>
        <div className="container">
<div className="row br"><br/><br/>
<div className="row">
    <div className="col-lg-12"><h5>DATE</h5></div><br/><br/><br/>
</div>
<div className="col-lg-4">
<div class="form-group">
  <input id="dp1" type="text" class="form-control clickable input-md" id="DtChkIn" placeholder="&#xf133;  Check-In"/>
</div>

</div>
<div className="col-lg-4 text-center text-black">
    to
</div>
<div className="col-lg-4">
<div class="form-group">
  <input id="dp2" type="text" class="form-control clickable input-md" id="DtChkOut" placeholder="&#xf133;  Check-Out"/>
</div>
</div>
</div>
<br/><br/>
<div className="error-h text-center">
    <h2>Note</h2>
    <div class="badge  text-wrap">
    All Booking will have Standard Checkin and Checkout time 12PM . 12PM
</div>

</div>
<br/><br/><br/><br/>
<div class="error-k text-center">
<button type="button" class="btn btn-primary btn-lg">CONFIRM</button>
                
                </div>
</div>
<br/><br/><br/><br/><br/>
        <Footer/>

        </>
    )
}
export default Clinder;