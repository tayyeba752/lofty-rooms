import React, {useState , useEffect} from "react";
import "./HomeCss/Home.css";
import NavBar from "../nav-bar/NavBar";
import HeaderHome from "./HeaderHome";
import ScrollBar from "./ScrollBar";
import NearBy from "./NearBy";
import Popular from "./Popular";
import QrCode from "./QrCode";
import Footer from "./Footer";
import { TypeH2 } from "react-bootstrap-icons";
const Home = () => {
  const [data , setData] = useState(true)
  useEffect(()=>{
    console.log(data)
    if(data === true){
      console.log("this is true")
    }else{
      console.log("this is false")
    }

  })

  return (
    <>
      <NavBar />
      {/* <!-- ========== Search Bar============= --> */}
      <HeaderHome />
      {/* <!-- ========== Scroll Bar============= --> */}
      <ScrollBar />
      {/* <!-- ========== QR Code============= --> */}
      <QrCode/><br/><br/>
      {/* <!-- ==========  NearBy  ============= --> */}
      <NearBy />
      {/* <!-- ==========  Popular  ============= --> */}
      {/* <Popular /> */}
      {/* <!-- ========== Footer Area Start============= --> */}
      <Footer/>
      {/* <!-- ========== Footer Area end============= --> */}
    </>
  );
};
export default Home;
