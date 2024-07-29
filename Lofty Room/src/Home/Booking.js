import React, { useEffect } from "react";
import "./HomeCss/Booking.css";
import Footer from "./Footer";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../nav-bar/NavBar";
// import Clinder from "./Clinder";
import { Link } from "react-router-dom";
import axios from "axios";
import Environment from "../environment/Env";
import { useState } from "react";
import B from "./B";
const Booking = () => {
    const navigate = useNavigate();
    const [dataRoom, setDataRoom] = useState([]);
    const [dataImage, setDataImage] = useState([]);
    const [facilities, setFacilities] = useState([]);
    const [roomDetail, setRoomDetail] = useState([]);
    const [loginModal, setLoginModal] = useState(false);
    const [fav, setFav] = useState(false);
    const { roomId } = useParams();
    useEffect(() => {
        axios.get(`${Environment.API_Acc}/api/Customer/GetRoomDeatil?AdId=${roomId}`)
            .then((res) => {
                let resp = res.data.data;
                console.log("resp.roomDetail===>>>", resp.roomDetail);
                setDataImage(resp.roomImages);
                setFacilities(resp.facilityList)
                setRoomDetail(resp.roomDetail)
                setFav(resp.roomDetail.isFavourite)
            })
            .catch((err) => {
                console.log("err===>>>", err)
            })
    }, [])

    const headers = {
        'AdId': roomId,
        'IsFavourite': !fav,
        'CustomerId': localStorage.getItem("customerId")
    };
    const addFav = () => {
        console.log("bbbbbbb", roomId)
        console.log("bbbbbbb", !fav)
        let valLogin = localStorage.getItem("customerId");
        if (!valLogin) {
            setLoginModal(true);
        } else {
            axios.get(`${Environment.API_Acc}/api/Customer/IsFavouriteRoom?AdId=${roomId}&IsFavourite=${!fav}&CustomerId=${valLogin}`)
                .then((res) => {
                    console.log("abcbbcbbcbbbc", res)
                })
                .catch((err) => {
                    console.log("erororoorooro", valLogin)
                })
        }
    }
    const navigateToContacts = () => {
        // 👇️ navigate to /contacts
        navigate('/B');
    };

    const openGoogleMaps = () => {
        const mapUrl = `https://www.google.com/maps?q=${roomDetail.longitude},${roomDetail.longitude}`;
        window.open(mapUrl, '_blank');
    };
    const googleMapsUrl = `https://www.google.com/maps/place/${encodeURIComponent(roomDetail.location)}`
    return (
        <>
            <NavBar />

            <div style={{ marginTop: "80px" }} class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="error-wrapper">
                            <div class="error-img">
                                <img class="fluid" src={dataImage[1]} alt="abc" />
                                <div class="icon-img">
                                    <a style={{ cursor: "pointer" }} onClick={addFav} class="link">
                                        <svg
                                            width="30"
                                            height="20"
                                            viewBox="0 0 14 13"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="icon-circle"
                                        >
                                            <path d="M12.4147 1.51371C11.0037 0.302997 8.92573 0.534835 7.61736 1.87434L7.12993 2.38954L6.61684 1.87434C5.33413 0.534835 3.23047 0.302997 1.81948 1.51371C0.203258 2.90473 0.126295 5.37767 1.56294 6.87174L6.53988 12.0237C6.84773 12.3586 7.38647 12.3586 7.69433 12.0237L12.6713 6.87174C14.1079 5.37767 14.0309 2.90473 12.4147 1.51371Z" />
                                        </svg>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class=" mt-1">
                    {/* <h2 class="Deluxe">DELUXE ROOM</h2> */}
                    <h3 class="FACILITES" style={{ color: "#1E3C72" }}>FACILITES</h3>
                    <div className="row-ico d-flex">
                        {facilities?.map((facilitiRoom, index = 0) => (
                            <div className="ico c col-lg-2" key={index}>
                                <img className="u" src={facilitiRoom.image} alt="" style={{ maxWidth: '40px' }} />
                                <span className="number" style={{ fontSize: '14px', color: "#272A61" }}>
                                    {facilitiRoom.facilityName}
                                </span>
                            </div>
                        ))}
                    </div>



                    <h3 class="FACILITES" style={{ color: "#1E3C72" }}>GALLERY</h3>
                    <div className="container">
                        <div className="row gutters justify-content-center">
                            {dataImage?.map((image, index) => (
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 mb-2" key={index}>
                                    <a href={image} className="fancybox" rel="lightbox">
                                        <img
                                            src={image}
                                            className="custom-img img-fluid"
                                            alt=""
                                            style={{
                                                maxWidth: '600px',
                                                maxHeight: '350px',
                                                width: '100%',
                                                height: 'auto',
                                                borderRadius: '10px' // Corrected property name
                                            }}
                                        />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="container">
                        <h3 class="FACILITES locatoin" onClick={openGoogleMaps} style={{ color: "#1E3C72", cursor: "pointer" }}>
                            <span style={{ display: "flex", alignItems: "center" }}>
                                Details:
                                <img src="https://cdn-icons-png.flaticon.com/512/9800/9800512.png" style={{ paddingRight: "80px" }} />
                            </span>
                        </h3>
                        <div class="bor" style={{ display: "flex" }}>
                            <div class="col">
                                <h5 class="b">Hotel Name:</h5><br />
                                <h5 class="a">{roomDetail.hotelName}</h5>
                            </div>
                            <div class="col">
                                <h5 class="b">Room Type:</h5><br />
                                <h5 class="a">{roomDetail.roomType}</h5>
                            </div>
                            <div class="col">
                                <h5 class="b">Condition:</h5><br />
                                <h5 class="a">Neat & Clean</h5>
                            </div>
                            <div class="col">
                                <h5 class="b">Bed:</h5><br />
                                <h5 class="a">{roomDetail.noOfBed}</h5>
                            </div>
                            <div class="col">
                                <h5 class="b">Person:</h5><br />
                                <h5 class="a">{roomDetail.noOfPerson}</h5>
                            </div>
                            <div class="col">
                                <h5 class="b">Room No:</h5><br />
                                <h5 class="a">{roomDetail.roomNo}</h5>
                            </div>
                        </div>
                    </div>

                    <br />
                    {/* <div class="error">
                        <button type="button" class="btn btn-primary btn-lg ">
                            View Hotel Detail <i class="bi bi-chevron-right"></i>
                        </button>
                    </div> */}
                    <h3 class="FACILITES locatoin" style={{ color: "#272A61" }}>DESCRIPTION</h3>
                    <div class="best"><span style={{ color: "#323597" }}></span> {roomDetail.description}</div>
                    {/* <div class="best"><span style={{color:"#323597"}}>Bed:</span> {roomDetail.noOfBed}</div>  */}
                    {/* <div class="best"><span style={{color:"#323597"}}>Person:</span> {roomDetail.noOfPerson}</div>  */}
                    <div class="best"><span style={{ color: "#323597" }}>location:</span> <a href={googleMapsUrl} style={{ cursor: "pointer", color: "#515AF9" }} target="_blank">{roomDetail.location}</a></div>
                    <div class="best"><span style={{ color: "#323597" }}>Longitude:</span> {roomDetail.longitude}</div>
                    <div class="best"><span style={{ color: "#323597" }}>Latitude:</span> {roomDetail.latitude}</div>

                    <div class="err">
                        {/* <Link to="/Clinder"> */}
                        <div className="button-container">
                            <div className="price">
                                Price:&nbsp;&nbsp; {roomDetail.price}.0/-
                                {/* <span className="discount-price"> </span> */}
                            </div>
                            {/* <button className="book-button">Book Now</button> */}
                            <button id="cust_btn" type="button" className="book-button">  Book Now</button>
                        </div>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
            <br />
            {/* -------------------modal check in ---------------- */}
            <div class="container">


                {/* <!-- Modal --> */}
                <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog">

                        {/* <!-- Modal content--> */}
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" >DATE</h5>
                            </div>
                            < div class="modal-body">


                                <div class="center">
                                    <div class="form-wrapper">

                                        <div>
                                            <p>Check In</p>
                                            <input type="date" class="for_check_in" />
                                        </div>
                                        <div className="col-lg-2 text-center ">
                                            to
                                        </div>
                                        <div>
                                            <p>Check Out</p>
                                            <input type="date" class="for_check_out" />
                                        </div>
                                    </div>
                                </div>


                                <div >
                                    <div class="center">
                                        <p class="note">Note</p>
                                        <p>All Booking will have Standard Check-in and Check-out time 12PM . 12PM</p>
                                    </div>

                                </div>
                            </div>
                            <br />
                            <div class="error-k text-center ">
                                <button type="button" class="btn close btn-primary btn-lg" data-dismiss="modal" onClick={navigateToContacts}>CONFIRM</button>

                            </div>
                            {/* <button type="button" class="close" data-dismiss="modal">kdjkajksdfjakfdjkafdafdaff</button> */}
                        </div>

                    </div>
                </div>

            </div>

            <Footer />

        </>
    )
}
export default Booking;