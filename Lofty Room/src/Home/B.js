import React from "react";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import Environment from "../environment/Env";
import axios from "axios";
import Footer from "../Home/Footer";
import { useNavigate } from "react-router-dom";
import "./HomeCss/B.css";
import Booking from "../Home/Booking";
import { FaUser, FaBed } from 'react-icons/fa';

import NavBar from "../nav-bar/NavBar";
const B = () => {
  const divStyle = {
    maxWidth: '540%',
    // backgroundColor: 'lightblue',
    padding: '20px',
    border: '1px solid #ccc',
    width: '1100px',
  };
  const iconSize = 40;
  return (
    <>
      <NavBar /><br /><br /><br />
      <div className="container">
        <div class="card mb-3" style={divStyle}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571458.jpg&fm=jpg" class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">STANDERD SINGLE  </h5>
                <br />
                <p>
                  <span class="price">Rs. 275 /DAY</span>
                </p>
                <br />
                <p >
                  <FaUser size={iconSize} /> <span className="number">2</span>
                  <FaBed size={iconSize} /> <span className="number">5</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* -------------About hotel----------------- */}
        <h1 class="hotel">ABOUT HOTEL</h1>
        <div class="about">

          <br />
          <div class="row">
            &nbsp;&nbsp;
            <div class="col-8">Hotel Name</div>
            <div class="col-3">Blue Swiss Hotel And Cafe</div>
          </div>
          <br />
          <div class="row">  &nbsp;&nbsp;
            <div class="col-8">Location</div>
            <div class="col-3">Pico Road.pindi Rajputan,Model town,lhr</div>
          </div><br />
        </div>
        {/* --------------Reservatopms detal-------------- */}
        <h1 class="deta">RESERVATION DETAIL</h1>
        <div class="about">

          <br />
          <div class="row">
            &nbsp;&nbsp;
            <div class="col-8">Person Name</div>
            <div class="col-3">Dawood</div>
          </div>
          <br />
          <div class="row">  &nbsp;&nbsp;
            <div class="col-8">Email</div>
            <div class="col-3">dawoodsandhu121@gamil.com</div>
          </div><br />
          <div class="row">  &nbsp;&nbsp;
            <div class="col-8">Check in:</div>
            <div class="col-3">25 setember</div>

          </div><br />
          <div class="row">  &nbsp;&nbsp;
            <div class="col-8">Check Out</div>
            <div class="col-3">27 September, 2023</div>
          </div>
          <br />
        </div>


        <br />
        <div class="row line">

          <div class="col-10"><h2 >PRICE/DAY</h2></div>
          <div class="col-2"><h2 >RS.0.0</h2></div><br />

        </div>

        <div class="row line">
          <div class="col-10"><h2 >DAYS</h2></div>
          <div class="col-2"><h2 >2</h2></div>

        </div>
        <div class="row line">
          <div class="col-10"><h2>TOTAL</h2></div>
          <div class="col-2"><h2 >RS.0.0</h2></div>

        </div><br />

        <br />
        <button type="button" id="cust_btn" class=" book  btn-lg"> &nbsp; &nbsp;  Book</button><br />
      </div>
      {/* -------------------------Modal------------------ */}
      <div class="container">


        {/* <!-- Modal --> */}
        <div class="modal fade" id="myModal" role="dialog">
          <div class="modal-dialog">

            {/* <!-- Modal content--> */}
            <div class="modal-content">

              < div class="modal-body">


                <div class="center">
                  <br /> <br /> <br /> <br />
                  <div class="form-wrapper">

                    <img class="khuram" src="https://cdn.dribbble.com/users/431025/screenshots/5515042/ezgif-1-40072e48cc62.gif" />
                  </div>
                </div>


                <div >
                  <br /> <br /> <br />
                  <div class="center">
                    <p class="request">BOOKING REQUEST</p>
                    <p class="succes">SUBMITTED SUCCESSFULLY!</p>
                  </div>

                </div>
              </div>
              <br /><br /><br />
              <div class="error-k text-center ">
                <button type="button" class="btn close btn-primary btn-lg" data-dismiss="modal" >CONFIRM</button>

              </div>
            </div>

          </div>
        </div>
      </div>
<Footer/>

    </>
  )
}
export default B;