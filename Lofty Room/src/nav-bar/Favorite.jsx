
import React, { useState, useEffect, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { FaUser, FaBed } from 'react-icons/fa';
import './Favorite.css';
import NavBar from "../nav-bar/NavBar";
const Favorite = () => {
  const navigate = useNavigate();


  return (
    <>
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <div > 
        <div class="row search-card-result" >
          <div class="col-md-5">
            <img class="img-fluid" src="huh" alt="Card image cap" />
          </div>

          <div class="col-md-7">
            <span class="room-title">ikyiyy9</span>

            <p>
              <span class="price">Rs. 575 /DAY</span>
            </p>
            <p>

              <FaUser size={20} /><span class="number">1</span>
              <FaBed size={24} />  <span class="number">2</span>
            </p>
            <div class="review">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-half"></i>
              <i class="bi bi-star"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorite;
