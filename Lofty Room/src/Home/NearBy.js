import React, { useEffect, useState } from "react";
import "./HomeCss/NearBy.css";
import Environment from "../environment/Env";
import axios from "axios";
import { ArrowRight } from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";

const NearBy = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [radius, setRadius] = useState(null);
  const [nearByData, setNearByData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${Environment.API_Acc}/api/Customer/GetAllNearByRooms`, {
      params: {
        latitude: latitude,
        longitude: longitude,
        radius: radius
      }
    })
      .then((res) => { 
        setNearByData(res.data.data)

      })
      .catch((err) => {
        console.log("err===>>>", err)
      })
  }, [longitude]) 

  const imageData = [
    {
      id: 1,
      imageUrl:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      title: 'Tourism Hotel',
      price: 'Rs. 3900/-',
    },
    {
      id: 1,
      imageUrl:
        'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      title: 'Tourism Hotel',
      price: 'Rs. 3900/-',
    },
    {
      id: 1,
      imageUrl:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      title: 'Tourism Hotel',
      price: 'Rs. 3900/-',
    },
    {
      id: 1,
      imageUrl:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      title: 'Tourism Hotel',
      price: 'Rs. 3900/-',
    },
    {
      id: 1,
      imageUrl:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      title: 'Tourism Hotel',
      price: 'Rs. 3900/-',
    },
    {
      id: 1,
      imageUrl:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      title: 'Tourism Hotel',
      price: 'Rs. 3900/-',
    },
    // Add more image data objects as needed
  ];
  const abc = () => {
    if (radius === null && longitude === null && latitude === null) {
      if ("geolocation" in navigator) {
        // Get the user's current location
        navigator.geolocation.getCurrentPosition(function (position) {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
        });
      } else {
        console.log("Geolocation is not available in this browser.");
      }

      // Set the radius value (you can adjust this as needed)
      const defaultRadius = 1000; // in meters
      setRadius(defaultRadius);

    } else if (radius && longitude && latitude) {
      console.log("abc===>>>", radius)
      console.log("abc===>>>", longitude)
      console.log("abc===>>>", latitude)
      axios.get(`${Environment.API_Acc}/api/Customer/GetAllNearByRooms`, {
        params: {
          latitude: latitude,
          longitude: longitude,
          radius: radius
        }
      })
        .then((res) => { 
          setNearByData(res.data.data)

        })
        .catch((err) => {
          console.log("err===>>>", err)
        })
    }
  }

  const handleBookNowClick = (roomData ,adId) => { 
    console.log("adId:", adId);
    navigate(`/booking/${adId}`); 
    
    // You can perform any additional actions here, such as booking the room.
  };
  return (
    <>

      {/* <!-- ==========  NearBy  ============= --> */}
      <div class="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3" style={{ paddingLeft: "100px", paddingRight: "100px" }}>
        <div class="section-title3">
          <h2>
            <span style={{ color: "#272a61", fontWeight: "bolder" }}>NearBy</span>
          </h2>
        </div>
        <div class="h3-view-btn d-md-flex d-none">
          <button onClick={abc} className="btn" style={{ cursor: "pointer", fontWeight: "bolder", color: "#272a61" }}>
            <ArrowRight size={25} />&nbsp;&nbsp;&nbsp;LOCATION PERMISSION REQUIRED
          </button>
        </div>
      </div>
      <br />
      <div
        className="flex-container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          padding: '20px',
        }}
      >
        {nearByData?.map((neardata, index) => (
          <div
            className="flex-item"
            key={neardata.adId}
            style={{
              flex: '0 0 calc(33.33% - 20px)',
              position: 'relative',
              margin: '10px',
              maxWidth: '370px', // Set a maximum width for the container
              height: '250px', // Set a fixed height for the container
            }}
          >
            <img
              src={neardata.adImage1}
              alt={`Image_${neardata.adId}`}
              style={{
                width: '100%', // Make the image width 100% to fit the container
                height: '100%', // Make the image height 100% to fit the container
                objectFit: 'cover', // Maintain aspect ratio and cover the container
                borderRadius: '10px',
              }}
            />
            <button
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#272A61',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
              onClick={() => handleBookNowClick(neardata , neardata.adId)}
            >
              Book Now
            </button>
            <div
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                padding: '5px 10px',
                position: 'absolute',
                top: '10px',
                left: '10px',
                borderRadius: '5px',
              }}
            >
              {neardata.roomType}
            </div>
            <div
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                padding: '5px 10px',
                position: 'absolute',
                top: '10px',
                right: '10px',
                borderRadius: '5px',
              }}
            >
              Rs. {neardata.price}
            </div>
          </div>
        ))}
      </div>
      {/* <!-- ==========  NearBy  ============= --> */}
    </>
  );
};

export default NearBy;
