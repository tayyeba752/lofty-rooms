import React from "react";
import "./HomeCss/QrCode.css";
const QrCode = () => {
  return (
    <>
  
  
   
    <div className="container  BgColor">
      <div className="row d-flex">
        <div className="col-lg-4">
    <img class="phone"
      src="..\assets\Qrcode.PNG"
      alt="no_image_QRcode"
    />
    </div>
    <div className="col-lg-4">
    <img class="Mobile"
      src="..\assets\MObile.PNG"
      alt="no_image_QRcode"
    />
    </div>
    <div className="col-lg-4">
      
    <img class="qrcode"
      src="..\assets\QRcode_Image.jpeg"
      alt="no_image_QRcode"
    />
  </div>
  </div>
  </div>
    </>
  );
};
export default QrCode;
