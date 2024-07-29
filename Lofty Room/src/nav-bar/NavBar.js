import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import imgHead from "../assets/images/logo.png";
import Environment from "../environment/Env";
import axios from "axios";
import "./nav-bar.css"; 

import { Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell, faHeart } from '@fortawesome/free-solid-svg-icons';



const NavBar = () => {
  const [displayText, setDisplayText] = useState(false);
  const [loginOncHangeData, setLoginOncHangeData] = useState({});
  const [signUpOncHangeData, setSignUpOncHangeData] = useState({});
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [ProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  // const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let timer = useRef(null);
  //  <<<<<<<<<<<<<<<<<<<        useEffect    >>>>>>>>>>>>>>>>>>>>>
  useEffect(() => {
    if (displayText == false) {
      setTimeout(() => {
        setDisplayText(true);
      }, 5000);
    } else {
      setTimeout(() => {
        setDisplayText(false);
      }, 3000);
    }
  }, [displayText]);
  useEffect(() => {
    let checkToken = localStorage.getItem("token");
    console.log("checkToken", checkToken)
    if (checkToken) {
      setIsLoggedIn(true)
    } else if (checkToken === "" || !checkToken || checkToken === undefined || checkToken === null) {
      setIsLoggedIn(false);
    }
  }, [setIsLoggedIn])
  //  <<<<<<<<<<<<<<<<<<<        Forms handling    >>>>>>>>>>>>>>>>>>>>>
  // <<<<           SIGN-IN          >>>>>
  const SubmitLoginForm = () => {
    loginOncHangeData.androidFcmToken = "";
    loginOncHangeData.iosFcmToken = "";
    axios.post(`${Environment.API_Acc}/api/Customer/Login`, loginOncHangeData)
      .then((response) => {
        let res = response.data.data;
        localStorage.setItem("token", res.token)
        localStorage.setItem("customerId", res.customerId)
        localStorage.setItem("customerName", res.customerName)
        localStorage.setItem("email", res.email)
        localStorage.setItem("mobile", res.mobile)
      })
      .then(() => {
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log("Err===->>>", err)
      })
  }
  const LoginOnChange = (e) => {
    let obj = loginOncHangeData;
    obj[e.target.name] = e.target.value;
    setLoginOncHangeData(obj);
    console.log("Login", e.target.value)
  }

  // <<<<           LOG-OUT          >>>>>
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  }

  // <<<<           SIGN-UP          >>>>>
  const SubmitSignUpForm = () => {
    console.log("signUpOncHangeData===>>>", signUpOncHangeData);
    axios.post(`${Environment.API_Acc}/api/Customer/AddUpdateCustomer`, signUpOncHangeData)
  }
  const SignUpOnChange = (e) => {
    let obj = signUpOncHangeData;
    obj[e.target.name] = e.target.value;
    setSignUpOncHangeData(obj);
    console.log("SignUp", e.target.value)
  }
  const loftyroom = () => {
    navigate("/");
  };
  //  <<<<<<<<<<<<<<<<<<<        Profle-Favorite    >>>>>>>>>>>>>>>>>>>>>
  const favclick = () => {
    navigate("/Favorite");
  };
  const prolink = () => {
    navigate("/Logout");
  };
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const profileDropdown = () => {
    setProfileDropdownOpen(!ProfileDropdownOpen);
  };
  const dropdownRef = useRef(null);
  //   Fav
  const profileDropdownRef = useRef(null);
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };
  //   profile
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleClickOutsideProfie = (event) => {
    if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
      setProfileDropdownOpen(false);
    };
  };


  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideProfie);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideProfie);
    };
  }, []);

  return (
    <>

            
   <Navbar bg="white" variant="dark" className="custom-navbar fixed-top">
        <Navbar.Brand href="#home" onClick={loftyroom} style={{ color: "#1E3C72", fontSize: "36px" }} >LoftyRooms</Navbar.Brand>
        <Nav className="ml-auto"> 
          <div class="nav-right d-flex jsutify-content-end align-items-center">
            <Nav.Link onClick={favclick}>
              <FontAwesomeIcon icon={faHeart} className="custom-icon" />
            </Nav.Link>
            <div className="nav-item dropdown" ref={dropdownRef}>
              <div
                className={`dropdown-menu action-form ${isDropdownOpen ? "show" : ""
                  }`}
                style={{
                  backgroundColor: "white",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "10px",
                  width: "250px",
                  height: "200px", 
                  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
                }}
              > <div className="dropdown-content">

                  <div style={{ fontSize: "20px" }} className="dropdown-buttons"> 
                    Notifications
                  </div>
                </div>
              </div>
              <Nav.Link onClick={toggleDropdown}  id="notification-icon" >
                <FontAwesomeIcon icon={faBell} className="custom-icon" />
              </Nav.Link>
            </div>
 

            <div className="nav-item dropdown" ref={profileDropdownRef}>
              <div
                className={`dropdown-menu action-form ${ProfileDropdownOpen ? "show" : ""
                  }`}
                style={{
                  backgroundColor: "white",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  paddingTop: "03px",
                  width: "auto",
                  height: "auto",
                  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
                }}
              >
                {/* Your form code here */}

                <div className="dropdown-content">
                  <div className="dropdown-buttons">
                    <button className="btn btn-danger btn-block">
                      My Profile
                    </button>
                    <button onClick={handleLogout} className="btn btn-primary btn-block">
                      Log Out
                    </button>
                  </div>
                </div>
              </div>
              <li>
              <Nav.Link onClick={profileDropdown}
              id="notification-icon">
              <FontAwesomeIcon icon={faUser} className="custom-icon" />
            </Nav.Link>
              </li> 
            </div>

            {/* <  login form  Start> */}
            {isLoggedIn ? (
                <nav className="navbar navbar-expand-lg">
        </nav>
              ) : (
                 <nav class="navbar navbar-expand-lg ">
                <div class="navbar-nav ml-auto action-buttons">
                  <div class="nav-item dropdown">
                    <a data-toggle="dropdown" style={{color:"grey", cursor:"pointer"}} class="nav-link dropdown-toggle mr-4">Login</a>
                    <div class="dropdown-menu action-form">
                      <span action="/examples/actions/confirmation.php" method="post">
                        <p class="hint-text">Sign in with your social media account</p>
                        <div class="form-group social-btn clearfix">
                          <a href="#" class="btn btn-secondary facebook-btn float-left"><i class="bi bi-google"></i> Google</a>
                          {/* <BsFillPersonFill ic/> */}
                          {/* <img src="https://icons8.com/icon/ywULFSPkh4kI/person" /> */}
                          <a href="#" class="btn btn-secondary twitter-btn float-right"><i class="bi bi-twitter"></i> Twitter</a>
                        </div>
                        <div class="or-seperator"><b>or</b></div>
                        <div class="form-group">
                          <input type="text" class="form-control" name="email" onChange={(e) => LoginOnChange(e)} placeholder="email" required="required" />
                        </div>
                        <div class="form-group">
                          <input type="password" class="form-control" name="password" onChange={(e) => LoginOnChange(e)} placeholder="password" required="required" />
                        </div>
                        <button class="btn btn-primary btn-block" onClick={SubmitLoginForm}>Login</button>
                        <div class="text-center mt-2">
                          <a href="#">Forgot Your password?</a>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div class="nav-item dropdown">
                    <a data-toggle="dropdown" class="btn btn-primary dropdown-toggle sign-up-btn" >Sign up</a>
                    <div class="dropdown-menu action-form">
                      <div method="post">
                        <p class="hint-text">Fill in this form to create your account!</p>
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="Username" name="UserName" onChange={(e) => SignUpOnChange(e)} />
                        </div>
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="LastName" name="LastName" onChange={(e) => SignUpOnChange(e)} />
                        </div>
                        <div class="form-group">
                          <input type="email" class="form-control" placeholder="Email" name="Email" onChange={(e) => SignUpOnChange(e)} />
                        </div>
                        <div class="form-group">
                          <input type="number" class="form-control" placeholder="Phone" name="Mobile" onChange={(e) => SignUpOnChange(e)} />
                        </div>
                        <div class="form-group">
                          <input type="number" class="form-control" placeholder="Cnic" name="Cnic" onChange={(e) => SignUpOnChange(e)} />
                        </div>
                        <div class="form-group">
                          <input type="password " class="form-control" name="Password" onChange={(e) => SignUpOnChange(e)} placeholder="Password" />
                        </div>
                        <div class="form-group">
                          <input type="password" class="form-control" name="Confirm Password" onChange={(e) => SignUpOnChange(e)} placeholder="Confirm Password" />
                        </div>
                        <div class="form-group">
                          <label class="form-check-label"><input type="checkbox" /> I accept the <a href="#">Terms &amp; Conditions</a></label>
                        </div>
                        <button class="btn btn-primary btn-block" onClick={SubmitSignUpForm}>Sign up </button>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>     
        )}

            {/* Login Form End  */}

            <button onClick={() => {
              window.location.href = "tel:+923232345673";
            }} type="button" class="btn btn-outline">
              Call Now
            </button> 
          </div>
 


        </Nav>
      </Navbar>




      <header class="header-area style-3">
        <div class="container d-flex justify-content-between align-items-center">

          <div class="main-menu">
            <div class="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
              <div class="mobile-logo-wrap">
                <a href="index.html">
                  <img alt="_no_show" src="assets/images/header2-logo.svg" />
                </a>
              </div>
              <div class="menu-close-btn">
                <i class="bi bi-x-lg"></i>
              </div>
            </div>
          </div>

          <div class="nav-right d-flex jsutify-content-end align-items-center">
           
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
