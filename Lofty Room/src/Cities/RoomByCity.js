import React, { useEffect, useState } from "react";
import NavBar from "../nav-bar/NavBar";
import "./RoomByCity.css";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import Environment from "../environment/Env";
import axios from "axios";
import Footer from "../Home/Footer";
import { useNavigate } from "react-router-dom";

import Booking from "../Home/Booking";
import { FaUser, FaBed } from 'react-icons/fa';

const RoomByCity = () => {
    const navigate = useNavigate();
    const { cityId, cityName } = useParams();
    const [citiesData, setCitiesData] = useState([]);
    useEffect(() => {
        axios.get(`${Environment.API_Acc}/api/Customer/GetAllRoomsCityWise?CityId=${cityId}`)
            .then((response) => { 
                setCitiesData(response.data.data);
            })
            .catch((err) => {
                console.error("Error fetching city details:", err);
            });
    }, [cityId]);

 
const handleCityRoom=(cityRoom)=>{
    console.log("cityRoom===>>>", cityRoom);
    navigate(`/booking/${cityRoom.adId}`); 
}

    return (
        <>
            <NavBar />
            <br />
            <br /> 
            <br />
            <div class="container">
                <div class="row">
                    
                    <br />
                    <div class="col-md-3">
                        <div
                            style={{
                                backgroundColor: "white",
                                border: "2px solid lightgrey",
                                borderRadius: "10px",
                                padding: "10px",
                            }}
                        >
                            <h5 style={{ fontSize: "30px", textAlign: "center" }}>Property Type</h5>
                            <ul style={{ marginTop: "15px" }} class="no-bullet">
                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        &nbsp;&nbsp;Hotels
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        &nbsp;&nbsp;Hostels
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        &nbsp;&nbsp;Appartments
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        &nbsp;&nbsp;GuestHouse
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        &nbsp;&nbsp;GuestHouse
                                    </label>
                                </li>
                            </ul>
                        </div>

                        <br />
                        <br />
                        <div
                            style={{
                                backgroundColor: "white",
                                border: "2px solid lightgrey", // Customize the border width here (e.g., "2px")
                                borderRadius: "10px", // Customize the border radius here (e.g., "10px")
                                padding: "10px",
                            }}
                        >
                            <h5 style={{ fontSize: "30px", textAlign: "center" }}>Facilities Includeed</h5>
                            <ul style={{ marginTop: "15px" }} class="no-bullet">
                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        &nbsp;&nbsp;Free Wifi
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        &nbsp;&nbsp;Free Parking
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        &nbsp;&nbsp;Swimming pool
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        &nbsp;&nbsp;Play Ground
                                    </label>
                                </li>
                            </ul>
                        </div>


                        <br />
                        <br />
                        <div
                            style={{
                                backgroundColor: "white",
                                border: "2px solid lightgrey", // Customize the border width here (e.g., "2px")
                                borderRadius: "10px", // Customize the border radius here (e.g., "10px")
                                padding: "10px",
                            }}
                        >
                            <h5 style={{ fontSize: "30px", textAlign: "center" }}>Accommodation Features</h5>
                            <ul style={{ marginTop: "15px" }} class="no-bullet">
                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        &nbsp;&nbsp;Air Conditioning
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        &nbsp;&nbsp;Balcony
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        &nbsp;&nbsp;Kitchen
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        &nbsp;&nbsp;TV
                                    </label>
                                </li>
                            </ul>
                        </div>



                        <br />
                        <br />
                        <div
                            style={{
                                backgroundColor: "white",
                                border: "2px solid lightgrey", // Customize the border width here (e.g., "2px")
                                borderRadius: "10px", // Customize the border radius here (e.g., "10px")
                                padding: "10px",
                            }}
                        >
                            <h5 style={{ fontSize: "30px", textAlign: "center" }}>Meals & Food</h5>
                            <ul style={{ marginTop: "15px" }} class="no-bullet">
                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        &nbsp;&nbsp;Breakfast
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        &nbsp;&nbsp;Lunch
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        &nbsp;&nbsp;Dinner
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        &nbsp;&nbsp;All Included
                                    </label>
                                </li>
                            </ul>
                        </div>

                    </div>

 
                    <div class="col-md-9">
                        {Array.isArray(citiesData) && citiesData.map((roomData, index) => (
                            <>

                                    <div key={index} onClick={()=>handleCityRoom(roomData)} class="row search-card-result" >
                                        <div class="col-md-5"> 
                                            <img class="img-fluid" src={roomData.adImage1} alt="Card image cap" />
                                        </div>

                                        <div class="col-md-7">
                                            <span class="room-title">{roomData.roomType}</span>
                                            
                                            <p>
                                                <span class="price">Rs. {roomData.price} /DAY</span>
                                            </p>
                                            <p>

                                                <FaUser size={20} /><span class="number">{roomData.noOfPerson}</span>
                                                <FaBed size={24} />  <span class="number">{roomData.noOfBed}</span>
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
                            </>
                        ))}
                    </div>
                </div>
            </div>



            {/* <Footer /> */}
        </>
    )
}
export default RoomByCity;