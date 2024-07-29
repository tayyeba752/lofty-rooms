import React, { useRef, useEffect, useState } from "react";
import "./HomeCss/ScrollBar.css";
import axios from "axios";
import Environment from "../environment/Env";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArrowRight , ArrowLeft } from 'react-bootstrap-icons';

const ScrollBar = () => {
  const navigate = useNavigate();
  const listRef = useRef(null);
  const [getAllCity, setGetAllCities] = useState([]);
  const [displayText, setDisplayText] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null); // State to store the selected city

  useEffect(() => {
    const handleScroll = () => {
      if (listRef.current) {
        const scrollOffset =
          window.pageYOffset || document.documentElement.scrollTop;
        listRef.current.scrollTo({
          top: 0,
          left: scrollOffset,
          behavior: "smooth",
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const getAllCities = () => {
    axios.get(`${Environment.API_Acc}/api/Customer/GetAllCities`)
      .then((response) => {
        console.log("resposne===>>>", response.data.data);
        setGetAllCities(response.data.data);
      })
      .catch((err) => {
        console.log("err===>>>", err);
      })
  }
  useEffect(() => {
    getAllCities();
  }, [])
  const moveLeft = () => {
    console.log("Comment---");
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const moveRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: 300,
        behavior: "smooth",
      });
    }
  };
  const handleCityClick = (city) => {
    // navigate(`/Karachi`);
    navigate(`/city/${city.id}/${city.cityName}`);    
    
  };

  return (
    <>
      {/* <!-- ========== Scroll Bar============= --> */}
      <div>
        <br />
        <div className="list-container" ref={listRef}>
          {getAllCity?.map((item) => (
            <ul
              className="horizontal-list"
              key={item.id}
              onClick={() => handleCityClick(item)} // Handle city click
            >
              <li>{item.cityName}</li>
            </ul>
          ))}
        </div>
        <div className="ScrolingArrow">
  <div class="essential-items-area mb-120">
    <div class="section-title3"></div>
    <div class="slider-btn-wrap">
      <div class="slider-btn prev-btn-12">
        {/* left */}
        <ArrowLeft  size={30} onClick={moveLeft} className="icon-large"  />
      </div>
      {/* right */}
      <div class="slider-btn next-btn-12"> 
        <ArrowRight onClick={moveRight}  size={30}  className="icon-large"  />
      </div>
    </div>
  </div>
</div>

       
      </div>
      {/* <!-- ========== Scroll Bar============= --> */}
    </>
  );
};

export default ScrollBar;
